package com.mz.jarboot.common;

/**
 * Agent客户端信息
 * @author majianzheng
 */
public class AgentClientPojo extends ResponseSimple {
    private String clientAddr;
    private Boolean local;
    private String server;
    private String sid;
    private String host;
    private Boolean diagnose;

    public String getClientAddr() {
        return clientAddr;
    }

    public void setClientAddr(String clientAddr) {
        this.clientAddr = clientAddr;
    }

    public Boolean getLocal() {
        return local;
    }

    public void setLocal(Boolean local) {
        this.local = local;
    }

    public String getServer() {
        return server;
    }

    public void setServer(String server) {
        this.server = server;
    }

    public String getSid() {
        return sid;
    }

    public void setSid(String sid) {
        this.sid = sid;
    }

    public String getHost() {
        return host;
    }

    public void setHost(String host) {
        this.host = host;
    }

    public Boolean getDiagnose() {
        return diagnose;
    }

    public void setDiagnose(Boolean diagnose) {
        this.diagnose = diagnose;
    }

    @Override
    public String toString() {
        return "AgentClientPojo{" +
                "clientAddr='" + clientAddr + '\'' +
                ", local=" + local +
                ", server='" + server + '\'' +
                ", sid='" + sid + '\'' +
                ", host='" + host + '\'' +
                ", diagnose=" + diagnose +
                '}';
    }
}