<template>
	<div class="system-user-container layout-padding">
		<el-card shadow="hover" class="layout-padding-auto">
			<div class="system-user-search mb15">
				<el-input size="default" v-model="state.tableData.param.keyword" placeholder="请输入名称" style="max-width: 180px"></el-input>
				<el-button size="default" type="primary" class="ml10" @click="fetchData()">
					<el-icon>
						<ele-Search />
					</el-icon>
					查询
				</el-button>
				<el-button size="default" type="success" class="ml10" @click="onOpenAddOrEdit('add')">
					<el-icon>
						<ele-FolderAdd />
					</el-icon>
					新增
				</el-button>
			</div>
			<el-table :data="state.tableData.data" v-loading="state.tableData.loading" style="width: 100%">
				<el-table-column type="index" label="序号" width="60" />

				<el-table-column prop="code" label=" 材料编码" show-overflow-tooltip></el-table-column>
				<el-table-column prop="name" label=" 材料名称" show-overflow-tooltip></el-table-column>
				<el-table-column label="操作" width="200">
					<template #default="scope">
						<el-button size="small" text type="primary" @click="onOpenAddOrEdit('edit', scope.row)">修改</el-button>
						<el-button size="small" text type="primary" @click="onRowDel(scope.row)">删除</el-button>
					</template>
				</el-table-column>
			</el-table>
			<el-pagination
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
			</el-pagination>
		</el-card>
		<el-dialog :title="state.dialog.title" :visible.sync="state.dialog.isShowDialog" width="769px">
			<div>
				<el-form ref="userDialogFormRef" :model="state.ruleForm" size="default" label-width="90px">
					<el-row :gutter="35">
						<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
							<el-form-item label=" 材料编码">
								<el-input v-model="state.ruleForm.code" placeholder=" 材料编码" clearable></el-input>
							</el-form-item>
						</el-col>
					</el-row>
					<el-row :gutter="35">
						<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
							<el-form-item label=" 材料名称">
								<el-input v-model="state.ruleForm.name" placeholder=" 材料名称" clearable></el-input>
							</el-form-item>
						</el-col>
					</el-row>
				</el-form>
				<template>
					<span class="dialog-footer">
						<el-button @click="onCancel" size="default">取 消</el-button>
						<el-button type="primary" @click="onSubmit" :loading="state.submitBtn.loading" size="default">{{ state.dialog.submitTxt }}</el-button>
					</span>
				</template>
			</div>
		</el-dialog>
	</div>
</template>

<script>
import { useMaterialApi } from '@/api/material';
import { Message, MessageBox } from 'element-ui';

export default {
	name: 'material',
	data() {
		return {
			state: {
				tableData: {
					data: [],
					total: 0,
					loading: false,
					param: {
						current: 1,
						limit: 10,
						keyword: '',
					},
				},
				dialog: {
					isShowDialog: false,
					type: '',
					title: '',
					submitTxt: '',
				},
				ruleForm: {
					code: '', //  材料编码
					name: '', //  材料名称
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
			this.state.ruleForm = {};
			this.state.tableData.loading = true;
			useMaterialApi()
				.list(this.state.tableData.param)
				.then((response) => {
					this.state.tableData.data = response.data.records;
					this.state.tableData.total = response.data.total;
					this.state.tableData.loading = false;
				});
		},
		onOpenAddOrEdit(type, row) {
			if (type === 'edit') {
				this.state.submitBtn.type = 'edit';
				this.state.ruleForm = row;
				this.state.dialog.title = '修改材料信息';
				this.state.dialog.submitTxt = '修 改';
			} else {
				this.state.submitBtn.type = 'add';
				this.state.ruleForm = {
					code: '', //  材料编码
					name: '', //  材料名称
				};
				this.state.dialog.title = '新增材料';
				this.state.dialog.submitTxt = '新 增';
			}
			this.state.dialog.isShowDialog = true;
		},
		onRowDel(row) {
			MessageBox.confirm(`此操作将永久删除，是否继续?`, '提示', {
				confirmButtonText: '确认',
				cancelButtonText: '取消',
				type: 'warning',
			})
				.then(() => {
					this.deleteInfo(row);
				})
				.catch(() => {});
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
		closeDialog() {
			this.state.dialog.isShowDialog = false;
		},
		onCancel() {
			this.closeDialog();
		},
		onSubmit() {
			this.state.submitBtn.loading = true;
			if (this.state.submitBtn.type === 'edit') {
				useMaterialApi()
					.update(this.state.ruleForm)
					.then((response) => {
						this.state.submitBtn.loading = false;
						this.closeDialog();
						this.fetchData();
					})
					.catch(() => {
						this.state.submitBtn.loading = false;
					});
			} else {
				useMaterialApi()
					.add(this.state.ruleForm)
					.then((response) => {
						this.state.submitBtn.loading = false;
						this.closeDialog();
						this.fetchData();
					})
					.catch(() => {
						this.state.submitBtn.loading = false;
					});
			}
		},
		deleteInfo(row) {
			useMaterialApi()
				.delete(row)
				.then((response) => {
					Message.success('删除成功');
					this.fetchData();
				})
				.catch(() => {
					this.fetchData();
				});
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
