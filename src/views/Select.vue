<template>
	<el-card class="box-card">
		<div slot="header" class="clearfix">
			<span>Select 选项</span>
			<el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
		</div>
		<!--<h2>{{$store.state.count}}</h2>-->
		<h2>{{count}}</h2>
		<h2>{{msg}}</h2>
		<h2>{{arr}}</h2>
		<h2>奇数：{{odd}}</h2>
		<h2>偶数：{{even}}</h2>
		<button @click="add(5)">+</button>
		<button @click="reduce(5)">-</button>
		<br />
		<button @click="addAction">addAction</button>
		
	</el-card>
</template>

<script>
	import { mapState, mapGetters,mapMutations,mapActions} from "vuex";

	export default {
		data() {
			return {};
		},
		computed: {
			//			count(){
			//			return this.$store.state.count;
			//			}
			...mapState(['count', 'msg', 'arr']),
			...mapGetters(['odd', 'even'])
		},
		methods: {
			...mapMutations(['add','reduce']),
			...mapActions(['addAction'])
		},
	}
</script>

<style>

</style>