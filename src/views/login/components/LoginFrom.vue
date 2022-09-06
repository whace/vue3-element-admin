<template>
  <el-form :model="loginForm" ref="loginFormRef">
    <el-form-item prop="username">
      <el-input v-model="loginForm.username" placeholder="用户名"> </el-input>
    </el-form-item>

    <el-form-item prop="password">
      <el-input v-model="loginForm.username" placeholder="密码"> </el-input>
    </el-form-item>
  </el-form>
  <el-form-item :resetField="resetField">
    <el-button>重置</el-button>
    <el-button @click="loginHandler(loginFormRef)">确认</el-button>
  </el-form-item>
</template>

<script setup lang="ts">
import { accountLogin } from "@/api/auth";
import type { AccountLoginParam } from "@/api/auth/types";
import type { FormInstance } from "element-plus";

// type FormInstance = InstanceType(typeof ElForm);
const loginFormRef = ref<FormInstance>();
const loginForm = reactive<AccountLoginParam>({
  username: "",
  password: "",
});

const resetField = () => {
  alert(1);
};

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
