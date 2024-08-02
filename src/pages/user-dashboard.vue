<script>
import Layout from '../components/layout.vue'
import BoxWidget from '../components/box-widget.vue'
export default {
name: "UserDashboard",
  components: {BoxWidget, Layout},
  data(){
    return{
      gridData:[
        {id:1, title:'Today\'s activity', image:'/src/assets/images/graph/todays-act.png', task:'Task on priority', num:'04', terms:'Term Dates', month:'JUN - DEC', styling:'text-pink-600'},
        {id:1, title:'This week\'s activity', image:'/src/assets/images/graph/weeks-act.png', task:'Task on priority', num:'08', terms:'Term Dates', month:'APR - MAY', styling:'text-yellow-500'},
        {id:1, title:'This month\'s activity', image:'/src/assets/images/graph/months-act.png', task:'Task on priority', num:'10', terms:'Term Dates', month:'APR - MAY', styling:'text-indigo-700'},
        // {id:1, title:'This weeks task', mints:'2m',Data:[{id:1,subtitle:'This week :', result:'2m'},{id:1,subtitle:'This week :', result:'2m'},]},
        // {id:1, title:'Employee of the month', mints:'2m',Data:[{id:1,subtitle:'This week :', result:'2m'},{id:1,subtitle:'This week :', result:'2m'},]},
      ],
      gridData2:[
        {id:1, title:'Task Due',Data:[{id:1,subtitle:'2 ', result:'Task Due'},]},
        {id:2, title:'Task overdue',Data:[{id:1,subtitle:'5 ', result:'Task overdue'},]},
        {id:3, title:'Total tasks',Data:[{id:1,subtitle:'12 ', result:'Total task'},]},
        {id:4, title:'This week task',Data:[{id:1,subtitle:'10 ', result:'Task Due'},]},
      ],
      DescData:[
        {id:'1', data:'Find a place for client meetings', styling:'text-yellow-500', time_1:'00:00'},
        {id:'1', data:'Find a place for client meetings', styling:'text-red-600', time_1:'00:00'},
        {id:'1', data:'Find a place for client meetings', styling:'text-blue-600', time_1:'05:25'},
        {id:'1', data:'Find a place for client meetings', styling:'text-blue-600', time_1:'05:25'},
        {id:'1', data:'Find a place for client meetings', styling:'text-blue-600', time_1:'05:25'},
        {id:'1', data:'Find a place for client meetings', styling:'text-blue-600', time_1:'05:25'}
      ],
      CalenderData:[
        {id:'1', day_date:'Monday,04-27', time:'4:00 am', nxt_time:'4:00 am', schedule:'Weekly catch-up', status:'1-on-1', place:'Meeting Room'},
        {id:'1', day_date:'Monday,04-27', time:'4:00 am', nxt_time:'4:00 am', schedule:'Weekly catch-up', status:'1-on-1', place:'Meeting Room'},
        {id:'1', day_date:'Monday,04-27', time:'4:00 am', nxt_time:'4:00 am', schedule:'Weekly catch-up', status:'1-on-1', place:'Meeting Room'},
        {id:'1', day_date:'Monday,04-27', time:'4:00 am', nxt_time:'4:00 am', schedule:'Weekly catch-up', status:'1-on-1', place:'Meeting Room'},
      ],
      WeekData:[
        {id:'1', color:'text-green-700', title:'Project for Biltrax', sub_title:'Biltrax.user', deadline:'Fri,20/28', bg_color:'bg-gray-300', status:'On hold'},
        {id:'2', color:'text-yellow-600', title:'Project for Concept LLP', sub_title:'Biltrax.user', deadline:'Fri,02/12', bg_color:'bg-yellow-300', status:'In progress'},
        {id:'3', color:'text-red-500', title:'Project for Biltrax', sub_title:'Biltrax.user', deadline:'Fri,15/22', bg_color:'bg-green-300', status:'Complete'},
        {id:'4', color:'text-green-700', title:'Project for Biltrax', sub_title:'Biltrax.user', deadline:'Fri,18/26', bg_color:'bg-gray-300', status:'On hold'},
        {id:'5', color:'text-indigo-500', title:'Project for Biltrax', sub_title:'Biltrax.user', deadline:'Fri,18/26', bg_color:'bg-gray-300', status:'On hold'},
        {id:'6', color:'text-green-700', title:'Project for Biltrax', sub_title:'Biltrax.user', deadline:'Fri,18/26', bg_color:'bg-gray-300', status:'On hold'},
      ],
      LeaveData:[
        {id:'1', color:'text-green-700', title:'Project for Biltrax', sub_title:'Casual leave', deadline:'Fri,20/28',days:'8', bg_color:'bg-gray-300', status:'On hold'},
        {id:'2', color:'text-yellow-600', title:'Project for Concept LLP', sub_title:'Medical leave', deadline:'Fri,02/12', days:'3',bg_color:'bg-yellow-300', status:'In progress'},
        {id:'3', color:'text-red-500', title:'Project for Biltrax', sub_title:'Casual leave', deadline:'Fri,15/22', days:'7', bg_color:'bg-green-300', status:'Complete'},
        {id:'4', color:'text-green-700', title:'Project for Biltrax', sub_title:'Medical leave', deadline:'Fri,18/26', days:'10', bg_color:'bg-gray-300', status:'On hold'},
        {id:'5', color:'text-indigo-500', title:'Project for Biltrax', sub_title:'Medical leave', deadline:'Fri,18/26', days:'8', bg_color:'bg-gray-300', status:'On hold'},
        {id:'6', color:'text-green-700', title:'Project for Biltrax', sub_title:'Casual leave', deadline:'Fri,18/26', days:'2', bg_color:'bg-gray-300', status:'On hold'},
      ],
      NameData:[
        {id:'1', name:'Abuzaid Sayyad', hour:'36:00 h', graph:'w-64'},
        {id:'1', name:'Rubal Gulati', hour:'36:00 h', graph:'w-40'},
        {id:'1', name:'Juned Shaikh', hour:'36:00 h', graph:'w-24'},
        {id:'1', name:'Abuzaid Sayyad', hour:'36:00 h', graph:'w-12'},
        {id:'1', name:'Abuzaid Sayyad', hour:'36:00 h', graph:'w-64'},
        {id:'1', name:'Rubal Gulati', hour:'36:00 h', graph:'w-40'},
        {id:'1', name:'Juned Shaikh', hour:'36:00 h', graph:'w-24'},
        {id:'1', name:'Abuzaid Sayyad', hour:'36:00 h', graph:'w-12'},
      ],
    }
  }
}
</script>

<template>
  <layout active="user-dashboard">
    <div class="w-full px-2 pb-3">
      <div class="grid grid-cols-6 gap-2 mt-2">
        <div class="col-span-3">
          <div class="grid-cols-3 gap-2 grid">
            <box-widget v-for="(item, index) in gridData" styling="h-auto" :title="item.title" :key="index">
              <div class="grid grid-cols-5">
                <div class="col-span-3">
                  <img class="h-20 w-auto" :src="item.image"/>
                </div>
                <div class="col-span-2 h-full flex">
                  <div class="mt-auto">
                    <div>
                      <div class="text-xvs font-semibold family-poppins">{{item.task}}</div>
                      <div :class="'text-xs font-bold family-poppins '+item.styling">{{item.num}} <span class="text-xvs text-gray-600 font-medium">lore dolor</span></div>
                    </div>
                    <div class="mt-1 pb-1">
                      <div class="text-xvs font-semibold family-poppins">{{item.terms}}</div>
                      <div :class="'text-vs font-bold family-poppins '+item.styling">{{item.month}}</div>
                    </div>
                  </div>
                </div>
              </div>
            </box-widget>

          </div>
        </div>
        <div class="col-span-3">
          <div class="grid-cols-2 gap-2 grid">
            <box-widget styling="h-auto" title="Task this week">
              <div class="grid grid-cols-2 gap-1">
                <div>
                  <img class="h-20 w-auto"  src="../assets/images/graph/ringProgresss.png" />
                </div>
                <div class="flex">
                  <div class="mt-auto">
                    <div class="flex">
                      <div class="h-2 w-2 rounded-full mr-2 my-auto bg-red-600"></div>
                      <div class="text-vs family-poppins font-medium my-auto">Top priority</div>
                    </div>
                    <div class="flex">
                      <div class="h-2 w-2 rounded-full mr-2 my-auto bg-indigo-700"></div>
                      <div class="text-vs family-poppins font-medium my-auto">Top priority</div>
                    </div>
                    <div class="flex">
                      <div class="h-2 w-2 rounded-full mr-2 my-auto bg-yellow-400"></div>
                      <div class="text-vs family-poppins font-medium my-auto">Top priority</div>
                    </div>
                    <div class="flex pb-1">
                      <div class="h-2 w-2 rounded-full mr-2 my-auto bg-pink-500"></div>
                      <div class="text-vs family-poppins font-medium my-auto">Top priority</div>
                    </div>
                  </div>
                </div>

              </div>
            </box-widget>
            <box-widget styling="h-auto" title="Your performance rate">
              <div class="grid grid-cols-7 gap-2 h-full -mx-2">
                <div class="col-span-3 flex h-full">
                  <div class="my-auto">
                    <div class="text-xs font-semibold family-poppins">This month</div>
                    <div class="text-2xl font-bold family-poppins">09.25</div>
                  </div>
                </div>
                <div class="flex col-span-4 h-full">
                  <div class="mt-6">
                    <div class="flex justify-between">
                      <div class="text-vvs family-poppins font-medium my-auto">Task completion rate</div>
                      <div class="text-vvs family-poppins font-bold my-auto ml-3">4.36</div>
                    </div>
                    <div class="flex justify-between">
                      <div class="text-vvs family-poppins font-medium my-auto">Team interaction</div>
                      <div class="text-vvs family-poppins font-bold my-auto ml-3">4.36</div>
                    </div>
                    <div class="flex justify-between">
                      <div class="text-vvs family-poppins font-medium my-auto">Client interaction</div>
                      <div class="text-vvs family-poppins font-bold my-auto ml-3">4.36</div>
                    </div>
                    <div class="flex justify-between">
                      <div class="text-vvs family-poppins font-medium my-auto ">Management interaction</div>
                      <div class="text-vvs family-poppins font-bold my-auto ml-2">4.36</div>
                    </div>
                  </div>
                </div>

              </div>
            </box-widget>
          </div>
        </div>
      </div>
      <div class="mt-2 grid grid-cols-3 gap-2">
        <box-widget title="My calender" styling="h-auto">
          <div class="h-64 overflow-y-auto -mx-4 -my-2">
            <div v-for="(item,index) in CalenderData" class="">
              <div class="mx-4 py-3 border-b-2 flex justify-between">
                <div class="family-poppins mt-2 text-xs font-bold">{{item.day_date}}</div>
              </div>
              <div class="py-3 mx-4 border-b flex">
                <div class="flex">
                  <div class="my-auto">
                    <div class="family-poppins h-4 flex px-2 text-vs font-light text-white bg-red-700 rounded"><span class="my-auto">{{item.time}}</span></div>
                    <div class="family-poppins text-vs font-light text-gray-600 m-1">{{item.nxt_time}}</div>
                  </div>
                  <div class="my-auto ml-7">
                    <div class="family-poppins text-xs font-semibold">{{item.schedule}}</div>
                    <div class="family-poppins text-xs font-medium text-gray-500">{{item.status}}</div>
                    <div class="family-poppins text-xs font-medium text-gray-500">{{item.place}}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </box-widget>
        <box-widget title="My tasks" styling="h-auto">
          <div class="h-64 overflow-y-auto -my-2 -mx-4">
            <div class="mx-4 py-2 border-b-2 flex justify-between mt-3">
              <div class="family-poppins text-xs font-medium text-gray-600">Title</div>
              <div class="family-poppins text-xs font-medium text-gray-600">Remaining</div>
            </div>
            <div v-for="(item,index) in DescData" class="py-3 mx-4 border-b flex justify-between">
              <div class="flex">
                <svg :class="'w-3 h-3 my-auto ' +item.styling" fill="currentColor" viewBox="0 -65 424.032 424" xmlns="http://www.w3.org/2000/svg"><path d="M146.66 293.367c-4.094 0-8.191-1.558-11.305-4.695L4.688 158.004c-6.25-6.25-6.25-16.383 0-22.633s16.382-6.25 22.636 0l119.36 119.36L396.71 4.702c6.25-6.25 16.383-6.25 22.633 0s6.25 16.387 0 22.637L158.012 288.672a16.05 16.05 0 01-11.352 4.695zm0 0" fill-rule="evenodd"/></svg>
                <div class="family-poppins text-xs font-semibold text-gray-700 ml-2 my-auto">{{item.data}}</div>
              </div>
              <div class="flex">
                <div class="family-poppins text-xs font-semibold text-gray-700 my-auto">{{item.time_1}}</div>
                <svg class="h-4 w-4 text-gray-400 my-auto ml-2" fill="currentColor" viewBox="0 0 384 384" xmlns="http://www.w3.org/2000/svg"><path d="M192 384c105.863 0 192-86.129 192-192 0-18.273-2.55-36.281-7.602-53.527-2.488-8.48-11.343-13.352-19.847-10.864-8.489 2.48-13.344 11.368-10.864 19.848C349.872 161.785 352 176.777 352 192c0 88.223-71.777 160-160 160S32 280.223 32 192 103.777 32 192 32c32.063 0 62.91 9.375 89.207 27.105 7.32 4.942 17.273 3 22.207-4.32 4.938-7.328 3.012-17.273-4.316-22.21C267.496 11.264 230.465 0 192 0 86.137 0 0 86.129 0 192s86.137 192 192 192zm0 0"/><path d="M356.688 36.688L192 201.368l-52.688-52.68c-6.25-6.247-16.375-6.247-22.625 0-6.246 6.25-6.246 16.375 0 22.625l64 64C183.817 238.44 187.903 240 192 240s8.184-1.559 11.313-4.688l176-176c6.246-6.25 6.246-16.374 0-22.624-6.25-6.247-16.375-6.247-22.625 0zm0 0" fill-rule="evenodd"/></svg>
              </div>
            </div>
          </div>
        </box-widget>
        <box-widget title="Notice updates" styling="h-auto">
          <div class="h-64 overflow-y-auto -mx-4 -my-2">
            <div v-for="(item,index) in CalenderData" class="">
              <div class="mx-4 py-3 border-b-2 flex justify-between">
                <div class="family-poppins mt-2 text-xs font-bold">{{item.day_date}}</div>
              </div>
              <div class="py-3 mx-4 border-b flex">
                <div class="flex">
                  <div class="my-auto ml-7">
                    <div class="family-poppins text-xs font-semibold">{{item.schedule}}</div>
                    <div class="family-poppins text-xs font-medium text-gray-500">{{item.status}}</div>
                    <div class="family-poppins text-xs font-medium text-gray-500">{{item.place}}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </box-widget>
      </div>
      <div class="mt-2 grid grid-cols-3 gap-2">
        <div class="col-span-2">
          <box-widget title="My projects" styling="h-auto">
            <div class="h-64 overflow-y-auto -mx-4 -my-2">
              <div class="w-full pl-3">
                <table class="w-full">
                  <thead>
                  <tr class=" border-b-2">
                    <th class="family-poppins text-xs font-semibold text-gray-600 text-left py-3">No.</th>
                    <th class="family-poppins text-xs font-semibold text-gray-600 text-left">Project Name | Client</th>
                    <th class="family-poppins text-xs font-semibold text-gray-600 text-left">Deadline</th>
                    <th class="family-poppins text-xs font-semibold text-gray-600 text-left">Status</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr v-for="(item,index) in WeekData" class="py-3 border-b">
                    <td class="family-poppins text-xs font-medium text-gray-600 py-2">{{item.id}}</td>
                    <td class="flex py-2">
                      <div class="pt-1">
                        <svg :class="'w-4 h-4 ' + item.color" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9 10h2v2h9s-.149-4.459-.2-5.854C19.75 4.82 19.275 4 17.8 4h-3.208l-1.197-2.256C13.064 1.121 12.951 1 12.216 1H7.783c-.735 0-.847.121-1.179.744-.165.311-.7 1.318-1.196 2.256H2.199c-1.476 0-1.945.82-2 2.146C.145 7.473 0 12 0 12h9v-2zM7.649 2.916c.23-.432.308-.516.817-.516h3.067c.509 0 .588.084.816.516L12.924 4h-5.85l.575-1.084zM11 15H9v-2H.5s.124 1.797.199 3.322C.73 16.955.917 18 2.499 18H17.5c1.582 0 1.765-1.047 1.8-1.678.087-1.568.2-3.322.2-3.322H11v2z" fill-rule="evenodd"/></svg>
                      </div>
                      <div class="my-auto ml-3">
                        <div class="family-poppins text-xs font-medium text-gray-600">{{item.title}}</div>
                        <div class="family-poppins text-vs font-normal text-gray-600">{{item.sub_title}}</div>
                      </div>
                    </td>
                    <td class="family-poppins text-xs font-mediumd text-gray-600">{{item.deadline}}</td>
                    <td>
                      <button :class="'family-poppins text-xs font-normal text-white px-4 py-1 focus:outline-none cursor-default rounded ' + item.bg_color">{{item.status}}</button>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </box-widget>
        </div>
        <div class="col-span-1">
          <box-widget title="Team updates" styling="h-auto">
            <div class="h-64 overflow-y-auto -mx-4 -my-2">
              <div class="flex px-5 py-2">
                <div class="border-r border-gray-200"></div>
                <div>
                  <div class="flex w-full">
                    <img class="h-8 w-8 rounded-full -ml-4" src="https://images.unsplash.com/photo-1569779213435-ba3167dde7cc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjB8fG1hbnxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60">
                    <div class="relative flex">
                      <div class="z-10 bg-gray-100 p-2 text-gray-800 family-poppins text-vs font-medium w-full ml-4 rounded-md">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                      </div>
                      <div class="h-4 w-4 absolute top-3 left-3 bg-gray-100 transform rotate-45"></div>
                    </div>
                  </div>
                  <div class="flex w-full mt-5">
                    <div>
                      <div class="h-8 w-8 bg-white -ml-4 rounded-full border border-gray-200 flex">
                        <svg class="h-5 w-5 m-auto text-red-500" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" version="1.1">
                          <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <rect x="0" y="0" width="24" height="24"/>
                            <path d="M4,9.67471899 L10.880262,13.6470401 C10.9543486,13.689814 11.0320333,13.7207107 11.1111111,13.740321 L11.1111111,21.4444444 L4.49070127,17.526473 C4.18655139,17.3464765 4,17.0193034 4,16.6658832 L4,9.67471899 Z M20,9.56911707 L20,16.6658832 C20,17.0193034 19.8134486,17.3464765 19.5092987,17.526473 L12.8888889,21.4444444 L12.8888889,13.6728275 C12.9050191,13.6647696 12.9210067,13.6561758 12.9368301,13.6470401 L20,9.56911707 Z" fill="currentColor"/>
                            <path d="M4.21611835,7.74669402 C4.30015839,7.64056877 4.40623188,7.55087574 4.5299008,7.48500698 L11.5299008,3.75665466 C11.8237589,3.60013944 12.1762411,3.60013944 12.4700992,3.75665466 L19.4700992,7.48500698 C19.5654307,7.53578262 19.6503066,7.60071528 19.7226939,7.67641889 L12.0479413,12.1074394 C11.9974761,12.1365754 11.9509488,12.1699127 11.9085461,12.2067543 C11.8661433,12.1699127 11.819616,12.1365754 11.7691509,12.1074394 L4.21611835,7.74669402 Z" fill="currentColor" opacity="0.3"/>
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div class="relative flex">
                      <div class="z-10 bg-gray-100 p-2 text-gray-800 family-poppins text-vs font-medium w-full ml-4 rounded-md">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                      </div>
                      <div class="h-4 w-4 absolute top-3 left-3 bg-gray-100 transform rotate-45"></div>
                    </div>
                  </div>
                  <div class="flex w-full mt-5">
                    <div>
                      <div class="h-8 w-8 bg-white -ml-4 rounded-full border border-gray-200 flex">
                        <svg class="h-5 w-5 m-auto text-red-500" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" version="1.1">
                          <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <rect x="0" y="0" width="24" height="24"/>
                            <path d="M4,9.67471899 L10.880262,13.6470401 C10.9543486,13.689814 11.0320333,13.7207107 11.1111111,13.740321 L11.1111111,21.4444444 L4.49070127,17.526473 C4.18655139,17.3464765 4,17.0193034 4,16.6658832 L4,9.67471899 Z M20,9.56911707 L20,16.6658832 C20,17.0193034 19.8134486,17.3464765 19.5092987,17.526473 L12.8888889,21.4444444 L12.8888889,13.6728275 C12.9050191,13.6647696 12.9210067,13.6561758 12.9368301,13.6470401 L20,9.56911707 Z" fill="currentColor"/>
                            <path d="M4.21611835,7.74669402 C4.30015839,7.64056877 4.40623188,7.55087574 4.5299008,7.48500698 L11.5299008,3.75665466 C11.8237589,3.60013944 12.1762411,3.60013944 12.4700992,3.75665466 L19.4700992,7.48500698 C19.5654307,7.53578262 19.6503066,7.60071528 19.7226939,7.67641889 L12.0479413,12.1074394 C11.9974761,12.1365754 11.9509488,12.1699127 11.9085461,12.2067543 C11.8661433,12.1699127 11.819616,12.1365754 11.7691509,12.1074394 L4.21611835,7.74669402 Z" fill="currentColor" opacity="0.3"/>
                          </g>
                        </svg>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
              <div class="w-80 flex px-1 ml-8 -mt-10 relative">
                <div class="z-10 bg-gray-100 p-2 text-gray-800 family-poppins text-vs font-medium w-full ml-4 rounded-md">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                </div>
                <div class="h-4 w-4 absolute top-3 left-4 bg-gray-100 transform rotate-45"></div>
              </div>
            </div>
          </box-widget>
        </div>

      </div>
      <div class="mt-2 grid grid-cols-3 gap-2">
        <div class="col-span-2">
          <box-widget title="Team hours logged this week" styling="h-auto">
            <div class="overflow-y-auto -mx-4 -my-2 h-64">
              <div v-for="(item,index) in NameData" class="flex w-full">
                <div class="w-full pl-3 w-1/2">
                  <div class="py-3 border-b flex ">
                    <div class="family-poppins text-xs font-semibold">{{item.name}}</div>
                  </div>
                </div>
                <div class="w-full w-1/2">
                  <div class="py-3 border-b flex">
                    <div class="family-poppins text-xs font-semibold text-gray-600">{{item.hour}}</div>
                    <div :class="'ml-4 h-4 bg-green-500 my-auto ' + item.graph" ></div>
                  </div>
                </div>
              </div>
            </div>
          </box-widget>
        </div>
        <div class="col-span-1">
          <box-widget title="Employee of the month" styling="h-auto">
            <div class="h-64 overflow-y-auto -my-2 -mx-4">
              <div class="grid grid-cols-2 gap-2 mt-4">
                <div class="flex">
                  <img class="rounded-full h-28 w-28  mx-auto" src="https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2001&q=80">
                </div>
                <div class="flex-col">
                  <div class="text-base font-medium family-poppins">Super Hero</div>
                  <div class="flex mt-1">
                    <div class="text-5xl font-bold family-poppins">9</div>
                    <div class="text-smxl font-medium text-gray-600 family-poppins mt-auto pb-1">/10</div>
                  </div>
                </div>
              </div>
              <div class="px-4 py-6">
                <div class="flex justify-between">
                  <div class="text-xs font-medium family-poppins text-gray-600">Task completion rate</div>
                  <div class="text-xs font-bold family-poppins">04.25</div>
                </div>
                <div class="flex justify-between my-1">
                  <div class="text-xs font-medium family-poppins text-gray-600">Team interaction</div>
                  <div class="text-xs font-bold family-poppins">04.25</div>
                </div>
                <div class="flex justify-between">
                  <div class="text-xs font-medium family-poppins text-gray-600">Client interaction</div>
                  <div class="text-xs font-bold family-poppins">04.25</div>
                </div>
                <div class="flex justify-between mt-1">
                  <div class="text-xs font-medium family-poppins text-gray-600">Management interaction</div>
                  <div class="text-xs font-bold family-poppins">04.25</div>
                </div>
              </div>
            </div>
          </box-widget>
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
    </div>
  </layout>
</template>

<style scoped>
.bg{
  background-image: url(../assets/images/columns.png);
  background-repeat: no-repeat;
  background-size: contain;
  width: 50px;
  height: 50px;
}
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
