import { ref,onMounted } from 'vue'
import axios from 'axios'

export default function(){
  // 数据
  let dogList = ref([
    'https://images.dog.ceo/breeds/pembroke/n02113023_591.jpg'
  ])
  // 方法
  async function getDog(){
    try {
      let result = await axios.get('https://dog.ceo/api/breed/pembroke/images/random')
      dogList.value.push(result.data.message)
    } catch (error) {
      alert(error)
    }
  }
  // 可以写钩子
  onMounted(() => getDog())
  // 返回值
  return{dogList,getDog}
}