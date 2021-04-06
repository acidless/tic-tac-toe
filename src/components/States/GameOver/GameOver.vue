<template>
  <p>The winner is {{winner ? "2" : "1"}}st player!</p>
</template>

<script>
export default {
  name:"GameOver",
  props: {
    winner: Boolean,
  }
}
</script>

<style></style>