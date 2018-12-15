<template>
	<el-card class="box-card">
		<div slot="header" class="clearfix">
			<h3><i class="fa fa-list"></i> 请假单</h3>
		</div>
		<span>姓名：</span>
		<el-input placeholder="请输入姓名" suffix-icon="el-icon-edit" blur v-model="input2"></el-input>
		<br />
		<span>部门：</span>
		<el-select v-model="value" clearable placeholder="请选择部门">
			<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
			</el-option>
		</el-select>
		<br />
		<span>事由：</span>
		<el-select v-model="value1" clearable placeholder="请假事由">
			<el-option v-for="item in tings" :key="item.val" :label="item.label" :value="item.val">
			</el-option>
		</el-select>
		<div class="block">
			<span class="demonstration">请假开始时间：</span>
			<el-date-picker v-model="value2" align="right" type="date" placeholder="选择日期" :picker-options="pickerOptions1">
			</el-date-picker>
			<span class="demonstration2">请假开始时间：</span>
			<el-date-picker v-model="value3" align="right" type="date" placeholder="选择日期" :picker-options="pickerOptions1">
			</el-date-picker>
		</div>
		<br />
		<el-input type="textarea" :autosize="{ minRows: 4, maxRows: 4}" placeholder="备注：请说明原因" v-model="textarea3">
		</el-input>
		<div class="block">
			<span>紧急联系人姓名：</span>
			<el-input placeholder="请输入紧急联系人姓名" suffix-icon="el-icon-edit" blur v-model="input2"></el-input>
			<br />
			<span>紧急联系人电话：</span>
			<el-input placeholder="联络方式" suffix-icon="el-icon-mobile-phone" blur v-model="input2"></el-input>
		</div>
		<el-button type="text" @click="open4">提交请假申请</el-button>
	</el-card>
</template>

<script>
	export default {
		data() {
			return {
				value: '',
				value1: '',
				value2: '',
				value3: '',
				textarea3: '',

				options: [{
					value: '选项1',
					label: '财务部'
				}, {
					value: '选项2',
					label: '人事部'
				}, {
					value: '选项3',
					label: '运营部'
				}, {
					value: '选项4',
					label: '销售部'
				}, {
					value: '选项5',
					label: '后勤部'
				}],
				tings: [{
					val: '选项6',
					label: '事假'
				}, {
					val: '选项7',
					label: '病假'
				}, {
					val: '选项8',
					label: '丧假'
				}, {
					val: '选项9',
					label: '婚假'
				}, {
					val: '选项10',
					label: '其他'
				}],
				pickerOptions1: {
					shortcuts: [{
						text: '今天',
						onClick(picker) {
							picker.$emit('pick', new Date());
						}
					}, {
						text: '昨天',
						onClick(picker) {
							const date = new Date();
							date.setTime(date.getTime() - 3600 * 1000 * 24);
							picker.$emit('pick', date);
						}
					}, {
						text: '一周前',
						onClick(picker) {
							const date = new Date();
							date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
							picker.$emit('pick', date);
						}
					}]
				}
			}
		},
		methods: {
			open4() {
				const h = this.$createElement;
				this.$msgbox({
					title: '请假申请',
					message: h('p', null, [
						h('span', null, '请问是否提交请假申请 '),
					]),
					showCancelButton: true,
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					beforeClose: (action, instance, done) => {
						if(action === 'confirm') {
							instance.confirmButtonLoading = true;
							instance.confirmButtonText = '提交中...';
							setTimeout(() => {
								done();
								setTimeout(() => {
									instance.confirmButtonLoading = false;
								}, 300);
							}, 3000);
						} else {
							done();
						}
					}
				}).then(action => {
					this.$message({
						type: 'success',
						message: '申请提交成功！'
					});
				});
			}
			//			handleInput(e) {
			//				this.val = e.target.value.replace(/[^\d]/g, '');
			//			}
		}
	}
</script>

<style scoped="scoped">
	.clearfix {
		text-align: center;
	}
	
	.el-input,
	.el-select {
		max-width: 25%;
		margin: 20px 0px;
	}
	
	.el-input.is-focus {
		border: 1px solid #42B983 !important;
	}
	
	.demonstration2 {
		margin-left: 20px;
	}
</style>