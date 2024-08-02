<template>
  <layout active="forms">
    <div class="flex w-full h-screen-20">
      <div class="m-auto">
        <div class="family-poppins text-2xl font-medium text-center mx-auto">Collect the info your team needs with Forms</div>
        <div class="mt-10 flex">
          <img class="h-60 mx-auto" src="../public/images/two-people-pointing.png">
        </div>
        <div class="mt-10 text-center family-poppins text-xs font-medium">Standardize how your team recevies work requests and automatically <br>turn them into tasks so nothing falls thoughthe cracks. <span class="cursor-pointer text-indigo-700">Learn more</span></div>
        <div class="flex">
          <button class="mt-8 mx-auto bg-indigo-500 text-white family-poppins font-normal py-2 px-5 text-sm rounded-full focus:outline-none">Create a Form</button>
        </div>
      </div>
    </div>
  </layout>
</template>

<script>
import Layout from "../components/layout.vue";
export default {
name: "forms",
  components: {Layout}
}
</script>

<style scoped>
.h-screen-20{
  height: calc(100vh - 65px);
}
</style>
