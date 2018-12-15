<template>
	<el-card class="box-card">
		<div slot="header" class="clearfix">
			<span>LeaveApply请假申请</span>
			<el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
		</div>
		<el-table :data="apply" style="width: 100%">
			<el-table-column type="index" width="50"></el-table-column>
			<el-table-column prop="name" width="120" label="姓名"></el-table-column>
			<el-table-column prop="departmet" width="120" label="部门"></el-table-column>
			<el-table-column prop="because" label="请假事由"></el-table-column>
			<el-table-column prop="starttime" label="开始时间"></el-table-column>
			<el-table-column prop="endtime" label="结束时间"></el-table-column>
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
	export default {
		data() {
			return {
				size: 10,
				total: 100,
				page: 1,
				apply: [{
					id: '1',
					name: '郭德纲',
					departmet:'财务部',
					because: '事假',
					starttime: '2018-12-28',
					endtime: '2018-12-30'
				}, {
					id: '1',
					name: '于谦',
					departmet:'财务部',
					because: '事假',
					starttime: '2018-12-28',
					endtime: '2018-12-30'
				}, {
					id: '1',
					name: '岳云鹏',
					departmet:'财务部',
					because: '事假',
					starttime: '2018-12-28',
					endtime: '2018-12-30'
				}, {
					id: '1',
					name: '张云雷',
					departmet:'财务部',
					because: '事假',
					starttime: '2018-12-28',
					endtime: '2018-12-30'
				}]
			}
		},
		methods: {
			open() {
				this.$message({type: 'success',message:'您已同意请假申请'});
			},
			openVn() {
				const h = this.$createElement;
				this.$message({type: 'error',message:'您已驳回请假申请'});
			},
			handleSizeChange(s) {
				this.apply = this.getApplyList(s);
			},
			handleCurrentChange(p) {
				this.apply = this.getApplyList(this.size);
			},
			getApplyList(n) {
				let arr = [];
				let names = ['郭德纲', '于谦', '岳云鹏', '张云雷', '郭麒麟', '孙越', '孟鹤堂', '高晓攀', '谢金'];
				let departmets=['财务部','人事部','运营部','销售部','后勤部'];
				let becauses = ['事假', '病假', '婚假', '丧假', '其他'];
				for(let i = 0; i < n; i++) {
					let index = Math.floor(Math.random() * names.length);
					let indexa = Math.floor(Math.random() * departmets.length);
					let indexb = Math.floor(Math.random() * becauses.length);
					let s = {
						id: 1,
						name: names[index],
						departmet:departmets[indexa],
						because: becauses[indexb],
						starttime: "2019"+"-"+Math.ceil(Math.random() * 12)+"-"+Math.ceil(Math.random() * 30),
						endtime: "2019"+"-"+Math.ceil(Math.random() * 12)+"-"+Math.ceil(Math.random() * 30),
					};
					arr.push(s);
				}
				return arr;
			}
		}
	}
</script>

<style>

</style>