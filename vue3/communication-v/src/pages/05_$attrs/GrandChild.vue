<template>
	<div class="grand-child">
		<h3>孙组件</h3>
		<h4>a:{{ a }}</h4>
		<h4>b:{{ b }}</h4>
		<h4>x:{{ x }}</h4>
		<h4>y:{{ y }}</h4>
		<button @click="updateA(7)">点击更新a的值</button>

	</div>
</template>

<script setup lang="ts" name="GrandChild">
  // 孙组件接收祖先组件的数据和方法
	defineProps(['a','b','x','y','updateA'])
</script>

<style scoped>
	.grand-child{
		margin-top: 20px;
		background-color: orange;
		padding: 20px;
		border-radius: 10px;
		box-shadow: 0 0 10px black;
	}
</style>