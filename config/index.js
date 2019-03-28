/**
 * @authors user (xuemei101@163.com)
 * @date    2019/3/14 10:52 AM
 * @version 1.0.0
 */
export default {
  IS_RELEASE: true, // true线上，false测试

  // BASE_URL: 'http://localhost:3000/api', // 本地
  // BASE_URL: 'http://test.huodong.bthome.com/', // 测试
  BASE_URL: 'https://huodong.bthome.com/', // 线上

  // IMG_URL: 'http://localhost:3000/_nuxt', // 本地
  // IMG_URL: '//node.huodong.bthome.com/_nuxt', // 测试
  IMG_URL: 'https://ylb-test.bthome.com/_nuxt', // 线上
  // IMG_URL: 'https://easytuan.gitee.io/node-elm-api/public/', // 生产（使用码云Gitee Pages 服务）

  HEADERS: {
    'Content-Type': 'application/json;charset=UTF-8'
  },

  TIMEOUT: 12000, // api超时时间

};
