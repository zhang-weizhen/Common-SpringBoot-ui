<template>
	<div class="system-user-container layout-padding">
		<el-card shadow="hover" class="layout-padding-auto">
			<div class="system-user-search mb15">
				<label>创建人:</label>
				<el-input size="default" v-model="state.tableData.param.createBy" placeholder="创建人" style="max-width: 180px"></el-input>
				<label>订单编号:</label>
				<el-input size="default" v-model="state.tableData.param.id" placeholder="订单编号" style="max-width: 180px"></el-input>
				<label>客户名称:</label>
				<el-input size="default" v-model="state.tableData.param.customName" placeholder="客户名称" style="max-width: 180px"></el-input>
				<label>客户编码:</label>
				<el-input size="default" v-model="state.tableData.param.customCode" placeholder="客户编码" style="max-width: 180px"></el-input>
				<label>订单状态:</label>
				<select v-model="state.tableData.param.orderStatus">
					<option v-for="orderStatusSelect in orderStatusSelects" :value="orderStatusSelect.value" :key="orderStatusSelect.value">
						{{ orderStatusSelect.text }}
					</option>
				</select>
				<label>材料:</label>
				<el-input size="default" v-model="state.tableData.param.materialCode" placeholder="材料" style="max-width: 180px"></el-input>
				<label>是否发货:</label>
				<select v-model="state.tableData.param.sendingStatus">
					<option v-for="option in options" :value="option.value" :key="option.value">
						{{ option.text }}
					</option>
				</select>

				<label>是否已收款:</label>
				<select v-model="state.tableData.param.paymentStatus">
					<option v-for="option in options" :value="option.value" :key="option.value">
						{{ option.text }}
					</option>
				</select>

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
				<el-table-column prop="id" label="订单编号" show-overflow-tooltip></el-table-column>
				<el-table-column prop="actualExpressFee" label="快递费实付金额" show-overflow-tooltip></el-table-column>
				<el-table-column prop="actualFare" label="车费实付金额" show-overflow-tooltip></el-table-column>
				<el-table-column prop="actualOutgoingPayment" label="外发付款实付金额" show-overflow-tooltip></el-table-column>
				<el-table-column prop="actualRepayment" label="回金实付金额" show-overflow-tooltip></el-table-column>
				<el-table-column prop="address" label=" 地址" show-overflow-tooltip></el-table-column>
				<el-table-column prop="advanceAmount" label="预付金额" show-overflow-tooltip></el-table-column>
				<el-table-column prop="advanceReceivedAmount" label="预付实收金额" show-overflow-tooltip></el-table-column>
				<el-table-column prop="contacts" label=" 联系人" show-overflow-tooltip></el-table-column>
				<el-table-column prop="customCode" label="客户编码" show-overflow-tooltip></el-table-column>
				<el-table-column prop="customName" label="客户名称" show-overflow-tooltip></el-table-column>
				<el-table-column prop="deliveryTime" label="交货时间" show-overflow-tooltip></el-table-column>
				<el-table-column prop="expressCollectionAmount" label="快递代收金额" show-overflow-tooltip></el-table-column>
				<el-table-column prop="expressFee" label="快递费" show-overflow-tooltip></el-table-column>
				<el-table-column prop="expressReceivedAmount" label="快递代收实收金额" show-overflow-tooltip></el-table-column>
				<el-table-column prop="fare" label="车费" show-overflow-tooltip></el-table-column>
				<el-table-column prop="finalPaymentAmount" label="尾款金额" show-overflow-tooltip></el-table-column>
				<el-table-column prop="finalReceivedAmount" label="尾款实收金额" show-overflow-tooltip></el-table-column>
				<el-table-column prop="imageAttachment" label="上传图片" show-overflow-tooltip></el-table-column>
				<el-table-column prop="materialName" label="材料名称" show-overflow-tooltip></el-table-column>
				<el-table-column prop="orderStatus" label="订单状态" show-overflow-tooltip></el-table-column>
				<el-table-column prop="outGoing" label="是否外发" show-overflow-tooltip></el-table-column>
				<el-table-column prop="outGoingAmount" label="外发金额" show-overflow-tooltip></el-table-column>
				<el-table-column prop="outGoingSupplier" label="外发供应商" show-overflow-tooltip></el-table-column>
				<el-table-column prop="outgoingPayment" label="外发付款金额" show-overflow-tooltip></el-table-column>
				<el-table-column prop="processNum" label="件数" show-overflow-tooltip></el-table-column>
				<el-table-column prop="processingTechnology" label="加工工艺" show-overflow-tooltip></el-table-column>
				<el-table-column prop="receivedAmount" label="已收金额" show-overflow-tooltip></el-table-column>
				<el-table-column prop="remark" label="加工备注" show-overflow-tooltip></el-table-column>
				<el-table-column prop="repayment" label="回金" show-overflow-tooltip></el-table-column>
				<el-table-column prop="supplierCollectionAmount" label="供应商代收金额" show-overflow-tooltip></el-table-column>
				<el-table-column prop="supplierReceivedAmount" label="供应商代收实收金额" show-overflow-tooltip></el-table-column>
				<el-table-column prop="telephone" label=" 电话号码" show-overflow-tooltip></el-table-column>
				<el-table-column prop="totalAmount" label="总金额(包含回金、外发、税金）" show-overflow-tooltip></el-table-column>
				<el-table-column prop="weight" label="重量" show-overflow-tooltip></el-table-column>
				<el-table-column prop="materialCode" label="材料编码" show-overflow-tooltip></el-table-column>
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
					<el-row :gutter="35">
						<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
							<el-form-item label="快递费实付金额">
								<el-input v-model="state.ruleForm.actualExpressFee" placeholder="快递费实付金额" clearable></el-input>
							</el-form-item>
						</el-col>
					</el-row>
					<el-row :gutter="35">
						<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
							<el-form-item label="车费实付金额">
								<el-input v-model="state.ruleForm.actualFare" placeholder="车费实付金额" clearable></el-input>
							</el-form-item>
						</el-col>
					</el-row>
					<el-row :gutter="35">
						<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
							<el-form-item label="外发付款实付金额">
								<el-input v-model="state.ruleForm.actualOutgoingPayment" placeholder="外发付款实付金额" clearable></el-input>
							</el-form-item>
						</el-col>
					</el-row>
					<el-row :gutter="35">
						<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
							<el-form-item label="回金实付金额">
								<el-input v-model="state.ruleForm.actualRepayment" placeholder="回金实付金额" clearable></el-input>
							</el-form-item>
						</el-col>
					</el-row>
					<el-row :gutter="35">
						<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
							<el-form-item label=" 地址">
								<el-input v-model="state.ruleForm.address" placeholder=" 地址" clearable></el-input>
							</el-form-item>
						</el-col>
					</el-row>
					<el-row :gutter="35">
						<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
							<el-form-item label="预付金额">
								<el-input v-model="state.ruleForm.advanceAmount" placeholder="预付金额" clearable></el-input>
							</el-form-item>
						</el-col>
					</el-row>
					<el-row :gutter="35">
						<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
							<el-form-item label="预付实收金额">
								<el-input v-model="state.ruleForm.advanceReceivedAmount" placeholder="预付实收金额" clearable></el-input>
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
							<el-form-item label="交货时间">
								<el-input v-model="state.ruleForm.deliveryTime" placeholder="交货时间" clearable></el-input>
							</el-form-item>
						</el-col>
					</el-row>
					<el-row :gutter="35">
						<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
							<el-form-item label="快递代收金额">
								<el-input v-model="state.ruleForm.expressCollectionAmount" placeholder="快递代收金额" clearable></el-input>
							</el-form-item>
						</el-col>
					</el-row>
					<el-row :gutter="35">
						<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
							<el-form-item label="快递费">
								<el-input v-model="state.ruleForm.expressFee" placeholder="快递费" clearable></el-input>
							</el-form-item>
						</el-col>
					</el-row>
					<el-row :gutter="35">
						<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
							<el-form-item label="快递代收实收金额">
								<el-input v-model="state.ruleForm.expressReceivedAmount" placeholder="快递代收实收金额" clearable></el-input>
							</el-form-item>
						</el-col>
					</el-row>
					<el-row :gutter="35">
						<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
							<el-form-item label="车费">
								<el-input v-model="state.ruleForm.fare" placeholder="车费" clearable></el-input>
							</el-form-item>
						</el-col>
					</el-row>
					<el-row :gutter="35">
						<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
							<el-form-item label="尾款金额">
								<el-input v-model="state.ruleForm.finalPaymentAmount" placeholder="尾款金额" clearable></el-input>
							</el-form-item>
						</el-col>
					</el-row>
					<el-row :gutter="35">
						<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
							<el-form-item label="尾款实收金额">
								<el-input v-model="state.ruleForm.finalReceivedAmount" placeholder="尾款实收金额" clearable></el-input>
							</el-form-item>
						</el-col>
					</el-row>
					<el-row :gutter="35">
						<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
							<el-form-item label="上传图片">
								<el-input v-model="state.ruleForm.imageAttachment" placeholder="上传图片" clearable></el-input>
							</el-form-item>
						</el-col>
					</el-row>
					<el-row :gutter="35">
						<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
							<el-form-item label="材料名称">
								<el-input v-model="state.ruleForm.materialName" placeholder="材料名称" clearable></el-input>
							</el-form-item>
						</el-col>
					</el-row>
					<el-row :gutter="35">
						<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
							<el-form-item label="订单状态">
								<el-input v-model="state.ruleForm.orderStatus" placeholder="订单状态" clearable></el-input>
							</el-form-item>
						</el-col>
					</el-row>
					<el-row :gutter="35">
						<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
							<el-form-item label="是否外发">
								<el-input v-model="state.ruleForm.outGoing" placeholder="是否外发" clearable></el-input>
							</el-form-item>
						</el-col>
					</el-row>
					<el-row :gutter="35">
						<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
							<el-form-item label="外发金额">
								<el-input v-model="state.ruleForm.outGoingAmount" placeholder="外发金额" clearable></el-input>
							</el-form-item>
						</el-col>
					</el-row>
					<el-row :gutter="35">
						<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
							<el-form-item label="外发供应商">
								<el-input v-model="state.ruleForm.outGoingSupplier" placeholder="外发供应商" clearable></el-input>
							</el-form-item>
						</el-col>
					</el-row>
					<el-row :gutter="35">
						<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
							<el-form-item label="外发付款金额">
								<el-input v-model="state.ruleForm.outgoingPayment" placeholder="外发付款金额" clearable></el-input>
							</el-form-item>
						</el-col>
					</el-row>
					<el-row :gutter="35">
						<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
							<el-form-item label="件数">
								<el-input v-model="state.ruleForm.processNum" placeholder="件数" clearable></el-input>
							</el-form-item>
						</el-col>
					</el-row>
					<el-row :gutter="35">
						<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
							<el-form-item label="加工工艺">
								<el-input v-model="state.ruleForm.processingTechnology" placeholder="加工工艺" clearable></el-input>
							</el-form-item>
						</el-col>
					</el-row>
					<el-row :gutter="35">
						<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
							<el-form-item label="已收金额">
								<el-input v-model="state.ruleForm.receivedAmount" placeholder="已收金额" clearable></el-input>
							</el-form-item>
						</el-col>
					</el-row>
					<el-row :gutter="35">
						<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
							<el-form-item label="加工备注">
								<el-input v-model="state.ruleForm.remark" placeholder="加工备注" clearable></el-input>
							</el-form-item>
						</el-col>
					</el-row>
					<el-row :gutter="35">
						<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
							<el-form-item label="回金">
								<el-input v-model="state.ruleForm.repayment" placeholder="回金" clearable></el-input>
							</el-form-item>
						</el-col>
					</el-row>
					<el-row :gutter="35">
						<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
							<el-form-item label="供应商代收金额">
								<el-input v-model="state.ruleForm.supplierCollectionAmount" placeholder="供应商代收金额" clearable></el-input>
							</el-form-item>
						</el-col>
					</el-row>
					<el-row :gutter="35">
						<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
							<el-form-item label="供应商代收实收金额">
								<el-input v-model="state.ruleForm.supplierReceivedAmount" placeholder="供应商代收实收金额" clearable></el-input>
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
							<el-form-item label="总金额(包含回金、外发、税金）">
								<el-input v-model="state.ruleForm.totalAmount" placeholder="总金额(包含回金、外发、税金）" clearable></el-input>
							</el-form-item>
						</el-col>
					</el-row>
					<el-row :gutter="35">
						<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
							<el-form-item label="重量">
								<el-input v-model="state.ruleForm.weight" placeholder="重量" clearable></el-input>
							</el-form-item>
						</el-col>
					</el-row>
					<el-row :gutter="35">
						<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
							<el-form-item label="材料编码">
								<el-input v-model="state.ruleForm.materialCode" placeholder="材料编码" clearable></el-input>
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
import { useOrderApi } from '@/api/order';
import { Message, MessageBox } from 'element-ui';

export default {
	name: 'order',
	data() {
		return {
			selected: '',
			options: [
				{ value: '1', text: '是' },
				{ value: '0', text: '否' },
			],
			orderStatusSelects: [
				{ value: '', text: ' ' },
				{ value: '0', text: '提交中' },
				{ value: '1', text: '生产中' },
				{ value: '2', text: '已完成' },
			],
			state: {
				tableData: {
					data: [],
					total: 0,
					loading: false,
					param: {
						current: 1,
						limit: 10,
					},
				},
				dialog: {
					isShowDialog: false,
					type: '',
					title: '',
					submitTxt: '',
				},
				ruleForm: {
					createBy: '', //
					createTime: '', //
					updateBy: '', //
					updateTime: '', //
					actualExpressFee: '', // 快递费实付金额
					actualFare: '', // 车费实付金额
					actualOutgoingPayment: '', // 外发付款实付金额
					actualRepayment: '', // 回金实付金额
					address: '', //  地址
					advanceAmount: '', // 预付金额
					advanceReceivedAmount: '', // 预付实收金额
					contacts: '', //  联系人
					customCode: '', // 客户编码
					customName: '', // 客户名称
					deliveryTime: '', // 交货时间
					expressCollectionAmount: '', // 快递代收金额
					expressFee: '', // 快递费
					expressReceivedAmount: '', // 快递代收实收金额
					fare: '', // 车费
					finalPaymentAmount: '', // 尾款金额
					finalReceivedAmount: '', // 尾款实收金额
					imageAttachment: '', // 上传图片
					materialName: '', // 材料名称
					orderStatus: '', // 订单状态
					outGoing: '', // 是否外发
					outGoingAmount: '', // 外发金额
					outGoingSupplier: '', // 外发供应商
					outgoingPayment: '', // 外发付款金额
					processNum: '', // 件数
					processingTechnology: '', // 加工工艺
					receivedAmount: '', // 已收金额
					remark: '', // 加工备注
					repayment: '', // 回金
					supplierCollectionAmount: '', // 供应商代收金额
					supplierReceivedAmount: '', // 供应商代收实收金额
					telephone: '', //  电话号码
					totalAmount: '', // 总金额(包含回金、外发、税金）
					weight: '', // 重量
					materialCode: '', // 材料编码
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
			useOrderApi()
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
				this.state.dialog.title = '修改${column.columnComment}';
				this.state.dialog.submitTxt = '修 改';
			} else {
				this.state.submitBtn.type = 'add';
				this.state.ruleForm = {
					createBy: '', //
					createTime: '', //
					updateBy: '', //
					updateTime: '', //
					actualExpressFee: '', // 快递费实付金额
					actualFare: '', // 车费实付金额
					actualOutgoingPayment: '', // 外发付款实付金额
					actualRepayment: '', // 回金实付金额
					address: '', //  地址
					advanceAmount: '', // 预付金额
					advanceReceivedAmount: '', // 预付实收金额
					contacts: '', //  联系人
					customCode: '', // 客户编码
					customName: '', // 客户名称
					deliveryTime: '', // 交货时间
					expressCollectionAmount: '', // 快递代收金额
					expressFee: '', // 快递费
					expressReceivedAmount: '', // 快递代收实收金额
					fare: '', // 车费
					finalPaymentAmount: '', // 尾款金额
					finalReceivedAmount: '', // 尾款实收金额
					imageAttachment: '', // 上传图片
					materialName: '', // 材料名称
					orderStatus: '', // 订单状态
					outGoing: '', // 是否外发
					outGoingAmount: '', // 外发金额
					outGoingSupplier: '', // 外发供应商
					outgoingPayment: '', // 外发付款金额
					processNum: '', // 件数
					processingTechnology: '', // 加工工艺
					receivedAmount: '', // 已收金额
					remark: '', // 加工备注
					repayment: '', // 回金
					supplierCollectionAmount: '', // 供应商代收金额
					supplierReceivedAmount: '', // 供应商代收实收金额
					telephone: '', //  电话号码
					totalAmount: '', // 总金额(包含回金、外发、税金）
					weight: '', // 重量
					materialCode: '', // 材料编码
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
				useOrderApi()
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
				useOrderApi()
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
			useOrderApi()
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
