<template>
  <div class="login-container flex-center">
    <div class="login-content">
      <img src="@/assets/images/login_left.png" alt="login" />
      <div class="login-form">
        <LoginFrom />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import LoginFrom from "./components/LoginFrom.vue";

export default {
  name: "LoginPage",
  components: { LoginFrom },
};
</script>

<style lang="scss" scoped>
@import "login.scss";
</style>
