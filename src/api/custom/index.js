import request from '@/utils/request';

/**
 * 客户管理
 *
 * @author zwz
 * @email 602459150@qq.com
 * @date 2024-10-26 00:58:55
 */
export function useCustomApi() {
	return {
		list: (params) => {
		return request({
			url: '/custom/info/list',
			method: 'get',
			params
		});
},
	add: (params) => {
		return request({
							url: '/custom/info/save',
				method: 'post',
						data: params
		});
	},
	update: (params) => {
		return request({
							url: '/custom/info/update',
				method: 'put',
						data: params
		});
	},
	delete: (params) => {
		return request({
							url: '/custom/info/delete',
				method: 'delete',
						data: params
		});
	}
};
}
