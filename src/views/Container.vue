<template>
	<el-card class="box-card">
		<div slot="header" class="clearfix">
			<span>Container-容器</span>
			<el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
		</div>
		<el-container>
			<el-header>Header</el-header>
			<el-main>Main</el-main>
		</el-container>

		<el-container>
			<el-header>Header</el-header>
			<el-main>Main</el-main>
			<el-footer>Footer</el-footer>
		</el-container>

		<el-container>
			<el-aside width="200px">Aside</el-aside>
			<el-main>Main</el-main>
		</el-container>

		<el-container>
			<el-header>Header</el-header>
			<el-container>
				<el-aside width="200px">Aside</el-aside>
				<el-main>Main</el-main>
			</el-container>
		</el-container>

		<el-container>
			<el-header>Header</el-header>
			<el-container>
				<el-aside width="200px">Aside</el-aside>
				<el-container>
					<el-main>Main</el-main>
					<el-footer>Footer</el-footer>
				</el-container>
			</el-container>
		</el-container>

		<el-container>
			<el-aside width="200px">Aside</el-aside>
			<el-container>
				<el-header>Header</el-header>
				<el-main>Main</el-main>
			</el-container>
		</el-container>

		<el-container>
			<el-aside width="200px">Aside</el-aside>
			<el-container>
				<el-header>Header</el-header>
				<el-main>Main</el-main>
				<el-footer>Footer</el-footer>
			</el-container>
		</el-container>
	</el-card>
</template>

<script>
	export default {
		data() {
			return {};
		},
		methods: {}
	}
</script>

<style>
	.box-card .el-header,
	.box-card .el-footer {
		background-color: #B3C0D1;
		color: #333;
		text-align: center;
		line-height: 60px;
	}
	
	.box-card .el-aside {
		background-color: #D3DCE6;
		color: #333;
		text-align: center;
		line-height: 200px;
	}
	
	.box-card .el-main {
		background-color: #E9EEF3;
		color: #333;
		text-align: center;
		line-height: 160px;
	}
	
	body>.el-container {
		margin-bottom: 40px;
	}
	
	.box-card .el-container:nth-child(5) .el-aside,
	.box-card .el-container:nth-child(6) .el-aside {
		line-height: 260px;
	}
	
	.box-card .el-container:nth-child(7) .el-aside {
		line-height: 320px;
	}
</style>