<template>
  <div class="flex bg-gray-100 h-screen w-full overflow-hidden">
    <div class=" max-w-3xl m-auto">
      <div class="text-3xl font-medium family-poppins mt-5">Choose a project template</div>
      <div class="grid grid-cols-5 gap-5 mt-4">
        <a href="/project-format" class="py-3">
          <div class="flex rounded-3xl bg-white border-2 border-gray-600 border-dashed w-28 h-28">
            <svg class="w-5 h-5 text-gray-700 m-auto cursor-pointer" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M492 236H276V20c0-11.046-8.954-20-20-20s-20 8.954-20 20v216H20c-11.046 0-20 8.954-20 20s8.954 20 20 20h216v216c0 11.046 8.954 20 20 20s20-8.954 20-20V276h216c11.046 0 20-8.954 20-20s-8.954-20-20-20z" fill-rule="evenodd"/></svg>
          </div>
          <div class="text-gray-700 family-poppins text-xs font-medium mt-4 ml-5">New Project</div>
        </a>
        <a href="/design-process-page" class="py-3">
          <div class="flex rounded-3xl bg-green-500 w-28 h-28">
            <svg class="w-14 h-14 m-auto text-white cursor-pointer" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <rect x="0" y="0" width="24" height="24"/>
                <path d="M3,4 L20,4 C20.5522847,4 21,4.44771525 21,5 L21,7 C21,7.55228475 20.5522847,8 20,8 L3,8 C2.44771525,8 2,7.55228475 2,7 L2,5 C2,4.44771525 2.44771525,4 3,4 Z M3,10 L13,10 C13.5522847,10 14,10.4477153 14,11 L14,19 C14,19.5522847 13.5522847,20 13,20 L3,20 C2.44771525,20 2,19.5522847 2,19 L2,11 C2,10.4477153 2.44771525,10 3,10 Z" fill="#FFFFFF"/>
                <rect fill="#FFFFFF" opacity="0.3" x="16" y="10" width="5" height="10" rx="1"/>
              </g>
            </svg>
          </div>
          <div class="text-gray-700 family-poppins text-xs font-medium mt-4 ">New Design Process</div>
        </a>
        <a href="/design-project-plan" class="py-3">
          <div class="flex rounded-3xl bg-indigo-500 w-28 h-28">
            <svg class="w-14 h-14 m-auto cursor-pointer" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <rect x="0" y="0" width="24" height="24"/>
                <path d="M9,15 L7.5,15 C6.67157288,15 6,15.6715729 6,16.5 C6,17.3284271 6.67157288,18 7.5,18 C8.32842712,18 9,17.3284271 9,16.5 L9,15 Z M9,15 L9,9 L15,9 L15,15 L9,15 Z M15,16.5 C15,17.3284271 15.6715729,18 16.5,18 C17.3284271,18 18,17.3284271 18,16.5 C18,15.6715729 17.3284271,15 16.5,15 L15,15 L15,16.5 Z M16.5,9 C17.3284271,9 18,8.32842712 18,7.5 C18,6.67157288 17.3284271,6 16.5,6 C15.6715729,6 15,6.67157288 15,7.5 L15,9 L16.5,9 Z M9,7.5 C9,6.67157288 8.32842712,6 7.5,6 C6.67157288,6 6,6.67157288 6,7.5 C6,8.32842712 6.67157288,9 7.5,9 L9,9 L9,7.5 Z M11,13 L13,13 L13,11 L11,11 L11,13 Z M13,11 L13,7.5 C13,5.56700338 14.5670034,4 16.5,4 C18.4329966,4 20,5.56700338 20,7.5 C20,9.43299662 18.4329966,11 16.5,11 L13,11 Z M16.5,13 C18.4329966,13 20,14.5670034 20,16.5 C20,18.4329966 18.4329966,20 16.5,20 C14.5670034,20 13,18.4329966 13,16.5 L13,13 L16.5,13 Z M11,16.5 C11,18.4329966 9.43299662,20 7.5,20 C5.56700338,20 4,18.4329966 4,16.5 C4,14.5670034 5.56700338,13 7.5,13 L11,13 L11,16.5 Z M7.5,11 C5.56700338,11 4,9.43299662 4,7.5 C4,5.56700338 5.56700338,4 7.5,4 C9.43299662,4 11,5.56700338 11,7.5 L11,11 L7.5,11 Z" fill="#FFFFFF" fill-rule="nonzero"/>
              </g>
            </svg>
          </div>
          <div class="text-gray-700 family-poppins text-xs font-medium mt-4 ">Design Project Plan</div>
        </a>
        <a href="/nits-basic-training" class="py-3">
          <div class="flex rounded-3xl bg-yellow-500 w-28 h-28">
            <svg class="w-14 h-14 m-auto cursor-pointer" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <rect x="0" y="0" width="24" height="24"/>
                <path d="M3,4 L20,4 C20.5522847,4 21,4.44771525 21,5 L21,7 C21,7.55228475 20.5522847,8 20,8 L3,8 C2.44771525,8 2,7.55228475 2,7 L2,5 C2,4.44771525 2.44771525,4 3,4 Z M3,10 L13,10 C13.5522847,10 14,10.4477153 14,11 L14,13 C14,13.5522847 13.5522847,14 13,14 L3,14 C2.44771525,14 2,13.5522847 2,13 L2,11 C2,10.4477153 2.44771525,10 3,10 Z M3,16 L13,16 C13.5522847,16 14,16.4477153 14,17 L14,19 C14,19.5522847 13.5522847,20 13,20 L3,20 C2.44771525,20 2,19.5522847 2,19 L2,17 C2,16.4477153 2.44771525,16 3,16 Z" fill="#FFFFFF"/>
                <rect fill="#FFFFFF" opacity="0.3" x="16" y="10" width="5" height="10" rx="1"/>
              </g>
            </svg>
          </div>
          <div class="text-gray-700 family-poppins text-xs font-medium mt-4 ">Nits Basics Training</div>
        </a>
        <div class="py-3">
          <div class="flex rounded-3xl bg-red-400 w-28 h-28">
            <svg class="w-14 h-14 m-auto cursor-pointer" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <rect x="0" y="0" width="24" height="24"/>
                <circle fill="#FFFFFF" opacity="0.4" cx="12" cy="9" r="8"/>
                <path d="M14.5297296,11 L9.46184488,11 L11.9758349,17.4645458 L14.5297296,11 Z M10.5679953,19.3624463 L6.53815512,9 L17.4702704,9 L13.3744964,19.3674279 L11.9759405,18.814912 L10.5679953,19.3624463 Z" fill="#FFFFFF" fill-rule="nonzero" opacity="0.3"/>
                <path d="M10,22 L14,22 L14,22 C14,23.1045695 13.1045695,24 12,24 L12,24 C10.8954305,24 10,23.1045695 10,22 Z" fill="#FFFFFF" opacity="0.3"/>
                <path d="M9,20 C8.44771525,20 8,19.5522847 8,19 C8,18.4477153 8.44771525,18 9,18 C8.44771525,18 8,17.5522847 8,17 C8,16.4477153 8.44771525,16 9,16 L15,16 C15.5522847,16 16,16.4477153 16,17 C16,17.5522847 15.5522847,18 15,18 C15.5522847,18 16,18.4477153 16,19 C16,19.5522847 15.5522847,20 15,20 C15.5522847,20 16,20.4477153 16,21 C16,21.5522847 15.5522847,22 15,22 L9,22 C8.44771525,22 8,21.5522847 8,21 C8,20.4477153 8.44771525,20 9,20 Z" fill="#FFFFFF"/>
              </g>
            </svg>
          </div>
          <div class="text-gray-700 family-poppins text-xs font-medium mt-4 ">Team Brainstrom</div>
        </div>
      </div>
      <div class="flex justify-between mt-5 border-b">
        <div class="flex border-b">
          <div class="family-poppins py-2 cursor-pointer" v-on:click="toggleTab(1)" v-bind:class="{'text-xs font-normal text-gray-700':openTab !==1, 'text-sm border-b border-blue-700':openTab ===1}">General Templates</div>
          <div class="family-poppins ml-4 py-2 cursor-pointer" v-on:click="toggleTab(2)" v-bind:class="{'text-xs font-normal text-gray-700':openTab !==2, 'text-sm border-b border-blue-700':openTab ===2}">By Design</div>
        </div>
        <div class="flex">
          <div class="family-poppins text-xs font-normal text-gray-800 ml-4 py-2 ">Type: Design</div>
          <svg class="w-4 h-4 ml-2 my-auto cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="#000" d="M4.516 7.548c.436-.446 1.043-.481 1.576 0L10 11.295l3.908-3.747c.533-.481 1.141-.446 1.574 0 .436.445.408 1.197 0 1.615-.406.418-4.695 4.502-4.695 4.502a1.095 1.095 0 01-1.576 0S4.924 9.581 4.516 9.163c-.409-.418-.436-1.17 0-1.615z"/></svg>
        </div>
      </div>
      <div v-for="(item,index) in ListData" :key="index" class="flex justify-between border-b" v-bind:class="{'hidden':openTab !==1, 'block':openTab ===1}">
        <div class="flex py-2">
          <div :class="'w-10 h-10 rounded-xl ' + item.bg_color "></div>
          <div class="my-auto ml-3">
            <div class="text-xs family-poppins font-medium text-gray-700">{{item.title}}</div>
            <div class="text-xs family-poppins font-normal text-gray-600">{{item.sub_title}}</div>
          </div>
        </div>
      </div>
    </div>
    <a href="javascript:history.go(-1)">
      <svg class="h-6 w-6 absolute top-8 left-8 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 386.242 386.242"><path d="M374.212 182.3H39.432l100.152-99.767c4.704-4.704 4.704-12.319 0-17.011-4.704-4.704-12.319-4.704-17.011 0L3.474 184.61c-4.632 4.632-4.632 12.379 0 17.011l119.1 119.1c4.704 4.704 12.319 4.704 17.011 0 4.704-4.704 4.704-12.319 0-17.011L39.432 206.36h334.779c6.641 0 12.03-5.39 12.03-12.03s-5.389-12.03-12.029-12.03z"/></svg>
    </a>
    <a href="/home">
      <svg class="h-6 w-6 absolute top-8 right-8 cursor-pointer" viewBox="0 0 311 311.077" xmlns="http://www.w3.org/2000/svg"><path d="M16.035 311.078c-4.097 0-8.195-1.558-11.308-4.695-6.25-6.25-6.25-16.383 0-22.633L283.789 4.687c6.25-6.25 16.383-6.25 22.633 0s6.25 16.383 0 22.637L27.363 306.383a16.045 16.045 0 01-11.328 4.695zm0 0"/><path d="M295.117 311.078a15.879 15.879 0 01-11.308-4.695L4.727 27.324c-6.25-6.254-6.25-16.386 0-22.636s16.382-6.25 22.636 0L306.422 283.75c6.25 6.25 6.25 16.383 0 22.633-3.137 3.117-7.23 4.695-11.305 4.695zm0 0"/></svg>
    </a>
  </div>
</template>

<script>
import Layout from "../components/layout.vue";
export default {
  name: "template-gallery",
  components: {Layout},
  data(){
    return{
      ListData:[
        {id:'1', bg_color:'bg-gray-400', title:'Import Spreadsheet', sub_title:'Import data from a CVS file'},
        {id:'1', bg_color:'bg-red-300', title:'Agency Collaboration', sub_title:'List layout'},
        {id:'1', bg_color:'bg-green-300', title:'Creative Assets Feedback & Approval', sub_title:'Board layout'},
        {id:'1', bg_color:'bg-blue-600', title:'Creative Request', sub_title:'Board layout'},
        {id:'1', bg_color:'bg-indigo-400', title:'Design Project plan', sub_title:'List layout'},
      ],
      openTab:1,
    }
  },
  methods:{
    toggleTab:function (tabNumber ,assets){
      this.openTab=tabNumber
    },
  }
}
</script>

<style scoped>

</style>
