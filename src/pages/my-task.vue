<template>
  <layout active="my-task">
    <div class="bg-white mx-2.5 pl-3">
      <div class="flex justify-between py-2">
        <div class="flex">
          <button class="border text-gray-700  text-vs font-medium family-poppins px-2 py-1 rounded-l-md focus:outline-none flex">
            <svg class="h-3 w-3 my-auto" fill="currentColor" focusable="false" viewBox="0 0 24 24"><path d="M10,10V4c0-1.1,0.9-2,2-2s2,0.9,2,2v6h6c1.1,0,2,0.9,2,2s-0.9,2-2,2h-6v6c0,1.1-0.9,2-2,2s-2-0.9-2-2v-6H4c-1.1,0-2-0.9-2-2s0.9-2,2-2H10z"></path></svg>
            <span class="ml-1 my-auto">Add task</span>
          </button>
          <button class="border-b border-t border-r border-gray-300 text-gray-700 text-vs font-medium family-poppins px-2 py-1  rounded-r-md focus:outline-none flex">
            <svg class="h-3 w-3 my-auto" fill="currentColor" focusable="false" viewBox="0 0 24 24"><path d="M3.5,8.9c0-0.4,0.1-0.7,0.4-1C4.5,7.3,5.4,7.2,6,7.8l5.8,5.2l6.1-5.2C18.5,7.3,19.5,7.3,20,8c0.6,0.6,0.5,1.5-0.1,2.1 l-7.1,6.1c-0.6,0.5-1.4,0.5-2,0L4,10.1C3.6,9.8,3.5,9.4,3.5,8.9z"></path></svg>
          </button>
        </div>
        <div class="my-auto">
          <div class="flex pr-3">
            <button class="text-gray-800 text-vs font-medium family-poppins px-2 py-1 hover:bg-gray-200 rounded-md focus:outline-none flex">
              <svg class="h-3 w-3 my-auto" fill="currentColor" focusable="false" viewBox="0 0 24 24"><path d="M12,3c5,0,9,4,9,9s-4,9-9,9s-9-4-9-9S7,3,12,3 M12,1C5.9,1,1,5.9,1,12s4.9,11,11,11s11-4.9,11-11S18.1,1,12,1L12,1zM11.2,16.2l6-6c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0l-5.3,5.3l-2.3-2.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l3,3c0.2,0.2,0.5,0.3,0.7,0.3S11,16.4,11.2,16.2z"></path></svg>
              <span class="my-auto ml-1">Incomplete task</span>
            </button>
            <button class="text-gray-800 mx-3 text-vs font-medium family-poppins px-2 py-1 flex hover:bg-gray-200 rounded-md focus:outline-none">
              <svg class="h-3 w-3 my-auto" fill="currentColor" focusable="false" viewBox="0 0 24 24"><path d="M11.7,9.7c-0.2,0.2-0.4,0.3-0.6,0.3H8v9c0,0.6-0.4,1-1,1s-1-0.4-1-1v-9H2.9C2.4,10,2,9.6,2,9.1c0-0.2,0.1-0.5,0.3-0.6l4.1-4.1C6.7,4,7.3,4,7.6,4.3l0,0l4.1,4.1C12.1,8.8,12.1,9.4,11.7,9.7z M21.7,14.3c-0.2-0.2-0.4-0.3-0.6-0.3H18V5c0-0.6-0.4-1-1-1s-1,0.4-1,1v9h-3.1c-0.5,0-0.9,0.4-0.9,0.9c0,0.2,0.1,0.5,0.3,0.6l4.1,4.1c0.4,0.4,0.9,0.4,1.3,0l0,0l4.1-4.1C22.1,15.2,22.1,14.6,21.7,14.3z"></path></svg>
              <span class="ml-1 my-auto">Sort</span>
            </button>
            <button @click="openMenu = true" class="text-gray-800 ml-3 text-vs font-medium family-poppins px-2 py-1 hover:bg-gray-200 rounded-md focus:outline-none flex">
              <svg class="h-3 w-3 my-auto" fill="currentColor" focusable="false" viewBox="0 0 24 24"><path d="M7,2c0.55,0,1,0.45,1,1v4c0,0.55-0.45,1-1,1H3C2.45,8,2,7.55,2,7V3c0-0.55,0.45-1,1-1H7 M7,0H3C1.34,0,0,1.34,0,3v4  c0,1.66,1.34,3,3,3h4c1.66,0,3-1.34,3-3V3C10,1.34,8.66,0,7,0L7,0z M7,16c0.55,0,1,0.45,1,1v4c0,0.55-0.45,1-1,1H3  c-0.55,0-1-0.45-1-1v-4c0-0.55,0.45-1,1-1H7 M7,14H3c-1.66,0-3,1.34-3,3v4c0,1.66,1.34,3,3,3h4c1.66,0,3-1.34,3-3v-4  C10,15.34,8.66,14,7,14L7,14z M21,2c0.55,0,1,0.45,1,1v4c0,0.55-0.45,1-1,1h-4c-0.55,0-1-0.45-1-1V3c0-0.55,0.45-1,1-1H21 M21,0h-4  c-1.66,0-3,1.34-3,3v4c0,1.66,1.34,3,3,3h4c1.66,0,3-1.34,3-3V3C24,1.34,22.66,0,21,0L21,0z M23,18h-3v-3c0-0.55-0.45-1-1-1  s-1,0.45-1,1v3h-3c-0.55,0-1,0.45-1,1c0,0.55,0.45,1,1,1h3v3c0,0.55,0.45,1,1,1s1-0.45,1-1v-3h3c0.55,0,1-0.45,1-1  C24,18.45,23.55,18,23,18z"></path></svg>
              <span class="ml-1 my-auto">Customize</span>
            </button>
          </div>
        </div>
      </div>
      <div class="border-t border-b border-gray-300 w-full h-10 flex justify-between pr-4">
        <div class="flex justify-between w-full my-auto px-3">
          <div class="text-xs font-medium text-gray-900 family-poppins">Task Name</div>
          <svg class="h-3 w-3 my-auto" fill="currentColor" focusable="false" viewBox="0 0 24 24"><path d="M3.5,8.9c0-0.4,0.1-0.7,0.4-1C4.5,7.3,5.4,7.2,6,7.8l5.8,5.2l6.1-5.2C18.5,7.3,19.5,7.3,20,8c0.6,0.6,0.5,1.5-0.1,2.1 l-7.1,6.1c-0.6,0.5-1.4,0.5-2,0L4,10.1C3.6,9.8,3.5,9.4,3.5,8.9z"></path></svg>
        </div>
        <div class="flex h-full">
          <div class="w-28 text-center text-xs font-medium text-gray-900 family-poppins border-l flex"><span class="m-auto">Due date</span></div>
          <div class="w-32 text-center text-xs font-medium text-gray-900 family-poppins border-l flex"><span class="m-auto">Projects</span></div>
          <div class="w-10 text-center text-xs font-medium text-gray-900 family-poppins border-l flex cursor-pointer hover:text-blue-600">
          </div>
        </div>
      </div>
      <div class="w-full h-screen-23px overflow-auto">
        <!--        planning start here-->
        <div class="flex-col w-full">
          <div class="flex py-3">
            <div @click="openPlanning = ! openPlanning"  class="h-6 w-6 rounded-md hover:bg-gray-100 flex">
              <svg :class="{'rotate-0': openPlanning, '-rotate-90': !openPlanning}" class="h-4 w-4 m-auto transition-transform duration-200 transform inline" focusable="false" viewBox="0 0 32 32"><path d="M7.207,13.707L16.5,23l9.293-9.293c0.63-0.63,0.184-1.707-0.707-1.707H7.914C7.023,12,6.577,13.077,7.207,13.707z"></path></svg>
            </div>
            <div class="text-base font-medium family-poppins ml-1">Recently assigned</div>
          </div>
          <div v-if="openPlanning">
            <div class="border-t border-b border-gray-300 w-full h-10 flex justify-between">
              <div class="flex w-full my-auto text-gray-500">
                <svg class="h-4 w-4 my-auto mx-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384.97 384.97"><path d="M192.485 0C86.173 0 0 86.173 0 192.485S86.173 384.97 192.485 384.97c106.3 0 192.485-86.185 192.485-192.485C384.97 86.173 298.785 0 192.485 0zm0 360.909c-93.018 0-168.424-75.406-168.424-168.424S99.467 24.061 192.485 24.061s168.424 75.406 168.424 168.424-75.406 168.424-168.424 168.424z"/><path d="M280.306 125.031L156.538 247.692l-51.502-50.479c-4.74-4.704-12.439-4.704-17.179 0a11.931 11.931 0 000 17.011l60.139 58.936c4.932 4.343 12.307 4.824 17.179 0l132.321-131.118a11.952 11.952 0 000-17.011c-4.751-4.692-12.438-4.692-17.19 0z"/></svg>
                <div class="text-xs font-normal family-poppins my-auto">Task for checking</div>
              </div>
              <div class="flex h-full">
<!--                <div class="w-32 text-center text-xs font-medium text-gray-900 family-poppins border-l flex"><span class="m-auto"></span></div>-->
                <div class="w-28 px-2 text-center text-xs font-medium text-red-700 family-poppins border-l flex"><span class="my-auto">Mar 16</span></div>
<!--                <div class="w-32 text-center text-xs font-medium text-gray-900 family-poppins border-l flex"><span class="m-auto"></span></div>-->
                <div class="w-32 text-center text-vs font-medium text-gray-900 family-poppins border-l flex px-2"><span class="my-auto bg-gray-200 rounded-full px-2 flex"><span class="h-2 w-2 mr-1 rounded bg-blue-700 my-auto"></span> new project</span></div>
                <div class="w-10 text-center text-xs font-medium text-gray-900 family-poppins border-l flex cursor-pointer hover:text-blue-600"></div>
              </div>
            </div>

            <div class="w-full h-10 flex cursor-pointer">
              <div class="text-xs font-medium text-gray-400 family-poppins my-auto px-16">Add task....</div>
            </div>
          </div>

        </div>
        <!--        planning end here-->

        <!--        milestone start here-->
        <div class="flex-col w-full">
          <div class="flex py-3">
            <div @click="openMilestone = ! openMilestone"  class="h-6 w-6 rounded-md hover:bg-gray-100 flex">
              <svg :class="{'rotate-0' : openMilestone, '-rotate-90' : !openMilestone}" class="h-4 w-4 m-auto transition-transform duration-200 transform inline" focusable="false" viewBox="0 0 32 32"><path d="M7.207,13.707L16.5,23l9.293-9.293c0.63-0.63,0.184-1.707-0.707-1.707H7.914C7.023,12,6.577,13.077,7.207,13.707z"></path></svg>
            </div>
            <div class="text-base font-medium family-poppins ml-1">Today</div>
          </div>
          <div v-if="openMilestone">
            <div class="border-t border-b border-gray-300 w-full h-10 flex justify-between">
              <div class="flex w-full my-auto text-gray-500 px-4">
                <svg class="h-4 w-4 my-auto mx-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384.97 384.97"><path d="M192.485 0C86.173 0 0 86.173 0 192.485S86.173 384.97 192.485 384.97c106.3 0 192.485-86.185 192.485-192.485C384.97 86.173 298.785 0 192.485 0zm0 360.909c-93.018 0-168.424-75.406-168.424-168.424S99.467 24.061 192.485 24.061s168.424 75.406 168.424 168.424-75.406 168.424-168.424 168.424z"/><path d="M280.306 125.031L156.538 247.692l-51.502-50.479c-4.74-4.704-12.439-4.704-17.179 0a11.931 11.931 0 000 17.011l60.139 58.936c4.932 4.343 12.307 4.824 17.179 0l132.321-131.118a11.952 11.952 0 000-17.011c-4.751-4.692-12.438-4.692-17.19 0z"/></svg>
                <div class="text-xs font-normal family-poppins my-auto">Film customer video</div>
              </div>
              <div class="flex h-full">
                <div class="w-28 text-center text-xs font-medium text-red-700 family-poppins border-l flex px-2"><span class="my-auto">Mar 16</span></div>
                <div class="w-32 text-center text-vs font-medium text-gray-900 family-poppins border-l flex px-2"><span class="my-auto bg-gray-200 rounded-full px-2 flex"><span class="h-2 w-2 mr-1 rounded bg-blue-700 my-auto"></span> new project</span></div>
                <div class="w-10 text-center text-xs font-medium text-gray-900 family-poppins border-l flex cursor-pointer hover:text-blue-600"></div>
              </div>
            </div>
            <div class="border-b border-gray-300 w-full h-10 flex justify-between">
              <div class="flex w-full my-auto text-gray-500 px-4">
                <svg class="h-4 w-4 my-auto mx-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384.97 384.97"><path d="M192.485 0C86.173 0 0 86.173 0 192.485S86.173 384.97 192.485 384.97c106.3 0 192.485-86.185 192.485-192.485C384.97 86.173 298.785 0 192.485 0zm0 360.909c-93.018 0-168.424-75.406-168.424-168.424S99.467 24.061 192.485 24.061s168.424 75.406 168.424 168.424-75.406 168.424-168.424 168.424z"/><path d="M280.306 125.031L156.538 247.692l-51.502-50.479c-4.74-4.704-12.439-4.704-17.179 0a11.931 11.931 0 000 17.011l60.139 58.936c4.932 4.343 12.307 4.824 17.179 0l132.321-131.118a11.952 11.952 0 000-17.011c-4.751-4.692-12.438-4.692-17.19 0z"/></svg>
                <div class="text-xs font-normal family-poppins my-auto">Redesign landing page</div>
              </div>
              <div class="flex h-full">
                <div class="w-28 text-center text-xs font-medium text-red-700 family-poppins border-l flex px-2"><span class="my-auto">Mar 16</span></div>
                <div class="w-32 text-center text-vs font-medium text-gray-900 family-poppins border-l flex px-2"><span class="my-auto bg-gray-200 rounded-full px-2 flex"><span class="h-2 w-2 mr-1 rounded bg-blue-700 my-auto"></span> new project</span></div>
                <div class="w-10 text-center text-xs font-medium text-gray-900 family-poppins border-l flex cursor-pointer hover:text-blue-600"></div>
              </div>
            </div>
            <div class="w-full h-10 flex cursor-pointer">
              <div class="text-xs font-medium text-gray-400 family-poppins my-auto px-16">Add task....</div>
            </div>
          </div>
        </div>
        <!--        milestone end here-->

        <!--        next steps start here-->
        <div class="flex-col w-full">
          <div class="flex py-3">
            <div @click="openSteps =! openSteps" class="h-6 w-6 rounded-md hover:bg-gray-100 flex">
              <svg :class="{'rotate-0' : openSteps, '-rotate-90' : !openSteps}" class="h-4 w-4 m-auto transform transition duration-200" focusable="false" viewBox="0 0 32 32"><path d="M7.207,13.707L16.5,23l9.293-9.293c0.63-0.63,0.184-1.707-0.707-1.707H7.914C7.023,12,6.577,13.077,7.207,13.707z"></path></svg>
            </div>
            <div class="text-base font-medium family-poppins ml-1">Upcoming</div>
          </div>
          <div v-if="openSteps">
            <div class="border-t border-b border-gray-300 w-full h-10 flex justify-between">
              <div class="flex w-full my-auto text-gray-500 px-4">
                <svg class="h-4 w-4 my-auto mx-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384.97 384.97"><path d="M192.485 0C86.173 0 0 86.173 0 192.485S86.173 384.97 192.485 384.97c106.3 0 192.485-86.185 192.485-192.485C384.97 86.173 298.785 0 192.485 0zm0 360.909c-93.018 0-168.424-75.406-168.424-168.424S99.467 24.061 192.485 24.061s168.424 75.406 168.424 168.424-75.406 168.424-168.424 168.424z"/><path d="M280.306 125.031L156.538 247.692l-51.502-50.479c-4.74-4.704-12.439-4.704-17.179 0a11.931 11.931 0 000 17.011l60.139 58.936c4.932 4.343 12.307 4.824 17.179 0l132.321-131.118a11.952 11.952 0 000-17.011c-4.751-4.692-12.438-4.692-17.19 0z"/></svg>
                <div class="text-xs font-normal family-poppins my-auto">[READ ME] Instructions for using this project</div>
              </div>
              <div class="flex h-full">
                <div class="w-28 text-center text-xs font-medium text-gray-900 family-poppins border-l flex"><span class="m-auto"></span></div>
                <div class="w-32 text-center text-xs font-medium text-gray-900 family-poppins border-l flex"><span class="m-auto"></span></div>
                <div class="w-10 text-center text-xs font-medium text-gray-900 family-poppins border-l flex cursor-pointer hover:text-blue-600"></div>
              </div>
            </div>
            <div class="border-b border-gray-300 w-full h-10 flex justify-between">
              <div class="flex w-full my-auto text-gray-500 px-4">
                <svg class="h-4 w-4 my-auto mx-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384.97 384.97"><path d="M192.485 0C86.173 0 0 86.173 0 192.485S86.173 384.97 192.485 384.97c106.3 0 192.485-86.185 192.485-192.485C384.97 86.173 298.785 0 192.485 0zm0 360.909c-93.018 0-168.424-75.406-168.424-168.424S99.467 24.061 192.485 24.061s168.424 75.406 168.424 168.424-75.406 168.424-168.424 168.424z"/><path d="M280.306 125.031L156.538 247.692l-51.502-50.479c-4.74-4.704-12.439-4.704-17.179 0a11.931 11.931 0 000 17.011l60.139 58.936c4.932 4.343 12.307 4.824 17.179 0l132.321-131.118a11.952 11.952 0 000-17.011c-4.751-4.692-12.438-4.692-17.19 0z"/></svg>
                <div class="text-xs font-normal family-poppins my-auto">[READ ME] Instructions for using this project</div>
              </div>
              <div class="flex h-full">
                <div class="w-28 text-center text-xs font-medium text-gray-900 family-poppins border-l flex"><span class="m-auto"></span></div>
                <div class="w-32 text-center text-xs font-medium text-gray-900 family-poppins border-l flex"><span class="m-auto"></span></div>
                <div class="w-10 text-center text-xs font-medium text-gray-900 family-poppins border-l flex cursor-pointer hover:text-blue-600"></div>
              </div>
            </div>
            <div class="w-full h-10 flex cursor-pointer">
              <div class="text-xs font-medium text-gray-400 family-poppins my-auto px-16">Add task....</div>
            </div>
          </div>
        </div>
        <!--        next steps end here-->

        <!--        references start here-->
        <div class="flex-col w-full">
          <div class="flex py-3">
            <div @click="openReferences =! openReferences" class="h-6 w-6 rounded-md hover:bg-gray-100 flex">
              <svg :class="{'rotate-0' : openReferences, '-rotate-90' : !openReferences}" class="h-4 w-4 m-auto transform duration-200" focusable="false" viewBox="0 0 32 32"><path d="M7.207,13.707L16.5,23l9.293-9.293c0.63-0.63,0.184-1.707-0.707-1.707H7.914C7.023,12,6.577,13.077,7.207,13.707z"></path></svg>
            </div>
            <div class="text-base font-medium family-poppins ml-1">Later</div>
          </div>
          <div v-if="openReferences">
            <div class="border-t border-b border-gray-300 w-full h-10 flex justify-between">
              <div class="flex w-full my-auto text-gray-500 px-4">
                <svg class="h-4 w-4 my-auto mx-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384.97 384.97"><path d="M192.485 0C86.173 0 0 86.173 0 192.485S86.173 384.97 192.485 384.97c106.3 0 192.485-86.185 192.485-192.485C384.97 86.173 298.785 0 192.485 0zm0 360.909c-93.018 0-168.424-75.406-168.424-168.424S99.467 24.061 192.485 24.061s168.424 75.406 168.424 168.424-75.406 168.424-168.424 168.424z"/><path d="M280.306 125.031L156.538 247.692l-51.502-50.479c-4.74-4.704-12.439-4.704-17.179 0a11.931 11.931 0 000 17.011l60.139 58.936c4.932 4.343 12.307 4.824 17.179 0l132.321-131.118a11.952 11.952 0 000-17.011c-4.751-4.692-12.438-4.692-17.19 0z"/></svg>
                <div class="text-xs font-normal family-poppins my-auto">[READ ME] Instructions for using this project</div>
              </div>
              <div class="flex h-full">
                <div class="w-28 text-center text-xs font-medium text-gray-900 family-poppins border-l flex"><span class="m-auto"></span></div>
                <div class="w-32 text-center text-xs font-medium text-gray-900 family-poppins border-l flex"><span class="m-auto"></span></div>
                <div class="w-10 text-center text-xs font-medium text-gray-900 family-poppins border-l flex cursor-pointer hover:text-blue-600"></div>
              </div>
            </div>
            <div class="w-full h-10 flex cursor-pointer">
              <div class="text-xs font-medium text-gray-400 family-poppins my-auto px-16">Add task....</div>
            </div>
          </div>
        </div>
        <!--        references end here-->
      </div>
    </div>
    <div :class="openMenu ? 'translate-x-0 ease-out' : 'translate-x-full ease-in'" class="fixed right-0 top-0 max-w-xs w-full h-screen-65px bg-white mt-16 px-4 py-4 transition duration-300 transform overflow-y-auto border-l border-gray-300 z-50">
      <div class="flex items-center justify-between">
        <div class="text-sm font-medium family-poppins my-auto">Customize</div>
        <button @click="openMenu = !openMenu" class="text-gray-600 focus:outline-none">
          <svg class="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
      </div>
      <div class="flex flex-col mt-10">
        <div class="text-sm font-medium family-poppins">Fields</div>
        <div class="px-1 py-3">
          <div class="w-full rounded-lg border cursor-grab h-9 shadow flex justify-between items-center hover:shadow-md px-2">
            <div class="flex">
              <svg class="h-4 w-4 text-gray-800 mr-4" focusable="false" viewBox="0 0 32 32"><path d="M14,5.5c0,1.7-1.3,3-3,3s-3-1.3-3-3s1.3-3,3-3S14,3.8,14,5.5z M21,8.5c1.7,0,3-1.3,3-3s-1.3-3-3-3s-3,1.3-3,3S19.3,8.5,21,8.5z M11,12.5c-1.7,0-3,1.3-3,3s1.3,3,3,3s3-1.3,3-3S12.7,12.5,11,12.5z M21,12.5c-1.7,0-3,1.3-3,3s1.3,3,3,3s3-1.3,3-3S22.7,12.5,21,12.5z M11,22.5c-1.7,0-3,1.3-3,3s1.3,3,3,3s3-1.3,3-3S12.7,22.5,11,22.5z M21,22.5c-1.7,0-3,1.3-3,3s1.3,3,3,3s3-1.3,3-3S22.7,22.5,21,22.5z"></path></svg>
              <div class="text-xs font-medium family-poppins">Due Date</div>
            </div>
            <div class="h-3 w-6 bg-blue-500 rounded-full flex justify-end cursor-pointer">
              <div class="h-2.5 w-2.5 rounded-full bg-white m-px"></div>
            </div>
          </div>
          <div class="w-full rounded-lg border cursor-grab h-9 shadow flex my-3 justify-between hover:shadow-md items-center px-2">
            <div class="flex">
              <svg class="h-4 w-4 text-gray-800 mr-4" focusable="false" viewBox="0 0 32 32"><path d="M14,5.5c0,1.7-1.3,3-3,3s-3-1.3-3-3s1.3-3,3-3S14,3.8,14,5.5z M21,8.5c1.7,0,3-1.3,3-3s-1.3-3-3-3s-3,1.3-3,3S19.3,8.5,21,8.5z M11,12.5c-1.7,0-3,1.3-3,3s1.3,3,3,3s3-1.3,3-3S12.7,12.5,11,12.5z M21,12.5c-1.7,0-3,1.3-3,3s1.3,3,3,3s3-1.3,3-3S22.7,12.5,21,12.5z M11,22.5c-1.7,0-3,1.3-3,3s1.3,3,3,3s3-1.3,3-3S12.7,22.5,11,22.5z M21,22.5c-1.7,0-3,1.3-3,3s1.3,3,3,3s3-1.3,3-3S22.7,22.5,21,22.5z"></path></svg>
              <div class="text-xs font-medium family-poppins">Projects</div>
            </div>
            <div class="h-3 w-6 bg-blue-500 rounded-full flex justify-end cursor-pointer">
              <div class="h-2.5 w-2.5 rounded-full bg-white m-px"></div>
            </div>
          </div>
          <div class="w-full rounded-lg border cursor-grab h-9 shadow flex justify-between hover:shadow-md items-center px-2">
            <div class="flex">
              <svg class="h-4 w-4 text-gray-800 mr-4" focusable="false" viewBox="0 0 32 32"><path d="M14,5.5c0,1.7-1.3,3-3,3s-3-1.3-3-3s1.3-3,3-3S14,3.8,14,5.5z M21,8.5c1.7,0,3-1.3,3-3s-1.3-3-3-3s-3,1.3-3,3S19.3,8.5,21,8.5z M11,12.5c-1.7,0-3,1.3-3,3s1.3,3,3,3s3-1.3,3-3S12.7,12.5,11,12.5z M21,12.5c-1.7,0-3,1.3-3,3s1.3,3,3,3s3-1.3,3-3S22.7,12.5,21,12.5z M11,22.5c-1.7,0-3,1.3-3,3s1.3,3,3,3s3-1.3,3-3S12.7,22.5,11,22.5z M21,22.5c-1.7,0-3,1.3-3,3s1.3,3,3,3s3-1.3,3-3S22.7,22.5,21,22.5z"></path></svg>
              <div class="text-xs font-medium family-poppins">Tags</div>
            </div>
            <div class="h-3 w-6 bg-gray-200 rounded-full flex cursor-pointer">
              <div class="h-2.5 w-2.5 rounded-full bg-white m-px"></div>
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
name: "my-task",
  components: {Layout},
  data(){
    return{
      openPlanning:true,
      opensubplanning:true,
      openMilestone:true,
      openSteps:true,
      openReferences:true,
      openMenu:true,
    }
  }
}
</script>

<style scoped>

</style>
