<template>
  <el-form :model="loginForm">
    <el-form-item prop="username">
      <el-input v-model="loginForm.username" placeholder="用户名"> </el-input>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import type { AccountLoginParam } from "@/api/auth/types";

const loginForm = reactive<AccountLoginParam>({
  username: "",
  password: "",
});
</script>
