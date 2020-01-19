<template>
  <div style="background-color: #fafafd;">
    <v-header/>
    <!--内容 body-->
    <div class="container box-container">
      <!--第一部分-->
      <div class="div-box">
        <div class="card-div-title">
          <span>{{$t("common.title1")}}</span>
        </div>
        <div class="card1-content">
          <div class="card1">
            <div class="card1-div-item">
              <div class="card1-content-item"><span>总下单次数</span></div>
              <div class="card1-content-item-title">
                <span style="font-size: 20px;">3600</span>
                <span class="div-car4-box-center-unit">次</span>
              </div>
              <div class="content-date"><span>截止时间：2019/12/01 12:00:00</span></div>
            </div>
            <img src="@/assets/images/icon_user.png" class="content-img"/>
          </div>
          <div class="card2">
            <div style="width: 80%;display: block">
              <div class="card1-content-item"><span>下单通过件数</span></div>
              <div class="card1-content-item-title">
                <span style="font-size: 20px;">6000</span>
                <span class="div-car4-box-center-unit">次</span>
              </div>
              <div class="content-date"><span>截止时间：2019/12/01 12:00:00</span></div>
            </div>
            <img src="@/assets/images/icon_user.png" class="content-img"/>
          </div>
          <div class="card3">
            <div style="width: 80%;display: block">
              <div class="card1-content-item"><span>有效控制率</span></div>
              <div class="card1-content-item-title">
                <span style="font-size: 20px;">80</span>
                <span class="div-car4-box-center-unit">%</span>
              </div>
              <div class="content-date"><span>截止时间：2019/12/01 12:00:00</span></div>
            </div>
            <img src="@/assets/images/icon_user.png" class="content-img"/>
          </div>
        </div>

        <!--第二部分-->
        <div class="div-box">
          <div class="card-div-title">
            <span>{{$t("common.title2")}}</span>
          </div>
          <div class="chart-div-box">
            <div class="chart-div">
              <my-chart-bar/>
            </div>

            <div class="chart-div">
              <my-chart-line/>
            </div>
          </div>
        </div>

        <!--第三部分-->
        <div class="div-box">
          <div class="card-div-title">
            <span>{{$t("common.title3")}}</span>
          </div>
          <div class="chart-div-box" style="height: 300px;">
            <div class="chart-3-div-left">
              <span style="font-size: 18px;"><b>个人资金预估情况</b></span>
              <div style="display: flex;height: 85%">
                <div class="chart-3-div-left-percent">
                  <div style="text-align: center">
                    <div style="font-size: 12px;color: #999999"><span>误差率</span></div>
                    <div style="font-size: 28px;margin-top: 10px;"><span>22.25%</span></div>
                  </div>
                </div>
                <div class="chart-3-div-left-empty"/>
                <div style="width: 68%;margin-left: 20px;">
                  <my-chart-bar-s/>
                </div>
              </div>
            </div>
            <div class="chart-3-div-right">
              <my-chart-pie/>
            </div>
          </div>
        </div>

        <!--第四部分-->
        <div class="div-box">
          <div class="card-div-title">
            <span>{{$t("common.title4")}}</span>
          </div>
          <div class="div-car4-box">
            <div style="display: flex;justify-content: space-between;">
              <div style="width: 15%;">
                <div><span style="font-size: 16px;">最多单个用户下单个数</span></div>
                <div style="margin-top: 15px;">
                  <span class="div-car4-box-center-title">888</span>
                  <span class="div-car4-box-center-unit">次</span>
                </div>
                <div class="div-car4-box-name"><span>用户：张三</span></div>
              </div>

              <div class="div-car4-box-center">
                <div style="width: 20%">
                  <div><span style="font-size: 16px;">最多单个用户下单金额</span></div>
                  <div style="margin-top: 15px;">
                    <span class="div-car4-box-center-title">8880000</span>
                    <span class="div-car4-box-center-unit">元</span>
                  </div>
                  <div class="div-car4-box-name"><span>时间：2020-1-8 12:00</span></div>
                </div>
              </div>

              <div style="width: 15%;">
                <div><span style="font-size: 16px;">最多单日下单个数</span></div>
                <div style="margin-top: 15px;">
                  <span class="div-car4-box-center-title">888</span>
                  <span class="div-car4-box-center-unit">件</span>
                </div>
                <div class="div-car4-box-name"><span>时间：2020-1-8 12:00</span></div>
              </div>
            </div>

            <div class="line-gray"></div>

            <div style="display: flex;justify-content: space-between;margin-top: 20px">
              <div style="width: 15%;">
                <div><span style="font-size: 16px;">最多单个用户下单个数</span></div>
                <div style="margin-top: 15px;">
                  <span class="div-car4-box-center-title">888</span>
                  <span class="div-car4-box-center-unit">次</span>
                </div>
                <div class="div-car4-box-name"><span>用户：张三</span></div>
              </div>

              <div class="div-car4-box-center">
                <div style="width: 20%">
                  <div><span style="font-size: 16px;">最多单个用户下单金额</span></div>
                  <div style="margin-top: 15px;">
                    <span class="div-car4-box-center-title">8880000</span>
                    <span class="div-car4-box-center-unit">元</span>
                  </div>
                  <div class="div-car4-box-name"><span>时间：2020-1-8 12:00</span></div>
                </div>
              </div>

              <div style="width: 15%;">
                <div><span style="font-size: 16px;">最多单日下单个数</span></div>
                <div style="margin-top: 15px;">
                  <span class="div-car4-box-center-title">888</span>
                  <span class="div-car4-box-center-unit">件</span>
                </div>
                <div class="div-car4-box-name"><span>时间：2020-1-8 12:00</span></div>
              </div>
            </div>

          </div>
        </div>

        <!--第五部分-->
        <div class="div-box div-box-space">
          <div class="card-div-title">
            <span>{{$t("common.title5")}}</span>
          </div>
          <div class="card5-content">
            <div class="card5-content-title">
              <div style="float:left;font-size: 18px;"><span><b>数量统计</b></span></div>

              <div class="card5-div">
                <div style="float:left;display: block">
                  <div class="line-title">
                    <div class="line"/>
                    <span>图书数量</span>
                  </div>
                  <div>
                    <span class="text-large">100</span>
                    <span style="font-size: 12px">本</span>
                  </div>
                </div>
                <div style="margin-left: 60px;">
                  <div class="line-title">
                    <div class="line"/>
                    <span>单价</span>
                  </div>
                  <div>
                    <span class="text-large">28</span>
                    <span style="font-size: 12px">元</span>
                  </div>
                </div>
              </div>
              <div class="card5-div">
                <div style="float:left;display: block">
                  <div class="line-title">
                    <div class="line"/>
                    <span>仓库数量</span>
                  </div>
                  <div>
                    <span class="text-large">1000</span>
                    <span style="font-size: 12px">本</span>
                  </div>
                </div>
                <div style="margin-left: 60px;">
                  <div class="line-title">
                    <div class="line"/>
                    <span>总价</span>
                  </div>
                  <div>
                    <span class="text-large">10000</span>
                    <span style="font-size: 12px">万元</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="card5-content-title" style="width: 68%;">
              <div class="card5-content-title-table-header"><span><b>图书列表</b></span></div>
              <table class="table table-striped table-bordered table-hover">
                <thead style="background-color: #8D9799">
                <tr>
                  <td>序号</td>
                  <td>书名</td>
                  <td>作者</td>
                  <td>价格</td>
                </tr>
                </thead>
                <tbody>
                <tr v-for="book in books" :key="book.id">
                  <td>{{ book.id }}</td>
                  <td>{{ book.name }}</td>
                  <td>{{ book.author }}</td>
                  <td>{{ book.price }}</td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <v-footer/>
  </div>
</template>

<script>
  import Head from'components/header'
  import Foot from 'components/footer'
  import MYChartLine from 'components/my_chart_line'
  import MyChartBar from 'components/my_chart_bar'
  import MyChartBarS from 'components/my_chart_bar_s'
  import MyChartPie from 'components/my_chart_pie'

  export default {
    name: 'index',
    components:{
      MyChartBarS,
      'my-chart-line':MYChartLine,
      'my-chart-bar':MyChartBar,
      'my-chart-bar-s':MyChartBarS,
      'my-chart-pie':MyChartPie,
      'v-header':Head,
      'v-footer':Foot
    },
    data(){
      return{
        books:[
          {
            id:1,
            name:'西游记',
            author:'吴承恩',
            price:28
          },
          {
            id:2,
            name:'西游记',
            author:'吴承恩',
            price:28
          },
          {
            id:3,
            name:'西游记',
            author:'吴承恩',
            price:28
          },
          {
            id:4,
            name:'西游记',
            author:'吴承恩',
            price:28
          },
          {
            id:5,
            name:'西游记',
            author:'吴承恩',
            price:28
          }
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .div-box{
    margin-top: 60px;
  }

  .div-box-space{
    margin-bottom: 80px;
  }

  .card-div-title{
    display: flex;
    justify-content: flex-start;
    font-size: 24px;
  }

  .card1-div-item{
    width: 80%;
    display: block
  }

  .box-container{
    width: 60%;
    padding: 0px
  }

  .card1{
    width: 30%;
    height: 200px;
    border-radius: 9px;
    background-image: linear-gradient(to right,#89CF0A,#23cf5f);
    padding: 20px;
    display: flex;
    color: white;
  }

  .card1:hover{
    box-shadow: 0px 0px 10px #89CF0A;
    -webkit-box-shadow: 0px 0px 10px #89CF0A;
    -moz-box-shadow: 0px 0px 10px #89CF0A;
  }

  .card1-content{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    font-size: 14px;
  }

  .card1-content-item{
    font-size: 22px;
    text-align: left;
    margin-top: 20px;
  }

  .card1-content-item-title{
    margin-top: 30px;
  }

  .content-date{
    float:left;
    margin-top: 20px;
  }

  .content-img{
    width: 60px;
    height:60px;
    margin-top: 10px;
  }

  .card2{
    width: 30%;
    height: 200px;
    border-radius: 9px;
    background-image: linear-gradient(to right,#4D9ED2,#2aabd2);
    padding: 20px;
    display: flex;
    color: white;
  }

  .card2:hover{
    box-shadow: 0px 0px 10px #2aabd2;
    -webkit-box-shadow: 0px 0px 10px #2aabd2;
    -moz-box-shadow: 0px 0px 10px #2aabd2;
  }

  .card3{
    width: 30%;
    height: 200px;
    border-radius: 9px;
    background-image: linear-gradient(to right,#D5C93F,#D5840B);
    padding: 20px;
    display: flex;
    color: white;
  }

  .card3:hover{
    box-shadow: 0px 0px 10px #d58512;
    -webkit-box-shadow: 0px 0px 10px #d58512;
    -moz-box-shadow: 0px 0px 10px #d58512;
  }

  .card5-content{
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
  }

  .card5-content-title{
    background-color: white;
    width: 30%;
    padding: 20px;
    display: block;
    border: 1px solid #e5e5e5;
    border-radius: 4px;
  }

  .card5-content-title-table-header{
    float:left;
    font-size: 18px;
    margin-bottom: 20px;
  }

  .card5-div{
    width: 100%;
    display: flex;
    margin-top: 20px;
    justify-content: left;
  }

  .line{
    background-color: #4577FF;
    height: 15px;
    width: 4px;
    margin-top: 3px;
    margin-right: 5px;
  }

  .line-title{
    float: left;
    display: flex;
    font-size: 16px;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .text-large{
    font-size: 22px;
    color: #4577FF
  }

  .chart-div-box{
    margin-top: 10px;
    height: 400px;
    display: flex;
    justify-content: space-between
  }

  .chart-div{
    width: 49%;
    height:90%;
    border: 1px solid #e5e5e5;
    background-color: white;
    border-radius: 4px;
    display: flex;
    justify-content: center
  }

  .chart-3-div-left{
    width: 70%;
    height:100%;
    border: 1px solid #e5e5e5;
    background-color: white;
    border-radius: 4px;
    padding: 20px;
  }

  .chart-3-div-right{
    width: 25%;
    height:100%;
    border: 1px solid #e5e5e5;
    background-color: white;
    border-radius: 4px;
    display: flex;
    justify-content: center
  }

  .line-gray{
    width: 100%;
    background-color: #e5e5e5;
    height: 1px;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .div-car4-box{
    margin-top: 10px;
    background-color: white;
    border: 1px solid #e5e5e5;
    border-radius: 4px;
    padding: 30px;
  }

  .div-car4-box-name{
    margin-top: 10px;
    font-size: 12px;
  }

  .div-car4-box-center{
    width: 70%;
    float: right;
    display: flex;
    justify-content: center
  }

  .div-car4-box-center-title{
    color: #4577FF;
    font-size: 20px;
  }

  .div-car4-box-center-unit{
    margin-left: 5px;
  }

  .chart-3-div-left-percent{
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center
  }

  .chart-3-div-left-empty{
    background-color: #cccccc;
    width: 1px;
    height: 100%
  }
</style>
