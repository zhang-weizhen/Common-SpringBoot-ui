<template>
	<div class="system-user-container layout-padding">
		<div el-card shadow="hover" class="layout-padding-auto">
			<el-form ref="userDialogFormRef" :model="state.ruleForm" size="default" label-width="90px">
				<el-row :gutter="35">
					<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
						<el-form-item label="创建人">
							<el-input v-model="state.ruleForm.createBy" placeholder="" clearable></el-input>
						</el-form-item>
					</el-col>
					<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
						<el-form-item label="客户编码">
							<el-input v-model="state.ruleForm.customCode" placeholder="客户编码" clearable></el-input>
						</el-form-item>
					</el-col>
					<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
						<el-form-item label="客户名称">
							<el-input v-model="state.ruleForm.customName" placeholder="客户名称" clearable></el-input>
						</el-form-item>
					</el-col>
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
						<el-form-item label="材料(做下拉)">
							<el-input v-model="state.ruleForm.materialCode" placeholder="材料编码" clearable></el-input>
						</el-form-item>
					</el-col>
					<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
						<el-form-item label="重量">
							<el-input v-model="state.ruleForm.weight" placeholder="重量" clearable></el-input>
						</el-form-item>
					</el-col>
					<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
						<el-form-item label="件数">
							<el-input v-model="state.ruleForm.processNum" placeholder="件数" clearable></el-input>
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
				<el-row :gutter="35"> </el-row>
			</el-form>
			<template>
				<span class="dialog-footer">
					<el-button type="primary" @click="onSubmit" :loading="state.submitBtn.loading" size="default">保存</el-button>
				</span>
			</template>
		</div>
	</div>
</template>

<script>
import { useOrderApi } from '@/api/order';
import { Message, MessageBox } from 'element-ui';

export default {
	data() {
		return {
			state: {
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
	},
};
</script>

<style></style>
