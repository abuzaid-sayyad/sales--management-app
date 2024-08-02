<template>
  <layout active="overview">
    <div class="w-full  overflow-hidden">
      <div class="flex">
        <div class="px-14 pt-16 pb-4 h-screen-24px overflow-y-auto" style="width: 70%">
          <div class="w-full flex-col">
            <h3 class="text-xl font-semibold text-gray-800 family-poppins">How we'll collaborate</h3>
            <p class="text-xs font-normal mt-2 text-gray-800 family-poppins">This template includes tasks necessary to complete our plan that's slated to launch on [DATE]. Use the priority and progress fields to label your work.</p>
          </div>
          <div class="w-full flex-col mt-16">
            <h3 class="text-xl font-semibold text-gray-800 family-poppins">Project roles</h3>
            <div class="flex mt-4">
              <div class="flex">
                <div class="h-10 w-10 cursor-pointer rounded-full border flex border-dashed border-gray-900">
                  <svg class="h-3 w-3 m-auto" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill-rule="evenodd" d="M492 236H276V20c0-11.046-8.954-20-20-20s-20 8.954-20 20v216H20c-11.046 0-20 8.954-20 20s8.954 20 20 20h216v216c0 11.046 8.954 20 20 20s20-8.954 20-20V276h216c11.046 0 20-8.954 20-20s-8.954-20-20-20z"/></svg>
                </div>
                <div class="my-auto ml-4 text-sm font-medium family-poppins">Add remember</div>
              </div>
              <div class="flex ml-20">
                <div class="h-10 w-10 rounded-full bg-yellow-400 flex">
                  <span class="text-white font-semibold family-poppins text-xs m-auto">AS</span>
                </div>
                <div class="ml-4 my-auto">
                  <div class="my-auto text-sm font-medium family-poppins">Abuzaid Sayyad</div>
                  <div class="my-auto text-vs text-gray-500 mt-1 font-medium family-poppins">Project owner</div>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full flex-col mt-12">
            <h3 class="text-xl font-semibold text-gray-800 family-poppins">Key resources</h3>
            <div class="flex border border-gray-300 rounded-lg w-full justify-center flex h-36 mt-4">
              <div class="w-2/3 m-auto flex">
                <img class="h-40 w-40" src="../assets/images/key_resources.svg" />
                <div class="flex-col w-full my-auto">
                  <div class="text-xs font-medium family-poppins">
                    Align your team around a shared vision with a project brief and supporting resources.
                  </div>
                  <div class="flex mt-3">
                    <button class="bg-blue-500 rounded-md px-2 py-2 text-xs text-white family-poppins focus:outline-none">Create project brief</button>
                    <button class=" ml-3 border border-gray-300 rounded-md px-2 py-2 text-xs text-gray-800 family-poppins focus:outline-none">Add links & Files</button>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div class="w-full flex-col mt-12">
            <div class="flex">
              <h3 class="text-xl font-semibold text-gray-800 family-poppins">Milestone</h3>
              <svg class="h-3 w-3 my-auto ml-3 cursor-pointer" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill-rule="evenodd" d="M492 236H276V20c0-11.046-8.954-20-20-20s-20 8.954-20 20v216H20c-11.046 0-20 8.954-20 20s8.954 20 20 20h216v216c0 11.046 8.954 20 20 20s20-8.954 20-20V276h216c11.046 0 20-8.954 20-20s-8.954-20-20-20z"/></svg>
            </div>
            <div class="mt-3">
              <div class="w-full border-t border-b py-3 border-gray-300 text-gray-500 hover:text-green-500 flex cursor-pointer hover:border-green-500">
                <svg class="h-4 w-4 transform rotate-45" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><path d="M49.001 0H10.999C4.934 0 0 4.934 0 10.999v38.003C0 55.066 4.934 60 10.999 60h38.002C55.065 60 60 55.066 60 49.001V10.999C60 4.934 55.065 0 49.001 0zM58 49.001C58 53.963 53.963 58 49.001 58H10.999C6.037 58 2 53.963 2 49.001V10.999C2 6.037 6.037 2 10.999 2h38.002C53.963 2 58 6.037 58 10.999v38.002z"/></svg>
                <div class="text-xs font-semibold text-gray-400 ml-3">Add milestone....</div>
              </div>
            </div>
          </div>
          <div class="w-full flex-col mt-12">
            <div class="flex">
              <h3 class="text-xl font-semibold text-gray-800 family-poppins">Goals this project supports
              </h3>
              <svg class="h-3 w-3 my-auto ml-3 cursor-pointer" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill-rule="evenodd" d="M492 236H276V20c0-11.046-8.954-20-20-20s-20 8.954-20 20v216H20c-11.046 0-20 8.954-20 20s8.954 20 20 20h216v216c0 11.046 8.954 20 20 20s20-8.954 20-20V276h216c11.046 0 20-8.954 20-20s-8.954-20-20-20z"/></svg>
            </div>
            <div class="mt-3">
              <div class="w-full border-t border-b py-3 border-gray-300 text-gray-500 hover:text-green-500 cursor-pointer hover:border-green-500 flex">
                <svg class="h-4 w-4 transform rotate-45" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><path d="M49.001 0H10.999C4.934 0 0 4.934 0 10.999v38.003C0 55.066 4.934 60 10.999 60h38.002C55.065 60 60 55.066 60 49.001V10.999C60 4.934 55.065 0 49.001 0zM58 49.001C58 53.963 53.963 58 49.001 58H10.999C6.037 58 2 53.963 2 49.001V10.999C2 6.037 6.037 2 10.999 2h38.002C53.963 2 58 6.037 58 10.999v38.002z"/></svg>
                <div class="text-xs font-semibold text-gray-400 ml-3">search for a goals....</div>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-white p-6" style="width: 31%">
          <h3 class="text-xl font-semibold text-gray-800 family-poppins">What's the status?</h3>
          <div class="flex mt-3">
            <button class="text-green-400 px-2 py-1 text-xs rounded-md family-poppins border border-gray-200 flex focus:outline-none hover:bg-green-100">
              <svg class="h-4 w-4 my-auto" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 3a7 7 0 10.001 13.999A7 7 0 0010 3z"/></svg>
              <span class="ml-2 my-auto">On Track</span>
            </button>
            <button class="text-yellow-400 px-2 py-1 text-xs rounded-md family-poppins border border-gray-200 flex mx-3 focus:outline-none hover:bg-yellow-100">
              <svg class="h-4 w-4 my-auto" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 3a7 7 0 10.001 13.999A7 7 0 0010 3z"/></svg>
              <span class="ml-2 my-auto">At Risk</span>
            </button>
            <button class="text-red-400 px-2 py-1 text-xs rounded-md family-poppins border border-gray-200 flex focus:outline-none hover:bg-red-100">
              <svg class="h-4 w-4 my-auto" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 3a7 7 0 10.001 13.999A7 7 0 0010 3z"/></svg>
              <span class="ml-2 my-auto">Off Track</span>
            </button>
          </div>
          <div class="mt-10 flex">
            <div class="h-8 w-8 cursor-pointer rounded-full border flex border-dashed border-gray-600 text-gray-500">
              <svg class="h-4 w-4 m-auto" fill="currentColor"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M17 3h-1v2h-3V3H7v2H4V3H3c-1.101 0-2 .9-2 2v12c0 1.1.899 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 14H3V9h14v8zM6.5 1h-2v3.5h2V1zm9 0h-2v3.5h2V1z"/></svg>
            </div>
            <div class="my-auto ml-3 text-xs font-normal text-gray-800 family-poppins">No due date</div>
          </div>
          <div class="border-l border-dashed border-gray-500 h-16 ml-4"></div>
          <div class=" flex">
            <div class="h-5 w-8 cursor-pointer flex text-gray-500">
              <svg class="h-4 w-4 m-auto" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 505.4 505.4"><path d="M437.1 233.45c14.8-10.4 24.6-27.7 24.6-47.2 0-31.9-25.8-57.7-57.7-57.7-31.9 0-57.7 25.8-57.7 57.7 0 19.5 9.7 36.8 24.6 47.2-12.7 4.4-24.3 11.2-34.1 20-13.5-11.5-29.4-20.3-46.8-25.5 21.1-12.8 35.3-36.1 35.3-62.6 0-40.4-32.7-73.1-73.1-73.1-40.4 0-73.1 32.8-73.1 73.1 0 26.5 14.1 49.8 35.3 62.6-17.2 5.2-32.9 13.9-46.3 25.2-9.8-8.6-21.2-15.3-33.7-19.6 14.8-10.4 24.6-27.7 24.6-47.2 0-31.9-25.8-57.7-57.7-57.7s-57.7 25.8-57.7 57.7c0 19.5 9.7 36.8 24.6 47.2-39.7 13.7-68.2 51.4-68.2 95.7v6.6c0 .2.2.4.4.4h122.3c-.7 5.5-1.1 11.2-1.1 16.9v6.8c0 29.4 23.8 53.2 53.2 53.2h155c29.4 0 53.2-23.8 53.2-53.2v-6.8c0-5.7-.4-11.4-1.1-16.9H505c.2 0 .4-.2.4-.4v-6.6c-.2-44.4-28.6-82.1-68.3-95.8zm-74.8-47.3c0-23 18.7-41.7 41.7-41.7s41.7 18.7 41.7 41.7c0 22.7-18.3 41.2-40.9 41.7h-1.6c-22.7-.4-40.9-18.9-40.9-41.7zm-167.4-20.8c0-31.5 25.6-57.1 57.1-57.1s57.1 25.6 57.1 57.1c0 30.4-23.9 55.3-53.8 57h-6.6c-29.9-1.7-53.8-26.6-53.8-57zm-135.6 20.8c0-23 18.7-41.7 41.7-41.7s41.7 18.7 41.7 41.7c0 22.7-18.3 41.2-40.9 41.7h-1.6c-22.6-.4-40.9-18.9-40.9-41.7zm66.2 134H16.2c4.5-42.6 40.5-76 84.2-76.3h1.2c20.8.1 39.8 7.8 54.5 20.3-14.4 15.6-25.1 34.8-30.6 56zm241.3 39.8c0 20.5-16.7 37.2-37.2 37.2h-155c-20.5 0-37.2-16.7-37.2-37.2v-6.8c0-62.1 49.6-112.9 111.3-114.7 1.1.1 2.3.1 3.4.1s2.3 0 3.4-.1c61.7 1.8 111.3 52.6 111.3 114.7v6.8zm11.9-39.8c-5.5-21.1-16-40-30.3-55.6 14.8-12.8 34-20.5 55-20.7h1.2c43.7.3 79.7 33.7 84.2 76.3H378.7z"/></svg>
            </div>
            <div class="ml-3">
              <div class="text-xs font-normal text-gray-800 family-poppins">You joined</div>
              <div class="my-1 text-vs font-normal text-gray-500  family-poppins">4 days ago</div>
              <div class="h-6 w-6 rounded-full bg-yellow-400 flex">
                <div class="text-xs font-medium text-white family-poppins m-auto">AS</div>
              </div>
            </div>
          </div>
          <div class="border-l border-dashed border-gray-500 h-28 -mt-11 ml-4"></div>
          <div class="flex">
            <div class="h-6 w-8 cursor-pointer flex text-gray-500">
              <svg class="h-4 w-4 m-auto" fill="currentColor" viewBox="-79 -16 533 533.333" xmlns="http://www.w3.org/2000/svg"><path d="M315.809 33.95h-80.356a56.94 56.94 0 00-104.183 0H50.91C20.598 33.983-3.965 58.55-4 88.862v356.223c.035 30.312 24.598 54.879 54.91 54.914H315.81c30.312-.035 54.879-24.602 54.914-54.914V88.863c-.035-30.312-24.602-54.879-54.914-54.914zm-175.496 25a12.5 12.5 0 0012.207-9.821C155.59 35.152 168.563 25 183.363 25s27.77 10.152 30.84 24.129a12.494 12.494 0 0012.211 9.82H251.2v10.969c-.02 16.512-13.398 29.89-29.91 29.91h-75.855c-16.516-.02-29.895-13.398-29.914-29.91V58.949zm205.41 386.136c-.016 16.516-13.399 29.898-29.914 29.914H50.91c-16.512-.016-29.89-13.398-29.91-29.914V88.863c.02-16.515 13.398-29.894 29.91-29.914h39.61v10.969c.035 30.312 24.601 54.875 54.914 54.91h75.855c30.313-.035 54.875-24.598 54.91-54.91V58.949h39.61c16.515.02 29.894 13.399 29.914 29.914zm0 0"/><path d="M245.227 230.957l-82.063 80.125-41.672-40.676c-4.902-4.797-12.754-4.738-17.594.121-4.835 4.864-4.855 12.715-.039 17.598l.168.164 50.399 49.211c4.86 4.742 12.613 4.742 17.469 0l90.792-88.648c4.91-4.829 4.989-12.715.184-17.641-4.812-4.926-12.695-5.035-17.644-.246zm0 0"/></svg>
            </div>
            <div class="ml-3">
              <div class="my-auto  text-xs font-medium text-gray-800 family-poppins">Project created</div>
              <div class="my-auto  text-xs font-normal text-gray-800 family-poppins mt-1">Abuzaid Sayyad <span class="text-vs font-normal text-gray-400">4 days ago </span></div>

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
  name: "overview",
  components: {Layout}
}
</script>

<style scoped>
.h-screen-24px{
  height: calc(100vh - 65px);
}
</style>
