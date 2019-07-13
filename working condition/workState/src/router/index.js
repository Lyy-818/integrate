import Vue from 'vue'
import Router from 'vue-router'
import Home from "./home"
import Overtime from "./overtime"
import Holiday from "./holiday"
import Login from "./login"
import Detail from "./detail"
import Takework from "./takework"

Vue.use(Router)


let router = new Router({
  routes: [
    {
      path: '/',
      redirect:"/home"
    },{//首页
      path:"/home",
      component:Home,
      meta:{requireAuth:true}
    },{//登陆
        path:"/login",
        component:Login
    },{//详情
        path:"/detail",
        component:Detail
    },{//调休
        path:"/takework",
        component:Takework
    },{//加班
       path:"/overtime",
       component:Overtime

    }
  ]
})
router.beforeEach((to,from,next)=>{
if(to.meta.requireAuth){
  if(localStorage.getItem("token")){
    next();
  }else{
    console.log(to.path)
    if(to.path === "/login"){
      next();
    }else{
      next({path:"/login"});
    }
  }
}else{
  next();
}
// if(to.fullPath == "/login"){
//   if(localStorage.getItem("token")){
//     next({
//       path:from.fullPath
//     });
//   }else{
//     next();
//   }
// }
})
export default router;


