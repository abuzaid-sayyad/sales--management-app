<template>
  <div class="w-full h-screen relative">
    <div class="bg_gradient_to_br from_dark_teal to_light_teal from-jamuni-500 to-jamuni-300 h-64 flex">
      <img src="../assets/images/logo/nitslogo.png" class="h-16 mx-auto mt-10 w-auto"/>
    </div>
    <div class="w-1/3 -mt-20 mx-auto bg-white rounded-lg shadow-2xl md:p-10 p-5">
      <div class="text-3xl font-semibold text-dark-purple family-poppins pb-4 md:pb-12 text-center">Login</div>
      <div class="flex-col">
        <div class="text-sm font-mediium text-gray-600 family-poppins mb-2">Email Address</div>
        <input type="text" class="w-full border-b-2 border-gray-200 py-3 text-sm font-medium text-purple-800 family-poppins focus:border-purple-600 focus:outline-none" placeholder="Enter email">
      </div>
      <div class="flex-col mt-7">
        <div class="text-sm font-mediium text-gray-600 family-poppins mb-2">Password</div>
        <input type="text" class="w-full border-b-2 border-gray-200 py-3 text-sm font-medium text-purple-800 family-poppins focus:border-purple-600 focus:outline-none" placeholder="Enter password">
      </div>
      <div class="flex justify-center mt-7">
        <a href="/dashboard" class="w-full bg-teal text-white font-semibold text-center py-3 rounded-md text-base family-poppins">Login</a>
      </div>
      <div class="mt-4 text-blue-600 family-poppins text-xs font-medium cursor-pointer">Forgot password?</div>
    </div>
    <login-svg></login-svg>
  </div>
</template>

<script>
import Layout from "../components/layout.vue";
import LoginSvg from "../components/login-svg.vue";
export default {
  components: {LoginSvg, Layout},
  data(){
    return{
      
    }
  }
}
</script>

<style>

</style>
