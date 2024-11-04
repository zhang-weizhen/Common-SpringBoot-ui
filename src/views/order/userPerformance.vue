<template>
	<div class="system-user-container layout-padding">
		<el-card shadow="hover" class="layout-padding-auto">
			<div class="system-user-search mb15">
				<el-date-picker
					size="default"
					format="yyyy-MM-dd HH:mm:ss"
					v-model="state.tableData.param.startTime"
					placeholder="选择开始日期"
					type="date"
					style="max-width: 180px"
					>{{ state.tableData.param.startTime }}</el-date-picker
				>
				<el-date-picker
					size="default"
					format="yyyy-MM-dd HH:mm:ss"
					v-model="state.tableData.param.endTime"
					placeholder="选择结束日期"
					type="date"
					style="max-width: 180px"
					>{{ state.tableData.param.endTime }}</el-date-picker
				>
				<!-- <el-input size="default" v-model="state.tableData.param.endtime" placeholder="选择结束日期" type="date" style="max-width: 180px"></el-input> -->
				<el-button size="default" type="primary" class="ml10" @click="fetchData()">
					<el-icon>
						<ele-Search />
					</el-icon>
					查询
				</el-button>
			</div>
			<el-table :data="state.tableData.data" v-loading="state.tableData.loading" style="width: 100%">
				<el-table-column type="index" label="序号" width="60" />

				<el-table-column prop="createTime" label=" 时间" show-overflow-tooltip></el-table-column>
				<el-table-column prop="orderNum" label=" 订单总数" show-overflow-tooltip></el-table-column>
				<el-table-column prop="weight" label=" 订单总重量" show-overflow-tooltip></el-table-column>
				<el-table-column prop="processNum" label=" 订单总件数" show-overflow-tooltip></el-table-column>
				<el-table-column prop="totalAmount" label=" 订单总金额" show-overflow-tooltip></el-table-column>
			</el-table>
			<!-- <el-pagination
				@size-change="handleSizeChange"
				@current-change="handleCurrentChange"
				class="mt15"
				:pager-count="5"
				:page-sizes="[10, 20, 30]"
				:current-page="state.tableData.param.current"
				background
				:page-size="state.tableData.param.limit"
				layout="total, sizes, prev, pager, next, jumper"
				:total="state.tableData.total"
			>
			</el-pagination> -->
		</el-card>
	</div>
</template>

<script>
import { useOrderApi } from '@/api/order';
import { Message, MessageBox } from 'element-ui';
import { moment } from 'moment';
export default {
	name: 'userPerformance',
	data() {
		return {
			state: {
				tableData: {
					data: [],
					// total: 0,
					loading: false,
					param: {
						startTime: moment(new Date()).format('yyyy-MM-dd HH:mm:ss'),
						endTime: moment(new Date()).format('yyyy-MM-dd HH:mm:ss'),
					},
				},

				ruleForm: {
					createTime: '',
					orderNum: '', //  订单总数
					weight: '', //  订单总重量
					processNum: '',
					totalAmount: '',
				},
				submitBtn: {
					loading: false,
					type: '',
				},
			},
		};
	},
	methods: {
		fetchData() {
			// this.state.ruleForm = {};
			this.state.tableData.loading = true;
			useOrderApi()
				.userPerformance(this.state.tableData.param)
				.then((response) => {
					this.state.tableData.data = response.data;
					// this.state.tableData.total = response.data.total;
					// this.state.tableData.loading = false;
				});
		},

		handleSizeChange(pageSize) {
			this.state.tableData.data = [];
			this.state.tableData.param.limit = pageSize;
			this.fetchData();
		},
		handleCurrentChange(current) {
			this.state.tableData.data = [];
			this.state.tableData.param.current = current;
			this.fetchData();
		},
		formatterDate(date) {
			return date.toISOString().split('T')[0];
		},
	},
	computed: {},
	created() {},
	mounted() {
		this.fetchData();
	},
};
</script>

<style scoped></style>
