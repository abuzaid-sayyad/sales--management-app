<template>
  <div class="bg-gray-100 w-full h-screen flex">
    <div class="w-2/5 m-auto">
      <div class="flex justify-between">
        <div class="cursor-pointer family-poppins"  v-on:click="toggleTab(1)" v-bind:class="{'text-gray-600 text-xl font-normal':openTab !==1,'text-blue-600 text-xl border-b-2 border-blue-600 font-medium':openTab ===1}">Add project details</div>
        <div class="family-poppins cursor-pointer" v-on:click="toggleTab(2)" v-bind:class="{'text-gray-600 text-xl font-normal':openTab !==2,'text-blue-600 text-xl border-b-2 border-blue-600 font-medium':openTab ===2}">Schedule project dates</div>
      </div>
      <div  v-if="openTab ===1" v-bind:class="{'hidden':openTab !==1, 'block':openTab ===1}" class="">
        <div class="family-poppins text-sm font-medium text-gray-500 mt-5">Template</div>
        <div class="flex mt-5">
          <div class="w-3 h-3 my-auto" style="background-color: #0BE355"></div>
          <div class="family-poppins text-base font-semibold ml-5 my-auto">Web Design Process</div>
        </div>
        <div class="family-poppins text-sm font-medium text-gray-500 mt-10">Project Name</div>
        <input type="text" class="rounded-lg w-full border mt-3 py-2 px-5 bg-gray-100 family-poppins font-medium focus:outline-none" placeholder="Web Design Process">
        <div class="family-poppins text-sm font-medium text-gray-500 mt-10">Privacy</div>
        <div class="flex mt-5">
          <div class="flex w-4 h-4 rounded-full bg-white my-auto cursor-pointer shadow-lg">
            <div class="w-2 h-2 m-auto rounded-full" style="background-color: #5145D5"></div>
          </div>
          <div class="flex my-auto ml-5">
            <svg class="cursor-pointer h-5 w-5 my-auto text-gray-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" version="1.1">
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <polygon points="0 0 24 0 24 24 0 24"/>
                <path fill="currentColor" d="M18,14 C16.3431458,14 15,12.6568542 15,11 C15,9.34314575 16.3431458,8 18,8 C19.6568542,8 21,9.34314575 21,11 C21,12.6568542 19.6568542,14 18,14 Z M9,11 C6.790861,11 5,9.209139 5,7 C5,4.790861 6.790861,3 9,3 C11.209139,3 13,4.790861 13,7 C13,9.209139 11.209139,11 9,11 Z" fill-rule="nonzero" opacity="0.3"/>
                <path fill="currentColor" d="M17.6011961,15.0006174 C21.0077043,15.0378534 23.7891749,16.7601418 23.9984937,20.4 C24.0069246,20.5466056 23.9984937,21 23.4559499,21 L19.6,21 C19.6,18.7490654 18.8562935,16.6718327 17.6011961,15.0006174 Z M0.00065168429,20.1992055 C0.388258525,15.4265159 4.26191235,13 8.98334134,13 C13.7712164,13 17.7048837,15.2931929 17.9979143,20.2 C18.0095879,20.3954741 17.9979143,21 17.2466999,21 C13.541124,21 8.03472472,21 0.727502227,21 C0.476712155,21 -0.0204617505,20.45918 0.00065168429,20.1992055 Z" fill-rule="nonzero"/>
              </g>
            </svg>
            <div class="family-poppins text-base font-semibold ml-3 my-auto text-gray-700">Web Design Process</div>
          </div>
        </div>
        <div class="flex mt-5">
          <div class="flex w-4 h-4 rounded-full bg-white my-auto cursor-pointer shadow-lg">
          </div>
          <div class="flex my-auto ml-5">
            <svg class="w-5 h-5 my-auto text-gray-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <mask fill="white">
                  <use xlink:href="#path-1"/>
                </mask>
                <g/>
                <path fill="currentColor" d="M7,10 L7,8 C7,5.23857625 9.23857625,3 12,3 C14.7614237,3 17,5.23857625 17,8 L17,10 L18,10 C19.1045695,10 20,10.8954305 20,12 L20,18 C20,19.1045695 19.1045695,20 18,20 L6,20 C4.8954305,20 4,19.1045695 4,18 L4,12 C4,10.8954305 4.8954305,10 6,10 L7,10 Z M12,5 C10.3431458,5 9,6.34314575 9,8 L9,10 L15,10 L15,8 C15,6.34314575 13.6568542,5 12,5 Z" fill-rule="evenodd"/>
              </g>
            </svg>
            <div class="family-poppins text-base font-semibold ml-3 my-auto text-gray-700">Private to project member</div>
          </div>
        </div>
        <button @click="redirectToList()" class="w-full focus:outline-none py-3 family-poppins text-white rounded-lg font-semibold text-lg mt-10" style="background-color: #5145D5">Next</button>
      </div>
      <div v-if="openTab ===2" v-bind:class="{'hidden':openTab !==2, 'block':openTab ===2}" class="">
        <div class="family-poppins text-sm font-medium text-gray-700 mt-8">Your tasks will be scheduled according to your project start or end date</div>
        <div class="flex mt-8">
          <div class="bg-green-100 rounded-md border border-indigo-700 my-auto">
            <div class="p-2">
              <div class="family-poppins text-xs font-medium">Start date</div>
              <div class="family-poppins text-vs font-medium text-gray-600 mt-2">Use start date if you know <br>when your project will begin</div>
              <div class="flex mt-5">
                <div class="flex bg-indigo-400 rounded-full w-6 h-6">
                  <div class="text-white text-sm font-medium m-auto">1</div>
                </div>
                <div class="text-indigo-500 text-sm font-medium ml-5">2</div>
                <div class="text-indigo-500 text-sm font-medium ml-5">3</div>
                <div class="text-indigo-500 text-sm font-medium ml-5">4</div>
              </div>
            </div>
          </div>
          <div class=" rounded-md border border-indigo-700 ml-24 my-auto">
            <div class="p-2">
              <div class="family-poppins text-xs font-medium">End date</div>
              <div class="family-poppins text-vs font-medium text-gray-600 mt-2">Use start date if you have a <br>final deadline for your project</div>
              <div class="flex mt-5">
                <div class="text-gray-600 text-sm font-medium ">27</div>
                <div class="text-gray-600 text-sm font-medium ml-5">28</div>
                <div class="text-black text-sm font-medium ml-5">29</div>
                <div class="flex bg-gray-700 rounded-full w-6 h-6 ml-5">
                  <div class="text-white text-sm font-medium m-auto">30</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-8 flex">
          <div>
            <div class="family-poppins text-vs font-normal">Choose a start date</div>
            <div class="relative mt-1">
              <div class="h-5 w-5 rounded-full border border-gray-400 absolute top-2 left-2"></div>
              <input class="w-40 py-1 px-8 border rounded-lg focus:outline-none">
            </div>
          </div>
          <div class="ml-24">
            <div class="family-poppins text-vs font-normal">Calculate end date</div>
            <div class="relative mt-1">
              <div class="h-5 w-5 rounded-full border border-gray-400 absolute top-2 left-2"></div>
              <input class="w-40 py-1 px-8 border rounded-lg focus:outline-none">
            </div>
          </div>
        </div>
        <div class="mt-12 flex">
          <button class="border border-indigo-700 family-poppins text-indigo-700 font-semibold text-base rounded-lg focus:outline-none py-2 px-4 w-48">Back</button>
          <a href="/list" class="ml-10 bg-indigo-700 family-poppins text-white font-semibold text-base rounded-lg focus:outline-none py-2 px-4 w-48">Create project</a>
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
export default {
  name: "project-plan",
  data(){
    return{
      openTab:1,
      menu:false
    }
  },
  methods:{
    toggleTab:function (tabNumber ,assets){
      this.openTab=tabNumber
    },
    redirectToList() {
      this.$router.push({ path:'/list'});
    },
  },

}
</script>

<style scoped>

</style>
