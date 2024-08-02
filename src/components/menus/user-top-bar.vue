<template>
  <div>
    <div class="w-full bg-gray-100 fixed top-0 flex z-30 h-16 pr-3">
      <div style="width: 17.3%"></div>
      <div style="width: 83.7%" class="flex justify-between h-full px-3">
        <div class="my-auto text-base font-bold family-poppins px-2">Welcome, <span class="text-gray-600 text-sm font-medium ">Abuzaid Sayyad</span></div>
        <div class="flex my-auto">
          <div class="relative w-56 my-auto">
            <input type="search" class="family-poppins w-full py-3 pl-10 pr-3 focus:outline-none bg-white font-normal rounded-xl text-xs" placeholder="Search something here..">
            <svg class="w-4 h-4 text-gray-500 absolute left-3 top-3.5 cursor-pointer" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56.966 56.966"><path d="M55.146 51.887L41.588 37.786A22.926 22.926 0 0046.984 23c0-12.682-10.318-23-23-23s-23 10.318-23 23 10.318 23 23 23c4.761 0 9.298-1.436 13.177-4.162l13.661 14.208c.571.593 1.339.92 2.162.92.779 0 1.518-.297 2.079-.837a3.004 3.004 0 00.083-4.242zM23.984 6c9.374 0 17 7.626 17 17s-7.626 17-17 17-17-7.626-17-17 7.626-17 17-17z" fill-rule="evenodd"/></svg>
          </div>
          <div @click="DialogueMain" class="flex my-auto h-7 w-7 bg-gradient-to-l from-purple-300 to-purple-700 hover:bg-gradient-to-l from-purple-700 to-purple-300 p-1 rounded-full focus:outline-none mx-4 cursor-pointer">
            <svg class="w-4 h-4 m-auto " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="#FFF" d="M16 10c0 .553-.048 1-.601 1H11v4.399c0 .552-.447.601-1 .601-.553 0-1-.049-1-.601V11H4.601C4.049 11 4 10.553 4 10c0-.553.049-1 .601-1H9V4.601C9 4.048 9.447 4 10 4c.553 0 1 .048 1 .601V9h4.399c.553 0 .601.447.601 1z" fill-rule="evenodd"/></svg>
          </div>
          <div @click="NotifyMain" class="my-auto relative">
            <div class="w-2 h-2 rounded-full bg-red-500 absolute -top-1 right-1.5"></div>
            <svg class="w-8 h-8 text-gray-700 cursor-pointer" fill="currentColor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <path fill="currentColor" d="M17,12 L18.5,12 C19.3284271,12 20,12.6715729 20,13.5 C20,14.3284271 19.3284271,15 18.5,15 L5.5,15 C4.67157288,15 4,14.3284271 4,13.5 C4,12.6715729 4.67157288,12 5.5,12 L7,12 L7.5582739,6.97553494 C7.80974924,4.71225688 9.72279394,3 12,3 C14.2772061,3 16.1902508,4.71225688 16.4417261,6.97553494 L17,12 Z" fill-rule="evenodd"/>
                <rect fill="#000000" opacity="0.3" x="10" y="16" width="4" height="4" rx="2"/>
              </g>
            </svg>
          </div>
          <div @click="LogMain" class="flex w-12 h-12 p-2 rounded-full ml-4 cursor-pointer" style="background-color: #1BC5BD">
            <div class="text-white font-bold family-poppins text-sm m-auto">AS</div>
          </div>
        </div>
      </div>
      <div class="bg-white rounded border w-40 absolute top-16 right-28 z-30 shadow-xl" v-if="DialogueBox">
        <div class="flex justify-end w-full">
          <div class="flex flex-col w-4 h-4 transform rotate-45 bg-white border-t border-l -mt-2 mr-7"></div>
        </div>
        <div  class="py-1 z-30">
          <div @click="openModal = true" class="bg-white py-2.5 flex w-full hover-bg-teal text-teal hover:text-white cursor-pointer">
            <svg class="w-3 h-3 ml-4 my-auto" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330 330"><path d="M165 0C74.019 0 0 74.019 0 165s74.019 165 165 165 165-74.019 165-165S255.981 0 165 0zm0 300c-74.44 0-135-60.561-135-135S90.56 30 165 30s135 60.561 135 135-60.561 135-135 135z"/><path d="M226.872 106.664l-84.854 84.853-38.89-38.891c-5.857-5.857-15.355-5.858-21.213-.001-5.858 5.858-5.858 15.355 0 21.213l49.496 49.498a15 15 0 0010.606 4.394h.001c3.978 0 7.793-1.581 10.606-4.393l95.461-95.459c5.858-5.858 5.858-15.355 0-21.213-5.858-5.858-15.355-5.859-21.213-.001z" fill-rule="evenodd"/></svg>
            <div class="family-poppins text-xs font-normal ml-3 my-auto">Tasks</div>
          </div>
          <a href="/create-project" class="bg-white py-2.5 flex w-full hover-bg-teal text-teal hover:text-white cursor-pointer">
            <svg class="w-3 h-3 ml-4 my-auto" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 438.891 438.891"><path d="M347.968 57.503h-39.706V39.74c0-5.747-6.269-8.359-12.016-8.359h-30.824C258.108 10.483 239.822.034 218.924.034c-20.668-.777-39.467 11.896-46.498 31.347h-30.302c-5.747 0-11.494 2.612-11.494 8.359v17.763H90.923c-23.53.251-42.78 18.813-43.886 42.318v299.363c0 22.988 20.898 39.706 43.886 39.706h257.045c22.988 0 43.886-16.718 43.886-39.706V99.822c-1.106-23.506-20.356-42.068-43.886-42.319zm-196.441-5.224h28.735a11.496 11.496 0 009.927-9.404c3.094-13.474 14.915-23.146 28.735-23.51 13.692.415 25.335 10.117 28.212 23.51a11.494 11.494 0 0010.449 9.404h29.78v41.796H151.527V52.279zm219.429 346.906c0 11.494-11.494 18.808-22.988 18.808H90.923c-11.494 0-22.988-7.314-22.988-18.808V99.822c1.066-11.964 10.978-21.201 22.988-21.42h39.706v26.645c.552 5.854 5.622 10.233 11.494 9.927h154.122a11.493 11.493 0 0012.016-9.927V78.401h39.706c12.009.22 21.922 9.456 22.988 21.42v299.364z"/><path d="M179.217 233.569c-3.919-4.131-10.425-4.364-14.629-.522l-33.437 31.869-14.106-14.629c-3.919-4.131-10.425-4.363-14.629-.522a10.971 10.971 0 000 15.151l21.42 21.943a9.403 9.403 0 007.314 3.135 10.446 10.446 0 007.314-3.135l40.751-38.661c4.04-3.706 4.31-9.986.603-14.025a8.78 8.78 0 00-.601-.604zM329.16 256.034H208.997c-5.771 0-10.449 4.678-10.449 10.449s4.678 10.449 10.449 10.449H329.16c5.771 0 10.449-4.678 10.449-10.449s-4.678-10.449-10.449-10.449zM179.217 149.977c-3.919-4.131-10.425-4.364-14.629-.522l-33.437 31.869-14.106-14.629c-3.919-4.131-10.425-4.364-14.629-.522a10.971 10.971 0 000 15.151l21.42 21.943a9.403 9.403 0 007.314 3.135 10.446 10.446 0 007.314-3.135l40.751-38.661c4.04-3.706 4.31-9.986.603-14.025a8.78 8.78 0 00-.601-.604zM329.16 172.442H208.997c-5.771 0-10.449 4.678-10.449 10.449s4.678 10.449 10.449 10.449H329.16c5.771 0 10.449-4.678 10.449-10.449s-4.678-10.449-10.449-10.449zM179.217 317.16c-3.919-4.131-10.425-4.363-14.629-.522l-33.437 31.869-14.106-14.629c-3.919-4.131-10.425-4.363-14.629-.522a10.971 10.971 0 000 15.151l21.42 21.943a9.403 9.403 0 007.314 3.135 10.446 10.446 0 007.314-3.135l40.751-38.661c4.04-3.706 4.31-9.986.603-14.025a9.253 9.253 0 00-.601-.604zM329.16 339.626H208.997c-5.771 0-10.449 4.678-10.449 10.449s4.678 10.449 10.449 10.449H329.16c5.771 0 10.449-4.678 10.449-10.449s-4.678-10.449-10.449-10.449z" fill-rule="evenodd"/></svg>
            <div class="family-poppins text-xs font-normal ml-3 my-auto">Project</div>
          </a>
          <div class="bg-white py-2.5 flex w-full hover-bg-teal text-teal hover:text-white cursor-pointer">
            <svg class="w-3 h-3 ml-4 my-auto" fill="currentColor" viewBox="-21 -47 682.667 682" xmlns="http://www.w3.org/2000/svg"><path d="M552.012-1.332H87.988C39.473-1.332 0 38.133 0 86.656V370.63c0 48.414 39.3 87.816 87.676 87.988V587.48l185.191-128.863h279.145c48.515 0 87.988-39.472 87.988-87.988V86.656c0-48.523-39.473-87.988-87.988-87.988zm50.488 371.96c0 27.837-22.648 50.49-50.488 50.49h-290.91l-135.926 94.585v-94.586H87.988c-27.84 0-50.488-22.652-50.488-50.488V86.656c0-27.843 22.648-50.488 50.488-50.488h464.024c27.84 0 50.488 22.645 50.488 50.488zm0 0"/><path d="M171.293 131.172h297.414v37.5H171.293zm0 0M171.293 211.172h297.414v37.5H171.293zm0 0M171.293 291.172h297.414v37.5H171.293zm0 0" fill-rule="evenodd"/></svg>
            <div class="family-poppins text-xs font-normal ml-3 my-auto ">Message</div>
          </div>
          <div class="bg-white py-2.5 flex w-full hover-bg-teal text-teal hover:text-white cursor-pointer">
            <svg class="w-3 h-3 ml-4 my-auto" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M367.57 256.909a260.207 260.207 0 00-30.093-12.081C370.56 219.996 392 180.455 392 136 392 61.01 330.991 0 256 0S120 61.01 120 136c0 44.504 21.488 84.084 54.633 108.911-30.368 9.998-58.863 25.555-83.803 46.069-45.732 37.617-77.529 90.086-89.532 147.743-3.762 18.066.745 36.622 12.363 50.908C25.222 503.847 42.365 512 60.693 512H307c11.046 0 20-8.954 20-20s-8.954-20-20-20H60.693c-8.538 0-13.689-4.766-15.999-7.606-3.989-4.905-5.533-11.29-4.236-17.519 20.755-99.695 108.691-172.521 210.24-174.977a137.229 137.229 0 0010.656-.002c31.12.73 61.05 7.832 89.044 21.14 9.977 4.74 21.907.499 26.649-9.478 4.742-9.976.5-21.907-9.477-26.649zm-106.692-25.032a260.16 260.16 0 00-9.718.002C200.465 229.35 160 187.312 160 136c0-52.935 43.065-96 96-96s96 43.065 96 96c0 51.299-40.445 93.329-91.122 95.877z"/><path d="M492 397h-55v-55c0-11.046-8.954-20-20-20s-20 8.954-20 20v55h-55c-11.046 0-20 8.954-20 20s8.954 20 20 20h55v55c0 11.046 8.954 20 20 20s20-8.954 20-20v-55h55c11.046 0 20-8.954 20-20s-8.954-20-20-20z" fill-rule="evenodd"/></svg>
            <div class="family-poppins text-xs font-normal ml-3 my-auto">Invite</div>
          </div>
        </div>
      </div>
      <div v-if="NotifyBox" class="absolute top-16 right-5 z-30">
        <div class="rounded w-80 relative shadow-xl">
          <!--        <img src="../../assets/images/bg-1.jpg">-->
          <img class="rounded-t" src="/src/assets/images/bg-1.jpg">
          <div class="flex w-full justify-center absolute top-14 ">
            <div class="text-white family-poppins text-base font-medium my-auto">User Notifications</div>
            <button class="family-poppins px-3 py-2 ml-3 text-xs font-medium rounded bg-teal text-white focus:outline-none">24 new</button>
          </div>
          <div class="w-full px-3">
            <div class="family-poppins text-xs font-medium text-white -mt-4 cursor-pointer">Alerts</div>
          </div>
          <div class="bg-white rounded-b flex flex-col h-80 overflow-y-auto">
            <div v-for="item in 6" :key="item" class="flex p-3 hover:bg-indigo-100 cursor-pointer mt-2">
              <div class="my-auto rounded-lg p-1 bg-gray-100">
                <svg class="w-8 h-8 text-indigo-500" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <rect x="0" y="0" width="24" height="24"/>
                    <path fill="currentColor" d="M5,3 L6,3 C6.55228475,3 7,3.44771525 7,4 L7,20 C7,20.5522847 6.55228475,21 6,21 L5,21 C4.44771525,21 4,20.5522847 4,20 L4,4 C4,3.44771525 4.44771525,3 5,3 Z M10,3 L11,3 C11.5522847,3 12,3.44771525 12,4 L12,20 C12,20.5522847 11.5522847,21 11,21 L10,21 C9.44771525,21 9,20.5522847 9,20 L9,4 C9,3.44771525 9.44771525,3 10,3 Z" fill-rule="evenodd"/>
                    <rect fill="currentColor" opacity="0.3" transform="translate(17.825568, 11.945519) rotate(-19.000000) translate(-17.825568, -11.945519) " x="16.3255682" y="2.94551858" width="3" height="18" rx="1" fill-rule="evenodd"/>
                  </g>
                </svg>
              </div>
              <div class="my-auto ml-3">
                <div class="text-xs text-gray-700 font-medium">Cool App</div>
                <div class="text-vs text-gray-600 font-medium">Marketing campaign planing</div>
              </div>
            </div>
            <div class="flex justify-center py-3">
              <button class="family-poppins font-medium text-xs bg-indigo-600 text-white py-2 px-4 rounded focus:outline-none">See All</button>
            </div>
          </div>
        </div>
      </div>
      <div v-if="LogBox" class="absolute top-16 right-4 z-40">
        <div class="w-64 rounded bg-white shadow-xl">
          <!--        <img class="rounded-t w-full h-16" src="../../assets/images/bg-1.jpg">-->
          <div class="h-24 flex rounded-t" style="background-image: url(https://preview.keenthemes.com/metronic/theme/html/demo1/dist/assets/media/misc/bg-1.jpg);background-repeat: no-repeat;background-size: cover;">
            <div class="flex m-auto">
              <img class="h-14 w-14 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1595273185163-347066c49ad3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fG1hbiUyMGZhY2V8ZW58MHwyfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60">
              <div class="ml-3 my-auto">
                <div class="font-semibold text-gray-100 family-poppins text-base">Abuzaid Sayyad</div>
                <div class="text-white font-normal family-poppins text-xs mt-1">Frontend Developer</div>
              </div>
            </div>
          </div>
          <div class="">
            <div class="flex py-3 border-b px-3 px-1 hover:bg-gray-100 cursor-pointer">
              <svg class="w-3 h-3 my-auto" viewBox="0 -65 424.032 424" xmlns="http://www.w3.org/2000/svg"><path d="M146.66 293.367c-4.094 0-8.191-1.558-11.305-4.695L4.688 158.004c-6.25-6.25-6.25-16.383 0-22.633s16.382-6.25 22.636 0l119.36 119.36L396.71 4.702c6.25-6.25 16.383-6.25 22.633 0s6.25 16.387 0 22.637L158.012 288.672a16.05 16.05 0 01-11.352 4.695zm0 0" fill-rule="evenodd"/></svg>
              <div class="text-xs font-medium my-auto family-poppins ml-4">Design</div>
            </div>
            <div class="py-3 hover:bg-gray-100 border-b px-3 cursor-pointer">
              <div class="text-xs font-medium my-auto family-poppins rounded-lg ">Admin Console</div>

            </div>
            <div class="flex justify-between w-full p-3 border-b hover:bg-gray-100 cursor-pointer">
              <div class="text-xs font-medium my-auto family-poppins my-auto">More</div>
              <svg class="w-4 h-4 my-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="#000" d="M9.163 4.516c.418.408 4.502 4.695 4.502 4.695a1.095 1.095 0 010 1.576s-4.084 4.289-4.502 4.695c-.418.408-1.17.436-1.615 0-.446-.434-.481-1.041 0-1.574L11.295 10 7.548 6.092c-.481-.533-.446-1.141 0-1.576.445-.436 1.197-.409 1.615 0z" fill-rule="evenodd"/></svg>
            </div>
            <div class="text-xs p-3 border-b w-full font-medium my-auto family-poppins hover:bg-gray-100 cursor-pointer">My Profile Settings</div>
            <div class="text-xs p-3 border-b font-medium my-auto family-poppins hover:bg-gray-100 cursor-pointer">Privacy Policy</div>
            <div class="text-xs p-3 font-medium my-auto family-poppins hover:bg-gray-100 cursor-pointer">Log Out</div>
          </div>
        </div>
      </div>
      <button v-if="NotifyBox || LogBox || DialogueBox" @click="CloseModel" class="fixed focus:outline-none top-0 right-0 left-0 bottom-0 w-full h-full cursor-default"></button>
    </div>
    <div v-if="openModal" class="h-screen w-screen bg-gray-600 bg-opacity-50 fixed top-0 z-50 flex">
      <div class="w-1/2 rounded-lg bg-white m-auto">
        <div class="flex justify-between p-4">
          <div class="text-base font-medium family-poppins my-auto">Create Issue</div>
          <div class="flex my-auto">
            <button class="bg-gray-100 px-3 py-2 text-sm family-poppins rounded mr-3">Import issue</button>
            <button class="bg-gray-100 px-3 py-2 text-sm family-poppins rounded">Import issue</button>
          </div>
        </div>

        <div style="height: 520px" class="overflow-y-auto p-4">
          <div class="w-full mt-2 pb-4 border-b">
            <div class="text-xs font-medium family-poppins mb-2">Projects *</div>
            <input type="text" class="px-3 w-1/2 py-3 bg-gray-100 rounded-md family-poppins text-gray-600 focus:outline-none text-xs" >
            <div class="text-xs font-medium family-poppins mb-1 mt-3">Issue type *</div>
            <input type="text" class="px-3 w-1/2 py-3 text-xs bg-gray-100 rounded-md family-poppins text-gray-600 focus:outline-none" >
            <div class="text-vs font-medium family-poppins text-gray-600 mt-1">Some issue types are unavailable due to incompatible field configuration and/or workflow associations.</div>
          </div>
          <div class="py-4">
            <div>
              <div class="text-xs font-medium family-poppins mb-1">Description</div>
              <input type="text" class="px-3 w-full py-3 text-xs bg-gray-100 rounded-md family-poppins text-gray-600 focus:outline-none" >
            </div>
            <div class="my-3">
              <div class="text-xs font-medium family-poppins mb-1">Components</div>
              <div class="text-sm font-semibold family-poppins mb-1">None</div>
            </div>
            <div>
              <div class="text-sm font-medium family-poppins mb-1">Attachment</div>
              <div class="h-10 w-2/3 border border-dashed border-gray-300 flex">
                <div class="m-auto flex">
                  <img src="../../assets/images/download.svg"/>
                  <div class="text-sm font-normal family-poppins text-gray-700 mx-3">Drop files to attach, </div>
                  <div class="text-sm font-normal family-poppins text-indigo-600">browse</div>
                </div>
              </div>
            </div>
            <div class="my-3">
              <div class="text-xs font-medium family-poppins mb-1">Description</div>
              <input type="text" class="px-3 w-full py-3 text-xs bg-gray-100 rounded-md family-poppins text-gray-600 focus:outline-none" >
            </div>
            <div class="text-xs font-medium family-poppins mb-1 mt-3">Reporter *</div>
            <input type="text" class="px-3 w-2/3 py-3 text-xs bg-gray-100 rounded-md family-poppins text-gray-600 focus:outline-none" >
            <div class="text-vs font-medium family-poppins text-gray-600 mt-1">Some issue types are unavailable due to incompatible field configuration and/or workflow associations.</div>
            <div class="my-3">
              <div class="text-xs font-medium family-poppins mb-1 mt-3">Linked Issues</div>
              <input type="text" class="px-3 w-2/3 py-3 text-xs bg-gray-100 rounded-md family-poppins text-gray-600 focus:outline-none" >
            </div>
            <div class="">
              <div class="text-xs font-medium family-poppins mb-1 mt-3">Issue</div>
              <input type="text" class="px-3 w-2/3 py-3 text-xs bg-gray-100 rounded-md family-poppins text-gray-600 focus:outline-none" >
              <div class="text-vs font-medium family-poppins text-gray-600 mt-1">Begin typing to search for issues to link. If you leave it blank, no link will be made.</div>
            </div>
            <div class="my-3">
              <div class="text-xs font-medium family-poppins mb-1">Components</div>
              <div class="text-sm font-semibold family-poppins mb-1">None</div>
            </div>
            <div class="">
              <div class="text-xs font-medium family-poppins mb-1 mt-3">Assignee</div>
              <input type="text" class="px-3 w-2/3 py-3 text-xs bg-gray-100 rounded-md family-poppins text-gray-600 focus:outline-none" >
              <div class="text-sm text-indigo-600 hover:underline font-medium family-poppins mt-1 cursor-pointer">Assign to me</div>
            </div>
            <div class="my-3">
              <div class="text-xs font-medium family-poppins mb-1 mt-3">Priority</div>
              <input type="text" class="px-3 py-3 w-1/2 text-xs bg-gray-100 rounded-md family-poppins text-gray-600 focus:outline-none" >
            </div>
            <div class="">
              <div class="text-xs font-medium family-poppins mb-1 mt-3">Labels</div>
              <input type="text" class="px-3 w-2/3 py-3 text-xs bg-gray-100 rounded-md family-poppins text-gray-600 focus:outline-none" >
              <div class="text-vs font-medium family-poppins text-gray-600 mt-1">Begin typing to find and create labels or press down to select a suggested label.</div>
            </div>
            <div class="my-3">
              <div class="text-xs font-medium family-poppins mb-1 mt-3">Epic Link</div>
              <input type="text" class="px-3 w-2/3 py-3 text-xs bg-gray-100 rounded-md family-poppins text-gray-600 focus:outline-none" >
              <div class="text-vs font-medium family-poppins text-gray-600 mt-1">Choose an epic to assign this issue to.</div>
            </div>
            <div class="">
              <div class="text-xs font-medium family-poppins mb-1 mt-3">Sprint</div>
              <input type="text" class="px-3 w-2/3 py-3 text-xs bg-gray-100 rounded-md family-poppins text-gray-600 focus:outline-none" >
              <div class="text-vs font-medium family-poppins text-gray-600 mt-1">Nits Software sprint field</div>
            </div>
          </div>
        </div>

        <div class="flex justify-end p-4 border-t">
          <div class="flex">
            <input type="checkbox" class="h-4 w-4 mr-2 my-auto">
            <div class="text-xs my-auto font-normal family-poppins text-gray-600">Create another</div>
          </div>
          <button  class="text-white bg-indigo-600 px-3 py-2 my-auto rounded text-xs focus:outline-none mx-3">Create</button>
          <button @click="openModal =! openModal" class="text-black bg-gray-200 px-3 py-2 my-auto rounded text-xs focus:outline-none">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "user-top-bar",
  data(){
    return{
      hover: '',
      // openTab:1,
      menu:false,
      openModal:false,
      DialogueBox:false,
      NotifyBox:false,
      LogBox:false
    }
  },
  methods:{

    activeClass(menu) {
      return this.active === menu;
    },
    hoverClass(menu) {
      return this.hover === menu;
    },
    toggleTab:function (tabNumber ,assets){
      this.openTab=tabNumber
    },
    LogMain(){
      this.LogBox = true
      this.NotifyBox = false
      this.DialogueBox = false
    },
    NotifyMain(){
      this.NotifyBox = true
      this.LogBox = false
      this.DialogueBox = false
    },
    DialogueMain(){
      this.DialogueBox = true
      this.NotifyBox = false
      this.LogBox = false
    },
    CloseModel(){
      this.DialogueBox = false
      this.NotifyBox = false
      this.LogBox = false
    }
  }
}
</script>

<style scoped>
/* width */
::-webkit-scrollbar {
  width: 4px;
}
/* Track */
::-webkit-scrollbar-track {
}
/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}
/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
.h-screen-33px{
  height: calc(100vh - 90px);
}

</style>
