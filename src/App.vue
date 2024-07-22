<script setup lang="ts">
import { onHide, onLaunch, onShow } from '@dcloudio/uni-app'
import { useAppStore } from '@/store/app'

const appStore = useAppStore()

onLaunch(() => {
// 监听隐私接口需要用户授权事件
  if (wx.onNeedPrivacyAuthorization) {
    wx.onNeedPrivacyAuthorization((resolve) => {
      // 需要用户同意隐私授权时，弹出开发者自定义的隐私授权弹窗
      appStore.showPrivacy = true
      appStore.resolvePrivacyAuthorization = resolve
    })
  }
})
onShow(() => {
  console.log('App Show')
})
onHide(() => {
  console.log('App Hide')
})
</script>

<style></style>
