<template>
  <div class="login-account">
    <el-form label-width="60px" :rules="accountRules" :model="account" ref="formRef">
      <el-form-item label="帐号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { useStore } from 'vuex'
import { ElForm } from 'element-plus'
import localCache from '@/utils/cache'

import { accountRules } from '../config/account-config'

export default defineComponent({
  setup() {
    const store = useStore()

    // 定义账号密码
    const account = reactive({
      name: localCache.getCache('name') ?? '',
      password: localCache.getCache('password') ?? ''
    })

    // 获取表单
    const formRef = ref<InstanceType<typeof ElForm>>()

    // 帐号登录
    const loginAction = (isKeepPassword: boolean) => {
      formRef.value?.validate((valid) => {
        // 账号密码验证
        if (valid) {
          // 1.是否需要保存密码
          if (isKeepPassword) {
            // 本地缓存
            localCache.setCache('name', account.name)
            localCache.setCache('password', account.password)
          } else {
            localCache.deleteCache('name')
            localCache.deleteCache('password')
          }
          // 登录验证
          store.dispatch('login/accountLoginAction', { ...account })
        }
      })
    }
    return { account, accountRules, loginAction, formRef }
  }
})
</script>

<style scoped lang="less"></style>
