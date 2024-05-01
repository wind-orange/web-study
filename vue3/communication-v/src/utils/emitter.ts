// 引入mitt
import mitt from "mitt"
// 调用mitt得到emitter:绑定事件、触发事件
const emitter = mitt()
// 暴露emitter
export default emitter

// 简便写法
// export default mitt()