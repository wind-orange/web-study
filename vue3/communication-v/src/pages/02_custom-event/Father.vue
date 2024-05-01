<template>
  <div class="father">
    <h3>父组件</h3>
		<!-- 1.5 展示数据 -->
		<h4 v-show="game">子的游戏:{{ game }}</h4>
		<!-- 1.2自定义事件，给子组件绑定getGame方法 -->
		<Child @sendGame="getGame"/>
  </div>
</template>

<script setup lang="ts" name="Father">
import Child from './Child.vue';
import { ref } from 'vue';

//1.1 定义一个方法用来接收子组件传递的数据
const game = ref('')
function getGame(value: string) {
	game.value = value
}
</script>

<style scoped>
	.father{
		background-color:rgb(165, 164, 164);
		padding: 20px;
    border-radius: 10px;
	}
	.father button{
		margin-right: 5px;
	}
</style>