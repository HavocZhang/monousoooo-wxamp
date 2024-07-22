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
function openPrivacyPolicy() {
  wx.openPrivacyContract({})
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
  <wd-popup v-model="needAuthorization" custom-style="padding: 38rpx 38rpx; border-radius:38rpx" :close-on-click-modal="false">
    <div class="popup-content">
      <div class="popup-content-title">
        隐私权政策提示
      </div>
      <div class="popup-content-box">
        <wd-checkbox v-model="isAgree" custom-style="margin-top: 14rpx;" shape="square" />
        <div class="popup-content-box-text">
          请您在使用{{ appStore.appName }}小程序前点击<text @click="openPrivacyPolicy">
            {{ privacyContractName }}
          </text>并仔细阅读。如您同意<text @click="openPrivacyPolicy">
            {{ privacyContractName }}
          </text>的全部内容，请勾选左侧小方块，开始使用我们的服务。
        </div>
      </div>
      <wd-button :disabled="!isAgree" custom-style="width:100%" :open-type="isAgree ? 'agreePrivacyAuthorization' : ''" @agreeprivacyauthorization="handleAgree">
        同意并继续
      </wd-button>
      <wd-button
        custom-style="width:100%;margin-top: 10rpx;"
        type="text"
        @click="() => {
          privacyPolicyShow = true
          needAuthorization = false
        }"
      >
        不同意
      </wd-button>
    </div>
  </wd-popup>
  <wd-popup v-model="privacyPolicyShow" custom-style="padding: 38rpx 38rpx; border-radius:38rpx" :close-on-click-modal="false">
    <div class="popup-content">
      <div class="popup-content-title">
        需要您同意本隐私协议
      </div>
      <div class="popup-content-box-text">
        如果不同意<text @click="openPrivacyPolicy">
          {{ privacyContractName }}
        </text>，您只能浏览部分内容。
      </div>
      <div class="popup-btn">
        <wd-button plain @click="handleDisagree">
          仍不同意
        </wd-button>
        <wd-button open-type="agreePrivacyAuthorization" @agreeprivacyauthorization="handleAgree">
          同意并继续
        </wd-button>
      </div>
    </div>
  </wd-popup>
</template>

<style>
.popup-content{
  width: 550rpx;
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
.popup-content-box{
    display: flex;
    align-items:flex-start;
    margin-bottom: 20rpx;

}
.popup-content-box-text{
    font-size: 28rpx;
    color: #666666;
    line-height: 56rpx;
    margin-left: 20rpx;

}
text {
    color: #007AFF;
}
.popup-btn{
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 20rpx;
}
</style>
