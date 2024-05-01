<template>
	<div class="father">
		<h3>父组件</h3>
		<h4 v-show="game">子给的游戏:{{ game }}</h4>
		<!-- 1.1传递数据给子组件 -->
		<Child :car="car" :sendGame="getGame" />
	</div>
</template>

<script setup lang="ts" name="Father">
import Child from './Child.vue';
import { ref } from 'vue';
// 数据
const car = ref('劳斯莱斯')
const game = ref('')
// 2.1提前定义好方法
function getGame(value:string){
	game.value = value
}
</script>

<style scoped>
	.father{
		background-color:rgb(165, 164, 164);
		padding: 20px;
		border-radius: 10px;
	}
</style>