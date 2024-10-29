import request from '@/utils/request';

/**
 * 订单管理
 *
 * @author zwz
 * @email 602459150@qq.com
 * @date 2024-10-26 14:10:41
 */
export function useOrderApi() {
	return {
		list: (params) => {
			return request({
				url: '/order/list',
				method: 'get',
				params
			});
		},
		add: (params) => {
			return request({
				url: '/order/save',
				method: 'post',
				data: params
			});
		},
		update: (params) => {
			return request({
				url: '/order/update',
				method: 'put',
				data: params
			});
		},
		delete: (params) => {
			return request({
				url: '/order/delete',
				method: 'delete',
				data: params
			});
		}
	};
}