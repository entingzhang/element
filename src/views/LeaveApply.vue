<template>
	<el-card class="box-card">
		<div slot="header" class="clearfix">
			<span>LeaveApply请假申请</span>
			<el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
		</div>
		<el-table :data="apply" style="width: 100%" v-loading="loading">
			<el-table-column type="index" width="50"></el-table-column>
			<el-table-column prop="name" width="80" label="姓名"></el-table-column>
			<el-table-column prop="partment" width="80" label="部门"></el-table-column>
			<el-table-column prop="region" label="事由"></el-table-column>
			<el-table-column label="时间">
				<template slot-scope="scope">
					{{timeFrmate(scope.row.start)}}至{{timeFrmate(scope.row.end)}}
				</template>
			</el-table-column>
			<el-table-column prop="other" label="紧急联系人"></el-table-column>
			<el-table-column prop="other_phone" width="80" label="联系人电话"></el-table-column>
			<el-table-column prop="other_phone" label="备注"></el-table-column>
			<el-table-column label="操作">
				<template slot-scope="scope">
					<el-button :plain="true" size="mini" @click="open">同意</el-button>
					<el-button :plain="true" size="mini" type="danger" @click="openVn">驳回</el-button>
				</template>
			</el-table-column>
		</el-table>
		<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="page" :page-sizes="[10, 20, 30, 40]" :page-size="size" layout="total, sizes, prev, pager, next, jumper" :total="total">
		</el-pagination>

	</el-card>
</template>

<script>
	import axios from "axios";
	import qs from "qs";
	export default {
		data() {
			return {
				size: 10,
				total: 0,
				page: 1,
				apply: [],
				loading:false,
				current: 1
			}
		},
		methods: {
			timeFrmate(timestamp){
				let time=new Date(timestamp*1000);
				let y=time.getFullYear();
				let M=time.getMonth();
				let d=time.getDate();
				let h=time.getHours();
				let m=time.getMinutes();
				let s=time.getSeconds();
				
				h=h<10?('0'+h):h;
				m=m<10?('0'+m):m;
				s=s<10?('0'+s):s;
				return y+'-'+(M+1)+'-'+d
//				+''+h+':'+m+':'+s
			},
			open() {
				this.$message({type: 'success',message:'您已同意请假申请'});
			},
			openVn() {
				const h = this.$createElement;
				this.$message({type: 'error',message:'您已驳回请假申请'});
			},
			handleSizeChange(s) {
				this.size=s;
				this.page=1;
				this.getApplyList(1);
			},
			handleCurrentChange(p) {
				this.page=p;
				this.getApplyList(p);
			},
			getApplyList(page) {
				this.loading=true;
				const url = "http://192.168.255.30:8888/index.php/Index/Index/getLeaveList";
				axios.post(url, qs.stringify({
					page:page,
					size:this.size,
				})).then( res=>{
					this.apply=res.data.list;
					this.total=res.data.total;
					this.loading=false;
				}).catch( err=>{
					this.loading=false;
				});
			}
		},
		created(){
			this.getApplyList(1);
		}
	}
</script>

<style>

</style>