import { marquee } from "./marquee";
import { tab } from "./tab";
import App from './APP.vue' // 根vue文件

marquee()
tab()
//css 与 less 引入
import './styles/index.css'
import './styles/index.less'

//引入图片
import gifUrl from './assets/1.gif'
import pngUrl from './assets/logo_small.png'

const gif =document.createElement('img')
const png =document.createElement('img')
gif.src = gifUrl
png.src = pngUrl
document.body.appendChild(gif)
document.body.appendChild(png)

//引入字体
import "./assets/fonts/iconfont.css"
//箭头函数

 const fn= ()=>console.log(12345);
fn()

//





