<script lang="ts" setup>
import type {PersonInter,People} from '@/types'
let person:PersonInter = { id: 'afipdua01', name: '张三', age: 18 }

// 泛型：Array<PersonInter>表示一个数组，其中的元素都是PersonInter类型的对象
let personList:Array<PersonInter> = [
  { id: 'afipdua01', name: '李四', age: 90 },
  { id: 'afipdua02', name: '王五', age: 51 },
  { id: 'afipdua03', name: '赵六', age: 27 }
]

// 简写
let personList02:People = [
  { id: 'afipdua01', name: '李四', age: 90 },
  { id: 'afipdua02', name: '王五', age: 51 },
  { id: 'afipdua03', name: '赵六', age: 27 }
]
</script>