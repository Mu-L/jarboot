import { ACCESS_CLUSTER_HOST, TOKEN_KEY } from './CommonConst';
import { getCurrentInstance } from 'vue';
import type { I18n, Locale } from 'vue-i18n';
import type { RouteLocationNormalized } from 'vue-router';
import { PAGE_LOGIN } from '@/common/route-name-constants';

/**
 * @author majianzheng
 */
export default class CommonUtils {
  private static readonly TOKEN_PREFIX = 'Bearer ';
  public static readonly ACCESS_TOKEN = 'accessToken';
  private static t: any;
  private static i18n: I18n;
  public static init(i18n: I18n) {
    CommonUtils.i18n = i18n;
  }

  public static translate(s: string, ...args: any[]) {
    if (!CommonUtils.t) {
      CommonUtils.t = getCurrentInstance()?.appContext.config.globalProperties.$t;
    }
    let msg = CommonUtils.t(s);
    if (!args?.length) {
      return msg;
    }
    args.forEach((arg: any) => {
      for (const key in arg) {
        const reg = `{${key}}`;
        msg = msg.replaceAll(reg, arg[key]);
      }
    });
    return msg;
  }

  public static mergeLocaleMessage(locale: Locale, message: any) {
    CommonUtils.i18n.global.mergeLocaleMessage(locale, message);
  }

  public static getToken(): string {
    let token = localStorage.getItem(TOKEN_KEY);
    if (!token) {
      token = '';
    }
    return token;
  }

  public static getCurrentHost() {
    return localStorage.getItem(ACCESS_CLUSTER_HOST) ?? '';
  }

  public static deleteToken() {
    localStorage.removeItem(TOKEN_KEY);
  }

  public static getRawToken(): string {
    let token = localStorage.getItem(TOKEN_KEY);
    if (!token) {
      return '';
    }
    if (0 === token.indexOf(CommonUtils.TOKEN_PREFIX)) {
      token = token.substring(CommonUtils.TOKEN_PREFIX.length);
    }
    return token;
  }

  public static parseRedirectQuery(to: RouteLocationNormalized): any {
    const query = {} as any;
    if (to.name !== PAGE_LOGIN) {
      // 登录成功后跳转回原登录前的界面
      query['redirect'] = to.name;
      if (to.query) {
        query['redirectQuery'] = JSON.stringify(to.query);
      }
      if (to.params) {
        query['redirectParams'] = JSON.stringify(to.params);
      }
    }
    return query;
  }

  public static exportServer(name: string, clusterHost: string): void {
    const a = document.createElement('a');
    a.href = `/api/jarboot/cluster/manager/exportService?name=${name}&clusterHost=${clusterHost}`;
    a.click();
    a.remove();
  }

  public static isMobileDevice() {
    const userAgentInfo = navigator.userAgent;
    const agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod'];

    for (const element of agents) {
      if (userAgentInfo.indexOf(element) > 0) {
        return true;
      }
    }
    return window.screen.width < 850;
  }

  public static download(url: string, filename: string, method = 'GET', body: any = '', callback?: (result: boolean, msg?: string) => void) {
    const xhr = new XMLHttpRequest();
    //GET请求,请求路径url,async(是否异步)
    xhr.open(method, url, true);
    //设置响应类型为 blob
    xhr.responseType = 'blob';
    //关键部分
    xhr.onload = function () {
      //如果请求执行成功
      if (this.status == 200) {
        const blob = this.response;
        const a = document.createElement('a');
        //创键临时url对象
        const objUrl = URL.createObjectURL(blob);
        a.href = objUrl;
        a.download = filename;
        a.click();
        //释放之前创建的URL对象
        window.URL.revokeObjectURL(objUrl);
        a.remove();
        callback && callback(true);
      } else {
        callback && callback(false, '下载失败，状态码：' + this.status);
      }
    };
    //发送请求
    xhr.send(body);
  }

  public static downloadTextAsFile(text: string, filename: string) {
    const a = document.createElement('a');
    //创键临时url对象
    const objUrl = URL.createObjectURL(new Blob([text], { type: 'text/plain' }));
    a.href = objUrl;
    a.download = filename;
    a.click();
    //释放之前创建的URL对象
    window.URL.revokeObjectURL(objUrl);
    a.remove();
  }
}
