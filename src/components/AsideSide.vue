<template>
	<el-menu default-active="0" class="el-menu-vertical-demo" @open="open" @close="close" @select="select" background-color="#42B983" text-color="#fff" active-text-color="#303133">
		<el-submenu :index="i+''" v-for="(item,i) in nav">
			<template slot="title">
				<i :class="item.icon"></i>
				<span v-text="item.label"></span>
			</template>
			<el-menu-item-group>
				<template slot="title"></template>
				<el-menu-item :index="sub.path" v-for="(sub,j) in nav[i].sub" v-text="sub.label"></el-menu-item>
			</el-menu-item-group>
		</el-submenu>
	</el-menu>
</template>

<script>
	import {mapMutations} from "vuex";
	export default {
		data() {
			return {
				nav: []
			}
		},
		methods: {
			open(key, keyPath) {
				console.log(key, keyPath)
			},
			close(key, keyPath) {
				console.log(key, keyPath)
			},
			getTab(path){
				console.log(path);
				for(let i=0;i<this.nav.length;i++){
					for(let j=0;j<this.nav[i].sub.length;j++){
						if(this.nav[i].sub[j].path==path){
							return this.nav[i].sub[j];
						}
					}
				}
				return false;
			},
			...mapMutations(['addTab']),
			select(index, indexPath) {
				console.log(index);
				console.log(indexPath);
//				this.addTab({});
				const tab = this.getTab(index);
				if(tab){
					this.addTab(tab);
					this.$router.push(index);
				}
			}
		},
		created(){
			this.nav=require("../assets/admin.json");
		}
	}
</script>

<style></style>