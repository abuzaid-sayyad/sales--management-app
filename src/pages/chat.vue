<template>
  <layout active="inbox">
    <div class="bg-white mx-2.5 pl-3">
      <div class="grid grid-cols-2 ">
        <div class="border-r border-gray-100">
          <div class="flex justify-between py-2">
            <div class="flex">
              <button class="border text-gray-700  text-vs font-medium family-poppins px-2 py-1 rounded-md focus:outline-none flex">
                <svg class="h-3 w-3 my-auto" fill="currentColor" focusable="false" viewBox="0 0 24 24"><path d="M23.12,1.31A3.75,3.75,0,0,0,19.84,0a4,4,0,0,0-2.37,1.18L8.36,10.27a3.81,3.81,0,0,0-.92,1.48L6.1,15.62a1.8,1.8,0,0,0,2.3,2.29l3.87-1.33a4.05,4.05,0,0,0,1.47-.92l9.1-9.06A4,4,0,0,0,23.12,1.31Zm-15,14.58L9,13.36,10.65,15ZM21.43,5.18l-8.92,8.87L10,11.5l8.93-8.88A2,2,0,0,1,20.05,2h.2a1.8,1.8,0,0,1,1.36.62A2,2,0,0,1,21.43,5.18ZM15,24H5a5,5,0,0,1-5-5V9A5,5,0,0,1,5,4H7A1,1,0,0,1,7,6H5A3,3,0,0,0,2,9V19a3,3,0,0,0,3,3H15a3,3,0,0,0,3-3V17a1,1,0,0,1,2,0v2A5,5,0,0,1,15,24Z"></path></svg>
                <span class="ml-1 my-auto">Send message</span>
              </button>
            </div>
            <div class="my-auto">
              <div class="flex pr-3">
                <button class="text-gray-800 text-vs font-medium family-poppins px-2 py-1 bg-gray-200 rounded-md focus:outline-none flex">
                  <svg class="h-3 w-3 my-auto" fill="currentColor" focusable="false" viewBox="0 0 24 24"><path d="M9,22H3a1,1,0,0,1-.38-.08.9.9,0,0,1-.54-.54A1,1,0,0,1,2,21H2V15a1,1,0,0,1,2,0v3.59l4.29-4.3a1,1,0,0,1,1.42,1.42L5.41,20H9a1,1,0,0,1,0,2ZM21,10a1,1,0,0,1-1-1V5.41l-4.29,4.3a1,1,0,0,1-1.42-1.42L18.59,4H15a1,1,0,0,1,0-2h6a1,1,0,0,1,.38.08.9.9,0,0,1,.54.54A1,1,0,0,1,22,3h0V9A1,1,0,0,1,21,10Z"></path></svg>
                  <!--                  <svg class="h-3 w-3 my-auto" fill="currentColor" focusable="false" viewBox="0 0 24 24"><path d="M12,3c5,0,9,4,9,9s-4,9-9,9s-9-4-9-9S7,3,12,3 M12,1C5.9,1,1,5.9,1,12s4.9,11,11,11s11-4.9,11-11S18.1,1,12,1L12,1zM11.2,16.2l6-6c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0l-5.3,5.3l-2.3-2.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l3,3c0.2,0.2,0.5,0.3,0.7,0.3S11,16.4,11.2,16.2z"></path></svg>-->
                  <span class="my-auto ml-1">Expand</span>
                </button>
                <button class="text-gray-800 mx-3 text-vs font-medium family-poppins px-2 py-1 hover:bg-gray-200 rounded-md flex focus:outline-none">
                  <svg class="h-3 w-3 my-auto" fill="currentColor" focusable="false" viewBox="0 0 24 24"><path d="M20,8H4C3.4,8,3,7.6,3,7s0.4-1,1-1h16c0.6,0,1,0.4,1,1S20.6,8,20,8z M18,13c0-0.6-0.4-1-1-1H7c-0.6,0-1,0.4-1,1s0.4,1,1,1h10C17.6,14,18,13.6,18,13z M15,19c0-0.6-0.4-1-1-1h-4c-0.6,0-1,0.4-1,1s0.4,1,1,1h4C14.6,20,15,19.6,15,19z"></path></svg>
                  <span class="my-auto ml-1">Filter</span>
                </button>
                <button class="text-gray-800 ml-3 text-vs font-medium family-poppins px-2 py-1 hover:bg-gray-200 rounded-md focus:outline-none">
                  <svg class="h-3 w-3" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10.001 7.8a2.2 2.2 0 100 4.402A2.2 2.2 0 0010 7.8zm-7 0a2.2 2.2 0 100 4.402A2.2 2.2 0 003 7.8zm14 0a2.2 2.2 0 100 4.402A2.2 2.2 0 0017 7.8z"/></svg>
                </button>
              </div>
            </div>
          </div>
          <div class="py-3 px-2 text-sm font-normal family-poppins border-b border-t">Past 7 Days</div>
          <div class="border-b py-8 px-5 bg-gray-50 ">
            <div class="flex">
              <svg class="h-4 w-4 my-auto mr-3" focusable="false" viewBox="0 0 32 32"><path d="M24,2V1c0-0.6-0.4-1-1-1s-1,0.4-1,1v1H10V1c0-0.6-0.4-1-1-1S8,0.4,8,1v1C4.7,2,2,4.7,2,8v16c0,3.3,2.7,6,6,6h16c3.3,0,6-2.7,6-6V8C30,4.7,27.3,2,24,2z M8,4v1c0,0.6,0.4,1,1,1s1-0.4,1-1V4h12v1c0,0.6,0.4,1,1,1s1-0.4,1-1V4c2.2,0,4,1.8,4,4v2H4V8C4,5.8,5.8,4,8,4z M24,28H8c-2.2,0-4-1.8-4-4V12h24v12C28,26.2,26.2,28,24,28z"></path></svg>
              <div class="text-lg font-medium family-poppins text-gray-800">Your tasks for Mar 16</div>
            </div>
            <div class="border p-2 bg-gray-200 flex w-full mt-4 rounded">
              <svg class="h-3 w-3 my-auto mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384.97 384.97"><path d="M192.485 0C86.173 0 0 86.173 0 192.485S86.173 384.97 192.485 384.97c106.3 0 192.485-86.185 192.485-192.485C384.97 86.173 298.785 0 192.485 0zm0 360.909c-93.018 0-168.424-75.406-168.424-168.424S99.467 24.061 192.485 24.061s168.424 75.406 168.424 168.424-75.406 168.424-168.424 168.424z"/><path d="M280.306 125.031L156.538 247.692l-51.502-50.479c-4.74-4.704-12.439-4.704-17.179 0a11.931 11.931 0 000 17.011l60.139 58.936c4.932 4.343 12.307 4.824 17.179 0l132.321-131.118a11.952 11.952 0 000-17.011c-4.751-4.692-12.438-4.692-17.19 0z"/></svg>
              <div class="text-xs font-medium family-poppins text-gray-800">Task for checking</div>
            </div>
          </div>
          <div class="py-3 px-2 text-sm font-normal family-poppins border-b border-t">Earlier</div>
          <div class="border-b py-8 px-5">
            <div class="flex">
              <svg class="h-4 w-4 my-auto mr-3" focusable="false" viewBox="0 0 32 32"><path d="M24,2V1c0-0.6-0.4-1-1-1s-1,0.4-1,1v1H10V1c0-0.6-0.4-1-1-1S8,0.4,8,1v1C4.7,2,2,4.7,2,8v16c0,3.3,2.7,6,6,6h16c3.3,0,6-2.7,6-6V8C30,4.7,27.3,2,24,2z M8,4v1c0,0.6,0.4,1,1,1s1-0.4,1-1V4h12v1c0,0.6,0.4,1,1,1s1-0.4,1-1V4c2.2,0,4,1.8,4,4v2H4V8C4,5.8,5.8,4,8,4z M24,28H8c-2.2,0-4-1.8-4-4V12h24v12C28,26.2,26.2,28,24,28z"></path></svg>
              <div class="text-lg font-medium family-poppins text-gray-800">Your tasks for Mar 5</div>
            </div>
            <div class="border p-2 bg-gray-200 flex w-full mt-4 rounded">
              <svg class="h-3 w-3 my-auto mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384.97 384.97"><path d="M192.485 0C86.173 0 0 86.173 0 192.485S86.173 384.97 192.485 384.97c106.3 0 192.485-86.185 192.485-192.485C384.97 86.173 298.785 0 192.485 0zm0 360.909c-93.018 0-168.424-75.406-168.424-168.424S99.467 24.061 192.485 24.061s168.424 75.406 168.424 168.424-75.406 168.424-168.424 168.424z"/><path d="M280.306 125.031L156.538 247.692l-51.502-50.479c-4.74-4.704-12.439-4.704-17.179 0a11.931 11.931 0 000 17.011l60.139 58.936c4.932 4.343 12.307 4.824 17.179 0l132.321-131.118a11.952 11.952 0 000-17.011c-4.751-4.692-12.438-4.692-17.19 0z"/></svg>
              <div class="text-xs font-medium family-poppins text-gray-800">Redesign landing page</div>
            </div>
          </div>
          <div class="border-b py-8 px-5">
            <div class="flex">
              <svg class="h-4 w-4 my-auto mr-3" focusable="false" viewBox="0 0 32 32"><path d="M24,2V1c0-0.6-0.4-1-1-1s-1,0.4-1,1v1H10V1c0-0.6-0.4-1-1-1S8,0.4,8,1v1C4.7,2,2,4.7,2,8v16c0,3.3,2.7,6,6,6h16c3.3,0,6-2.7,6-6V8C30,4.7,27.3,2,24,2z M8,4v1c0,0.6,0.4,1,1,1s1-0.4,1-1V4h12v1c0,0.6,0.4,1,1,1s1-0.4,1-1V4c2.2,0,4,1.8,4,4v2H4V8C4,5.8,5.8,4,8,4z M24,28H8c-2.2,0-4-1.8-4-4V12h24v12C28,26.2,26.2,28,24,28z"></path></svg>
              <div class="text-lg font-medium family-poppins text-gray-800">Your tasks for Mar 5</div>
            </div>
            <div class="border p-2 bg-gray-200 flex w-full mt-4 rounded">
              <svg class="h-3 w-3 my-auto mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384.97 384.97"><path d="M192.485 0C86.173 0 0 86.173 0 192.485S86.173 384.97 192.485 384.97c106.3 0 192.485-86.185 192.485-192.485C384.97 86.173 298.785 0 192.485 0zm0 360.909c-93.018 0-168.424-75.406-168.424-168.424S99.467 24.061 192.485 24.061s168.424 75.406 168.424 168.424-75.406 168.424-168.424 168.424z"/><path d="M280.306 125.031L156.538 247.692l-51.502-50.479c-4.74-4.704-12.439-4.704-17.179 0a11.931 11.931 0 000 17.011l60.139 58.936c4.932 4.343 12.307 4.824 17.179 0l132.321-131.118a11.952 11.952 0 000-17.011c-4.751-4.692-12.438-4.692-17.19 0z"/></svg>
              <div class="text-xs font-medium family-poppins text-gray-800">Redesign landing page</div>
            </div>
          </div>
          <div class="text-blue-600 text-xs font-semibold family-poppins px-5 mt-4 cursor-pointer">Archive all notifications</div>
        </div>
        <div class="col-span-1">
          <div class="relative">
            <div class="flex justify-between py-2 pr-1 pl-4">
              <div class="flex">
                <button class="border text-gray-700  text-vs font-medium family-poppins px-2 py-1 rounded-md focus:outline-none flex">
                  <svg class="h-3 w-3 my-auto" fill="currentColor" focusable="false" viewBox="0 0 24 24"><path d="M23.12,1.31A3.75,3.75,0,0,0,19.84,0a4,4,0,0,0-2.37,1.18L8.36,10.27a3.81,3.81,0,0,0-.92,1.48L6.1,15.62a1.8,1.8,0,0,0,2.3,2.29l3.87-1.33a4.05,4.05,0,0,0,1.47-.92l9.1-9.06A4,4,0,0,0,23.12,1.31Zm-15,14.58L9,13.36,10.65,15ZM21.43,5.18l-8.92,8.87L10,11.5l8.93-8.88A2,2,0,0,1,20.05,2h.2a1.8,1.8,0,0,1,1.36.62A2,2,0,0,1,21.43,5.18ZM15,24H5a5,5,0,0,1-5-5V9A5,5,0,0,1,5,4H7A1,1,0,0,1,7,6H5A3,3,0,0,0,2,9V19a3,3,0,0,0,3,3H15a3,3,0,0,0,3-3V17a1,1,0,0,1,2,0v2A5,5,0,0,1,15,24Z"></path></svg>
                  <span class="ml-1 my-auto">Send message</span>
                </button>
              </div>
              <div class="my-auto">
                <div class="flex pr-3">
                  <button class="text-gray-800 text-vs font-medium family-poppins px-2 py-1 bg-gray-200 rounded-md focus:outline-none flex">
                    <svg class="h-3 w-3 my-auto" fill="currentColor" focusable="false" viewBox="0 0 24 24"><path d="M9,22H3a1,1,0,0,1-.38-.08.9.9,0,0,1-.54-.54A1,1,0,0,1,2,21H2V15a1,1,0,0,1,2,0v3.59l4.29-4.3a1,1,0,0,1,1.42,1.42L5.41,20H9a1,1,0,0,1,0,2ZM21,10a1,1,0,0,1-1-1V5.41l-4.29,4.3a1,1,0,0,1-1.42-1.42L18.59,4H15a1,1,0,0,1,0-2h6a1,1,0,0,1,.38.08.9.9,0,0,1,.54.54A1,1,0,0,1,22,3h0V9A1,1,0,0,1,21,10Z"></path></svg>
                    <!--                  <svg class="h-3 w-3 my-auto" fill="currentColor" focusable="false" viewBox="0 0 24 24"><path d="M12,3c5,0,9,4,9,9s-4,9-9,9s-9-4-9-9S7,3,12,3 M12,1C5.9,1,1,5.9,1,12s4.9,11,11,11s11-4.9,11-11S18.1,1,12,1L12,1zM11.2,16.2l6-6c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0l-5.3,5.3l-2.3-2.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l3,3c0.2,0.2,0.5,0.3,0.7,0.3S11,16.4,11.2,16.2z"></path></svg>-->
                    <span class="my-auto ml-1">Expand</span>
                  </button>
                  <button class="text-gray-800 mx-3 text-vs font-medium family-poppins px-2 py-1 hover:bg-gray-200 rounded-md flex focus:outline-none">
                    <svg class="h-3 w-3 my-auto" fill="currentColor" focusable="false" viewBox="0 0 24 24"><path d="M20,8H4C3.4,8,3,7.6,3,7s0.4-1,1-1h16c0.6,0,1,0.4,1,1S20.6,8,20,8z M18,13c0-0.6-0.4-1-1-1H7c-0.6,0-1,0.4-1,1s0.4,1,1,1h10C17.6,14,18,13.6,18,13z M15,19c0-0.6-0.4-1-1-1h-4c-0.6,0-1,0.4-1,1s0.4,1,1,1h4C14.6,20,15,19.6,15,19z"></path></svg>
                    <span class="my-auto ml-1">Filter</span>
                  </button>
                  <button class="text-gray-800 ml-3 text-vs font-medium family-poppins px-2 py-1 hover:bg-gray-200 rounded-md focus:outline-none">
                    <svg class="h-3 w-3" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10.001 7.8a2.2 2.2 0 100 4.402A2.2 2.2 0 0010 7.8zm-7 0a2.2 2.2 0 100 4.402A2.2 2.2 0 003 7.8zm14 0a2.2 2.2 0 100 4.402A2.2 2.2 0 0017 7.8z"/></svg>
                  </button>
                </div>
              </div>
            </div>
            <div class="border-t px-5 py-6">
              <div class="text-lg font-medium family-poppins text-gray-800">Your tasks for Mar 16</div>
              <div class="flex mt-6">
                <div class="w-32 text-xs font-normal family-poppins my-auto">
                  Assignee
                </div>
                <div class="flex my-auto">
                  <div class="h-7 w-7 rounded-full bg-yellow-500 text-white flex text-vs font-semibold">
                    <span class="m-auto">AS</span>
                  </div>
                  <div class="text-xs font-medium text-gray-700 family-poppins my-auto ml-3">Abuzaid Sayyad</div>
                </div>
              </div>
              <div class="flex mt-4">
                <div class="w-32 text-xs font-normal family-poppins my-auto">
                  Projects
                </div>
                <div class="flex my-auto">
                  <div class="h-7 w-7 rounded-full border border-yellow-500 text-yellow-500 flex">
                    <svg class="h-4 w-4 m-auto" fill="currentColor" focusable="false" viewBox="0 0 32 32"><path d="M24,2V1c0-0.6-0.4-1-1-1s-1,0.4-1,1v1H10V1c0-0.6-0.4-1-1-1S8,0.4,8,1v1C4.7,2,2,4.7,2,8v16c0,3.3,2.7,6,6,6h16c3.3,0,6-2.7,6-6V8C30,4.7,27.3,2,24,2z M8,4v1c0,0.6,0.4,1,1,1s1-0.4,1-1V4h12v1c0,0.6,0.4,1,1,1s1-0.4,1-1V4c2.2,0,4,1.8,4,4v2H4V8C4,5.8,5.8,4,8,4z M24,28H8c-2.2,0-4-1.8-4-4V12h24v12C28,26.2,26.2,28,24,28z"></path></svg>
                  </div>
                  <div class="text-xs font-medium text-gray-700 family-poppins my-auto ml-3">March 3 - 5</div>
                </div>
              </div>
              <div class="flex mt-4">
                <div class="w-32 text-xs font-normal family-poppins my-auto">
                  Dependencies
                </div>
                <div class="flex my-auto">
                  <div class="text-xs font-medium text-gray-600 family-poppins my-auto">Add dependencies</div>
                </div>
              </div>
              <div class="flex mt-4">
                <div class="w-32 text-xs font-normal family-poppins my-auto">
                  Priority
                </div>
                <div class="flex my-auto">
                  <button class="text-white font-medium text-xs family-poppins bg-green-600 rounded-full px-2 py-1 focus:outline-none cursor-auto">High</button>
                </div>
              </div>
              <div class="flex mt-4">
                <div class="w-32 text-xs font-normal family-poppins my-auto">
                  Status
                </div>
                <div class="flex my-auto">
                  <button class="text-white font-medium text-xs family-poppins bg-pink-600 rounded-full px-2 py-1 focus:outline-none cursor-auto">Off track</button>
                </div>
              </div>
              <div class="flex mt-4">
                <div class="w-32 text-xs font-normal family-poppins my-auto">
                  Description
                </div>
                <div class="text-xs font-medium text-gray-600 family-poppins my-auto">Add more detail to this...</div>

              </div>
              <div class="mt-8">
                <button class="text-gray-600 family-poppins text-xs font-medium flex hover:bg-gray-100 px-3 py-1 rounded focus:outline-none">
                  <svg class="h-3 w-3 my-auto" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16 10c0 .553-.048 1-.601 1H11v4.399c0 .552-.447.601-1 .601-.553 0-1-.049-1-.601V11H4.601C4.049 11 4 10.553 4 10c0-.553.049-1 .601-1H9V4.601C9 4.048 9.447 4 10 4c.553 0 1 .048 1 .601V9h4.399c.553 0 .601.447.601 1z"/></svg>
                  <span class="my-auto ml-2">Add subtask</span>
                </button>
              </div>
            </div>
            <div class="fixed bottom-0 w-full bg-white h-32">
              <div class="border w-full h-8 rounded-md my-10"></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </layout>
</template>

<script>
import Layout from "../components/layout.vue";
export default {
  name: "chat",
  components: {Layout},
  data(){
    return{
      openPlanning:true,
      opensubplanning:true,
      openMilestone:true,
      openSteps:true,
      openReferences:true,
    }
  }
}
</script>

<style scoped>
.h-screen-23px{
  height: calc(100vh - 145px);
}
</style>
