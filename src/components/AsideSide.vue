<template>
	<el-menu default-active="0" class="el-menu-vertical-demo" @open="open" @close="close" @select="select" background-color="#42B983" text-color="#fff" active-text-color="#303133">
		<el-submenu :index="i+''" v-for="(item,i) in nav">
			<template slot="title">
				<i :class="item.icon"></i>
				<span v-text="item.title"></span>
			</template>
			<el-menu-item-group>
				<template slot="title"></template>
				<el-menu-item :index="sub.path" v-for="(sub,j) in nav[i].sub" v-text="sub.title"></el-menu-item>
			</el-menu-item-group>
		</el-submenu>
	</el-menu>
</template>

<script>
	export default {
		data() {
			return {
				nav: [{
					title: 'basic',
					icon: 'el-icon-location',
					sub: [{
						title: 'Layout 布局',
						path: 'Layout'
					}, {
						title: 'Container 布局容器',
						path: 'Container'
					}, {
						title: 'Color 色彩',
						path: 'Color'
					}]
				}, {
					title: 'form',
					icon: 'el-icon-menu',
					sub: [{
							title: 'Radio 单选框',
							path: 'Radio'
						},
						{
							title: 'Checkbox 多选框',
							path: 'Checkbox'
						}, {
							title: 'Input 输入框',
							path: 'Input'
						}, {
							title: 'Number 计数器',
							path: 'Number'
						}, {
							title: 'Button 按钮',
							path: 'Button'
						}, {
							title: 'Select 选项',
							path: 'Select'
						}, {
							title: 'Cascader 级联选择',
							path: 'Cascader'
						}, {
							title: 'Score 分数',
							path: 'Score'
						}]
				}, {
					title: 'data',
					icon: 'el-icon-document',
					sub: [{
						title: 'Table 表格',
						path: 'Table'
					}, {
						title: 'Tag 标签',
						path: 'Tag'
					}, {
						title: 'Progress 进度条',
						path: 'Progress'
					}]
				}]
			}
		},
		methods: {
			open(key, keyPath) {
				console.log(key, keyPath)
			},
			close(key, keyPath) {
				console.log(key, keyPath)
			},
			select(index, indexPath) {
				this.$router.push(index);
				console.log(index);
				console.log(indexPath);
			}
		}
	}
</script>

<style>

</style>