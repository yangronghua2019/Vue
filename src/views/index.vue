<template>
  <div class="box">
    <div class="box1"  @click="toOtherPage('/mine')">
      <span>{{title1}}</span>
    </div>
    <div class="box1"  @click="toOtherPage('/home')">
      <span>{{title2}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "home",
    data(){
      return{
        title1:'简介',
        title2:'首页'
      }
    },
    methods:{
      toOtherPage(param){
        this.$router.push(param)
      }
    }
  }
</script>

<style scoped>
.box{
  width:100%;
  height:100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.box1:hover{
  box-shadow: #89CF0A 0px 1px 1px;
  -moz-box-shadow: #89CF0A 0px 1px 1px;
  -webkit-box-shadow: #89CF0A 0px 1px 1px;
}

.box1{
  width: 30%;
  height:50%;
  cursor: pointer;
  border: 1px solid #ccc;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;

  margin-right: 120px;
  box-shadow: 0px 1px 1px #e5e5e5 ;
  -moz-box-shadow: 0px 1px 1px  #e5e5e5 ;
  -webkit-box-shadow: 0px 1px 1px  #e5e5e5 ;
}
</style>
