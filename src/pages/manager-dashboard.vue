<template>
  <layout active="manager-dashboard">
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
      <div class="grid grid-cols-6 gap-2 mt-3">
        <box-widget styling="" title="Total employees">
          <div class="flex justify-center h-full">
            <div class="my-4">
              <div class="text-2xl font-bold family-poppins">12000</div>
              <div class="text-xs font-medium family-poppins text-center text-teal">123 new</div>
            </div>
          </div>
        </box-widget>
        <box-widget v-for="(item, index) in gridData" :title="item.title" :key="index">
          <img class="rounded-l" :src="'/src/assets/images/graph/' +item.image">
        </box-widget>

      </div>
      <div class="grid grid-cols-6 gap-2 mt-2">
        <div v-for="(item, index) in gridData2" class="h-32 w-full flex flex-col bg-white rounded">
          <div class="text-vs font-semibold text-gray-600 family-poppins border-b pt-2 pb-1 px-2">{{item.title}}</div>
          <div class="my-auto">
            <div v-for="(ele, index) in item.Data" class="flex-col">
              <div class="text-3xl font-semibold family-poppins text-center">{{ele.subtitle}}</div>
              <div class="text-xs font-medium family-poppins text-teal mt-auto pb-1 mt-2 text-center">{{ele.result}}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-2">
        <div class="h-44 w-full flex flex-col bg-white rounded">
          <div class="text-vs font-semibold text-gray-600 family-poppins border-b pt-2 pb-1 px-2">Leave</div>
          <div class="p-4">
            <div class="grid grid-cols-5 gap-4 pt-4">
              <div v-for="(item, index) in Leave" :class="'p-2 rounded-md '+item.styling">
                <div class="text-white text-2xl font-bold family-poppins text-center">{{item.number}}</div>
                <div class="border-b-2 border-white w-7 mx-auto my-1"></div>
                <div class="text-white text-xs font-medium family-poppins text-center">{{item.name}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-2 grid grid-cols-3 gap-2">
        <div class="col-span-2">
          <div class="grid grid-cols-7 gap-2">
            <div class="col-span-2">
              <box-widget title="Approved logs" styling="h-auto">
                <div class="flex py-1">
                  <div class="flex w-11 h-11 rounded-full my-auto bg-blue-600">
                    <div class="flex w-8 h-8 bg-white rounded-full m-auto">
                      <div class="family-poppins text-sm font-bold m-auto text-gray-800">86%</div>
                    </div>
                  </div>
                  <div class="flex-col my-auto ml-3">
                    <div class="family-poppins font-medium text-xs text-gray-700">Duration</div>
                    <div class="family-poppins font-semibold text-xl">8:30<span class="text-sm">h</span></div>
                  </div>
                </div>
              </box-widget>
              <box-widget title="Billable logs" styling="h-auto" class="mt-3">
                <div class="flex py-1">
                  <div class="flex w-11 h-11 rounded-full my-auto bg-red-600">
                    <div class="flex w-8 h-8 bg-white rounded-full m-auto">
                      <div class="family-poppins text-sm font-bold m-auto text-gray-800">68%</div>
                    </div>
                  </div>
                  <div class="flex-col my-auto ml-3">
                    <div class="family-poppins font-medium text-xs text-gray-700">Duration</div>
                    <div class="family-poppins font-semibold text-xl">8:30<span class="text-sm">h</span></div>
                  </div>
                </div>
              </box-widget>
            </div>
            <div class="col-span-5">
              <box-widget title="Your leave updates" styling="h-auto">
                <div class="h-44 overflow-y-auto -mx-4 -my-2">
                  <div class="w-full pl-3">
                    <table class="w-full">
                      <thead>
                      <tr class=" border-b-2">
                        <th class="family-poppins text-xs font-semibold text-gray-600 text-left py-3">No.</th>
                        <th class="family-poppins text-xs font-semibold text-gray-600 text-left w-64 pl-5">Subject</th>
                        <th class="family-poppins text-xs font-semibold text-gray-600 text-left">Date</th>
                        <th class="family-poppins text-xs font-semibold text-gray-600 text-left px-2">No. of days</th>
                        <th class="family-poppins text-xs font-semibold text-gray-600 text-left">Status</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr v-for="(item,index) in LeaveData" class="py-3 border-b">
                        <td class="family-poppins text-xs font-medium text-gray-600 py-2">{{item.id}}</td>
                        <td class="flex py-2 pl-5">
                          <div class="pt-1">
                            <svg :class="'w-4 h-4 ' + item.color" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9 10h2v2h9s-.149-4.459-.2-5.854C19.75 4.82 19.275 4 17.8 4h-3.208l-1.197-2.256C13.064 1.121 12.951 1 12.216 1H7.783c-.735 0-.847.121-1.179.744-.165.311-.7 1.318-1.196 2.256H2.199c-1.476 0-1.945.82-2 2.146C.145 7.473 0 12 0 12h9v-2zM7.649 2.916c.23-.432.308-.516.817-.516h3.067c.509 0 .588.084.816.516L12.924 4h-5.85l.575-1.084zM11 15H9v-2H.5s.124 1.797.199 3.322C.73 16.955.917 18 2.499 18H17.5c1.582 0 1.765-1.047 1.8-1.678.087-1.568.2-3.322.2-3.322H11v2z" fill-rule="evenodd"/></svg>
                          </div>
                          <div class="my-auto ml-3">
                            <div class="family-poppins text-xs font-medium text-gray-600">{{item.title}}</div>
                            <div class="family-poppins text-vs font-normal text-gray-600">{{item.sub_title}}</div>
                          </div>
                        </td>
                        <td class="family-poppins text-xs font-mediumd text-gray-600">{{item.deadline}}</td>
                        <td class="family-poppins text-xs text-center font-mediumd text-gray-600">{{item.days}}</td>
                        <td>
                          <button :class="'family-poppins text-xs font-normal text-white px-1 focus:outline-none cursor-default rounded ' + item.bg_color">{{item.status}}</button>
                        </td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </box-widget>
            </div>
          </div>
        </div>
        <div class="col-span-1">
          <div class="grid grid-cols-2 gap-2">
            <box-widget title="Total leave" styling="h-auto">
              <div class="h-40">
                <div class="flex-col border-b pb-2">
                  <div class="text-xs font-medium family-poppins text-gray-500">Medical leave</div>
                  <div class="text-xl font-bold family-poppins text-gray-800">09</div>
                </div>
                <div class="flex-col border-b py-2">
                  <div class="text-xs font-medium family-poppins text-gray-500">Casual</div>
                  <div class="text-xl font-bold family-poppins text-gray-800">02</div>
                </div>
                <div class="flex-col py-2">
                  <div class="text-xs font-medium family-poppins text-gray-500">Medical leave</div>
                  <div class="text-xl font-bold family-poppins text-gray-800">01</div>
                </div>
              </div>
            </box-widget>
            <box-widget title="Upcoming official holiday" styling="h-auto">
              <div class="h-44 overflow-y-auto -mx-4 -my-2">
                <div class="p-2">
                  <div class="flex justify-between pb-2 border-b-2">
                    <div class="text-xs font-semibold family-poppins">Date</div>
                    <div class="text-xs font-semibold family-poppins">Nature</div>
                  </div>
                  <div class="flex justify-between py-2 border-b">
                    <div class="text-vs font-normal family-poppins">22 Dec</div>
                    <div class="flex-col">
                      <div class="text-vs font-medium family-poppins">Diwali</div>
                      <div class="text-vs font-normal text-gray-500 family-poppins">for Indian</div>
                    </div>
                  </div>
                  <div class="flex justify-between py-2 border-b">
                    <div class="text-vs font-normal family-poppins">23 Dec</div>
                    <div class="flex-col">
                      <div class="text-vs font-medium family-poppins">Eid</div>
                      <div class="text-vs font-normal text-gray-500 family-poppins">for Indian</div>
                    </div>
                  </div>
                  <div class="flex justify-between py-2 border-b">
                    <div class="text-vs font-normal family-poppins">23 Dec</div>
                    <div class="flex-col">
                      <div class="text-vs font-medium family-poppins">Christmas</div>
                      <div class="text-vs font-normal text-gray-500 family-poppins">Global</div>
                    </div>
                  </div>
                  <div class="flex justify-between py-2">
                    <div class="text-vs font-normal family-poppins">23 Dec</div>
                    <div class="flex-col">
                      <div class="text-vs font-medium family-poppins">Christmas</div>
                      <div class="text-vs font-normal text-gray-500 family-poppins">Global</div>
                    </div>
                  </div>
                </div>
              </div>
            </box-widget>
          </div>
        </div>
      </div>
      <div class="mt-2 grid grid-cols-2 gap-2">
        <box-widget title="News room" styling="h-auto">
          <div class="">
            <div class="grid grid-cols-10 gap-3">
              <div class=" col-span-4 flex">
                <svg class="h-3 w-3 text-gray-600 mr-3" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill-rule="evenodd" d="M256 0C115.041 0 0 115.049 0 256c0 140.959 115.049 256 256 256 140.959 0 256-115.049 256-256C512 115.041 396.951 0 256 0zm-76.362 43.29c-17.564 22.331-30.328 49.94-39.16 76.71H75.621c26.263-34.746 62.314-61.693 104.017-76.71zM56.452 149.9h75.538c-6.786 28.437-10.792 59.307-11.754 91.1H30.51c2.154-32.707 11.293-63.633 25.942-91.1zm0 212.1c-14.649-27.467-23.788-58.293-25.942-91h89.726c.962 31.793 4.968 62.563 11.754 91H56.452zm19.169 30h64.856c8.83 26.763 21.594 54.376 39.161 76.71-41.703-15.017-77.754-41.964-104.017-76.71zM241 479.454C207.509 468.196 184.418 425.2 172.222 392H241v87.454zM241 362h-78.115c-7.29-28.035-11.61-58.884-12.637-91H241v91zm0-121h-90.752c1.028-32.116 5.348-62.965 12.637-91H241v91zm0-121h-68.778C184.417 86.801 207.509 43.804 241 32.546V120zm214.548 30c14.65 27.467 23.788 58.293 25.942 91h-89.726c-.962-31.793-4.968-62.563-11.754-91h75.538zm-19.169-30h-64.856c-8.83-26.763-21.594-54.376-39.161-76.71 41.703 15.017 77.754 41.964 104.017 76.71zM271 32.546C304.491 43.804 327.582 86.8 339.778 120H271V32.546zM271 150h78.115c7.29 28.035 11.61 58.884 12.637 91H271v-91zm0 120.9h90.752c-1.028 32.116-5.348 63.065-12.637 91.1H271v-91.1zm0 208.554V391.9h68.778c-12.195 33.199-35.287 76.296-68.778 87.554zm61.362-10.744c17.564-22.331 30.328-50.041 39.161-76.81h64.856c-26.263 34.746-62.314 61.793-104.017 76.81zM455.548 362H380.01c6.786-28.437 10.792-59.307 11.754-91.1h89.726c-2.154 32.707-11.293 63.633-25.942 91.1z"/></svg>
                <div class="text-vs font-bold family-poppins">www.edunits.com/login</div>
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
        </box-widget>
      </div>
      <div class="mt-2 grid grid-cols-2 gap-2">
        <div class="h-44 w-full flex flex-col bg-white rounded relative">
          <div class="text-vs font-semibold text-gray-600 family-poppins border-b pt-2 pb-1 px-2">Top used website and application</div>
          <div class="p-2">
            <div class="grid grid-cols-10 gap-3">
              <div class="col-span-4 flex">
                <svg class="h-3 w-3 text-gray-600 mr-3" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill-rule="evenodd" d="M256 0C115.041 0 0 115.049 0 256c0 140.959 115.049 256 256 256 140.959 0 256-115.049 256-256C512 115.041 396.951 0 256 0zm-76.362 43.29c-17.564 22.331-30.328 49.94-39.16 76.71H75.621c26.263-34.746 62.314-61.693 104.017-76.71zM56.452 149.9h75.538c-6.786 28.437-10.792 59.307-11.754 91.1H30.51c2.154-32.707 11.293-63.633 25.942-91.1zm0 212.1c-14.649-27.467-23.788-58.293-25.942-91h89.726c.962 31.793 4.968 62.563 11.754 91H56.452zm19.169 30h64.856c8.83 26.763 21.594 54.376 39.161 76.71-41.703-15.017-77.754-41.964-104.017-76.71zM241 479.454C207.509 468.196 184.418 425.2 172.222 392H241v87.454zM241 362h-78.115c-7.29-28.035-11.61-58.884-12.637-91H241v91zm0-121h-90.752c1.028-32.116 5.348-62.965 12.637-91H241v91zm0-121h-68.778C184.417 86.801 207.509 43.804 241 32.546V120zm214.548 30c14.65 27.467 23.788 58.293 25.942 91h-89.726c-.962-31.793-4.968-62.563-11.754-91h75.538zm-19.169-30h-64.856c-8.83-26.763-21.594-54.376-39.161-76.71 41.703 15.017 77.754 41.964 104.017 76.71zM271 32.546C304.491 43.804 327.582 86.8 339.778 120H271V32.546zM271 150h78.115c7.29 28.035 11.61 58.884 12.637 91H271v-91zm0 120.9h90.752c-1.028 32.116-5.348 63.065-12.637 91.1H271v-91.1zm0 208.554V391.9h68.778c-12.195 33.199-35.287 76.296-68.778 87.554zm61.362-10.744c17.564-22.331 30.328-50.041 39.161-76.81h64.856c-26.263 34.746-62.314 61.793-104.017 76.81zM455.548 362H380.01c6.786-28.437 10.792-59.307 11.754-91.1h89.726c-2.154 32.707-11.293 63.633-25.942 91.1z"/></svg>
                <div class="text-vs font-bold family-poppins">www.edunits.com/login</div>
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
import BoxWidget from "../components/box-widget.vue";
export default {
  name: "manager-dashboard",
  components: {BoxWidget, Layout},
  data(){
    return{
      Leave:[
        {id:1, number:2, name:'Casual leave', styling:'bg_gradient_to_br from-gray-400 to-gray-600'},
        {id:1, number:12, name:'Earned leave', styling:'bg_gradient_to_br from-red-400 to-red-600'},
        {id:1, number:33, name:'Half pay leave', styling:'bg_gradient_to_br from-green-300 to-green-600'},
        {id:1, number:4, name:'Restricted leave', styling:'bg_gradient_to_br from-yellow-400 to-red-600'},
        {id:1, number:5, name:'Medical leave', styling:'bg_gradient_to_br from-blue-400 to-blue-600'},
      ],
      gridData:[
        {id:1, title:'Total Salary', image:'new-1.png'},
        {id:1, title:'Status', image:'new-2.png'},
        {id:1, title:'Gender', image:'new-3.png'},
        {id:1, title:'Origin', image:'new-4.png'},
        {id:1, title:'Position', image:'new-5.png'},
      ],
      gridData2:[
        {id:1, title:'Task done today',Data:[{id:1,subtitle:'2 ', result:'Task Due'},]},
        {id:2, title:'Task due Today',Data:[{id:1,subtitle:'5 ', result:'Task overdue'},]},
        {id:3, title:'Task due This Week',Data:[{id:1,subtitle:'12 ', result:'Total task'},]},
        {id:4, title:'Task this month',Data:[{id:1,subtitle:'10 ', result:'Task Due'},]},
        {id:4, title:'Task this month',Data:[{id:1,subtitle:'10 ', result:'Task Due'},]},
        {id:4, title:'Employee of the month',Data:[{id:1,subtitle:'10 ', result:'Task Due'},]},
      ],
      LeaveData:[
        {id:'1', color:'text-green-700', title:'Project for Biltrax', sub_title:'Casual leave', deadline:'Fri,20/28',days:'8', bg_color:'bg-gray-300', status:'On hold'},
        {id:'2', color:'text-yellow-600', title:'Project for Concept LLP', sub_title:'Medical leave', deadline:'Fri,02/12', days:'3',bg_color:'bg-yellow-300', status:'In progress'},
        {id:'3', color:'text-red-500', title:'Project for Biltrax', sub_title:'Casual leave', deadline:'Fri,15/22', days:'7', bg_color:'bg-green-300', status:'Complete'},
        {id:'4', color:'text-green-700', title:'Project for Biltrax', sub_title:'Medical leave', deadline:'Fri,18/26', days:'10', bg_color:'bg-gray-300', status:'On hold'},
        {id:'5', color:'text-indigo-500', title:'Project for Biltrax', sub_title:'Medical leave', deadline:'Fri,18/26', days:'8', bg_color:'bg-gray-300', status:'On hold'},
        {id:'6', color:'text-green-700', title:'Project for Biltrax', sub_title:'Casual leave', deadline:'Fri,18/26', days:'2', bg_color:'bg-gray-300', status:'On hold'},
      ],
    }
  }
}
</script>

<style scoped>
/* width */
::-webkit-scrollbar {
  width: 6px;
  background: #e6e6e6;
}
/* Track */
::-webkit-scrollbar-track {
}
/* Handle */
::-webkit-scrollbar-thumb {
  background: #b3b3b3;
}
/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #9a9a9a;
}
</style>
