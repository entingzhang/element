<template>
	<el-tabs v-model="activePath" @tab-click="handleClick" @tab-remove="handleRemove">
		<el-tab-pane :name="item.path" :key="item.path" v-for="(item,index) in tabs" :closable="index!=0" >
			<span slot="label">
				<i :class="item.icon"></i>&nbsp;<span v-text="item.label"></span>
			</span>
		</el-tab-pane>
	</el-tabs>
</template>

<script>
	import {mapState,mapMutations} from "vuex";
	export default {
		data() {
			return {}
		},
		computed:{
			...mapState(['tabs']),
			//v-model是双向数据绑定，我们读的时候是通过get，但是我们不能去改变，所以通过set去改变path，
			//但是path是在store中，所以我们在methods中展开“...mapMutations(['switchTab']),”然后修改。
			activePath:{
				//这一步是将path传回给store；
				set(path){
					this.switchTab(path);
				},
				//这一步是从store获取path；
				get(path){
					return this.$store.state.activePath;
				}
			}
		},
		methods: {
			...mapMutations(['switchTab','removeTab']),
			handleClick(tab) {
//				console.log(tab);
				this.$router.push(this.activePath);
			},
			handleRemove(path) {
				this.removeTab(path);
				this.$router.push(this.activePath);
			}
		}
	}
	
</script>

<style>

</style>