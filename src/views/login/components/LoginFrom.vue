<template>
  <el-form :model="loginForm" ref="loginFormRef">
    <el-form-item prop="username">
      <el-input v-model="loginForm.username" placeholder="用户名"> </el-input>
    </el-form-item>

    <el-form-item prop="password">
      <el-input v-model="loginForm.password" placeholder="密码"> </el-input>
    </el-form-item>
  </el-form>
  <div class="login-btn-wrapper">
    <el-button round size="large">重置</el-button>
    <el-button @click="loginHandler(loginFormRef)" round size="large" type="primary">确认</el-button>
  </div>
</template>

<script setup lang="ts">
import { accountLogin } from "@/api/auth";
import type { AccountLoginParam } from "@/api/auth/types";
import type { FormInstance } from "element-plus";

// type FormInstance = InstanceType(typeof ElForm);
const loginFormRef = ref<FormInstance>();
const loginForm = reactive<AccountLoginParam>({
  username: "admin",
  password: "123456",
});

const loading = ref(false);
const loginHandler = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate(async (valid) => {
    if (!valid) return;
    loading.value = true;
    try {
      const res = await accountLogin(loginForm);
    } finally {
      loading.value = false;
    }
  });
};
</script>

<style lang="scss">
  .login-btn-wrapper{
    display: flex;
    justify-content: center;
  }
</style>
