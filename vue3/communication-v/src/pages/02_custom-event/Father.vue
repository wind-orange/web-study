<template>
  <div class="father">
    <h3>父组件</h3>
		<Child/>
  </div>
</template>

<script setup lang="ts" name="Father">
import Child from './Child.vue';


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