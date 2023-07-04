import r from 'robotjs'
import clipboardy  from 'clipboardy'
import { iconDb,PS } from './db.js'
import { 
  delay, 
  moveClick,
  getHisList
} from './fn.js'

const p_fr     = 735               // 关注按钮横坐标
const p_item   = { x:p_fr, y:240 }   // 搜索第一个元素坐标
const p_search = { x:100, y:40  }  // 搜索框坐标



// 添加订阅号任务
export const subscribe = async(pos)=> {
  let list = await getHisList()

  console.log('list',list)

  for(let i=0;i<list.length;i++) {
    await moveClick(p_search)
    clipboardy.writeSync(list[i].columnName);
    r.keyTap('v', ['control']);
    await delay(1000)
    r.keyTap('enter')
    await delay(2000)

    await moveClick(p_item)
    await delay(3000)
    await moveClick(p_item)
    await delay(3000)
    await  moveClick({x:p_fr,y:305},100)
    await  moveClick({x:p_fr,y:325},100)
    await moveClick({x:p_fr,y:345},100)
    await moveClick({x:p_fr,y:365},100)
    await moveClick({x:p_fr,y:385},100)
    await delay(2000)
  }
}




// subscribe()