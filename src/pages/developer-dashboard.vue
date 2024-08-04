<template>
  <layout active="developer-dashboard">
    <div class="w-full px-2">
      <div class="flex justify-between py-1 px-1">
        <div class="my-auto">
          <svg class="h-4 w-4 my-auto text-gray-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10.001 7.8a2.2 2.2 0 100 4.402A2.2 2.2 0 0010 7.8zm-7 0a2.2 2.2 0 100 4.402A2.2 2.2 0 003 7.8zm14 0a2.2 2.2 0 100 4.402A2.2 2.2 0 0017 7.8z"/></svg>
        </div>
        <div>
          <button class="bg-white flex text-gray-600 family-poppins text-xs font-medium p-2 rounded focus:outline-none hover:text-indigo-600">
            <svg class="h-3 w-3 my-auto mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16 10c0 .553-.048 1-.601 1H11v4.399c0 .552-.447.601-1 .601-.553 0-1-.049-1-.601V11H4.601C4.049 11 4 10.553 4 10c0-.553.049-1 .601-1H9V4.601C9 4.048 9.447 4 10 4c.553 0 1 .048 1 .601V9h4.399c.553 0 .601.447.601 1z"/></svg>
            <span class="my-auto">Add Chart</span>
          </button>
        </div>
      </div>
      <div class="grid grid-cols-5 gap-2 mt-3">
        <div v-for="(item, index) in gridData" :key="index" class="h-32 w-full bg-white rounded">
          <div class="text-vs font-semibold text-gray-600 family-poppins border-b pt-2 pb-1 px-2">{{item.title}}</div>
          <div class="px-4 py-2">
            <div class="text-3xl font-medium text-gray-800 family-poppins">{{item.mints}}</div>
            <div class="mt-2">
              <div v-for="(ele, index) in item.Data" :key="index" class="grid grid-cols-2">
                <div class="text-xs font-medium family-poppins text-gray-700">{{ele.subtitle}}</div>
                <div class="text-xs font-medium family-poppins text-gray-700">{{ele.result}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-4 gap-2 mt-2">
        <div v-for="(item, index) in gridData2" :key="index" class="h-32 w-full flex flex-col bg-white rounded">
          <div class="text-vs font-semibold text-gray-600 family-poppins border-b pt-2 pb-1 px-2">{{item.title}}</div>
          <div class="my-auto">
            <div v-for="(ele, index) in item.Data" :key="index" class="flex justify-center">
              <div class="text-3xl font-medium family-poppins">{{ele.subtitle}}</div>
              <div class="text-sm font-medium family-poppins text-gray-700 mt-auto pb-1 ml-2">{{ele.result}}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-2">
        <div class="h-44 w-full flex flex-col bg-white rounded">
          <div class="text-vs font-semibold text-gray-600 family-poppins border-b pt-2 pb-1 px-2">Timeline</div>
          <div class="p-4">
            <div class="flex justify-center">
              <div class="flex">
                <svg class="h-3 w-3 text-gray-500 my-auto mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M15 10.001c0 .299-.305.514-.305.514l-8.561 5.303C5.51 16.227 5 15.924 5 15.149V4.852c0-.777.51-1.078 1.135-.67l8.561 5.305c-.001 0 .304.215.304.514z"/></svg>
                <div class="text-gray-600 family-poppins font-semibold text-xs my-auto">Start time : <span class="text-black">11:03 AM</span></div>
              </div>
              <div class="flex ml-10">
                <svg class="h-3 w-3 text-gray-500 my-auto mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16 4.995v9.808c0 .661-.536 1.197-1.196 1.197H4.997A.997.997 0 014 15.003V5.196C4 4.536 4.536 4 5.196 4h9.808c.55 0 .996.446.996.995z"/></svg>
                <div class=" text-gray-600 family-poppins font-semibold text-xs ">End time : <span class="text-black">12:00 AM</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-2 grid grid-cols-2 gap-2">
        <div class="h-44 w-full flex flex-col bg-white rounded relative">
          <div class="text-vs font-semibold text-gray-600 family-poppins border-b pt-2 pb-1 px-2">Top used website and application</div>
          <div class="p-2">
            <div class="grid grid-cols-10 gap-3">
              <div class=" col-span-4 flex">
                <svg class="h-3 w-3 text-gray-600 mr-3" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill-rule="evenodd" d="M256 0C115.041 0 0 115.049 0 256c0 140.959 115.049 256 256 256 140.959 0 256-115.049 256-256C512 115.041 396.951 0 256 0zm-76.362 43.29c-17.564 22.331-30.328 49.94-39.16 76.71H75.621c26.263-34.746 62.314-61.693 104.017-76.71zM56.452 149.9h75.538c-6.786 28.437-10.792 59.307-11.754 91.1H30.51c2.154-32.707 11.293-63.633 25.942-91.1zm0 212.1c-14.649-27.467-23.788-58.293-25.942-91h89.726c.962 31.793 4.968 62.563 11.754 91H56.452zm19.169 30h64.856c8.83 26.763 21.594 54.376 39.161 76.71-41.703-15.017-77.754-41.964-104.017-76.71zM241 479.454C207.509 468.196 184.418 425.2 172.222 392H241v87.454zM241 362h-78.115c-7.29-28.035-11.61-58.884-12.637-91H241v91zm0-121h-90.752c1.028-32.116 5.348-62.965 12.637-91H241v91zm0-121h-68.778C184.417 86.801 207.509 43.804 241 32.546V120zm214.548 30c14.65 27.467 23.788 58.293 25.942 91h-89.726c-.962-31.793-4.968-62.563-11.754-91h75.538zm-19.169-30h-64.856c-8.83-26.763-21.594-54.376-39.161-76.71 41.703 15.017 77.754 41.964 104.017 76.71zM271 32.546C304.491 43.804 327.582 86.8 339.778 120H271V32.546zM271 150h78.115c7.29 28.035 11.61 58.884 12.637 91H271v-91zm0 120.9h90.752c-1.028 32.116-5.348 63.065-12.637 91.1H271v-91.1zm0 208.554V391.9h68.778c-12.195 33.199-35.287 76.296-68.778 87.554zm61.362-10.744c17.564-22.331 30.328-50.041 39.161-76.81h64.856c-26.263 34.746-62.314 61.793-104.017 76.81zM455.548 362H380.01c6.786-28.437 10.792-59.307 11.754-91.1h89.726c-2.154 32.707-11.293 63.633-25.942 91.1z"/></svg>
                <div class="text-vs font-bold family-poppins">www.edunits/login.com</div>
              </div>
              <div class=" col-span-5 flex">
                <div class="h-1 w-32 bg-green-500 my-auto"></div>
              </div>
              <div class=" col-span-1 flex">
                <div class="font-bold family-poppins text-xs ">1m</div>
              </div>
            </div>
            <div class="grid grid-cols-10 my-2 gap-3">
              <div class=" col-span-4 flex">
                <svg class="h-3 w-3 text-gray-600 mr-3" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill-rule="evenodd" d="M256 0C115.041 0 0 115.049 0 256c0 140.959 115.049 256 256 256 140.959 0 256-115.049 256-256C512 115.041 396.951 0 256 0zm-76.362 43.29c-17.564 22.331-30.328 49.94-39.16 76.71H75.621c26.263-34.746 62.314-61.693 104.017-76.71zM56.452 149.9h75.538c-6.786 28.437-10.792 59.307-11.754 91.1H30.51c2.154-32.707 11.293-63.633 25.942-91.1zm0 212.1c-14.649-27.467-23.788-58.293-25.942-91h89.726c.962 31.793 4.968 62.563 11.754 91H56.452zm19.169 30h64.856c8.83 26.763 21.594 54.376 39.161 76.71-41.703-15.017-77.754-41.964-104.017-76.71zM241 479.454C207.509 468.196 184.418 425.2 172.222 392H241v87.454zM241 362h-78.115c-7.29-28.035-11.61-58.884-12.637-91H241v91zm0-121h-90.752c1.028-32.116 5.348-62.965 12.637-91H241v91zm0-121h-68.778C184.417 86.801 207.509 43.804 241 32.546V120zm214.548 30c14.65 27.467 23.788 58.293 25.942 91h-89.726c-.962-31.793-4.968-62.563-11.754-91h75.538zm-19.169-30h-64.856c-8.83-26.763-21.594-54.376-39.161-76.71 41.703 15.017 77.754 41.964 104.017 76.71zM271 32.546C304.491 43.804 327.582 86.8 339.778 120H271V32.546zM271 150h78.115c7.29 28.035 11.61 58.884 12.637 91H271v-91zm0 120.9h90.752c-1.028 32.116-5.348 63.065-12.637 91.1H271v-91.1zm0 208.554V391.9h68.778c-12.195 33.199-35.287 76.296-68.778 87.554zm61.362-10.744c17.564-22.331 30.328-50.041 39.161-76.81h64.856c-26.263 34.746-62.314 61.793-104.017 76.81zM455.548 362H380.01c6.786-28.437 10.792-59.307 11.754-91.1h89.726c-2.154 32.707-11.293 63.633-25.942 91.1z"/></svg>
                <div class="text-vs font-bold family-poppins">www.noeticitservices.com</div>
              </div>
              <div class=" col-span-5 flex">
                <div class="h-1 w-48 bg-red-500 my-auto"></div>
              </div>
              <div class=" col-span-1 flex">
                <div class="font-bold family-poppins text-xs ">3m</div>
              </div>
            </div>
            <div class="grid grid-cols-10 gap-3">
              <div class=" col-span-4 flex">
                <svg class="h-3 w-3 text-gray-600 mr-3" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill-rule="evenodd" d="M256 0C115.041 0 0 115.049 0 256c0 140.959 115.049 256 256 256 140.959 0 256-115.049 256-256C512 115.041 396.951 0 256 0zm-76.362 43.29c-17.564 22.331-30.328 49.94-39.16 76.71H75.621c26.263-34.746 62.314-61.693 104.017-76.71zM56.452 149.9h75.538c-6.786 28.437-10.792 59.307-11.754 91.1H30.51c2.154-32.707 11.293-63.633 25.942-91.1zm0 212.1c-14.649-27.467-23.788-58.293-25.942-91h89.726c.962 31.793 4.968 62.563 11.754 91H56.452zm19.169 30h64.856c8.83 26.763 21.594 54.376 39.161 76.71-41.703-15.017-77.754-41.964-104.017-76.71zM241 479.454C207.509 468.196 184.418 425.2 172.222 392H241v87.454zM241 362h-78.115c-7.29-28.035-11.61-58.884-12.637-91H241v91zm0-121h-90.752c1.028-32.116 5.348-62.965 12.637-91H241v91zm0-121h-68.778C184.417 86.801 207.509 43.804 241 32.546V120zm214.548 30c14.65 27.467 23.788 58.293 25.942 91h-89.726c-.962-31.793-4.968-62.563-11.754-91h75.538zm-19.169-30h-64.856c-8.83-26.763-21.594-54.376-39.161-76.71 41.703 15.017 77.754 41.964 104.017 76.71zM271 32.546C304.491 43.804 327.582 86.8 339.778 120H271V32.546zM271 150h78.115c7.29 28.035 11.61 58.884 12.637 91H271v-91zm0 120.9h90.752c-1.028 32.116-5.348 63.065-12.637 91.1H271v-91.1zm0 208.554V391.9h68.778c-12.195 33.199-35.287 76.296-68.778 87.554zm61.362-10.744c17.564-22.331 30.328-50.041 39.161-76.81h64.856c-26.263 34.746-62.314 61.793-104.017 76.81zM455.548 362H380.01c6.786-28.437 10.792-59.307 11.754-91.1h89.726c-2.154 32.707-11.293 63.633-25.942 91.1z"/></svg>
                <div class="text-vs font-bold family-poppins">www.nitseditor.com</div>
              </div>
              <div class=" col-span-5 flex">
                <div class="h-1 w-full bg-blue-500 my-auto"></div>
              </div>
              <div class=" col-span-1 flex">
                <div class="font-bold family-poppins text-xs ">10m</div>
              </div>
            </div>
          </div>
          <div class="text-xs font-medium underline family-poppins absolute bottom-3 right-3 text-gray-600">website %& apps</div>
        </div>
        <div class="h-44 w-full flex flex-col bg-white rounded relative">
          <div class="text-vs font-semibold text-gray-600 family-poppins border-b pt-2 pb-1 px-2">Top used unproductive website and application</div>
          <div class="p-2 h-full flex">
            <div class="flex-col m-auto">
              <div class="">
                <img class="mx-auto" src="../assets/images/columns.png" alt="columns" height="47" width="74"/>
              </div>
              <div class="text-xs mt-2 font-medium text-gray-600 family-poppins">No website and app to show</div>
            </div>
          </div>
          <div class="text-xs font-medium underline family-poppins absolute bottom-3 right-3 text-gray-600">website %& apps</div>
        </div>
        <div class="h-56 w-full flex flex-col bg-white relative rounded">
          <div class="text-vs font-semibold text-gray-600 family-poppins border-b pt-2 pb-1 px-2">Total Projects</div>
          <div class="p-4">
            <div class="grid grid-cols-2 gap-3">
              <div>
                <div class="flex justify-between">
                  <div class="flex">
                    <div class="h-5 w-5 rounded-full flex mr-2 bg-green-400">
                      <div class="h-4 w-4 bg-white rounded-full m-auto"></div>
                    </div>
                    <div class="text-xs font-medium text-gray-700 family-poppins my-auto">General Works</div>
                  </div>
                  <div class="my-auto text-xs font-semibold family-poppins">73</div>
                </div>
              </div>
              <div class="h-full flex">
                <div class="h-32 w-32 bg-green-400 rounded-full flex m-auto">
                  <div class="bg-white rounded-full h-24 w-24 m-auto flex">
                    <div class="m-auto">
                      <div class="text-2xl font-semibold family-poppins ">7m</div>
                      <div class="text-xs font-medium family-poppins text-gray-500">Total</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="text-xs font-medium underline family-poppins absolute bottom-3 right-3 text-gray-600">project report</div>
        </div>
        <div class="h-56 w-full flex flex-col bg-white relative rounded">
          <div class="text-vs font-semibold text-gray-600 family-poppins border-b pt-2 pb-1 px-2">Top Tasks</div>
          <div class="p-4">
            <div class="flex justify-between">
              <div class="flex">
                <div class="text-xs font-medium text-gray-600 family-poppins my-auto">Email</div>
              </div>
              <div class="flex">
                <div class="bg-gray-200 rounded-full px-2 text-vs family-poppins font-medium text-center">General Works</div>
                <div class="my-auto text-xs font-semibold family-poppins ml-6">73</div>

              </div>
            </div>
          </div>
          <div class="text-xs font-medium underline family-poppins absolute bottom-3 right-3 text-gray-600">website %& apps</div>
        </div>
      </div>
    </div>
  </layout>
</template>

<script>
import Layout from "../components/layout.vue";
export default {
name: "developer-dashboard",
  components: {Layout},
  data(){
    return{
      gridData:[
        {id:1, title:'Total Time', mints:'2m',Data:[{id:1,subtitle:'This week :', result:'2m'},{id:1,subtitle:'This week :', result:'2m'},]},
        {id:1, title:'This weeks tasks', mints:'2m',Data:[{id:1,subtitle:'This week :', result:'2m'},{id:1,subtitle:'This week :', result:'2m'},]},
        {id:1, title:'This month', mints:'2m',Data:[{id:1,subtitle:'This week :', result:'2m'},{id:1,subtitle:'This week :', result:'2m'},]},
        {id:1, title:'This weeks task', mints:'2m',Data:[{id:1,subtitle:'This week :', result:'2m'},{id:1,subtitle:'This week :', result:'2m'},]},
        {id:1, title:'Employee of the month', mints:'2m',Data:[{id:1,subtitle:'This week :', result:'2m'},{id:1,subtitle:'This week :', result:'2m'},]},
      ],
      gridData2:[
        {id:1, title:'Task Due',Data:[{id:1,subtitle:'2 ', result:'Task Due'},]},
        {id:2, title:'Task overdue',Data:[{id:1,subtitle:'5 ', result:'Task overdue'},]},
        {id:3, title:'Total tasks',Data:[{id:1,subtitle:'12 ', result:'Total task'},]},
        {id:4, title:'This week task',Data:[{id:1,subtitle:'10 ', result:'Task Due'},]},
      ]
    }
  }
}
</script>

<style scoped>

</style>
