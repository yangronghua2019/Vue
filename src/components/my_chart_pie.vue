<template>
  <div ref="barGraph" class="chart-box"/>
</template>

<script>
    // 引入基本模板,按需加载
    let echarts = require('echarts/lib/echarts');
    export default {
      name: "Mycharts",
      mounted(){
        this.drawBar();
      },
      methods:{
        drawBar(){
          let divChart = this.$refs.barGraph;
          let barGraph = echarts.init(divChart);
          // 绘制图表
          barGraph.setOption({
            title: {
              text: '2019下半年年订单走势图',
              left: 'left',
              top:20
            },
            tooltip: {
              trigger: 'item',
              formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            color:['#2aabd2','#D5C93F'],
            legend: {
              orient:'vertical',
              left: 'left',
              data: ['预测订单数量', '实际订单数量'],
              bottom:20
            },
            series: [
              {
                type: 'pie',
                radius: '70%',
                center: ['50%', '60%'],
                bottom:60,
                avoidLabelOverlap: false,
                label: {
                  normal: {
                    show: false,
                    position: 'center'
                  },
                  emphasis: {
                    show: true,
                    textStyle: {
                      fontSize: '16',
                      fontWeight: 'bold'
                    }
                  }
                },
                labelLine: {
                  normal: {
                    show: false
                  }
                },
                data: [
                  {
                    value:890000,
                    name:'预测订单数量',
                    itemStyle:{
                      normal:{
                        color:'#2aabd2'
                      }
                    }
                  },
                  {
                    value:680000,
                    name:'实际订单数量',
                    itemStyle:{
                      normal:{
                        color:'#D5C93F'
                      }
                    }
                  }
                ]
              }
            ]
          });
        }
      }
    }
</script>

<style scoped>
  .chart-box{
    width: 90%;height: 100%;
  }
</style>
