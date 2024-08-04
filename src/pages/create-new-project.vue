<template>
  <layout>
    <div class="flex rounded-lg bg-white h-screen-20">
      <div class="w-full max-w-4xl mx-auto my-auto">
        <div class="flex justify-between p-3">
          <div class="flex">
            <svg class="w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M4.516 7.548c.436-.446 1.043-.481 1.576 0L10 11.295l3.908-3.747c.533-.481 1.141-.446 1.574 0 .436.445.408 1.197 0 1.615-.406.418-4.695 4.502-4.695 4.502a1.095 1.095 0 01-1.576 0S4.924 9.581 4.516 9.163c-.409-.418-.436-1.17 0-1.615z" fill-rule="evenodd"/></svg>
            <div class="family-poppins text-base font-semibold text-gray-800 ml-3">Task Due Soon</div>
          </div>
          <div class="flex">
            <svg class="w-4 h-4 my-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 .4C4.697.4.399 4.698.399 10A9.6 9.6 0 0010 19.601c5.301 0 9.6-4.298 9.6-9.601 0-5.302-4.299-9.6-9.6-9.6zm.896 3.466c.936 0 1.211.543 1.211 1.164 0 .775-.62 1.492-1.679 1.492-.886 0-1.308-.445-1.282-1.182 0-.621.519-1.474 1.75-1.474zM8.498 15.75c-.64 0-1.107-.389-.66-2.094l.733-3.025c.127-.484.148-.678 0-.678-.191 0-1.022.334-1.512.664l-.319-.523c1.555-1.299 3.343-2.061 4.108-2.061.64 0 .746.756.427 1.92l-.84 3.18c-.149.562-.085.756.064.756.192 0 .82-.232 1.438-.719l.362.486c-1.513 1.512-3.162 2.094-3.801 2.094z" fill-rule="evenodd"/></svg>
            <div class="family-poppins text-base text-blue-400 font-semibold ml-3">See all my tasks</div>
          </div>
        </div>
        <div class=" border rounded-lg border-b">
          <div v-for="(item,index) in TableData" :key="index" class="flex justify-between py-3 border-b">
            <div class="flex px-2">
              <svg class="h-4 w-4 text-gray-700" fill="currentColor" viewBox="0 0 384 384" xmlns="http://www.w3.org/2000/svg"><path d="M192 384c105.863 0 192-86.129 192-192 0-18.273-2.55-36.281-7.602-53.527-2.488-8.48-11.343-13.352-19.847-10.864-8.489 2.48-13.344 11.368-10.864 19.848C349.872 161.785 352 176.777 352 192c0 88.223-71.777 160-160 160S32 280.223 32 192 103.777 32 192 32c32.063 0 62.91 9.375 89.207 27.105 7.32 4.942 17.273 3 22.207-4.32 4.938-7.328 3.012-17.273-4.316-22.21C267.496 11.264 230.465 0 192 0 86.137 0 0 86.129 0 192s86.137 192 192 192zm0 0"/><path d="M356.688 36.688L192 201.368l-52.688-52.68c-6.25-6.247-16.375-6.247-22.625 0-6.246 6.25-6.246 16.375 0 22.625l64 64C183.817 238.44 187.903 240 192 240s8.184-1.559 11.313-4.688l176-176c6.246-6.25 6.246-16.374 0-22.624-6.25-6.247-16.375-6.247-22.625 0zm0 0" fill-rule="evenodd"/></svg>
              <div class="family-poppins text-sm font-medium text-gray-800 ml-3">{{item.title}}</div>
            </div>
            <div class="flex px-2">
              <button :class="'family-poppins text-xs font-normal rounded-full px-2 ' + item.bg_color">{{item.button_name}}</button>
              <div class="family-poppins text-xs text-gray-500 font-normal ml-3 my-auto">{{item.date}}</div>
            </div>
          </div>
        </div>
        <div class="flex justify-between p-3 mt-10 border-b-2 border-gray-200">
          <div class="flex">
            <svg class="w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M4.516 7.548c.436-.446 1.043-.481 1.576 0L10 11.295l3.908-3.747c.533-.481 1.141-.446 1.574 0 .436.445.408 1.197 0 1.615-.406.418-4.695 4.502-4.695 4.502a1.095 1.095 0 01-1.576 0S4.924 9.581 4.516 9.163c-.409-.418-.436-1.17 0-1.615z" fill-rule="evenodd"/></svg>
            <div class="family-poppins text-base font-semibold text-gray-800 ml-3">Recent Projects</div>
          </div>
          <div class="flex">
            <svg class="w-4 h-4 text-gray-800 my-auto" fill="currentColor" viewBox="-19 -19 600 600" xmlns="http://www.w3.org/2000/svg"><path d="M251.25 12.5c0-6.906-5.594-12.5-12.5-12.5H12.5C5.594 0 0 5.594 0 12.5v226.25c0 6.906 5.594 12.5 12.5 12.5h226.25c6.906 0 12.5-5.594 12.5-12.5zm-25 213.75H25V25h201.25zm0 0M562.5 12.5C562.5 5.594 556.906 0 550 0H323.75c-6.906 0-12.5 5.594-12.5 12.5v226.25c0 6.906 5.594 12.5 12.5 12.5H550c6.906 0 12.5-5.594 12.5-12.5zm-25 213.75H336.25V25H537.5zm0 0M251.25 323.75c0-6.906-5.594-12.5-12.5-12.5H12.5c-6.906 0-12.5 5.594-12.5 12.5V550c0 6.906 5.594 12.5 12.5 12.5h226.25c6.906 0 12.5-5.594 12.5-12.5zm-25 212.5H25v-200h201.25zm0 0M562.5 323.75c0-6.906-5.594-12.5-12.5-12.5H323.75c-6.906 0-12.5 5.594-12.5 12.5V550c0 6.906 5.594 12.5 12.5 12.5H550c6.906 0 12.5-5.594 12.5-12.5zm-25 212.5H336.25v-200H537.5zm0 0" fill-rule="evenodd"/></svg>
          </div>
        </div>
        <div class="flex mt-4">
          <div class="py-3">
            <div class="flex rounded-3xl bg-white border-2 border-gray-600 border-dashed w-28 h-28">
              <svg class="w-6 h-6 text-gray-700 m-auto" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M492 236H276V20c0-11.046-8.954-20-20-20s-20 8.954-20 20v216H20c-11.046 0-20 8.954-20 20s8.954 20 20 20h216v216c0 11.046 8.954 20 20 20s20-8.954 20-20V276h216c11.046 0 20-8.954 20-20s-8.954-20-20-20z" fill-rule="evenodd"/></svg>
            </div>
            <div class="text-gray-700 family-poppins text-sm font-medium mx-auto mt-4 text-center">New Project</div>
          </div>
          <div class="py-3 ml-8">
            <div class="flex rounded-3xl bg-sky-500 w-28 h-28">
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
        </div>
      </div>
    </div>
  </layout>
</template>

<script>
import Layout from "../components/layout.vue";
export default {
name: "create-new-project",
  components: {Layout},
  data(){
  return{
    TableData:[
      {id:'1', title:'Design wellcome email graphics', bg_color:'bg-sky-500', button_name:'Creative...', date:'Mar, 01-04'},
      {id:'1', title:'Film customer video', bg_color:'bg-sky-500', button_name:'Creative...', date:'Today Mar, 04 '},
      {id:'1', title:'Redesign landing page', bg_color:'bg-sky-500', button_name:'Creative...', date:'Mar, 04-07'},
    ]
  }
  }
}
</script>

<style scoped>
.h-screen-20{
  height: calc(100vh - 120px);
}

.bg-sky-500{
  background-color: #47DAFC;
}

</style>
