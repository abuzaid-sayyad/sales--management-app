<template>
  <layout active="messages">
    <div class="flex w-full h-screen-20">
      <div class="w-1/2 mx-auto mt-5">
        <div class="rounded-md bg-white flex py-3 px-8 w-full">
          <div class="h-8 w-8 rounded-full bg-yellow-400 flex my-auto cursor-pointer">
            <div class="m-auto font-semibold family-poppins text-base">JS</div>
          </div>
          <input class="my-auto w-full focus:outline-none family-poppins px-4 py-2 ml-4 rounded-lg border text-sm font-medium" placeholder="Send message to member....">
        </div>
        <div class="bg-white rounded-md w-full flex-col py-10 mt-6">
          <img class="mx-auto" src="/src/assets/images/two.people.conversation.png">
          <div class="family-poppins font-medium text-lg mt-6 text-center w-full">Connect your words to your work</div>
          <div class="family-poppins font-medium text-xs text-center w-full mt-6">Send a message to kick off projects.Or discuss tasks.<br>Or brainstrom ideas. You can also send message from your email to<br> <span class="cursor-pointer text-indigo-500">My-project@mail.nitseditor.com</span></div>
        </div>
      </div>
    </div>
  </layout>
</template>

<script>
import Layout from "../components/layout.vue";
export default {
name: "messages",
  components: {Layout}
}
</script>

<style scoped>
.h-screen-20{
height: calc(100vh - 65px);
}
</style>
