<route type="home" lang="json5">
  {
    "style":{ "navigationBarTitleText": "首页" }
  }
</route>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useAppStore } from '@/store/app'

const appStore = useAppStore()

const privacyContractName = ref('《隐私权政策》')
const needAuthorization = ref(false)
const privacyPolicyShow = ref(false)
const isAgree = ref(false)
function handleAgree() {
  // 同意
  needAuthorization.value = false
  privacyPolicyShow.value = false
  if (appStore.resolvePrivacyAuthorization) {
    appStore.resolvePrivacyAuthorization({ buttonId: 'agree-btn', event: 'agree' })
    appStore.showPrivacy = false
  }
}
function handleDisagree() {
  // 仍不同意
  privacyPolicyShow.value = false
  appStore.showPrivacy = false
}
function test() {
  wx.requirePrivacyAuthorize({})
}
watch(() => appStore.showPrivacy, (val) => {
  if (val) {
    wx.getPrivacySetting({
      success: (res) => {
        if (res.errMsg === 'getPrivacySetting:ok') {
          needAuthorization.value = res.needAuthorization
          privacyContractName.value = res.privacyContractName
        }
      },
    })
  }
})
</script>

<template>
  <wd-button @click="test">
    同意并继续
  </wd-button>
  <wd-popup v-model="needAuthorization" custom-style="padding: 28px 18px; border-radius:20px" :close-on-click-modal="false">
    <div class="popup-content">
      <div class="popup-content-title">
        隐私权政策提示
      </div>
      <div>
        <wd-checkbox v-model="isAgree" shape="square" />
        <div>
          请您在使用XXX小程序前点击<a>{{ privacyContractName }}</a>并仔细阅读。如您同意<a>{{ privacyContractName }}</a>的全部内容，请勾选左侧小方块，开始使用我们的服务
        </div>
      </div>
      <wd-button :disabled="!isAgree" block :open-type="isAgree ? 'agreePrivacyAuthorization' : ''" @agreeprivacyauthorization="handleAgree">
        同意并继续
      </wd-button>
      <div
        @click="() => {
          privacyPolicyShow = true
          needAuthorization = false
        }"
      >
        不同意
      </div>
    </div>
  </wd-popup>
  <wd-popup v-model="privacyPolicyShow" custom-style="padding: 28px 18px; border-radius:20px" :close-on-click-modal="false">
    <div class="popup-content">
      <div class="popup-content-title">
        需要您同意本隐私协议
      </div>
      <div>
        如果不同意<a>{{ privacyContractName }}</a>，您只能浏览部分内容。
      </div>
      <wd-button plain @click="handleDisagree">
        仍不同意
      </wd-button>
      <wd-button open-type="agreePrivacyAuthorization" @agreeprivacyauthorization="handleAgree">
        同意并继续
      </wd-button>
    </div>
  </wd-popup>
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
.popup-content{
  width: 450rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.popup-content-title{
  font-size: 36rpx;
  color: #333333;
  margin-bottom: 20rpx;
  font-weight: bold;
}
</style>
