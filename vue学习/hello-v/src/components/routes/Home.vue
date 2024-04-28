<template>
  1
</template>
<!-- 需求：首页经过三秒之后自动跳转到新闻界面 -->
<script setup lang="ts">
  import { onMounted } from 'vue'
  import { useRouter } from 'vue-router'

  const router = useRouter()

  onMounted(()=>{
    setTimeout(()=>{
      router.push('/news')
    },3000)
  })
</script>