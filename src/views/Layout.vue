<template>
	<div>
		<h2>Layout布局</h2>
		<div class="text bg-purple">
			<p>通过 row 和 col 组件，并通过 col 组件的 span 属性我们就可以自由地组合布局。</p>
		</div>
		<el-row>
			<el-col :span="24">
				<div class="grid-content bg-purple-dark"></div>
			</el-col>
		</el-row>
		<el-row>
			<el-col :span="12">
				<div class="grid-content bg-purple"></div>
			</el-col>
			<el-col :span="12">
				<div class="grid-content bg-purple-light"></div>
			</el-col>
		</el-row>
		<el-row>
			<el-col :span="8">
				<div class="grid-content bg-purple"></div>
			</el-col>
			<el-col :span="8">
				<div class="grid-content bg-purple-light"></div>
			</el-col>
			<el-col :span="8">
				<div class="grid-content bg-purple"></div>
			</el-col>
		</el-row>
		<el-row>
			<el-col :span="6">
				<div class="grid-content bg-purple"></div>
			</el-col>
			<el-col :span="6">
				<div class="grid-content bg-purple-light"></div>
			</el-col>
			<el-col :span="6">
				<div class="grid-content bg-purple"></div>
			</el-col>
			<el-col :span="6">
				<div class="grid-content bg-purple-light"></div>
			</el-col>
		</el-row>
		<el-row>
			<el-col :span="4">
				<div class="grid-content bg-purple"></div>
			</el-col>
			<el-col :span="4">
				<div class="grid-content bg-purple-light"></div>
			</el-col>
			<el-col :span="4">
				<div class="grid-content bg-purple"></div>
			</el-col>
			<el-col :span="4">
				<div class="grid-content bg-purple-light"></div>
			</el-col>
			<el-col :span="4">
				<div class="grid-content bg-purple"></div>
			</el-col>
			<el-col :span="4">
				<div class="grid-content bg-purple-light"></div>
			</el-col>
		</el-row>
		<div class="text bg-purple-light">
			<p>Row 组件 提供 gutter 属性来指定每一栏之间的间隔，默认间隔为 0,这个数值和span的总和没有关系。</p>
		</div>
		<el-row :gutter="10">
			<el-col :span="6">
				<div class="grid-content bg-purple"></div>
			</el-col>
			<el-col :span="6">
				<div class="grid-content bg-purple"></div>
			</el-col>
			<el-col :span="6">
				<div class="grid-content bg-purple"></div>
			</el-col>
			<el-col :span="6">
				<div class="grid-content bg-purple"></div>
			</el-col>
		</el-row>
		<div class="text bg-purple-light">
			<p>通过制定 col 组件的 offset 属性可以指定分栏偏移的栏数,offset偏移的数值和本身span后的总数是24。</p>
		</div>
		<el-row :gutter="20">
			<el-col :span="6">
				<div class="grid-content bg-purple"></div>
			</el-col>
			<el-col :span="6" :offset="6">
				<div class="grid-content bg-purple"></div>
			</el-col>
		</el-row>
		<el-row :gutter="20">
			<el-col :span="6" :offset="6">
				<div class="grid-content bg-purple"></div>
			</el-col>
			<el-col :span="6" :offset="6">
				<div class="grid-content bg-purple"></div>
			</el-col>
		</el-row>
		<el-row :gutter="20">
			<el-col :span="12" :offset="6">
				<div class="grid-content bg-purple"></div>
			</el-col>
		</el-row>
		<div class="text bg-purple-light">
			<p>将 type 属性赋值为 'flex'，可以启用 flex 布局，并可通过 justify 属性来指定 start（开始处）, center（居中）, end（结尾处）, space-between（两端对齐）, space-around（两端空出） 其中的值来定义子元素的排版方式。</p>
		</div>
		<el-row type="flex" class="row-bg">
			<el-col :span="6">
				<div class="grid-content bg-purple"></div>
			</el-col>
			<el-col :span="6">
				<div class="grid-content bg-purple-light"></div>
			</el-col>
			<el-col :span="6">
				<div class="grid-content bg-purple"></div>
			</el-col>
		</el-row>
		<el-row type="flex" class="row-bg" justify="center">
			<el-col :span="6">
				<div class="grid-content bg-purple"></div>
			</el-col>
			<el-col :span="6">
				<div class="grid-content bg-purple-light"></div>
			</el-col>
			<el-col :span="6">
				<div class="grid-content bg-purple"></div>
			</el-col>
		</el-row>
		<el-row type="flex" class="row-bg" justify="end">
			<el-col :span="6">
				<div class="grid-content bg-purple"></div>
			</el-col>
			<el-col :span="6">
				<div class="grid-content bg-purple-light"></div>
			</el-col>
			<el-col :span="6">
				<div class="grid-content bg-purple"></div>
			</el-col>
		</el-row>
		<el-row type="flex" class="row-bg" justify="space-between">
			<el-col :span="6">
				<div class="grid-content bg-purple"></div>
			</el-col>
			<el-col :span="6">
				<div class="grid-content bg-purple-light"></div>
			</el-col>
			<el-col :span="6">
				<div class="grid-content bg-purple"></div>
			</el-col>
		</el-row>
		<el-row type="flex" class="row-bg" justify="space-around">
			<el-col :span="6">
				<div class="grid-content bg-purple"></div>
			</el-col>
			<el-col :span="6">
				<div class="grid-content bg-purple-light"></div>
			</el-col>
			<el-col :span="6">
				<div class="grid-content bg-purple"></div>
			</el-col>
		</el-row>
		<ul>
			<h4>五个响应尺寸：xs、sm、md、lg 和 xl</h4>
			<li>hidden-xs-only - 当视口在 xs 尺寸时隐藏</li>
			<li>hidden-sm-only - 当视口在 sm 尺寸时隐藏</li>
			<li>hidden-sm-and-down - 当视口在 sm及以下 尺寸时隐藏</li>
			<li>hidden-sm-and-up - 当视口在 sm及以上 尺寸时隐藏</li>
			<li>hidden-md-only - 当视口在 md 尺寸时隐藏</li>
			<li>hidden-md-and-down - 当视口在 md及以下 尺寸时隐藏</li>
			<li>hidden-md-and-up - 当视口在 md及以上 尺寸时隐藏</li>
			<li>hidden-lg-only - 当视口在 lg 尺寸时隐藏</li>
			<li>hidden-lg-and-down - 当视口在 lg及以下 尺寸时隐藏</li>
			<li>hidden-lg-and-up - 当视口在 lg及以上 尺寸时隐藏</li>
			<li>hidden-xl-only - 当视口在 xl 尺寸时隐藏</li>
			<li>hidden-xl-and-down - 当视口在 xl及以下 尺寸时隐藏</li>
			<li>hidden-xl-and-up - 当视口在 xl及以上 尺寸时隐藏</li>
		</ul>
	</div>
</template>

<script>
	import 'element-ui/lib/theme-chalk/display.css';
	export default{
		
	}
</script>

<style>
	.text {
		height: 60px;
		border-radius: 4px;
		margin: 20px 0px;
		line-height: 30px;
		margin-left: 5px;
		color: #42B983;
	}
	
	.el-row {
		margin-bottom: 20px;
		&:last-child {
			margin-bottom: 0;
		}
	}
	
	.el-col {
		border-radius: 4px;
	}
	
	.bg-purple-dark {
		background: #99a9bf;
	}
	
	.bg-purple {
		background: #d3dce6;
	}
	
	.bg-purple-light {
		background: #e5e9f2;
	}
	
	.grid-content {
		border-radius: 4px;
		min-height: 36px;
	}
	
	.row-bg {
		padding: 10px 0;
		background-color: #f9fafc;
	}
</style>