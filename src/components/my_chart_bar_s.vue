<template>
  <div ref="barGraph"  class="chart-box"/>
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
            color:['#2aabd2','#D5C93F'],
            tooltip: {
              trigger: 'axis',
              axisPointer:{
                type:'shadow'
              }
            },
            legend: {
              left: 'center',
              data: ['预测订单数量', '实际订单数量'],
            },
            xAxis: {
              type: 'category',
              axisTick: {
                alignWithLabel: true
              },
            },
            grid: {
              left: '3%',
              right: '3%',
              bottom: '10',
              containLabel: true
            },
            yAxis: {
              type: 'value',
              splitLine:{
                show:true,
                lineStyle:{
                  type:'dashed'
                }
              },
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
                type: 'bar',
                barWidth: '60%',
                data: [9800],
              },
              {
                name: '实际订单数量',
                type: 'bar',
                barWidth: '60%',
                data: [88888],
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
