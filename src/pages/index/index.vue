<route type="home" lang="json5">
  {
    "style":{ "navigationBarTitleText": "首页" }
  }
</route>

<script setup lang="ts">
import UCharts from '@/components/qiun-data-charts/qiun-data-charts.vue'
import PrivacyPopup from '@/components/privacy-popup/index.vue'

function test() {
  wx.requirePrivacyAuthorize({})
}

const opts = {
  color: ['#1890FF', '#91CB74', '#FAC858', '#EE6666', '#73C0DE', '#3CA272', '#FC8452', '#9A60B4', '#ea7ccc'],
  padding: [15, 10, 0, 15],
  enableScroll: false,
  legend: {},
  xAxis: {
    disableGrid: true,
  },
  yAxis: {
    gridType: 'dash',
    dashLength: 2,
  },
  extra: {
    line: {
      type: 'straight',
      width: 2,
      activeType: 'hollow',
    },
  },
}
const chartData = {
  categories: ['2018', '2019', '2020', '2021', '2022', '2023'],
  series: [
    {
      name: '成交量A',
      data: [35, 8, 25, 37, 4, 20],
    },
    {
      name: '成交量B',
      data: [70, 40, 65, 100, 44, 68],
    },
    {
      name: '成交量C',
      data: [100, 80, 95, 150, 112, 132],
    },
  ],
}
</script>

<template>
  <UCharts type="line" :opts="opts" :chart-data="chartData" :canvas2d="true" />
  <wd-button @click="test">
    同意并继续
  </wd-button>
  <PrivacyPopup />
</template>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
