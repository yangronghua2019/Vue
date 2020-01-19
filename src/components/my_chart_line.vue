<template>
  <div ref="barGraph" class="chart-box"/>
</template>

<script>
    // 引入基本模板,按需加载
    let echarts = require('echarts/lib/echarts');
    // //引入柱状图
    // require('echarts/lib/chart/bar');
    // // 引入柱状图
    // require('echarts/lib/chart/pie');
    // require('echarts/lib/component/tooltip');
    // require('echarts/lib/component/title');
    export default {
      name: "Mycharts",
      mounted(){
        this.drawBar();
      },
      methods:{
        drawBar(){
          // 基于dom，初始化echarts实例
          // docment.getElementById()
          let divChart = this.$refs.barGraph;
          let barGraph = echarts.init(divChart);
          // 绘制图表
          barGraph.setOption({
            title: {
              text: '2019下半年订单走势图',
              left: 'center',
            },
            tooltip: {
              trigger: 'item',
              formatter: '{a} <br/>{b} : {c}'
            },
            legend: {
              left: 'center',
              data: ['预测订单数量', '实际订单数量'],
              bottom:10,
            },
            xAxis: {
              type: 'category',
              name: 'x',
              splitLine: {show: false},
              data: ['7', '8', '9', '10', '11', '12']
            },
            grid: {
              left: '0',
              right: '0',
              bottom: '30',
              containLabel: true
            },
            yAxis: {
              type: 'value',
              name: '月高峰统计',
              splitLine: {
                show: true,
                lineStyle:{
                  type:'dashed'
                }},
              axisLine:{
                show:true,
                lineStyle:{
                  color:'#999999',
                  width:1,
                  type:'solid'
                }
              }
            },
            series: [
              {
                name: '预测订单数量',
                type: 'line',
                data: [374, 423, 469, 563, 342, 456],
                itemStyle:{
                  normal:{
                    color:'#2aabd2'
                  }
                }
              },
              {
                name: '实际订单数量',
                type: 'line',
                data: [464, 528, 386, 425, 263, 465],
                itemStyle:{
                  normal:{
                    color:'#D5C93F'
                  }
                }
              },
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
