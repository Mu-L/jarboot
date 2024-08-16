package io.github.majianzheng.jarboot.tools.client;

import io.github.majianzheng.jarboot.api.cmd.annotation.Argument;
import io.github.majianzheng.jarboot.api.cmd.annotation.Description;
import io.github.majianzheng.jarboot.api.cmd.annotation.Option;
import io.github.majianzheng.jarboot.api.constant.CommonConst;
import io.github.majianzheng.jarboot.api.event.JarbootEvent;
import io.github.majianzheng.jarboot.api.event.Subscriber;
import io.github.majianzheng.jarboot.api.event.TaskLifecycleEvent;
import io.github.majianzheng.jarboot.api.pojo.ServerRuntimeInfo;
import io.github.majianzheng.jarboot.client.ClientProxy;
import io.github.majianzheng.jarboot.client.ClusterOperator;
import io.github.majianzheng.jarboot.common.AnsiLog;
import io.github.majianzheng.jarboot.common.utils.BannerUtils;
import io.github.majianzheng.jarboot.common.utils.CommandCliParser;
import io.github.majianzheng.jarboot.common.utils.OSUtils;
import io.github.majianzheng.jarboot.common.utils.StringUtils;
import io.github.majianzheng.jarboot.tools.client.command.AbstractClientCommand;
import org.jline.reader.LineReader;
import org.jline.reader.LineReaderBuilder;
import org.jline.terminal.Terminal;
import org.jline.terminal.TerminalBuilder;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.List;

/**
 * 客户端命令行工具
 * @author jianzhengma
 */
@SuppressWarnings({"java:S106", "java:S135"})
public class JarbootClientCli implements Subscriber<TaskLifecycleEvent> {
    private String host;
    private String username;
    private String password;
    private Terminal terminal;
    private LineReader lineReader;
    private ClusterOperator client;
    private ServerRuntimeInfo runtimeInfo;
    private String bash;

    @Option(shortName = "h", longName = "host")
    @Description("The Jarboot host. ig: 127.0.0.1:9899")
    public void setHost(String host) {
        this.host = host;
    }

    @Option(shortName = "u", longName = "user")
    @Description("The Jarboot username")
    public void setUsername(String username) {
        this.username = username;
    }

    @Option(shortName = "p", longName = "password")
    @Description("The Jarboot password")
    public void setPassword(String password) {
        this.password = password;
    }

    @Argument(argName = "bash", index = 0, required = false)
    @Description("bash script.")
    public void setAction(String bash) {
        this.bash = bash;
    }

    public static void main(String[] args) throws IOException {
        BannerUtils.print();
        JarbootClientCli clientCli = new JarbootClientCli();
        CommandCliParser commandCliParser = new CommandCliParser(args, clientCli);
        commandCliParser.postConstruct();
        if (StringUtils.isEmpty(clientCli.host)) {
            clientCli.host = System.getenv(CommonConst.JARBOOT_HOST_ENV);
            if (StringUtils.isEmpty(clientCli.host)) {
                clientCli.host = "127.0.0.1:9899";
            }
        }
        //登录
        clientCli.login();
        //开始执行
        clientCli.run();
    }

    private void login() throws IOException {
        AnsiLog.println("Login to Jarboot server: {}", this.host);
        terminal = TerminalBuilder
                .builder()
                .name("jarboot client terminal")
                .streams(System.in, System.out)
                .system(!OSUtils.isWindows())
                .encoding(StandardCharsets.UTF_8)
                .color(true)
                .build();

        lineReader = LineReaderBuilder.builder()
                .terminal(terminal)
                .option(LineReader.Option.ERASE_LINE_ON_FINISH, OSUtils.isWindows())
                .build();

        if (StringUtils.isEmpty(username)) {
            username = lineReader.readLine("username:");
        }
        if (StringUtils.isEmpty(password)) {
            password = lineReader.readLine("password:");
            if (StringUtils.isEmpty(password)) {
                password = lineReader.readLine("password:");
            }
        }
        //登录认证
        runtimeInfo = ClientProxy
                .Factory
                .createClientProxy(host, username, password)
                .getRuntimeInfo();
        AnsiLog.println("Login success, jarboot server version: {}, cluster:{}",
                runtimeInfo.getVersion(), StringUtils.isNotEmpty(runtimeInfo.getHost()));
    }

    protected void run() {
        //test
        client = new ClusterOperator(this.host, null, null);
        client.registerSubscriber(this);
        if (StringUtils.isNotEmpty(bash)) {
            execBash();
            return;
        }
        AnsiLog.println("Diagnose command, try running `help`");
        final String prefix = StringUtils.isEmpty(runtimeInfo.getHost()) ? "jarboot$> " : "cluster$> ";
        final Character mask = OSUtils.isWindows() ? (char)0 : null;
        for (;;) {
            String inputLine = lineReader.readLine(prefix, mask);
            if ("q".equals(inputLine) || "quit".equals(inputLine) || "exit".equals(inputLine) || "bye".equals(inputLine)) {
                break;
            }
            if (StringUtils.isEmpty(inputLine)) {
                continue;
            }
            // 打印出用户输入的内容
            AbstractClientCommand command = ClientCommandBuilder.build(inputLine, client, terminal, runtimeInfo);
            if (null != command) {
                command.run();
            }
        }
        client.deregisterSubscriber(this);
    }

    private void execBash() {
        List<String> lines = StringUtils.toLines(bash);
        lines.forEach(inputLine -> {
            String[] commands = StringUtils.tokenizeToStringArray(inputLine, ";");
            for (String command : commands) {
                if (StringUtils.isEmpty(command)) {
                    continue;
                }
                AbstractClientCommand cmd = ClientCommandBuilder.build(command, client, terminal, runtimeInfo);
                if (null != cmd) {
                    cmd.run();
                }
            }
        });
        client.deregisterSubscriber(this);
    }

    @Override
    public void onEvent(TaskLifecycleEvent event) {
        String name = StringUtils.isEmpty(event.getSetting().getHost()) ? event.getSetting().getName() : (event.getSetting().getName() + "@" + event.getSetting().getHost());
        AnsiLog.println("{}: {}\n", name, event.getStatus());
    }

    @Override
    public Class<? extends JarbootEvent> subscribeType() {
        return TaskLifecycleEvent.class;
    }
}
