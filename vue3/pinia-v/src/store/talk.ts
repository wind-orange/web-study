// import {defineStore} from 'pinia'

// export const useTalkStore = defineStore('talk',{
//   state(){
//     return{
//       talkList:[
//         { id: 'afhuwfb01', title: '最近有谣言说我喜欢你，我要澄清一下，那不是谣言。' },
//         { id: 'afhuwfb02', title: '今年的冬天，我可不可以拥抱你' },
//         { id: 'afhuwfb03', title: '有你在的地方，天气明朗，万物可爱。' }
//       ]
//     }
//   }
// })

//组合式写法
import {defineStore} from 'pinia'
import {reactive} from 'vue'
import axios from 'axios'
import { nanoid } from 'nanoid'
export const useTalkStore = defineStore('talk',()=>{
  // talkList=state
  const talkList = reactive(
    JSON.parse(localStorage.getItem('talkList') as string) || []
  )

  //getTalk=actions
  async function getTalk() {
    // 发请求
    let { data: { content } } = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
    // 把请求回来的字符串包装成一个对象
    let obj = { id: nanoid(), title: content }
    // 放到数组中
    talkList.unshift(obj)
  }

  //getters=computed(此处暂时没需求)

  return {talkList,getTalk}
})