import { ref,computed } from 'vue'

export default function(){
  // 数据
  let sum = ref(0)
  let bigsum = computed(() => sum.value * 10)
  // 方法
  function changeSum() {
    sum.value += 1
  }
  // 返回值
  return {sum,bigsum,changeSum}
}