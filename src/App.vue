<template>
	<el-container id="app">
		<el-aside>
			<aside-side></aside-side>
		</el-aside>
		<el-container>
			<el-header>
				<header-head></header-head>
				<tabs></tabs>
			</el-header>
			<el-main>
				<router-view></router-view>
			</el-main>
			<el-footer>©CopyRight 2018-2020非凡学院</el-footer>
		</el-container>
	</el-container>
</template>

<script>
	import AsideSide from '@/components/AsideSide.vue'
	import HeaderHead from '@/components/HeaderHead.vue'
	import Tabs from '@/components/Tabs.vue'
	export default {
		name: 'APP',
		data() {
			return {}
		},
		components: {
			AsideSide,
			HeaderHead,
			Tabs
		}
	}
</script>
<style>
	html,
	body,
	#app{
		margin: 0;
		padding: 0;
		width: 100%;
		height: 100%;
	}
	#app .el-header {
		height: 100px!important;
		border-bottom: 1px solid #42B983;
	}
	#app .el-col{
		border-bottom: 0px;
	}
	#app .el-aside {
		width: 220px;
		background-color: #42B983;
		color: #fff;
	}

	#app .el-footer{
		display: flex;
		line-height: 60px;
	}
</style>