<template>
  <div class="app-container">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
@import "assets/main";

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  outline: none;
}

body {
  background: var(--body-bg);
}

.app-container {
  width: 100%;
  height: 100vh;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
}
</style>
