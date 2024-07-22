<route type="home" lang="json5">
  {
    "style":{ "navigationBarTitleText": "首页" }
  }
</route>

<script setup lang="ts">
import PrivacyPopup from '@/components/privacy-popup/index.vue'

function test() {
  wx.requirePrivacyAuthorize({})
}
</script>

<template>
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
