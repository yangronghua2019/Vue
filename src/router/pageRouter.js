import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const Index = (resolve) => {
  return require.ensure([], () => {
    resolve(require('@/views/index'))
  })
};

const Home = (resolve) =>{
  return require.ensure([],() => {
    resolve(require('@/views/home'))
  })
};

const Mine = (resolve) =>{
  return require.ensure([],() => {
    resolve(require('@/views/mine'))
  })
};

const pageRoute = [
  {
    path:'/',
    name:'index',
    component:Index
  },
  {
    path: "*",
    redirect: "/"
  },
  {
    path:'/home',
    name:'home',
    component:Home
  },
  {
    path:'/mine',
    name:'mine',
    component:Mine
  }
];

export default { pageRoute }
