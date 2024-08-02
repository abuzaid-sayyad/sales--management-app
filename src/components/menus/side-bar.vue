<template>
<!--  side-bar start-->
 <div class="bg-white h-screen fixed z-30 top-0" style="width: 17.3%">
   <div class="flex h-28 border-b">
     <img class="h-11 px-3 m-auto" src="/public/images/nit-logo.png">
   </div>
   <div class="flex w-full h-full ">
     <div style="width: 24%">
       <div class="h-full border-r pt-3">
         <a @mouseover="openDashboard = true" @mouseleave="openDashboard = false" @keydown.enter="openDashboard = !openDashboard" href="/dashboard" class="flex h-10 w-10 rounded-md mx-auto cursor-pointer relative" :class="activeClass('dashboard') || hoverClass('dashboard') ?  'bg-gray-100' : 'hover:bg-gray-100'">
           <svg class="text-green-500 m-auto h-6 w-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" version="1.1">
             <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
               <rect x="0" y="0" width="24" height="24"/>
               <path fill="currentColor" d="M12,10.9996338 C12.8356605,10.3719448 13.8743941,10 15,10 C17.7614237,10 20,12.2385763 20,15 C20,17.7614237 17.7614237,20 15,20 C13.8743941,20 12.8356605,19.6280552 12,19.0003662 C11.1643395,19.6280552 10.1256059,20 9,20 C6.23857625,20 4,17.7614237 4,15 C4,12.2385763 6.23857625,10 9,10 C10.1256059,10 11.1643395,10.3719448 12,10.9996338 Z M13.3336047,12.504354 C13.757474,13.2388026 14,14.0910788 14,15 C14,15.9088933 13.7574889,16.761145 13.3336438,17.4955783 C13.8188886,17.8206693 14.3938466,18 15,18 C16.6568542,18 18,16.6568542 18,15 C18,13.3431458 16.6568542,12 15,12 C14.3930587,12 13.8175971,12.18044 13.3336047,12.504354 Z" fill-rule="nonzero" opacity="0.3"/>
               <circle fill="#1BC5BD" cx="12" cy="9" r="5"/>
             </g>
           </svg>
           <div v-show="openDashboard" class="absolute translate-x-0 ease-out top-0 right-0 w-32 h-10 rounded bg-white shadow-xl -mr-36 border-2 border-teal transition duration-300 transform">
             <div class="relative flex h-full">
               <div class="text-vs font-medium family-poppins text-teal m-auto">Goto Dashboard</div>
               <div class="bg-white h-3 w-3 rotate-45 transform border-l-2 border-teal absolute top-0 left-0 border-b-2" style="margin-top: 13px; margin-left: -7px"></div>
             </div>
           </div>
         </a>
         <a @mouseover="openTask = true" @mouseleave="openTask = false" @keydown.enter="openTask = !openTask" href="/user-dashboard" class="flex h-10 w-10 rounded-md mx-auto my-4 cursor-pointer relative" :class="activeClass('user-dashboard') || hoverClass('user-dashboard') ?  'bg-gray-100' : 'hover:bg-gray-100'">
           <svg class="text-purple-700 m-auto h-6 w-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" version="1.1">
             <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
               <rect x="0" y="0" width="24" height="24"/>
               <path fill="currentColor" d="M4.875,20.75 C4.63541667,20.75 4.39583333,20.6541667 4.20416667,20.4625 L2.2875,18.5458333 C1.90416667,18.1625 1.90416667,17.5875 2.2875,17.2041667 C2.67083333,16.8208333 3.29375,16.8208333 3.62916667,17.2041667 L4.875,18.45 L8.0375,15.2875 C8.42083333,14.9041667 8.99583333,14.9041667 9.37916667,15.2875 C9.7625,15.6708333 9.7625,16.2458333 9.37916667,16.6291667 L5.54583333,20.4625 C5.35416667,20.6541667 5.11458333,20.75 4.875,20.75 Z" fill-rule="nonzero" opacity="0.3"/>
               <path fill="currentColor" d="M2,11.8650466 L2,6 C2,4.34314575 3.34314575,3 5,3 L19,3 C20.6568542,3 22,4.34314575 22,6 L22,15 C22,15.0032706 21.9999948,15.0065399 21.9999843,15.009808 L22.0249378,15 L22.0249378,19.5857864 C22.0249378,20.1380712 21.5772226,20.5857864 21.0249378,20.5857864 C20.7597213,20.5857864 20.5053674,20.4804296 20.317831,20.2928932 L18.0249378,18 L12.9835977,18 C12.7263047,14.0909841 9.47412135,11 5.5,11 C4.23590829,11 3.04485894,11.3127315 2,11.8650466 Z M6,7 C5.44771525,7 5,7.44771525 5,8 C5,8.55228475 5.44771525,9 6,9 L15,9 C15.5522847,9 16,8.55228475 16,8 C16,7.44771525 15.5522847,7 15,7 L6,7 Z" fill-rule="evenodd"/>
             </g>
           </svg>
           <div v-show="openTask" class="absolute translate-x-0 ease-out top-0 right-0 w-32 h-10 rounded bg-white shadow-xl -mr-36 border-2 border-teal transition duration-300 transform">
             <div class="relative flex h-full">
               <div class="text-vs font-medium family-poppins text-teal m-auto">Goto My Task</div>
               <div class="bg-white h-3 w-3 rotate-45 transform border-l-2 border-teal absolute top-0 left-0 border-b-2" style="margin-top: 13px; margin-left: -7px"></div>
             </div>
           </div>
         </a>
         <a @mouseover="openTasks = true" @mouseleave="openTasks = false" @keydown.enter="openTasks = !openTasks" href="/developer-dashboard" class="flex h-10 w-10 rounded-md mx-auto my-4 cursor-pointer relative" :class="activeClass('developer-dashboard') || hoverClass('developer-dashboard') ?  'bg-gray-100' : 'hover:bg-gray-100'">
           <svg class="text-red-600 m-auto h-6 w-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" version="1.1">
             <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
               <rect x="0" y="0" width="24" height="24"/>
               <rect fill="#DC2626" x="4" y="4" width="7" height="7" rx="1.5"/>
               <path fill="currentColor" d="M5.5,13 L9.5,13 C10.3284271,13 11,13.6715729 11,14.5 L11,18.5 C11,19.3284271 10.3284271,20 9.5,20 L5.5,20 C4.67157288,20 4,19.3284271 4,18.5 L4,14.5 C4,13.6715729 4.67157288,13 5.5,13 Z M14.5,4 L18.5,4 C19.3284271,4 20,4.67157288 20,5.5 L20,9.5 C20,10.3284271 19.3284271,11 18.5,11 L14.5,11 C13.6715729,11 13,10.3284271 13,9.5 L13,5.5 C13,4.67157288 13.6715729,4 14.5,4 Z M14.5,13 L18.5,13 C19.3284271,13 20,13.6715729 20,14.5 L20,18.5 C20,19.3284271 19.3284271,20 18.5,20 L14.5,20 C13.6715729,20 13,19.3284271 13,18.5 L13,14.5 C13,13.6715729 13.6715729,13 14.5,13 Z" fill-rule="evenodd"  opacity="0.3"/>
             </g>
           </svg>
           <div v-show="openTasks" class="absolute translate-x-0 ease-out top-0 right-0 w-32 h-10 rounded bg-white shadow-xl -mr-36 border-2 border-teal transition duration-300 transform">
             <div class="relative flex h-full">
               <div class="text-vs font-medium family-poppins text-teal m-auto">Goto Timeline</div>
               <div class="bg-white h-3 w-3 rotate-45 transform border-l-2 border-teal absolute top-0 left-0 border-b-2" style="margin-top: 13px; margin-left: -7px"></div>
             </div>
           </div>
         </a>
         <a @mouseover="openUX = true" @mouseleave="openUX = false" @keydown.enter="openUX = !openUX" href="/manager-dashboard" class="flex h-10 w-10 rounded-md mx-auto my-4 cursor-pointer relative" :class="activeClass('manager-dashboard') || hoverClass('manager-dashboard') ?  'bg-gray-100' : 'hover:bg-gray-100'">
           <svg class="text-yellow-500 m-auto h-6 w-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" version="1.1">
             <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
               <rect x="0" y="0" width="24" height="24"/>
               <path fill="currentColor" d="M5.5,2 L18.5,2 C19.3284271,2 20,2.67157288 20,3.5 L20,6.5 C20,7.32842712 19.3284271,8 18.5,8 L5.5,8 C4.67157288,8 4,7.32842712 4,6.5 L4,3.5 C4,2.67157288 4.67157288,2 5.5,2 Z M11,4 C10.4477153,4 10,4.44771525 10,5 C10,5.55228475 10.4477153,6 11,6 L13,6 C13.5522847,6 14,5.55228475 14,5 C14,4.44771525 13.5522847,4 13,4 L11,4 Z" fill-rule="evenodd" opacity="0.3"/>
               <path fill="currentColor" d="M5.5,9 L18.5,9 C19.3284271,9 20,9.67157288 20,10.5 L20,13.5 C20,14.3284271 19.3284271,15 18.5,15 L5.5,15 C4.67157288,15 4,14.3284271 4,13.5 L4,10.5 C4,9.67157288 4.67157288,9 5.5,9 Z M11,11 C10.4477153,11 10,11.4477153 10,12 C10,12.5522847 10.4477153,13 11,13 L13,13 C13.5522847,13 14,12.5522847 14,12 C14,11.4477153 13.5522847,11 13,11 L11,11 Z M5.5,16 L18.5,16 C19.3284271,16 20,16.6715729 20,17.5 L20,20.5 C20,21.3284271 19.3284271,22 18.5,22 L5.5,22 C4.67157288,22 4,21.3284271 4,20.5 L4,17.5 C4,16.6715729 4.67157288,16 5.5,16 Z M11,18 C10.4477153,18 10,18.4477153 10,19 C10,19.5522847 10.4477153,20 11,20 L13,20 C13.5522847,20 14,19.5522847 14,19 C14,18.4477153 13.5522847,18 13,18 L11,18 Z" fill-rule="evenodd"/>
             </g>
           </svg>
           <div v-show="openUX" class="absolute translate-x-0 ease-out top-0 right-0 w-32 h-10 rounded bg-white shadow-xl -mr-36 border-2 border-teal transition duration-300 transform">
             <div class="relative flex h-full">
               <div class="text-vs font-medium family-poppins text-teal m-auto">Goto My Task</div>
               <div class="bg-white h-3 w-3 rotate-45 transform border-l-2 border-teal absolute top-0 left-0 border-b-2" style="margin-top: 13px; margin-left: -7px"></div>
             </div>
           </div>
         </a>
         <a @mouseover="openUI = true" @mouseleave="openUI = false" @keydown.enter="openUI = !openUI" href="/manager-dashboard" class="flex h-10 w-10 rounded-md mx-auto my-4 cursor-pointer relative" :class="activeClass('manager-dashboard') || hoverClass('manager-dashboard') ?  'bg-gray-100' : 'hover:bg-gray-100'">
           <svg class="text-gray-700 m-auto h-7 w-7" fill="currentColor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" version="1.1">
             <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
               <polygon points="0 0 24 0 24 24 0 24"/>
               <path d="M12,18 L7.91561963,20.1472858 C7.42677504,20.4042866 6.82214789,20.2163401 6.56514708,19.7274955 C6.46280801,19.5328351 6.42749334,19.309867 6.46467018,19.0931094 L7.24471742,14.545085 L3.94038429,11.3241562 C3.54490071,10.938655 3.5368084,10.3055417 3.92230962,9.91005817 C4.07581822,9.75257453 4.27696063,9.65008735 4.49459766,9.61846284 L9.06107374,8.95491503 L11.1032639,4.81698575 C11.3476862,4.32173209 11.9473121,4.11839309 12.4425657,4.36281539 C12.6397783,4.46014562 12.7994058,4.61977315 12.8967361,4.81698575 L14.9389263,8.95491503 L19.5054023,9.61846284 C20.0519472,9.69788046 20.4306287,10.2053233 20.351211,10.7518682 C20.3195865,10.9695052 20.2170993,11.1706476 20.0596157,11.3241562 L16.7552826,14.545085 L17.5353298,19.0931094 C17.6286908,19.6374458 17.263103,20.1544017 16.7187666,20.2477627 C16.5020089,20.2849396 16.2790408,20.2496249 16.0843804,20.1472858 L12,18 Z" fill="currentColor"/>
             </g>
           </svg>
           <div v-show="openUI" class="absolute translate-x-0 ease-out top-0 right-0 w-32 h-10 rounded bg-white shadow-xl -mr-36 border-2 border-teal transition duration-300 transform">
             <div class="relative flex h-full">
               <div class="text-vs font-medium family-poppins text-teal m-auto">Goto Dashboard</div>
               <div class="bg-white h-3 w-3 rotate-45 transform border-l-2 border-teal absolute top-0 left-0 border-b-2" style="margin-top: 13px; margin-left: -7px"></div>
             </div>
           </div>
<!--           <svg class=" h-7 w-7 m-auto" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23.363 8.584l-7.378-1.127L12.678.413c-.247-.526-1.11-.526-1.357 0L8.015 7.457.637 8.584a.75.75 0 00-.423 1.265l5.36 5.494-1.267 7.767a.75.75 0 001.103.777L12 20.245l6.59 3.643a.75.75 0 001.103-.777l-1.267-7.767 5.36-5.494a.75.75 0 00-.423-1.266z" fill-rule="evenodd"/></svg>-->
         </a>
       </div>
     </div>

     <div style="width: 76%" class="py-3 h-screen-33px overflow-y-auto">
       <div class="">
         <div class="flex-col border-b px-2 pb-8 w-full">
           <a href="/user-dashboard" class="flex w-full cursor-pointer rounded-md px-3 py-2" :class="activeClass('user-dashboard') || hoverClass('user-dashboard') ?  'bg-gray-200 text-indigo-700' : 'hover:text-indigo-700 hover:bg-gray-200 text-gray-700'">
             <svg class="w-3 h-3 my-auto" fill="currentColor" viewBox="0 0 40 40"><path d="M37.9,15L22.2,3.8c-1.3-1-3.1-1-4.4-0.1L2.2,14.4c-0.7,0.5-0.9,1.4-0.4,2.1c0.5,0.7,1.4,0.9,2.1,0.4L6,15.4v12.3c0,4.6,3.7,8.3,8.3,8.3h11.4c4.6,0,8.3-3.7,8.3-8.3V15.9l2.1,1.5c0.3,0.2,0.6,0.3,0.9,0.3c0.5,0,0.9-0.2,1.2-0.6C38.7,16.4,38.5,15.5,37.9,15z M31,27.7c0,2.9-2.4,5.3-5.3,5.3H14.3C11.4,33,9,30.6,9,27.7V13.3l10.6-7.2c0.2-0.2,0.5-0.2,0.8,0L31,13.7V27.7z"></path></svg>
             <div class="family-poppins ml-3 my-auto text-xs font-semibold">Home</div>
           </a>
           <a href="/board" class="flex w-full cursor-pointer rounded-md px-3 py-2 mt-1" :class="activeClass('board') || hoverClass('board') ?  'bg-gray-200 text-indigo-700' : 'hover:text-indigo-700 hover:bg-gray-200 text-gray-700'">
             <svg class="w-3 h-3 my-auto" fill="currentColor" viewBox="0 0 40 40"><path d="M20,2.5C10.4,2.5,2.5,10.4,2.5,20S10.4,37.5,20,37.5S37.5,29.6,37.5,20S29.6,2.5,20,2.5z M20,34.5C12,34.5,5.5,28,5.5,20S12,5.5,20,5.5S34.5,12,34.5,20S28,34.5,20,34.5z M27.7,15c0.6,0.6,0.6,1.5,0,2.1l-10,10c-0.2,0.2-0.6,0.3-1,0.3c-0.4,0-0.8-0.1-1.1-0.4l-4.1-4.1c-0.6-0.6-0.6-1.5,0-2.1c0.6-0.6,1.5-0.6,2.1,0l3.1,3.1l8.9-8.9C26.2,14.4,27.1,14.4,27.7,15z"></path></svg>
             <div class="family-poppins ml-3 my-auto text-xs font-semibold">Tasks</div>
           </a>
           <a href="/calendar" class="flex w-full cursor-pointer rounded-md px-3 py-2 mt-1" :class="activeClass('calendar') || hoverClass('calendar') ?  'bg-gray-200 text-indigo-700' : 'hover:text-indigo-700 hover:bg-gray-200 text-gray-700'">
             <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 my-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
             </svg>
             <div class="family-poppins ml-3 my-auto text-xs font-semibold">Calendar</div>
           </a>
           <a href="/inbox" class="flex w-full cursor-pointer rounded-md px-3 py-2 mt-1" :class="activeClass('inbox') || hoverClass('inbox') ?  'bg-gray-200 text-indigo-700' : 'hover:text-indigo-700 hover:bg-gray-200 text-gray-700'">
             <svg class="w-3 h-3 my-auto" fill="currentColor" viewBox="0 0 40 40"><path d="M7.5,32L7.5,32h-1c-1.5,0-2.8-0.8-3.4-2c-0.8-1.5-0.4-3.4,0.9-4.5c1.2-1,1.9-2.4,2-3.9v-6.1C6,8.1,12.3,2,20,2s14,6.1,14,13.5V22c0.2,1.4,0.9,2.6,2,3.5c1.3,1.1,1.7,2.9,0.9,4.5c-0.6,1.2-2,2-3.4,2h-0.9H7.5z M7.6,29h25.8c0.3,0,0.7-0.2,0.8-0.4c0.2-0.4,0-0.7-0.2-0.8l0,0c-1.6-1.4-2.7-3.3-3-5.5c0-0.1,0-0.1,0-0.2v-6.6C31,9.7,26.1,5,20,5S9,9.7,9,15.5v6.1v0.1c-0.2,2.4-1.3,4.5-3.1,6c-0.2,0.2-0.3,0.5-0.2,0.8C5.9,28.8,6.2,29,6.5,29H7.6L7.6,29z M24.7,34c-0.7,1.9-2.5,3.2-4.7,3.2s-4-1.3-4.7-3.2H24.7z"></path></svg>
             <div class="family-poppins ml-3 my-auto text-xs font-semibold">Inbox</div>
           </a>
           <a href="/work-diary" class="flex w-full cursor-pointer rounded-md px-3 py-2 mt-1" :class="activeClass('work-diary') || hoverClass('work-diary') ?  'bg-gray-200 text-indigo-700' : 'hover:text-indigo-700 hover:bg-gray-200 text-gray-700'">
             <svg class="w-3 h-3 my-auto" fill="currentColor" viewBox="0 0 40 40"><path d="M35.6,30.1l-6.2-9.6C31,18.5,32,15.9,32,13c0-6.6-5.4-12-12-12C13.4,1,8,6.4,8,13c0,2.9,1,5.5,2.7,7.6l-6.2,9.6  c-1.2,1.8-1.3,4-0.2,5.9c1,1.9,2.9,3,5.1,3h21.5c2.1,0,4-1.1,5.1-3S36.7,31.9,35.6,30.1z M11,13c0-5,4-9,9-9c5,0,9,4,9,9  c0,1.8-0.5,3.5-1.4,4.9l-2.7-4.2c-1.1-1.6-2.9-2.6-4.8-2.6c-1.9,0-3.7,1-4.8,2.6l-2.7,4.2C11.5,16.5,11,14.8,11,13z M25.5,20.2  C23.9,21.3,22.1,22,20,22s-3.9-0.7-5.5-1.9l3.2-4.8c0.5-0.8,1.4-1.2,2.3-1.2c0.9,0,1.8,0.5,2.3,1.2L25.5,20.2z M33.2,34.6  c-0.5,0.9-1.4,1.4-2.4,1.4H9.2c-1,0-1.9-0.5-2.4-1.4c-0.5-0.9-0.4-1.9,0.1-2.8l6-9.1c2,1.5,4.4,2.3,7.1,2.3c2.7,0,5.1-0.9,7.1-2.3  l6,9.1C33.6,32.6,33.7,33.7,33.2,34.6z"></path></svg>
             <div class="family-poppins ml-3 my-auto text-xs font-semibold">Work Diary</div>
           </a>
         </div>
        <div class=" border-b ">
          <div class="py-3 pl-3">
            <div class="family-poppins text-xs font-bold">Reports</div>
          </div>
        </div>
         <div class="flex justify-between py-3">
           <div class="family-poppins text-xs font-bold pl-3">Design</div>
           <svg class="w-2 h-2 text-gray-700 my-auto mr-2 cursor-pointer" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M492 236H276V20c0-11.046-8.954-20-20-20s-20 8.954-20 20v216H20c-11.046 0-20 8.954-20 20s8.954 20 20 20h216v216c0 11.046 8.954 20 20 20s20-8.954 20-20V276h216c11.046 0 20-8.954 20-20s-8.954-20-20-20z" fill-rule="evenodd"/></svg>
         </div>
         <div class="bg-gray-500 rounded-lg mt-2 mx-2 p-1">
           <div class="family-poppins text-white text-xs font-normal px-1">we are working with different team.</div>
           <div class="family-poppins text-white text-xs font-normal px-1 mt-1">Lorem ipsum doler site.</div>
         </div>
         <div v-for="(item, index) in BigData" class="flex-col w-full">
           <div :class="'px-4 py-2 w-full flex mt-6 '+item.styling">
             <div class="bg-white h-3 w-3 rounded mr-2 my-auto"></div>
             <div class="text-white family-poppins text-xs my-auto">{{item.title}}</div>
           </div>
           <div class="flex px-2 my-2">
             <div class="flex">
               <img v-for="(ele, index) in item.picture" :class="'h-6 w-6 rounded-full border-2 border-white '+ele.styling" :src="ele.image">
             </div>
             <div class="ml-1 family-poppins text-xs cursor-pointer font-semibold my-auto">+ Invite people</div>
           </div>
           <div class="">
             <div v-for="(elem, index) in item.projects" class="flex justify-between px-2 py-2 hover:bg-gray-100 cursor-pointer">
               <div class="flex my-auto">
                 <div :class="'rounded-full h-2 w-2 my-auto mr-2 '+elem.styling"></div>
                 <a href="/project-view" class="text-vs font-medium family-poppins">{{elem.name}}</a>
               </div>
               <div class="my-auto">
                 <svg class="h-3 w-3" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10.001 7.8a2.2 2.2 0 100 4.402A2.2 2.2 0 0010 7.8zm-7 0a2.2 2.2 0 100 4.402A2.2 2.2 0 003 7.8zm14 0a2.2 2.2 0 100 4.402A2.2 2.2 0 0017 7.8z"/></svg>
               </div>
             </div>

           </div>
         </div>
       </div>
       <div class="bg-teal-500 w-full py-1 mt-5">
         <div class="flex px-3 h-full">
           <div class="h-2 w-2 bg-white rounded my-auto"></div>
           <div class="family-poppins text-vs font-normal text-white my-auto px-3">Creative Requests</div>
           <svg class="h-5 w-5 my-auto cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="#FFF" d="M10.001 7.8a2.2 2.2 0 100 4.402A2.2 2.2 0 0010 7.8zm-7 0a2.2 2.2 0 100 4.402A2.2 2.2 0 003 7.8zm14 0a2.2 2.2 0 100 4.402A2.2 2.2 0 0017 7.8z" fill-rule="evenodd"/></svg>
         </div>
       </div>
       <div class="pl-3 mt-5 border-t">
         <div class="flex text-gray-700 pt-4">
           <svg class="cursor-pointer h-3 w-3" fill="currentColor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" version="1.1">
             <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
               <polygon points="0 0 24 0 24 24 0 24"/>
               <path fill="currentColor" d="M18,14 C16.3431458,14 15,12.6568542 15,11 C15,9.34314575 16.3431458,8 18,8 C19.6568542,8 21,9.34314575 21,11 C21,12.6568542 19.6568542,14 18,14 Z M9,11 C6.790861,11 5,9.209139 5,7 C5,4.790861 6.790861,3 9,3 C11.209139,3 13,4.790861 13,7 C13,9.209139 11.209139,11 9,11 Z" fill-rule="nonzero" opacity="0.3"/>
               <path fill="currentColor" d="M17.6011961,15.0006174 C21.0077043,15.0378534 23.7891749,16.7601418 23.9984937,20.4 C24.0069246,20.5466056 23.9984937,21 23.4559499,21 L19.6,21 C19.6,18.7490654 18.8562935,16.6718327 17.6011961,15.0006174 Z M0.00065168429,20.1992055 C0.388258525,15.4265159 4.26191235,13 8.98334134,13 C13.7712164,13 17.7048837,15.2931929 17.9979143,20.2 C18.0095879,20.3954741 17.9979143,21 17.2466999,21 C13.541124,21 8.03472472,21 0.727502227,21 C0.476712155,21 -0.0204617505,20.45918 0.00065168429,20.1992055 Z" fill-rule="nonzero"/>
             </g>
           </svg>
           <div class="ml-3 text-xs family-poppins font-medium my-auto">Invite Teammates</div>
         </div>
       </div>
     </div>
   </div>
 </div>
</template>

<script>
export default {
name: "side-bar",
  props: {
    active: {
      type: String,
      default: '',
    },
  },
  data(){
    return{
      hover: '',
      openDashboard: false,
      openTask: false,
      openTasks: false,
      openUX: false,
      openUI: false,
      // openTab:1,
      menu:false,
      BigData:[
        {id:1, title:'Team Nitseditor', styling:'bg-teal-500', picture:[
            {image:'https://images.unsplash.com/photo-1587023568809-cfe1930ee6c3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=776&q=80'},
            {image:'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bWFufGVufDB8MnwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', styling:'-ml-2'},
            {image:'https://images.unsplash.com/photo-1548964095-b9a292144866?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjd8fG1hbnxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',styling:'-ml-2'},
          ],
          projects:[{name:'Nitseditor Project',styling:'bg-teal-500'},{name:'Nitseditor Mobile',styling:'bg-teal-500'},{name:'Nitseditor App...',styling:'bg-teal-500'},]
        },
        {id:2, title:'Team Biltrax',styling:'bg-gradient-to-r from-red-500 via-red-400 to-red-600', picture:[
            {image:'https://images.unsplash.com/photo-1587023568809-cfe1930ee6c3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=776&q=80'},
            {image:'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bWFufGVufDB8MnwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', styling:'-ml-2'},
            {image:'https://images.unsplash.com/photo-1548964095-b9a292144866?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjd8fG1hbnxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',styling:'-ml-2'},
          ],
          projects:[{name:'Biltrax Industrial',styling:'bg-red-500'},{name:'Biltrax version 2',styling:'bg-red-500'},{name:'Biltrax version 1',styling:'bg-red-500'},]
        },
        {id:3, title:'Team UI/UX',styling:'bg-blue-600', picture:[
            {image:'https://images.unsplash.com/photo-1587023568809-cfe1930ee6c3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=776&q=80'},
            {image:'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bWFufGVufDB8MnwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', styling:'-ml-2'},
            {image:'https://images.unsplash.com/photo-1548964095-b9a292144866?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjd8fG1hbnxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',styling:'-ml-2'},
          ],
          projects:[{name:'Biltrax Industrial',styling:'bg-blue-500'},{name:'Biltrax version 2',styling:'bg-blue-500'},{name:'Biltrax version 1',styling:'bg-blue-500'},]
        },
        {id:4, title:'Team Confidence',styling:'bg-yellow-500', picture:[
            {image:'https://images.unsplash.com/photo-1587023568809-cfe1930ee6c3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=776&q=80'},
            {image:'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bWFufGVufDB8MnwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', styling:'-ml-2'},
            {image:'https://images.unsplash.com/photo-1548964095-b9a292144866?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjd8fG1hbnxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',styling:'-ml-2'},
          ],
          projects:[{name:'Biltrax Industrial',styling:'bg-yellow-500'},{name:'Biltrax version 2',styling:'bg-yellow-500'},{name:'Biltrax version 1',styling:'bg-yellow-500'},]
        },
      ]
    }
  },
  methods:{
    activeClass(menu) {
      return this.active === menu;
    },
    hoverClass(menu) {
      return this.hover === menu;
    },
  }
}
</script>

<style scoped>
.h-screen-33px{
  height: calc(100vh - 115px);
}
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
</style>
