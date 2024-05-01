<template>
  <div class="child2">
    <h3>子组件2</h3>
		<h4>运动:{{ sport }}</h4>
		<h4 v-show="game">弟弟给的游戏:{{ game }}</h4>
  </div>
</template>

<script setup lang="ts" name="Child2">
	import { ref,onUnmounted } from 'vue'
	import emitter from '@/utils/emitter'
	const sport = ref('篮球')
	const game = ref('')
	
	//1.1 给emitter绑定sent-game事件并接收回调数据
	emitter.on('send-game',(value:any)=>{
		game.value = value
	})

/* 	写法2：
	emitter.on('sent-game',(value:unknown)=>{
		if (typeof value === 'string') {
			game.value = value
		}
	}) */
	
	//在组件卸载时解绑send-game事件，防止内存泄漏
	onUnmounted(()=>emitter.off('send-game'))
</script>

<style scoped>
	.child2{
		margin-top: 50px;
		background-color: orange;
		padding: 10px;
		box-shadow: 0 0 10px black;
		border-radius: 10px;
	}
</style>