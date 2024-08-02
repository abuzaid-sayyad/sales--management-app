<template>
  <layout active="home">
    <div class="flex bg-white mx-2.5 h-screen-20">
      <div class="max-w-3xl m-auto">
        <div class="flex justify-between">
          <div class="my-auto">
            <img class="h-56" src="/src/assets/images/two_people_waving.svg"/>
          </div>
          <div class="my-auto ml-10">
            <div class="family-poppins text-base font-medium text-gray-700">Good evening, Juned!</div>
            <div class="family-poppins text-sm font-normal text-gray-600 mt-5">Welcome to Asana! This is your home page, where you can quickly see your upcoming tasks and access your most important projects.</div>
          </div>
        </div>
        <div class="flex justify-between border-b">
          <div @click="openTask = ! openTask" class="flex py-2">
            <svg :class="{'transform rotate-0' : openTask, 'transform -rotate-90' : !openTask}" class="w-4 h-4 my-auto transition-transform duration-200 transform inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="#000" d="M4.516 7.548c.436-.446 1.043-.481 1.576 0L10 11.295l3.908-3.747c.533-.481 1.141-.446 1.574 0 .436.445.408 1.197 0 1.615-.406.418-4.695 4.502-4.695 4.502a1.095 1.095 0 01-1.576 0S4.924 9.581 4.516 9.163c-.409-.418-.436-1.17 0-1.615z"/></svg>
            <div class="family-poppins text-gray-700 text-sm font-medium ml-3">Tasks Due Soon</div>
          </div>
          <div class="flex py-2 text-blue-500 cursor-pointer">
            <svg class="w-3 h-3 my-auto " fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 .4C4.697.4.399 4.698.399 10A9.6 9.6 0 0010 19.601c5.301 0 9.6-4.298 9.6-9.601 0-5.302-4.299-9.6-9.6-9.6zm.896 3.466c.936 0 1.211.543 1.211 1.164 0 .775-.62 1.492-1.679 1.492-.886 0-1.308-.445-1.282-1.182 0-.621.519-1.474 1.75-1.474zM8.498 15.75c-.64 0-1.107-.389-.66-2.094l.733-3.025c.127-.484.148-.678 0-.678-.191 0-1.022.334-1.512.664l-.319-.523c1.555-1.299 3.343-2.061 4.108-2.061.64 0 .746.756.427 1.92l-.84 3.18c-.149.562-.085.756.064.756.192 0 .82-.232 1.438-.719l.362.486c-1.513 1.512-3.162 2.094-3.801 2.094z" fill-rule="evenodd"/></svg>
            <div class="family-poppins text-xs font-normal ml-3 my-auto italic">See all my tasks</div>
          </div>
        </div>
        <div v-if="openTask" class="family-poppins text-sm font-normal text-gray-600 my-5 text-center">No tasks due in the next five days</div>
        <div class="flex justify-between border-b">
          <div @click="openRecent = ! openRecent" class="flex py-2 my-auto">
            <svg :class="{'transform rotate-0' : openRecent, 'transform -rotate-90' : !openRecent}" class="w-4 h-4 my-auto transition-transform duration-200 transform inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="#000" d="M4.516 7.548c.436-.446 1.043-.481 1.576 0L10 11.295l3.908-3.747c.533-.481 1.141-.446 1.574 0 .436.445.408 1.197 0 1.615-.406.418-4.695 4.502-4.695 4.502a1.095 1.095 0 01-1.576 0S4.924 9.581 4.516 9.163c-.409-.418-.436-1.17 0-1.615z"/></svg>
            <div class="family-poppins text-gray-700 text-sm font-medium ml-3">Recents Projects</div>
          </div>
          <div class="flex py-2 my-auto">
            <svg class=" w-4 h-4 text-gray-600 " fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M8 4H5a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1V5a1 1 0 00-1-1zm7 0h-3a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1V5a1 1 0 00-1-1zm-7 7H5a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1v-3a1 1 0 00-1-1zm7 0h-3a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1v-3a1 1 0 00-1-1z" fill-rule="evenodd"/></svg>
          </div>
        </div>
        <div v-if="openRecent" class="flex mt-4">
          <div class="py-3">
            <div class="flex rounded-3xl bg-green-500 w-28 h-28">
              <svg class="w-16 h-16 m-auto text-white cursor-pointer" fill="currentColor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <rect x="0" y="0" width="24" height="24"/>
                  <path d="M5.5,4 L9.5,4 C10.3284271,4 11,4.67157288 11,5.5 L11,6.5 C11,7.32842712 10.3284271,8 9.5,8 L5.5,8 C4.67157288,8 4,7.32842712 4,6.5 L4,5.5 C4,4.67157288 4.67157288,4 5.5,4 Z M14.5,16 L18.5,16 C19.3284271,16 20,16.6715729 20,17.5 L20,18.5 C20,19.3284271 19.3284271,20 18.5,20 L14.5,20 C13.6715729,20 13,19.3284271 13,18.5 L13,17.5 C13,16.6715729 13.6715729,16 14.5,16 Z" fill="#000000" opacity="0.5"/>
                  <path d="M5.5,10 L9.5,10 C10.3284271,10 11,10.6715729 11,11.5 L11,18.5 C11,19.3284271 10.3284271,20 9.5,20 L5.5,20 C4.67157288,20 4,19.3284271 4,18.5 L4,11.5 C4,10.6715729 4.67157288,10 5.5,10 Z M14.5,4 L18.5,4 C19.3284271,4 20,4.67157288 20,5.5 L20,12.5 C20,13.3284271 19.3284271,14 18.5,14 L14.5,14 C13.6715729,14 13,13.3284271 13,12.5 L13,5.5 C13,4.67157288 13.6715729,4 14.5,4 Z" fill="#FFFFFF" opacity="0."/>
                </g>
              </svg>
            </div>
            <div class="text-gray-700 family-poppins text-sm font-medium mx-auto mt-4">Creative Request</div>
          </div>
          <a href="/create-project" class="py-3 ml-8">
            <div class="flex rounded-3xl bg-white border-2 border-gray-600 border-dashed w-28 h-28">
              <svg class="w-6 h-6 text-gray-700 m-auto" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M492 236H276V20c0-11.046-8.954-20-20-20s-20 8.954-20 20v216H20c-11.046 0-20 8.954-20 20s8.954 20 20 20h216v216c0 11.046 8.954 20 20 20s20-8.954 20-20V276h216c11.046 0 20-8.954 20-20s-8.954-20-20-20z" fill-rule="evenodd"/></svg>
            </div>
            <div class="text-gray-700 family-poppins text-sm font-medium mx-auto mt-4 text-center">New Project</div>
          </a>
        </div>
      </div>
    </div>
  </layout>
</template>


<script>
import Layout from "../components/layout.vue";
export default {
name: "home",
  components: {Layout},
  data(){
  return{
    openRecent:true,
    opensubplanning:true,
    openTask:true,
    openSteps:true,
    openReferences:true,
  }
  }
}
</script>

<style scoped>
.h-screen-20{
  height: calc(100vh - 65px);
}
</style>
