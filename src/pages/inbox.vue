<template>
  <layout active="inbox">
    <div class="border-t border-gray-200 p-8">
      <div class="grid grid-cols-8 gap-8">
        <div class="col-span-3 bg-white rounded-lg p-7">
          <div class="relative">
            <input type="search" placeholder="Name...." class="rounded-lg w-full pl-10 pr-4 py-3 text-sm font-medium family-poppins bg-gray-100 text-gray-700 focus:bg-gray-200 focus:outline-none">
            <svg class="absolute top-2.5 left-3 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" version="1.1">
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <rect x="0" y="0" width="24" height="24"></rect>
                <path d="M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z" fill="currentColor" fill-rule="nonzero" opacity="0.3"></path>
                <path d="M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z" fill="currentColor" fill-rule="nonzero"></path>
              </g>
            </svg>
          </div>
          <div class="mt-6 h-screen-23px overflow-y-auto -mr-7">
            <div v-for="(item, index) in groupChat" class="flex justify-between mb-4">
              <div class="flex">
                <svg class="h-12 w-12 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 212 212"><path fill="#DFE5E7" class="background" d="M105.946.25C164.318.25 211.64 47.596 211.64 106s-47.322 105.75-105.695 105.75C47.571 211.75.25 164.404.25 106S47.571.25 105.946.25z"></path><path fill="#FFF" class="primary" d="M61.543 100.988c8.073 0 14.246-6.174 14.246-14.246s-6.173-14.246-14.246-14.246-14.246 6.173-14.246 14.246 6.174 14.246 14.246 14.246zm8.159 17.541a48.192 48.192 0 0 1 8.545-6.062c-4.174-2.217-9.641-3.859-16.704-3.859-21.844 0-28.492 15.67-28.492 15.67v8.073h26.181l.105-.248c.303-.713 3.164-7.151 10.365-13.574zm80.755-9.921c-6.854 0-12.21 1.543-16.336 3.661a48.223 48.223 0 0 1 8.903 6.26c7.201 6.422 10.061 12.861 10.364 13.574l.105.248h25.456v-8.073c-.001 0-6.649-15.67-28.492-15.67zm0-7.62c8.073 0 14.246-6.174 14.246-14.246s-6.173-14.246-14.246-14.246-14.246 6.173-14.246 14.246 6.173 14.246 14.246 14.246zm-44.093 3.21a23.21 23.21 0 0 0 4.464-.428c.717-.14 1.419-.315 2.106-.521 1.03-.309 2.023-.69 2.976-1.138a21.099 21.099 0 0 0 3.574-2.133 20.872 20.872 0 0 0 5.515-6.091 21.283 21.283 0 0 0 2.121-4.823 22.16 22.16 0 0 0 .706-3.193c.16-1.097.242-2.224.242-3.377s-.083-2.281-.242-3.377a22.778 22.778 0 0 0-.706-3.193 21.283 21.283 0 0 0-3.272-6.55 20.848 20.848 0 0 0-4.364-4.364 21.099 21.099 0 0 0-3.574-2.133 21.488 21.488 0 0 0-2.976-1.138 22.33 22.33 0 0 0-2.106-.521 23.202 23.202 0 0 0-4.464-.428c-12.299 0-21.705 9.405-21.705 21.704 0 12.299 9.406 21.704 21.705 21.704zM145.629 131a36.739 36.739 0 0 0-1.2-1.718 39.804 39.804 0 0 0-3.367-3.967 41.481 41.481 0 0 0-3.442-3.179 42.078 42.078 0 0 0-5.931-4.083 43.725 43.725 0 0 0-3.476-1.776c-.036-.016-.069-.034-.104-.05-5.692-2.581-12.849-4.376-21.746-4.376-8.898 0-16.055 1.795-21.746 4.376-.196.089-.379.185-.572.276a43.316 43.316 0 0 0-3.62 1.917 42.32 42.32 0 0 0-5.318 3.716 41.501 41.501 0 0 0-3.443 3.179 40.632 40.632 0 0 0-3.366 3.967c-.452.61-.851 1.186-1.2 1.718-.324.493-.6.943-.841 1.351l-.061.101a27.96 27.96 0 0 0-.622 1.119c-.325.621-.475.975-.475.975v11.692h82.53v-11.692s-.36-.842-1.158-2.195a35.417 35.417 0 0 0-.842-1.351z"></path></svg>
                <div class="flex-col my-auto">
                  <div class="text-sm font-medium family-poppins">{{item.heading}}</div>
                  <div class="text-vs font-medium family-poppins mt-0.5">Nitish Kumar : <span class="text-gray-400 italic">Lorem ipsum....</span></div>
                </div>
              </div>
              <div class="flex-col">
                <div class="text-vs family-poppins font-normal text-gray-400 px-3">{{item.time}}</div>
                <div class="px-3 flex justify-end">
                  <button class="text-vs family-poppins font-semibold rounded-full bg-green-500 text-white h-5 w-5 focus:outline-none cursor-default">{{item.number}}</button>
                </div>
              </div>
            </div>
            <div v-for="(item, index) in chatData" class="flex justify-between mb-4">
              <div class="flex">
                <img class="h-12 w-12 rounded-full mr-3 my-auto" :src="item.image">
                <div class="flex-col my-auto">
                  <div class="text-sm font-medium family-poppins ">{{item.name}}</div>
                  <div class="text-xs font-medium family-poppins text-gray-400 mt-0.5">{{item.role}}</div>
                </div>
              </div>
              <div class="text-xs family-poppins font-medium text-gray-400 my-auto px-3">{{item.time}}</div>
            </div>
          </div>
        </div>
        <div class="col-span-5 bg-white rounded-lg">
          <div class="flex justify-between p-4 border-b border-gray-100">
            <div class="text-base font-medium family-poppins my-auto">Noetic IT Services</div>
            <div class="flex my-auto">
              <div class="flex">
                <img v-for="(ele, index) in picture" :class="'h-9 w-9 rounded-full border-2 border-white '+ele.styling" :src="ele.image">
                <div class="h-9 w-9 rounded-full border-2 border-white flex bg-green-200 -ml-3">
                  <div class="text-xs font-medium family-poppins m-auto text-green-600">5+</div>
                </div>
              </div>
              <div class="h-6 w-6 bg-gray-100 rounded-md flex cursor-pointer text-gray-400 hover:text-indigo-500 hover:bg-indigo-100 my-auto ml-3">
                <svg class="h-4 w-4 m-auto" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" version="1.1">
                  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <rect x="0" y="0" width="24" height="24"/>
                    <circle fill="currentColor" cx="5" cy="12" r="2"/>
                    <circle fill="currentColor" cx="12" cy="12" r="2"/>
                    <circle fill="currentColor" cx="19" cy="12" r="2"/>
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <div class="p-5 h-96 overflow-y-auto">
            <div>
              <div class="flex">
                <img class="h-9 w-9 rounded-full my-auto" src="https://preview.keenthemes.com/metronic/theme/html/demo1/dist/assets/media/users/300_12.jpg">
                <div class="text-sm font-medium family-poppins my-auto mx-2">Nitish Kumar</div>
                <div class="text-xs font-medium family-poppins text-gray-400 my-auto">2 Hours</div>
              </div>
              <div class="p-3 w-96 mt-2 rounded-md bg-light text-sm  font-medium family-poppins text-gray-600">
                How likely are you to recommend our company to your friends and family?
              </div>
            </div>
            <div class="mt-3">
              <div class="flex justify-end">
                <div class="text-xs font-medium family-poppins text-gray-400 my-auto">3 minutes</div>
                <div class="text-sm font-medium family-poppins my-auto mx-2">You</div>
                <img class="h-9 w-9 rounded-full my-auto" src="https://preview.keenthemes.com/metronic/theme/html/demo1/dist/assets/media/users/300_15.jpg">
              </div>
              <div class="flex justify-end">
                <div class="p-3 text-right w-96 mt-2 rounded-md bg-light-primary text-sm  font-medium family-poppins text-gray-600">
                  Hey there, we’re just writing to let you know that you’ve been subscribed to a repository on GitHub.
                </div>
              </div>
            </div>
            <div>
              <div class="flex mt-3">
                <img class="h-9 w-9 rounded-full my-auto" src="https://preview.keenthemes.com/metronic/theme/html/demo1/dist/assets/media/users/300_21.jpg">
                <div class="text-sm font-medium family-poppins my-auto mx-2">Rubal Gulati</div>
                <div class="text-xs font-medium family-poppins text-gray-400 my-auto">1 minutes</div>
              </div>
              <div class="p-3 w-40 mt-2 rounded-md bg-light text-sm  font-medium family-poppins text-gray-600">
                Ok, Understood!
              </div>
            </div>
            <div class="mt-3">
              <div class="flex justify-end">
                <div class="text-xs font-medium family-poppins text-gray-400 my-auto">Just now</div>
                <div class="text-sm font-medium family-poppins my-auto mx-2">You</div>
                <img class="h-9 w-9 rounded-full my-auto" src="https://preview.keenthemes.com/metronic/theme/html/demo1/dist/assets/media/users/300_15.jpg">
              </div>
              <div class="flex justify-end">
                <div class="p-3 text-right w-96 mt-2 rounded-md bg-light-primary text-sm  font-medium family-poppins text-gray-600">
                  You’ll receive notifications for all issues, pull requests!
                </div>
              </div>
            </div>
            <div>
              <div class="flex mt-3">
                <img class="h-9 w-9 rounded-full my-auto" src="https://preview.keenthemes.com/metronic/theme/html/demo1/dist/assets/media/users/300_22.jpg">
                <div class="text-sm font-medium family-poppins my-auto mx-2">Ravi Naik</div>
                <div class="text-xs font-medium family-poppins text-gray-400 my-auto">1 minutes</div>
              </div>
              <div class="p-3 w-96 mt-2 rounded-md bg-light text-sm  font-medium family-poppins text-gray-600">
                You can unwatch this repository immediately by clicking here: https://github.com
              </div>
            </div>
            <div class="mt-3">
              <div class="flex justify-end">
                <div class="text-xs font-medium family-poppins text-gray-400 my-auto">Just now</div>
                <div class="text-sm font-medium family-poppins my-auto mx-2">You</div>
                <img class="h-9 w-9 rounded-full my-auto" src="https://preview.keenthemes.com/metronic/theme/html/demo1/dist/assets/media/users/300_15.jpg">
              </div>
              <div class="flex justify-end">
                <div class="p-3 text-right w-96 mt-2 rounded-md bg-light-primary text-sm  font-medium family-poppins text-gray-600">
                  Discover what students who viewed Learn Figma - UI/UX Design. Essential Training also viewed
                </div>
              </div>
            </div>
            <div>
              <div class="flex mt-3">
                <img class="h-9 w-9 rounded-full my-auto" src="https://preview.keenthemes.com/metronic/theme/html/demo1/dist/assets/media/users/300_14.jpg">
                <div class="text-sm font-medium family-poppins my-auto mx-2">Juned Shaikh</div>
                <div class="text-xs font-medium family-poppins text-gray-400 my-auto">1 minutes</div>
              </div>
              <div class="p-3 w-96 mt-2 rounded-md bg-light text-sm  font-medium family-poppins text-gray-600">
                Most purchased Business courses during this sale!
              </div>
            </div>
          </div>
          <div class="p-5 border-t ">
            <textarea class="w-full text-sm font-medium family-poppins text-gray-600 px-4 py-2 focus:outline-none" placeholder="Type a message ...."></textarea>
            <div class="flex justify-between pt-2">
              <div class="flex">
                <div class="hover:bg-gray-100 h-8 w-8 rounded-md flex text-gray-500 hover:text-blue-500">
                  <svg class="h-6 w-6 m-auto" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" version="1.1">
                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                      <polygon points="0 0 24 0 24 24 0 24"/>
                      <rect fill="currentColor" opacity="0.3" x="2" y="4" width="20" height="16" rx="2"/>
                      <polygon fill="currentColor" opacity="0.3" points="4 20 10.5 11 17 20"/>
                      <polygon fill="currentColor" points="11 20 15.5 14 20 20"/>
                      <circle fill="currentColor" opacity="0.3" cx="18.5" cy="8.5" r="1.5"/>
                    </g>
                  </svg>
                </div>
                <div class="hover:bg-gray-100 h-8 w-8 rounded-md flex text-gray-500 hover:text-blue-500">
                  <svg class="h-6 w-6 m-auto" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" version="1.1">
                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                      <rect x="0" y="0" width="24" height="24"/>
                      <path d="M5,7 L19,7 C20.1045695,7 21,7.8954305 21,9 L21,17 C21,18.1045695 20.1045695,19 19,19 L5,19 C3.8954305,19 3,18.1045695 3,17 L3,9 C3,7.8954305 3.8954305,7 5,7 Z M12,17 C14.209139,17 16,15.209139 16,13 C16,10.790861 14.209139,9 12,9 C9.790861,9 8,10.790861 8,13 C8,15.209139 9.790861,17 12,17 Z" fill="currentColor"/>
                      <rect fill="currentColor" opacity="0.3" x="9" y="4" width="6" height="2" rx="1"/>
                      <circle fill="currentColor" opacity="0.3" cx="12" cy="13" r="2"/>
                    </g>
                  </svg>
                </div>
              </div>
              <div>
                <button class="px-3 py-2 text-xs font-medium family-poppins bg-blue-600 text-white rounded focus:outline-none hover:bg-blue-500">Send</button>
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
name: "inbox",
  components: {Layout},
  data(){
    return{
      picture:[
        {image:'https://preview.keenthemes.com/metronic/theme/html/demo1/dist/assets/media/users/300_12.jpg'},
        {image:'https://preview.keenthemes.com/metronic/theme/html/demo1/dist/assets/media/users/300_15.jpg', styling:'-ml-2'},
        {image:'https://preview.keenthemes.com/metronic/theme/html/demo1/dist/assets/media/users/300_21.jpg',styling:'-ml-2'},
        {image:'https://preview.keenthemes.com/metronic/theme/html/demo1/dist/assets/media/users/300_11.jpg',styling:'-ml-2'},
        {image:'https://preview.keenthemes.com/metronic/theme/html/demo1/dist/assets/media/users/300_10.jpg',styling:'-ml-2'},
        {image:'https://preview.keenthemes.com/metronic/theme/html/demo1/dist/assets/media/users/300_14.jpg',styling:'-ml-2'},
      ],
      chatData:[
        {id:1, image:'https://preview.keenthemes.com/metronic/theme/html/demo1/dist/assets/media/users/300_12.jpg', name:'Nitish Kumar', role:'Head of Development', time:'35 mins'},
        {id:1, image:'https://preview.keenthemes.com/metronic/theme/html/demo1/dist/assets/media/users/300_15.jpg', name:'Abuzaid Sayyad', role:'Frontend Developer', time:'41 mins'},
        {id:1, image:'https://preview.keenthemes.com/metronic/theme/html/demo1/dist/assets/media/users/300_21.jpg', name:'Rubal Gulati', role:'Frontend Developer', time:'55 mins'},
        {id:1, image:'https://preview.keenthemes.com/metronic/theme/html/demo1/dist/assets/media/users/300_11.jpg', name:'Mayuri Kande', role:'Backend Developer', time:'56 mins'},
        {id:1, image:'https://preview.keenthemes.com/metronic/theme/html/demo1/dist/assets/media/users/300_10.jpg', name:'Ruchira Khambal', role:'Backend Developer', time:'59 mins'},
        {id:1, image:'https://preview.keenthemes.com/metronic/theme/html/demo1/dist/assets/media/users/300_14.jpg', name:'Juned Shaikh', role:'UI/UX Developer', time:'59 mins'},
        {id:1, image:'https://preview.keenthemes.com/metronic/theme/html/demo1/dist/assets/media/users/300_15.jpg', name:'Pooja Bisht', role:'Backend Developer', time:'41 mins'},
        {id:1, image:'https://preview.keenthemes.com/metronic/theme/html/demo1/dist/assets/media/users/300_21.jpg', name:'Ravi Naik', role:'Content Developer', time:'55 mins'},
        {id:1, image:'https://preview.keenthemes.com/metronic/theme/html/demo1/dist/assets/media/users/300_11.jpg', name:'Nirmala Suwasiya', role:'Flutter Developer', time:'56 mins'},
        {id:1, image:'https://preview.keenthemes.com/metronic/theme/html/demo1/dist/assets/media/users/300_10.jpg', name:'Ruchira Khambal', role:'Backend Developer', time:'59 mins'},
        {id:1, image:'https://preview.keenthemes.com/metronic/theme/html/demo1/dist/assets/media/users/300_14.jpg', name:'Juned Shaikh', role:'UI/UX Developer', time:'59 mins'},
      ],
      groupChat:[
        {id:1, heading:'Noetic Marketing Team',time:'yesterday', number:'03'},
        {id:1, heading:'Nitseditor Frontend team',time:'09:00am', number:'07'},
        {id:1, heading:'Noetic IT Services',time:'yesterday', number:'04'},
      ],
      openSteps:true,
      openReferences:true,
    }
  }
}
</script>

<style scoped>
.h-screen-23px{
  height: calc(100vh - 260px);
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
.bg-light{
  background: #c9f7f5!important;;
}
.bg-light-primary{
  background-color: #e1f0ff!important;

}
</style>
