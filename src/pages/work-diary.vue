<template>
  <layout active="work-diary">
    <div class="px-2 w-full pb-10">
      <div class="bg-white mt-2 px-7 py-3">
        <div class="grid grid-cols-4 gap-3 px-2 pb-4">
          <div class="w-full">
            <div class="text-base font-bold family-poppins">Last 24hrs</div>
            <div class="text-2xl font-medium mt-3 family-poppins">0:00 <span class="text-gray-500 ">hrs</span></div>
            <div class="text-xs font-medium mt-1 text-gray-500 family-poppins">Last work 7 days ago</div>
          </div>
          <div class="w-full">
            <div class="text-base font-bold family-poppins">This week</div>
            <div class="text-2xl font-medium mt-3 family-poppins">0:00 <span class="text-gray-500 ">hrs</span></div>
            <div class="text-xs font-medium mt-1 text-gray-500 family-poppins">Of 40hr limit</div>
          </div>
          <div class="w-full">
            <div class="text-base font-bold family-poppins">Last week</div>
            <div class="text-2xl font-medium mt-3 family-poppins">0:10 <span class="text-gray-500 ">hrs</span></div>
            <div class="text-xs font-medium mt-1 text-gray-500 family-poppins">$1.50 paid</div>
          </div>
          <div class="w-full">
            <div class="text-base font-bold family-poppins">Since start</div>
            <div class="text-2xl font-medium mt-3 family-poppins">42:00 <span class="text-gray-500 ">hrs</span></div>
            <div class="text-xs font-medium mt-1 text-gray-500 family-poppins">$378.00</div>
          </div>
        </div>
        <div class="border-t pt-4">
          <div class="text-base font-semibold family-poppins">Time sheet this week</div>
          <div class="flex justify-around my-6">
            <div v-for="(item, index) in Data" :key="index" class="flex-col">
              <div class="text-xs font-semibold family-poppins">{{ item.day }}</div>
              <div class="text-xs font-semibold mt-1 family-poppins">{{item.date}}</div>
            </div>
          </div>
          <div class="h-8 mb-3 bg-gray-100 border-t border-b border-gray-200"></div>
        </div>
      </div>
      <div class="mt-2">
        <div class="bg-white h-16 px-5 w-full flex justify-between">
          <div class="flex">
            <svg class="text-gray-800 h-4 w-4 my-auto mx-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M12.452 4.516c.446.436.481 1.043 0 1.576L8.705 10l3.747 3.908c.481.533.446 1.141 0 1.574-.445.436-1.197.408-1.615 0-.418-.406-4.502-4.695-4.502-4.695a1.095 1.095 0 010-1.576s4.084-4.287 4.502-4.695c.418-.409 1.17-.436 1.615 0z"/></svg>
            <div class="text-sm font-medium family-poppins my-auto mr-2">Monday, March 1, 2020</div>
            <div class="mr-5 my-auto">
              <svg class="h-4 w-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M17 3h-1v2h-3V3H7v2H4V3H3c-1.101 0-2 .9-2 2v12c0 1.1.899 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 14H3V9h14v8zM6.5 1h-2v3.5h2V1zm9 0h-2v3.5h2V1z"/></svg>
            </div>
            <svg class="text-gray-800 h-4 w-4 my-auto mx-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M9.163 4.516c.418.408 4.502 4.695 4.502 4.695a1.095 1.095 0 010 1.576s-4.084 4.289-4.502 4.695c-.418.408-1.17.436-1.615 0-.446-.434-.481-1.041 0-1.574L11.295 10 7.548 6.092c-.481-.533-.446-1.141 0-1.576.445-.436 1.197-.409 1.615 0z"/></svg>
            <div class="text-sm font-medium family-poppins my-auto text-teal">Today</div>
          </div>
          <div class="flex my-auto">
            <div class="mr-4">
              <select class="bg-white rounded px-4 py-2 text-xs font-normal family-poppins shadow-md focus:outline-none focus:border-gray-300 border border-transparent">
                <option selected>My Local time</option>
                <option>My Local time</option>
                <option>My Local time</option>
                <option >My Local time</option>
                <option >Local time</option>
              </select>
            </div>
            <div class="my-auto">
              <div class="h-9 w-9 rounded-full shadow-md flex">
                <svg class="h-5 w-5 m-auto text-teal" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" version="1.1">
                  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <rect x="0" y="0" width="24" height="24"/>
                    <path d="M5,8.6862915 L5,5 L8.6862915,5 L11.5857864,2.10050506 L14.4852814,5 L19,5 L19,9.51471863 L21.4852814,12 L19,14.4852814 L19,19 L14.4852814,19 L11.5857864,21.8994949 L8.6862915,19 L5,19 L5,15.3137085 L1.6862915,12 L5,8.6862915 Z M12,15 C13.6568542,15 15,13.6568542 15,12 C15,10.3431458 13.6568542,9 12,9 C10.3431458,9 9,10.3431458 9,12 C9,13.6568542 10.3431458,15 12,15 Z" fill="currentColor"/>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-white mt-2 px-7 py-3">
          <div class="flex justify-between">
            <div class="flex my-auto">
              <div class="text-xs font-normal family-poppins">Total : <span class="font-semibold">08:00 hrs</span></div>
              <div class="flex mx-10">
                <div class="h-3 w-3 bg-teal"></div>
                <div class="text-xs font-normal family-poppins mx-2">
                  Tracked : <span class="font-semibold">08:00 hrs</span>
                </div>
              </div>
              <div class="flex">
                <div class="h-3 w-3 bg-teal"></div>
                <div class="text-xs font-normal family-poppins mx-2">
                  Manual : <span class="font-semibold">0:00 hrs</span>
                </div>
              </div>
            </div>
            <div class="my-auto flex">
              <div class="text-xs font-semibold family-poppins my-auto">With 0:00 hrs selected :</div>
              <button class="px-3 py-2 bg-teal text-white family-poppins text-xs mx-4 rounded focus:outline-none">Edit Activities</button>
            </div>
          </div>
          <div class="flex mt-9 border-b pb-3">
            <div class="bg-gray-100 mr-4 w-14 flex">
              <div class="m-auto">
                <div class="text-2xl font-semibold family-poppins">6</div>
                <div class="text-vs font-medium family-poppins ">am</div>
                <div class="w-full flex">
                  <input type="checkbox" class="mx-auto mt-1">
                </div>
              </div>
            </div>
            <div class="w-full grid grid-cols-10 gap-5">
              <div class="col-span-2">
                <div class="h-5 w-full rounded-full bg-teal flex px-3"></div>
                <div class="my-2 w-full bg-white">
                  <img class="w-full h-32" src="data:image/png;base64,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">
                  <div class="flex justify-between mt-2 px-2">
                    <div class="flex my-auto">
                      <input type="checkbox" class="mr-2 my-auto">
                      <div class="text-vs font-normal family-poppins my-auto">6:00 am</div>
                    </div>
                    <div class="flex my-auto">
                      <div class="flex" >
                        <div v-for="item in 4" :key="item" class="w-1.5 h-4 bg-teal mr-0.5"></div>
                        <div v-for="item in 4" :key="item" class="w-1.5 h-4 bg-gray-100 mr-0.5"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-span-8">
                <div class="h-5 w-full rounded-full bg-teal flex px-3">
                  <div class="my-auto text-xs font-normal text-white family-poppins">Prospecting, Lead generation</div>
                </div>
                <div class="grid grid-cols-4 gap-2 my-2">
                  <div>
                    <img class="w-full h-32" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR44nCOMmWEW-BXe-_uIO5YTr4enEee1hLWnYOoxjeR2etKqLD7-ng0fr9iPLy6O4pZVs4&usqp=CAU">
                    <div class="flex justify-between mt-2 px-2">
                      <div class="flex my-auto">
                        <input type="checkbox" class="mr-2 my-auto">
                        <div class="text-vs font-normal family-poppins my-auto">6:00 am</div>
                      </div>
                      <div class="flex my-auto">
                        <div class="flex" >
                          <div v-for="item in 4" :key="item" class="w-1.5 h-4 bg-teal mr-0.5"></div>
                          <div v-for="item in 4" :key="item" class="w-1.5 h-4 bg-gray-100 mr-0.5"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <img class="w-full h-32" src="https://www.spcdn.org/images/subscr-forms/subscr_forms_form-popup.png">
                    <div class="flex justify-between mt-2 px-2">
                      <div class="flex my-auto">
                        <input type="checkbox" class="mr-2 my-auto">
                        <div class="text-vs font-normal family-poppins my-auto">6:00 am</div>
                      </div>
                      <div class="flex my-auto">
                        <div class="flex" >
                          <div v-for="item in 4" :key="item" class="w-1.5 h-4 bg-teal mr-0.5"></div>
                          <div v-for="item in 4" :key="item" class="w-1.5 h-4 bg-gray-100 mr-0.5"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <img class="w-full h-32" src="data:image/png;base64,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">
                    <div class="flex justify-between mt-2 px-2">
                      <div class="flex my-auto">
                        <input type="checkbox" class="mr-2 my-auto">
                        <div class="text-vs font-normal family-poppins my-auto">6:00 am</div>
                      </div>
                      <div class="flex my-auto">
                        <div class="flex" >
                          <div v-for="item in 4" :key="item" class="w-1.5 h-4 bg-teal mr-0.5"></div>
                          <div v-for="item in 4" :key="item" class="w-1.5 h-4 bg-gray-100 mr-0.5"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <img class="w-full h-32" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTYnWAz6HG_h_IzMeS_XG8DfGNPeY18He5yA&usqp=CAU">
                    <div class="flex justify-between mt-2 px-2">
                      <div class="flex my-auto">
                        <input type="checkbox" class="mr-2 my-auto">
                        <div class="text-vs font-normal family-poppins my-auto">6:00 am</div>
                      </div>
                      <div class="flex my-auto">
                        <div class="flex" >
                          <div v-for="item in 4" :key="item" class="w-1.5 h-4 bg-teal mr-0.5"></div>
                          <div v-for="item in 4" :key="item" class="w-1.5 h-4 bg-gray-100 mr-0.5"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex mt-3 border-b pb-3">
            <div class="bg-gray-100 mr-4 w-14 flex">
              <div class="m-auto">
                <div class="text-2xl font-semibold family-poppins">7</div>
                <div class="text-vs font-medium family-poppins ">am</div>
                <div class="w-full flex">
                  <input type="checkbox" class="mx-auto mt-1">
                </div>
              </div>
            </div>
            <div class="w-full grid grid-cols-10 gap-5">
              <div class="col-span-2">
                <div class="h-5 w-full rounded-full bg-teal"></div>
                <div class="my-2 w-full bg-white">
                  <img class="w-full h-32" src="data:image/png;base64,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">
                  <div class="flex justify-between mt-2 px-2">
                    <div class="flex my-auto">
                      <input type="checkbox" class="mr-2 my-auto">
                      <div class="text-vs font-normal family-poppins my-auto">6:00 am</div>
                    </div>
                    <div class="flex my-auto">
                      <div class="flex" >
                        <div v-for="item in 4" :key="item" class="w-1.5 h-4 bg-teal mr-0.5"></div>
                        <div v-for="item in 4" :key="item" class="w-1.5 h-4 bg-gray-100 mr-0.5"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-span-8">
                <div class="h-5 w-full rounded-full bg-teal flex px-3">
                  <div class="my-auto text-xs font-normal text-white family-poppins">Prospecting, Lead generation</div>
                </div>
                <div class="grid grid-cols-4 gap-2 my-2">
                  <div>
                    <img class="w-full h-32" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR44nCOMmWEW-BXe-_uIO5YTr4enEee1hLWnYOoxjeR2etKqLD7-ng0fr9iPLy6O4pZVs4&usqp=CAU">
                    <div class="flex justify-between mt-2 px-2">
                      <div class="flex my-auto">
                        <input type="checkbox" class="mr-2 my-auto">
                        <div class="text-vs font-normal family-poppins my-auto">6:00 am</div>
                      </div>
                      <div class="flex my-auto">
                        <div class="flex" >
                          <div v-for="item in 4" :key="item" class="w-1.5 h-4 bg-teal mr-0.5"></div>
                          <div v-for="item in 4" :key="item" class="w-1.5 h-4 bg-gray-100 mr-0.5"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <img class="w-full h-32" src="https://www.spcdn.org/images/subscr-forms/subscr_forms_form-popup.png">
                    <div class="flex justify-between mt-2 px-2">
                      <div class="flex my-auto">
                        <input type="checkbox" class="mr-2 my-auto">
                        <div class="text-vs font-normal family-poppins my-auto">6:00 am</div>
                      </div>
                      <div class="flex my-auto">
                        <div class="flex" >
                          <div v-for="item in 4" :key="item" class="w-1.5 h-4 bg-teal mr-0.5"></div>
                          <div v-for="item in 4" :key="item" class="w-1.5 h-4 bg-gray-100 mr-0.5"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <img class="w-full h-32" src="data:image/png;base64,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">
                    <div class="flex justify-between mt-2 px-2">
                      <div class="flex my-auto">
                        <input type="checkbox" class="mr-2 my-auto">
                        <div class="text-vs font-normal family-poppins my-auto">6:00 am</div>
                      </div>
                      <div class="flex my-auto">
                        <div class="flex" >
                          <div v-for="item in 4" :key="item" class="w-1.5 h-4 bg-teal mr-0.5"></div>
                          <div v-for="item in 4" :key="item" class="w-1.5 h-4 bg-gray-100 mr-0.5"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <img class="w-full h-32" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTYnWAz6HG_h_IzMeS_XG8DfGNPeY18He5yA&usqp=CAU">
                    <div class="flex justify-between mt-2 px-2">
                      <div class="flex my-auto">
                        <input type="checkbox" class="mr-2 my-auto">
                        <div class="text-vs font-normal family-poppins my-auto">6:00 am</div>
                      </div>
                      <div class="flex my-auto">
                        <div class="flex" >
                          <div v-for="item in 4" :key="item" class="w-1.5 h-4 bg-teal mr-0.5"></div>
                          <div v-for="item in 4" :key="item" class="w-1.5 h-4 bg-gray-100 mr-0.5"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex mt-3 pb-3">
            <div class="bg-gray-100 mr-4 w-14 flex">
              <div class="m-auto">
                <div class="text-2xl font-semibold family-poppins">7</div>
                <div class="text-vs font-medium family-poppins ">am</div>
                <div class="w-full flex">
                  <input type="checkbox" class="mx-auto mt-1">
                </div>
              </div>
            </div>
            <div class="w-full grid grid-cols-10 gap-5">
              <div class="col-span-2">
                <div class="h-5 w-full rounded-full bg-teal"></div>
                <div class="my-2 w-full bg-white">
                  <img class="w-full h-32" src="data:image/png;base64,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">
                  <div class="flex justify-between mt-2 px-2">
                    <div class="flex my-auto">
                      <input type="checkbox" class="mr-2 my-auto">
                      <div class="text-vs font-normal family-poppins my-auto">6:00 am</div>
                    </div>
                    <div class="flex my-auto">
                      <div class="flex" >
                        <div v-for="item in 4" :key="item" class="w-1.5 h-4 bg-teal mr-0.5"></div>
                        <div v-for="item in 4" :key="item" class="w-1.5 h-4 bg-gray-100 mr-0.5"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-span-8">
                <div class="h-5 w-full rounded-full bg-teal flex px-3">
                  <div class="my-auto text-xs font-normal text-white family-poppins">Prospecting, Lead generation</div>
                </div>
                <div class="grid grid-cols-4 gap-2 my-2">
                  <div>
                    <img class="w-full h-32" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR44nCOMmWEW-BXe-_uIO5YTr4enEee1hLWnYOoxjeR2etKqLD7-ng0fr9iPLy6O4pZVs4&usqp=CAU">
                    <div class="flex justify-between mt-2 px-2">
                      <div class="flex my-auto">
                        <input type="checkbox" class="mr-2 my-auto">
                        <div class="text-vs font-normal family-poppins my-auto">6:00 am</div>
                      </div>
                      <div class="flex my-auto">
                        <div class="flex" >
                          <div v-for="item in 4" :key="item" class="w-1.5 h-4 bg-teal mr-0.5"></div>
                          <div v-for="item in 4" :key="item" class="w-1.5 h-4 bg-gray-100 mr-0.5"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <img class="w-full h-32" src="https://www.spcdn.org/images/subscr-forms/subscr_forms_form-popup.png">
                    <div class="flex justify-between mt-2 px-2">
                      <div class="flex my-auto">
                        <input type="checkbox" class="mr-2 my-auto">
                        <div class="text-vs font-normal family-poppins my-auto">6:00 am</div>
                      </div>
                      <div class="flex my-auto">
                        <div class="flex" >
                          <div v-for="item in 4" :key="item" class="w-1.5 h-4 bg-teal mr-0.5"></div>
                          <div v-for="item in 4" :key="item" class="w-1.5 h-4 bg-gray-100 mr-0.5"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <img class="w-full h-32" src="data:image/png;base64,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">
                    <div class="flex justify-between mt-2 px-2">
                      <div class="flex my-auto">
                        <input type="checkbox" class="mr-2 my-auto">
                        <div class="text-vs font-normal family-poppins my-auto">6:00 am</div>
                      </div>
                      <div class="flex my-auto">
                        <div class="flex" >
                          <div v-for="item in 4" :key="item" class="w-1.5 h-4 bg-teal mr-0.5"></div>
                          <div v-for="item in 4" :key="item" class="w-1.5 h-4 bg-gray-100 mr-0.5"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <img class="w-full h-32" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTYnWAz6HG_h_IzMeS_XG8DfGNPeY18He5yA&usqp=CAU">
                    <div class="flex justify-between mt-2 px-2">
                      <div class="flex my-auto">
                        <input type="checkbox" class="mr-2 my-auto">
                        <div class="text-vs font-normal family-poppins my-auto">6:00 am</div>
                      </div>
                      <div class="flex my-auto">
                        <div class="flex" >
                          <div v-for="item in 4" :key="item" class="w-1.5 h-4 bg-teal mr-0.5"></div>
                          <div v-for="item in 4" :key="item" class="w-1.5 h-4 bg-gray-100 mr-0.5"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
name: "work-diary",
  components: {Layout},
  data(){
    return{
      Data:[
        {id:1, day:'Mon', date:'3/29'},
        {id:2, day:'Tue', date:'3/30'},
        {id:3, day:'Wed', date:'3/31'},
        {id:4, day:'Thu', date:'4/1'},
        {id:5, day:'Fri', date:'4/2'},
        {id:6, day:'Sat', date:'4/3'},
        {id:7, day:'Sun', date:'4/4'},
      ]
    }
  }
}
</script>

<style scoped>

</style>
