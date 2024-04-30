import {defineStore} from 'pinia'

export const useTalkStore = defineStore('talk',{
  state(){
    return{
      talkList:[
        { id: 'afhuwfb01', title: '最近有谣言说我喜欢你，我要澄清一下，那不是谣言。' },
        { id: 'afhuwfb02', title: '今年的冬天，我可不可以拥抱你' },
        { id: 'afhuwfb03', title: '有你在的地方，天气明朗，万物可爱。' }
      ]
    }
  }
})