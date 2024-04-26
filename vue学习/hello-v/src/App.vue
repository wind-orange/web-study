<template>
  <!-- <person/> -->
  <!-- <game/> -->
  <!-- <Name/> -->
  <demo01/>
  <demo02/>
  <demo03/>
  <demo04/>
</template>

<script>
  import Person from './components/Person.vue'
  import Game from './components/Game.vue'
  import Name from './components/Name.vue'
  import demo01 from './components/watchdemo/demo01.vue'
  import demo02 from './components/watchdemo/demo02.vue'
  import demo03 from './components/watchdemo/demo03.vue'
  import demo04 from './components/watchdemo/demo04.vue'
  export default{
  components:{Person, Game, Name,
    demo01, demo02, demo03, demo04}//注册组件
}
</script>

<style>

</style>