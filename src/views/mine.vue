<template>
  <div style="display: flex;justify-content: center;">
    <div style="width: 50%;height:100vh;border: 1px solid #cccccc;">
      <div style="background-color: #2aabd2;height: 80px;"></div>
      <div style="text-align: center;width: 100%;border-bottom: 1px solid #cccccc"><h1>个人信息</h1></div>

      <!--个人信息-->
      <div style="border-bottom:1px solid #cccccc;display: flex;border-top: 0px;padding: 10px;">
        <div style="width: 80%;">
          <ul class="list-group">
            <li class="list-group-item list-group-item-info">标题一</li>
            <li class="list-group-item">1、信息一</li>
            <li class="list-group-item">2、信息二</li>
            <li class="list-group-item">3、信息三</li>
            <li class="list-group-item">4、信息四</li>
          </ul>
        </div>
        <div style="width: 20%;height: 100%;display: flex;justify-content: center;align-items: center;padding: 20px;">
          <img src="@/assets/images/icon_user.png" style="width: 80%;height: 80%">
        </div>
      </div>

      <!--工作情况-->





    </div>
  </div>
</template>

<script>
    export default {
      name: "mine",
    }
</script>

<style scoped>
ul li{
  list-style: none;
}
</style>
