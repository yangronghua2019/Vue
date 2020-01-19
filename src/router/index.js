import Vue from 'vue'
import Router from 'vue-router'
import IndexRouter from './pageRouter'

Vue.use(Router);

const router = new Router({
  mode:'history',
  routes:IndexRouter.pageRoute
});

router.beforeEach((to,from,next)=>{
  console.log(to.fullPath+"<<to=====================from>>"+from.fullPath);
  next();

});

export default router
