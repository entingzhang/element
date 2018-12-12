<template>
	<div id="app">
		<header></header>
		<aside>
		<aside-side></aside-side>
		</aside>
		<main>
			<router-view/>
		</main>
	</div>
</template>

<script>
	//import HelloWorld from '@/components/HelloWorld.vue'
	import AsideSide from "@/components/AsideSide.vue"
	export default {
  name: 'APP',
  components: {
  	AsideSide
  }
}
</script>
<style scoped="scoped">
	html,
	body,
	#app {
		width: 100%;
		height: 100%;
		margin: 0;
	}
	
	header {
		width: 100%;
		height: 50px;
		position: fixed;
		top: 0px;
		left: 0px;
		border-bottom: 1px solid #42B983;
	}
	
	aside {
		width: 220px;
		height: 100%;
		position: fixed;
		top: 0px;
		left: 0px;
		background-color: #42B983;
		color: #fff;
	}
	
	main {
		position: fixed;
		top: 50px;
		right: 0px;
		bottom: 0px;
		left: 220px;
	}
</style>