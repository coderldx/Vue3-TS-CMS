<template>
  <div class="login-phone">
    <el-form label-width="70px" :rules="phoneRules" :model="phone" ref="formRef">
      <el-form-item label="手机号" prop="num">
        <el-input v-model="phone.num" />
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <div class="get-code">
          <el-input v-model="phone.code" />
          <el-button type="primary" class="get-btn">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { useStore } from 'vuex'
import { ElForm } from 'element-plus'
import localCache from '@/utils/cache'

import { phoneRules } from '../config/phone-config'

export default defineComponent({
  setup() {
    const store = useStore()

    const phone = reactive({
      num: localCache.getCache('num') ?? '',
      code: ''
    })

    // 获取表单
    const formRef = ref<InstanceType<typeof ElForm>>()

    // 手机号登录
    const loginAction = (isKeepPassword: boolean) => {
      formRef.value?.validate((valid) => {
        // 账号密码验证
        if (valid) {
          // 1.是否需要保存手机号
          if (isKeepPassword) {
            // 本地缓存
            localCache.setCache('num', phone.num)
          } else {
            localCache.deleteCache('num')
          }

          // 登录验证
          store.dispatch('login/phoneLoginAction', { ...phone })
        }
      })
    }
    return { phone, phoneRules, formRef, loginAction }
  }
})
</script>

<style scoped lang="less">
.get-code {
  display: flex;

  .get-btn {
    margin-left: 8px;
  }
}
</style>
