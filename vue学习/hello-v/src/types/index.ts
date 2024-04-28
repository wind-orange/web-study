// 定义一个接口，用于限制person对象的具体属性
export interface PersonInter {// export暴露接口
  id:string,
  name:string,
  age:number
}

// 自定义类型
export type People = Array<PersonInter>
// 或者
export type People02 = PersonInter[]

// 路由新闻跳转
export interface NewsInter {
  id:string,
  title:string,
  content:string
}