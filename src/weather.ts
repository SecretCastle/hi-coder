import * as vscode from 'vscode';
import * as rp from 'request-promise';
import * as Common from './common';

const jumpToDetail = (context: vscode.ExtensionContext): void => {
  console.log('jumpToDetail');
}

const setStatusBar = (context: vscode.ExtensionContext, data: any): void => {
  const msg = `${data.city} ${data.templow}°C-${data.temphigh}°C`
  vscode.window.setStatusBarMessage(msg);
}

const Weather = (context: vscode.ExtensionContext): void => {
  // 获取城市
  const city: any = vscode.workspace.getConfiguration('HiCoder').get('city');
  if (city) {
    // 获取城市天气预报
    const options: rp.OptionsWithUri = {
      uri: Common.REQUEST_URL + Common.REQUEST_WEATHER,
      method: 'get',
      qs: {
        city,
        appkey: Common.APP_KEY
      }
    }
    // ajax request
    rp(options).then((res: any) => {
      const response = JSON.parse(res);
      if (response && response.result.status === 0) {
        const data = response.result.result
        const msg: string = `Hi, User. Location ${data.city} Temperature ${data.templow}°C-${data.temphigh}°C`;
        setStatusBar(context, data);
        vscode.window.showInformationMessage(msg, "detail").then(winRes => {
          if (winRes === 'detail') {
            jumpToDetail(context);
          }
        });
      }
    })
  }
};

export default Weather;