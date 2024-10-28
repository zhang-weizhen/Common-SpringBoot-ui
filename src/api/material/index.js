import request from '@/utils/request';

/**
 * 材料管理
 *
 * @author zwz
 * @email 602459150@qq.com
 * @date 2024-10-28 17:49:21
 */
export function useMaterialApi() {
	return {
		list: (params) => {
			return request({
				url: '/material/info/list',
				method: 'get',
				params
			});
		},
		add: (params) => {
			return request({
				url: '/material/info/save',
				method: 'post',
				data: params
			});
		},
		update: (params) => {
			return request({
				url: '/material/info/update',
				method: 'put',
				data: params
			});
		},
		delete: (params) => {
			return request({
				url: '/material/info/delete',
				method: 'delete',
				data: params
			});
		}
	};
}