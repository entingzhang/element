<template>
	<el-container id="app">
		<el-aside>
			<aside-side></aside-side>
		</el-aside>
		<el-container>
			<el-header>
				<header-head></header-head>
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
	export default {
		name: 'APP',
		data() {
			return {}
		},
		components: {
			AsideSide,
			HeaderHead
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
		border-bottom: 1px solid #42B983;
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