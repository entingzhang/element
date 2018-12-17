<template>
	<el-card class="box-card">
		<div slot="header" class="clearfix">
			<h3><i class="fa fa-list"></i> 请假单</h3>
		</div>
		<el-form :model="options" :rules="rules" ref="options" label-width="100px" class="demo-ruleForm">
			<el-row :gutter="10">
				<el-col :span="12">
					<el-form-item label="请假人:" prop="name">
						<el-input v-model="options.name"></el-input>
					</el-form-item>
				</el-col>
				<el-col :span="12">
					<el-form-item label="事由:" prop="region">
						<el-select v-model="options.region" placeholder="请选择请假原因" style="width:100%">
							<el-option label="事假" value="事假"></el-option>
							<el-option label="婚假" value="婚假"></el-option>
							<el-option label="病假" value="病假"></el-option>
							<el-option label="年假" value="年假"></el-option>
							<el-option label="其他" value="其他"></el-option>
						</el-select>
					</el-form-item>
				</el-col>
			</el-row>
			<el-row :gutter="10">
				<el-col :span="12">
					<el-form-item label="部门:" prop="partment">
						<el-select v-model="options.partment" placeholder="请选择部门" style="width:100%">
							<el-option label="技术部" value="技术部"></el-option>
							<el-option label="财务部" value="财务部"></el-option>
							<el-option label="后勤部" value="后勤部"></el-option>
							<el-option label="人事部" value="人事部"></el-option>
							<el-option label="运营部" value="运营部"></el-option>
						</el-select>
					</el-form-item>
				</el-col>
				<el-col :span="12">
					<el-form-item label="时间:">
						<el-date-picker v-model="time" style="width:100%" value-format="timestamp" type="datetimerange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" align="right">
						</el-date-picker>
					</el-form-item>
				</el-col>
			</el-row>
			<el-row :gutter="10">
				<el-col :span="12">
					<el-form-item label="紧急联系人:" prop="other">
						<el-input v-model="options.other"></el-input>
					</el-form-item>
				</el-col>
				<el-col :span="12">
					<el-form-item label="联系人电话:" prop="other">
						<el-input v-model="options.other_phone"></el-input>
					</el-form-item>
				</el-col>
			</el-row>
			<el-form-item label="备注:" prop="leave_desc">
				<el-input v-model="options.leave_desc">请假备注说明</el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="submitForm('options')" :loading="loading">提交</el-button>
				<el-button @click="resetForm('options')">重置</el-button>
			</el-form-item>
		</el-form>
	</el-card>
</template>

<script>
	import axios from "axios";
	import qs from "qs";
	export default {
		data() {
			return {
				time:[],
				options: {
					name: '',
					partment: '',
					region: '',
					start: '',
					end: '',
					leave_desc: '',
					other: '',
					other_phone: ''
				},
				loading: false,
				rules: {
					name: [{
							required: true,
							message: '请输入请假人',
							trigger: 'blur'
						},
						{
							min: 2,
							max: 10,
							message: '长度在 2 到 10 个字符',
							trigger: 'blur'
						}
					]
				}

			}
		},
		methods: {
			addLeave() {
				this.loading = true;
				let url = "http://192.168.255.30:8888/index.php/Index/Index/addLeave";
				this.options.start = this.time[0] / 1000;
				this.options.end = this.time[1] / 1000;
				axios.post(url, qs.stringify({
					data: this.options
				})).then(res => {
					if(res.data.code > 0) {
						this.$notify({
							title: '成功',
							message: res.data.msg,
							type: 'success'
						});
					} else {
						this.$notify({
							title: '失败',
							message: res.data.msg,
							type: 'error'
						});
					}
					this.loading = false;
				}).catch(err => {
					this.$notify({
						title: '错误',
						message: '服务器错误',
						type: 'error'
					});
					this.loading = false;
				});
			},
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if(valid) {
						console.log("通过验证");
						this.addLeave();
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
			resetForm(formName) {
				this.$refs[formName].resetFields();
			}
		}
	}
</script>

<style scoped="scoped">
	.clearfix {
		text-align: center;
	}
</style>