<template>
  <div class="child">
    <h3>子组件</h3>
		<h4>游戏:{{ game }}</h4>
		<!-- 1.4 创建点击事件，当点击事件发生时调用自定义事件传递数据给父组件 -->
		<button @click="emit('sendGame',game)">把游戏给父亲</button>
  </div>
</template>

<script setup lang="ts" name="Child">

	import { ref } from 'vue'
	const game = ref('宝可梦')
  //1.3 声明父组件中的自定义事件
	const emit = defineEmits(['sendGame'])
</script>

<style scoped>
	.child{
		margin-top: 10px;
		background-color: rgb(76, 209, 76);
		padding: 10px;
		box-shadow: 0 0 10px black;
		border-radius: 10px;
	}
</style>