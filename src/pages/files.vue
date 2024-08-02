<template>
  <layout active="files">
    <div class="flex w-full h-screen-20">
      <div class="w-1/2 mx-auto mt-5">
        <div class="bg-white rounded-md w-full flex-col py-10 mt-6">
          <img class="mx-auto" src="../public/images/hero-image.png">
          <div class="family-poppins font-medium text-lg mt-6 text-center w-full">All attachments to tasks & messages in this<br> project will appear here.</div>
        </div>
      </div>
    </div>
  </layout>
</template>

<script>
import Layout from "../components/layout.vue";
export default {
name: "files",
  components: {Layout}
}
</script>

<style scoped>
.h-screen-20{
  height: calc(100vh - 65px);
}
</style>
