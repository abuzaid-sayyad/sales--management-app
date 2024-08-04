<template>
  <layout-two active="dashboard">
    <div class="w-full px-2">
      <div class="flex justify-between mt-2">
        <svg class="w-4 h-4 text-gray-700 hover:text-indigo-700 my-auto cursor-pointer" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10.001 7.8a2.2 2.2 0 100 4.402A2.2 2.2 0 0010 7.8zm-7 0a2.2 2.2 0 100 4.402A2.2 2.2 0 003 7.8zm14 0a2.2 2.2 0 100 4.402A2.2 2.2 0 0017 7.8z" fill-rule="evenodd"/></svg>
        <button class="family-poppins px-3 py-1 focus:outline-none bg-white text-blue-700 hover:bg-indigo-700 hover:text-white text-xs font-semibold rounded">
          + Add Chart
        </button>
      </div>
      <div class="grid grid-cols-6 gap-2 mt-4">
        <box-widget v-for="(item, index) in ChartData" :key="index" :title="item.title" styling="h-auto">
          <div class="flex py-1">
            <div :class="'flex w-11 h-11 rounded-full my-auto ' +item.styling">
              <div class="flex w-8 h-8 bg-white rounded-full m-auto">
                <div class="family-poppins text-sm font-bold m-auto text-gray-800">{{item.percentage}}</div>
              </div>
            </div>
            <div class="flex-col my-auto ml-3">
              <div class="family-poppins font-medium text-xs text-gray-700">{{item.duration}}</div>
              <div class="family-poppins font-semibold text-xl">{{item.time}} <span class="text-sm">{{item.hour}}</span></div>
            </div>
          </div>
        </box-widget>
      </div>
      <div class="grid grid-cols-3 gap-2 mt-2">
        <div class="col-span-2">
          <div class="grid grid-cols-2 gap-2">
            <box-widget v-for="(item,index) in TaskData" :key="index" :title="item.heading" styling="h-auto">
              <div class="h-36 overflow-y-auto -my-2 -mx-4">
                <div class="mx-4 py-2 border-b-2 flex justify-between">
                  <div class="family-poppins text-xs font-medium text-gray-600">{{item.title_1}}</div>
                  <div class="family-poppins text-xs font-medium text-gray-600">{{item.title_2}}</div>
                </div>
                <div v-for="(items,index) in item.DescData" :key="index" class="py-3 mx-4 border-b flex justify-between">
                  <div class="flex">
                    <svg :class="'w-3 h-3 my-auto ' +items.styling" fill="currentColor" viewBox="0 -65 424.032 424" xmlns="http://www.w3.org/2000/svg"><path d="M146.66 293.367c-4.094 0-8.191-1.558-11.305-4.695L4.688 158.004c-6.25-6.25-6.25-16.383 0-22.633s16.382-6.25 22.636 0l119.36 119.36L396.71 4.702c6.25-6.25 16.383-6.25 22.633 0s6.25 16.387 0 22.637L158.012 288.672a16.05 16.05 0 01-11.352 4.695zm0 0" fill-rule="evenodd"/></svg>
                    <div class="family-poppins text-xs font-semibold text-gray-700 ml-2 my-auto">{{items.data}}</div>
                  </div>
                  <div class="flex">
                    <div class="family-poppins text-xs font-semibold text-gray-700 my-auto">{{items.time_1}}</div>
                    <svg class="h-4 w-4 text-gray-400 my-auto ml-2" fill="currentColor" viewBox="0 0 384 384" xmlns="http://www.w3.org/2000/svg"><path d="M192 384c105.863 0 192-86.129 192-192 0-18.273-2.55-36.281-7.602-53.527-2.488-8.48-11.343-13.352-19.847-10.864-8.489 2.48-13.344 11.368-10.864 19.848C349.872 161.785 352 176.777 352 192c0 88.223-71.777 160-160 160S32 280.223 32 192 103.777 32 192 32c32.063 0 62.91 9.375 89.207 27.105 7.32 4.942 17.273 3 22.207-4.32 4.938-7.328 3.012-17.273-4.316-22.21C267.496 11.264 230.465 0 192 0 86.137 0 0 86.129 0 192s86.137 192 192 192zm0 0"/><path d="M356.688 36.688L192 201.368l-52.688-52.68c-6.25-6.247-16.375-6.247-22.625 0-6.246 6.25-6.246 16.375 0 22.625l64 64C183.817 238.44 187.903 240 192 240s8.184-1.559 11.313-4.688l176-176c6.246-6.25 6.246-16.374 0-22.624-6.25-6.247-16.375-6.247-22.625 0zm0 0" fill-rule="evenodd"/></svg>
                  </div>
                </div>
              </div>
            </box-widget>
            <box-widget styling="h-auto" title="Opportunities in the closing stage">
              <div class="h-36 overflow-y-auto -my-2 -mx-4">
                <table class="w-full">
                  <tr class=" border-b-2">
                    <th class="family-poppins text-xs font-semibold py-4 text-left pl-3">Issues Date</th>
                    <th class="family-poppins px-2 text-xs font-semibold py-4 text-left">Client | Project</th>
                    <th class="family-poppins text-xs font-semibold py-4 text-left">Sum USD</th>
                  </tr>
                  <tr v-for="(item,index) in TableData" :key="index" class="border-b">
                    <td class="family-poppins text-xs font-medium py-3 pl-3">{{item.date}}</td>
                    <td class=" py-3 px-2">
                      <div class="family-poppins text-xs font-medium">{{item.client}}</div>
                      <div class="family-poppins text-vs font-normal">{{item.project}}</div>
                    </td>
                    <td class="family-poppins text-xs font-medium py-3 text-left">{{item.money}}</td>
                  </tr>
                </table>
              </div>
            </box-widget>
          </div>
          <box-widget title="Team hours logged this week" styling="h-auto" class="mt-2">
            <div class="overflow-y-auto -mx-4 -my-2" style="height: 140px">
              <div v-for="(item,index) in NameData" :key="index" class="flex w-full">
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
          <box-widget title="My projects" styling="h-auto" class="mt-2">
            <div class="h-80 overflow-y-auto -mx-4 -my-2">
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
                  <tr v-for="(item,index) in WeekData" :key="index" class="py-3 border-b">
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
          <div class="grid grid-cols-2 gap-2 mt-2">
            <box-widget styling="h-auto" title="Task completion over the last 3 months">
              <div class="flex h-80 -mx-4 -my-auto">
                <div class="flex">
                  <img class="h-52 w-auto my-auto ml-6" src="/src/assets/images/graph/ringProgresss.png">
                </div>
                <div class="mt-auto ml-5 py-5">
                  <div class="flex">
                    <div class="w-3 h-3 rounded-lg bg-purple-700"></div>
                    <div class="family-poppins text-xs font-medium ml-5 text-gray-700">To Do</div>
                  </div>
                  <div class="flex mt-3 ">
                    <div class="w-3 h-3 rounded-lg " style="background-color: #5DCFFF"></div>
                    <div class="family-poppins text-xs font-medium ml-5 text-gray-700">Doing</div>
                  </div>
                  <div class="flex mt-3">
                    <div class="w-3 h-3 rounded-lg " style="background-color: #E328AF"></div>
                    <div class="family-poppins text-xs font-medium ml-5 text-gray-700">Done</div>
                  </div><div class="flex mt-3">
                  <div class="w-3 h-3 rounded-lg " style="background-color: #FF4A55"></div>
                  <div class="family-poppins text-xs font-medium ml-5 text-gray-700">Done</div>
                </div>
                </div>
              </div>
            </box-widget>
            <box-widget title="All task by completion state" styling="h-auto mt-2">
              <div class="h-80 flex -mx-4 -my-2">
                <div class="flex w-52 h-52 rounded-full bg-indigo-500 m-auto">
                  <div class="w-40 h-40 rounded-full bg-white m-auto flex">
                    <div class="m-auto text-gray-700 text-5xl font-bold">37%</div>
                  </div>
                </div>
              </div>
            </box-widget>
          </div>
        </div>
        <div class="col-span-1">
          <box-widget title="My Calender" styling="h-auto">
            <div class="h-80 overflow-y-auto -mx-4 -my-2">
              <div v-for="(item,index) in CalenderData" :key="index">
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
          <box-widget title="Team Activities by hours" styling="h-auto" class="mt-2">
            <div class="h-80 flex -mx-4 -my-2">
              <div class="flex w-52 h-52 rounded-full bg-red-400 m-auto">
                <div class="w-40 h-40 rounded-full bg-white m-auto flex">
                  <div class="m-auto text-gray-700 text-5xl font-bold">50%</div>
                </div>
              </div>
            </div>
          </box-widget>
          <box-widget title="Incomplete task by section" styling="h-auto" class="mt-2">
            <div class="h-80 flex -mx-4 -my-2">
              <img class="h-48 w-full mt-auto" src="/src/assets/images/Group_29.png">
            </div>
          </box-widget>
        </div>
      </div>
    </div>
  </layout-two>
</template>

<script>
import Layout from "../components/layout.vue";
import BoxWidget from "../components/box-widget.vue";
import LayoutTwo from "../components/layout-two.vue";
export default {
name: "dashboard",
  components: {LayoutTwo, BoxWidget, Layout},
  data(){
    return{
      ChartData:[
        {id:'1', title:'My hours this week', styling:'bg-indigo-500', duration:'Duration', time:'8:30', hour:'h', percentage:'25%'},
        {id:'1', title:'Project income (budget)', styling:'bg-green-500', duration:'Duration', time:'8:30', hour:'h', percentage:'37%'},
        {id:'1', title:'New leads this month', styling:'bg-red-400', duration:'Duration', time:'8:30', hour:'h', percentage:'81%'},
        {id:'1', title:'Outstanding invoices', styling:'bg-gray-400', duration:'Duration', time:'8:30', hour:'h', percentage:'19%'},
        {id:'1', title:'Revenue this month', styling:'bg-blue-500', duration:'Duration', time:'8:30', hour:'h', percentage:'42%'},
        {id:'1', title:'Quoted this month', styling:'bg-purple-500', duration:'Duration', time:'8:30', hour:'h', percentage:'36%'},
        {id:'1', title:'Total time tracked', styling:'bg-green-500', duration:'Duration', time:'8:30', hour:'h', percentage:'22%'},
        {id:'1', title:'Idle minutes', styling:'bg-red-400', duration:'Duration', time:'8:30', hour:'h', percentage:'51%'},
        {id:'1', title:'Unproductive time', styling:'bg-purple-500', duration:'Duration', time:'8:30', hour:'h', percentage:'88%'},
        {id:'1', title:'Productive time', styling:'bg-indigo-500', duration:'Duration', time:'8:30', hour:'h' , percentage:'90%'},
        {id:'1', title:'Manual time', styling:'bg-gray-500', duration:'Duration', time:'8:30', hour:'h', percentage:'29%'},
        {id:'1', title:'Mobile time', styling:'bg-red-400', duration:'Duration', time:'8:30', hour:'h', percentage:'57%'},
      ],
      TaskData:[
        {id:'1', heading:'My Task', title_1:'Title', title_2:'Remaining',DescData:[
            {id:'1', data:'Find a place for client meetings', styling:'text-yellow-500', time_1:'00:00'},
            {id:'1', data:'Find a place for client meetings', styling:'text-red-600', time_1:'00:00'},
            {id:'1', data:'Find a place for client meetings', styling:'text-blue-600', time_1:'05:25'}
          ]},
      ],
      TableData:[
        {id:'1', date:'04/11', client:'Concept LCC', project:'Project for Concept LCC', money:'10,800.00'},
        {id:'1', date:'04/23', client:'Optimist Group', project:'Project for Concept LCC', money:'7900:00'},
        {id:'1', date:'04/11', client:'Concept LCC', project:'Project for Concept LCC', money:'10,800.00'}
      ],
      NameData:[
        {id:'1', name:'Abuzaid Sayyad', hour:'36:00 h', graph:'w-64'},
        {id:'1', name:'Rubal Gulati', hour:'36:00 h', graph:'w-40'},
        {id:'1', name:'Juned Shaikh', hour:'36:00 h', graph:'w-24'},
        {id:'1', name:'Abuzaid Sayyad', hour:'36:00 h', graph:'w-12'},
      ],
      WeekData:[
        {id:'1', color:'text-green-700', title:'Project for Biltrax', sub_title:'Biltrax.user', deadline:'Fri,20/28', bg_color:'bg-gray-300', status:'On hold'},
        {id:'2', color:'text-yellow-600', title:'Project for Concept LLP', sub_title:'Biltrax.user', deadline:'Fri,02/12', bg_color:'bg-yellow-300', status:'In progress'},
        {id:'3', color:'text-red-500', title:'Project for Biltrax', sub_title:'Biltrax.user', deadline:'Fri,15/22', bg_color:'bg-green-300', status:'Complete'},
        {id:'4', color:'text-green-700', title:'Project for Biltrax', sub_title:'Biltrax.user', deadline:'Fri,18/26', bg_color:'bg-gray-300', status:'On hold'},
        {id:'5', color:'text-indigo-500', title:'Project for Biltrax', sub_title:'Biltrax.user', deadline:'Fri,18/26', bg_color:'bg-gray-300', status:'On hold'},
        {id:'6', color:'text-green-700', title:'Project for Biltrax', sub_title:'Biltrax.user', deadline:'Fri,18/26', bg_color:'bg-gray-300', status:'On hold'},
      ],
      CalenderData:[
        {id:'1', day_date:'Monday,04-27', time:'4:00 am', nxt_time:'4:00 am', schedule:'Weekly catch-up', status:'1-on-1', place:'Meeting Room'},
        {id:'1', day_date:'Monday,04-27', time:'4:00 am', nxt_time:'4:00 am', schedule:'Weekly catch-up', status:'1-on-1', place:'Meeting Room'},
        {id:'1', day_date:'Monday,04-27', time:'4:00 am', nxt_time:'4:00 am', schedule:'Weekly catch-up', status:'1-on-1', place:'Meeting Room'},
        {id:'1', day_date:'Monday,04-27', time:'4:00 am', nxt_time:'4:00 am', schedule:'Weekly catch-up', status:'1-on-1', place:'Meeting Room'},
      ]
    }
  }
}
</script>

<style scoped>
/* width */
::-webkit-scrollbar {
  width: 7px;
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
.text-vs{
  font-size: 10px;
}
</style>
