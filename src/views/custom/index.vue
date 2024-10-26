<template>
	<div class="system-user-container layout-padding">
		<el-card shadow="hover" class="layout-padding-auto">
			<div class="system-user-search mb15">
				<el-input size="default" v-model="state.tableData.param.keyword" placeholder="请输入名称"
						  style="max-width: 180px"></el-input>
				<el-button size="default" type="primary" class="ml10" @click="fetchData()">
					<el-icon>
						<ele-Search/>
					</el-icon>
					查询
				</el-button>
				<el-button size="default" type="success" class="ml10" @click="onOpenAddOrEdit('add')">
					<el-icon>
						<ele-FolderAdd/>
					</el-icon>
					新增
				</el-button>
			</div>
			<el-table :data="state.tableData.data" v-loading="state.tableData.loading" style="width: 100%">
				<el-table-column type="index" label="序号" width="60"/>
															<el-table-column prop="address" label=" 地址" show-overflow-tooltip></el-table-column>
																				<el-table-column prop="contacts" label=" 联系人" show-overflow-tooltip></el-table-column>
																				<el-table-column prop="createBy" label="" show-overflow-tooltip></el-table-column>
																				<el-table-column prop="createTime" label="" show-overflow-tooltip></el-table-column>
																				<el-table-column prop="customCode" label="客户编码" show-overflow-tooltip></el-table-column>
																				<el-table-column prop="customName" label="客户名称" show-overflow-tooltip></el-table-column>
																													<el-table-column prop="telephone" label=" 电话号码" show-overflow-tooltip></el-table-column>
																				<el-table-column prop="updateBy" label="" show-overflow-tooltip></el-table-column>
																				<el-table-column prop="updateTime" label="" show-overflow-tooltip></el-table-column>
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
									<el-form-item label=" 地址">
										<el-input v-model="state.ruleForm.address" placeholder=" 地址" clearable></el-input>
									</el-form-item>
								</el-col>
							</el-row>
																								<el-row :gutter="35">
								<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
									<el-form-item label=" 联系人">
										<el-input v-model="state.ruleForm.contacts" placeholder=" 联系人" clearable></el-input>
									</el-form-item>
								</el-col>
							</el-row>
																								<el-row :gutter="35">
								<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
									<el-form-item label="">
										<el-input v-model="state.ruleForm.createBy" placeholder="" clearable></el-input>
									</el-form-item>
								</el-col>
							</el-row>
																								<el-row :gutter="35">
								<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
									<el-form-item label="">
										<el-input v-model="state.ruleForm.createTime" placeholder="" clearable></el-input>
									</el-form-item>
								</el-col>
							</el-row>
																								<el-row :gutter="35">
								<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
									<el-form-item label="客户编码">
										<el-input v-model="state.ruleForm.customCode" placeholder="客户编码" clearable></el-input>
									</el-form-item>
								</el-col>
							</el-row>
																								<el-row :gutter="35">
								<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
									<el-form-item label="客户名称">
										<el-input v-model="state.ruleForm.customName" placeholder="客户名称" clearable></el-input>
									</el-form-item>
								</el-col>
							</el-row>
																																			<el-row :gutter="35">
								<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
									<el-form-item label=" 电话号码">
										<el-input v-model="state.ruleForm.telephone" placeholder=" 电话号码" clearable></el-input>
									</el-form-item>
								</el-col>
							</el-row>
																								<el-row :gutter="35">
								<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
									<el-form-item label="">
										<el-input v-model="state.ruleForm.updateBy" placeholder="" clearable></el-input>
									</el-form-item>
								</el-col>
							</el-row>
																								<el-row :gutter="35">
								<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
									<el-form-item label="">
										<el-input v-model="state.ruleForm.updateTime" placeholder="" clearable></el-input>
									</el-form-item>
								</el-col>
							</el-row>
															</el-form>
				<template>
					<span class="dialog-footer">
						<el-button @click="onCancel" size="default">取 消</el-button>
						<el-button type="primary" @click="onSubmit" :loading="state.submitBtn.loading" size="default">{{state.dialog.submitTxt}}</el-button>
					</span>
				</template>
			</div>
		</el-dialog>
	</div>
</template>

<script>
	import { useCustomApi } from '@/api/custom';
	import {Message, MessageBox} from 'element-ui';

	export default {
		name: "custom",
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
						}
					},
					dialog: {
						isShowDialog: false,
						type: '',
						title: '',
						submitTxt: '',
					},
					ruleForm: {
												address: '', //  地址
																contacts: '', //  联系人
																createBy: '', // 
																createTime: '', // 
																customCode: '', // 客户编码
																customName: '', // 客户名称
																							telephone: '', //  电话号码
																updateBy: '', // 
																updateTime: '', // 
									},
			submitBtn: {
				loading: false,
						type:''
			}
		}
		}
		},
		methods: {
			fetchData() {
				this.state.ruleForm = {}
				this.state.tableData.loading = true
				useCustomApi().list(this.state.tableData.param).then(response => {
					this.state.tableData.data = response.data.records
					this.state.tableData.total = response.data.total
					this.state.tableData.loading = false
				})
			},
			onOpenAddOrEdit(type, row) {
				if (type === 'edit') {
					this.state.submitBtn.type = 'edit';
					this.state.ruleForm = row;
					this.state.dialog.title = '修改${column.columnComment}';
					this.state.dialog.submitTxt = '修 改';
				} else {
					this.state.submitBtn.type = 'add';
					this.state.ruleForm = {
																		address: '', //  地址
																								contacts: '', //  联系人
																								createBy: '', // 
																								createTime: '', // 
																								customCode: '', // 客户编码
																								customName: '', // 客户名称
																																			telephone: '', //  电话号码
																								updateBy: '', // 
																								updateTime: '', // 
															};
					this.state.dialog.title = '新增${column.columnComment}';
					this.state.dialog.submitTxt = '新 增';
				}
				this.state.dialog.isShowDialog = true;
			},
			onRowDel(row) {
				MessageBox.confirm(`此操作将永久删除，是否继续?`, '提示', {
					confirmButtonText: '确认',
					cancelButtonText: '取消',
					type: 'warning',
				}).then(() => {
					this.deleteInfo(row)
				}).catch(() => {
				});
			},
			handleSizeChange(pageSize) {
				this.state.tableData.data = []
				this.state.tableData.param.limit = pageSize
				this.fetchData()
			},
			handleCurrentChange(current) {
				this.state.tableData.data = []
				this.state.tableData.param.current = current
				this.fetchData()
			},
			closeDialog() {
				this.state.dialog.isShowDialog = false;
			},
			onCancel() {
				this.closeDialog();
			},
			onSubmit() {
				this.state.submitBtn.loading = true;
				if(this.state.submitBtn.type === 'edit'){
					useCustomApi().update(this.state.ruleForm).then(response => {
						this.state.submitBtn.loading = false;
						this.closeDialog();
						this.fetchData()
					}).catch(() => {
						this.state.submitBtn.loading = false
					})
				}else {
					useCustomApi().add(this.state.ruleForm).then(response => {
						this.state.submitBtn.loading = false;
						this.closeDialog();
						this.fetchData()
					}).catch(() => {
						this.state.submitBtn.loading = false
					})
				}
			},
			deleteInfo(row){
				useCustomApi().delete(row).then(response => {
					Message.success('删除成功');
					this.fetchData()
				}).catch(() => {
					this.fetchData()
				})
			}
		},
		computed: {},
		created() {

		},
		mounted() {
			this.fetchData()
		}
	}
</script>

<style scoped>

</style>
