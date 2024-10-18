<script>
import NavBar from '@/views/NavBar.vue';
export default {
  components: { NavBar }
}
</script>

<template>
  <NavBar />
  <div class="router-view">
    <router-view />
  </div>
</template>

<style scoped>
.router-view {
  padding-top: 80px;
}
</style>
