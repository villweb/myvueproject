/**
 * @authors user (xuemei101@163.com)
 * @date    2019/3/20 11:32 AM
 * @version 1.0.0
 */
import request from '../js/request';
const prefix = '';
/**
 * 焦点图
 * @param params
 * @returns {Promise<*|void>}
 */
export const getCarouselList = (params) => {
    return request({
        url: `${prefix}/ylb/index/getCarouselList`,
        method: 'GET',
        data: params,
    })
}



