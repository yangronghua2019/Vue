<template>
<div class="box-header">
  <div style="width: 20%;"/>
  <!--头部中间-->
  <div class="box-header-div">
    <div class="box-header-title"><span>{{$t("common.headerTitle")}}</span></div>
    <div class="box-header-title-right">
      <span class="span-right">{{$t("common.headerDown")}}</span>
      <span class="span-right">{{$t("common.headerDown")}}</span>
      <span class="span-right">张三</span>
      <span class="logout">{{$t("common.exit")}}</span>
    </div>
  </div>
  <!--头部右边-->
  <div style="width: 20%;height: 100%">
    <span ref="lang" class="box-right-language" @click="changeLanguage">{{$t("common.sLang")}}</span>
  </div>
</div>
</template>

<script>
export default {
  name: 'Header',
  methods:{
    changeLanguage(){
     let lan = this.$i18n.locale === 'zh' ? 'en' : 'zh';
     this.$i18n.locale = lan;
     if(lan == 'en'){
       this.$refs.lang.text("中文");
     }else{
       this.$refs.lang.text("英文");
     }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  span:hover{
    color: #e5e5e5;
  }

  .span-right{
    margin-left: 30px;margin-top: 5px;
  }

  .box-header{
    background-color: #23cf5f;
    display: flex;
    color: white;
    justify-content: center;
    align-items: center;
  }

  .box-header-div{
    width: 60%;
    display: flex;
  }

  .box-header-title{
    width: 60%;
    font-size: 28px;
    display: flex;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .box-header-title-right{
    width: 40%;
    font-size: 14px;
    display: flex;
    justify-content:flex-end;
    align-items: center;
  }

  .logout{
    width: 80px;
    background-color:#23cf5f;
    margin-left: 60px;
    text-align: center;
    border-radius: 20px;
    border:1px solid white;
    padding-bottom: 5px;
    padding-top: 5px;
    cursor: pointer;
  }

  .box-right-language{
    float: right;
    margin-right: 20px;
    margin-bottom: 20px;
    color: white;
    cursor: pointer;
  }

</style>
