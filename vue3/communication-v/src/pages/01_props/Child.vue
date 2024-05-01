<template>
  <div class="child">
    <h3>子组件</h3>
		<h4>游戏:{{ game }}</h4>
		<!-- 接收父组件数据 -->
		<h4>父亲的车:{{ car }}</h4>
		<!-- 调用父组件定义的方法把数据传给父组件 -->
		<button @click="sendGame(game)">把玩具给父亲</button>
  </div>
</template>

<script setup lang="ts" name="Child">
	import { ref } from 'vue';
	// 数据
	const game = ref('宝可梦')
	// 声明接收props
	defineProps(['car','sendGame'])
</script>

<style scoped>
	.child{
		background-color: skyblue;
		padding: 10px;
		box-shadow: 0 0 10px black;
		border-radius: 10px;
	}
</style>
