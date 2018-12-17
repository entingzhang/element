<template>
	<el-tabs v-model="activeName" @tab-click="handleClick" @tab-remove="handleRemove">
		<el-tab-pane :name="item.path" :key="index" v-for="(item, index) in Tabs" :closable="index!=0" >
			<span slot="label"><i :class="item.icon"></i>&nbsp;<span v-text="item.label"></span></span>
		</el-tab-pane>
	</el-tabs>
</template>

<script>
	export default {
		data() {
			return {
				Tabs: [{
					label: '布局',
					path: '/layout',
					icon:'fa fa-home'
				},{
					label: '容器',
					path: '/container',
					icon:'fa fa-home'
				},{
					label: '色彩',
					path: '/color',
					icon:'fa fa-home'
				},{
					label: '图标',
					path: '/icon',
					icon:'fa fa-home'
				}],
				activeName: '/layout'
			}
		},
		methods: {
			
		}
	}
	
</script>

<style>

</style>