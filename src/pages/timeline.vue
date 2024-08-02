<template>
  <layout active="timeline">
    <div class="h-screen-4px w-full text-center flex items-center text-4xl font-medium family-poppins"><span class="mx-auto">Under construction </span></div>
  </layout>
</template>

<script>
import Layout from "../components/layout.vue";
export default {
  name: "timeline",
  components: {Layout}
}
</script>

<style scoped>
.h-screen-4px{
  height: calc(100vh - 65px);
}
</style>
