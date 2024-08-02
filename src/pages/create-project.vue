<template>
  <div class="w-full h-screen bg-gray-100 flex">
    <div class="w-1/3 m-auto">
      <div class="text-4xl font-normal family-poppins text-center">Create a new project</div>
      <div class="text-lg mt-2 font-medium family-poppins text-center">How would you like to start?</div>
      <div class="grid grid-cols-3 gap-4 mt-10">
        <a href="/project-format">
          <div class="border-2 border-dashed border-gray-300 rounded-3xl w-28 h-28 flex mx-auto">
            <svg class="h-7 w-7 text-gray-700 m-auto" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M492 236H276V20c0-11.046-8.954-20-20-20s-20 8.954-20 20v216H20c-11.046 0-20 8.954-20 20s8.954 20 20 20h216v216c0 11.046 8.954 20 20 20s20-8.954 20-20V276h216c11.046 0 20-8.954 20-20s-8.954-20-20-20z"/></svg>
          </div>
          <div class="text-sm font-medium family-poppins text-center mt-2">Blank Project</div>
          <div class="text-xs font-medium family-poppins text-gray-500 text-center mt-1">Start from scratch</div>
        </a>
        <a href="/template-gallery" class="">
          <div class="w-full flex">
            <div class="border-2 border-gray-600 rounded-3xl w-28 mx-auto h-28 flex">
              <img class="m-auto" src="../assets/images/rocket-ship 1.png" height="60" width="60"/></div>
          </div>
          <div class="text-sm font-medium family-poppins text-center mt-2">Use a template</div>
          <div class="text-xs font-medium family-poppins text-gray-500 text-center mt-1">Choose from library</div>
        </a>
        <div class="">
          <div class="w-full flex">
            <div class="border-2 border-gray-600 rounded-3xl w-28 mx-auto h-28 flex">
              <img class="m-auto" src="../assets/images/google-sheets 1.png" height="45" width="45"/></div>
          </div>
          <div class="text-sm font-medium family-poppins text-center mt-2">Import spreadsheet</div>
          <div class="text-xs font-medium family-poppins text-gray-500 text-center mt-1">Add from another tool</div>
        </div>
      </div>
    </div>
    <a href="javascript:history.go(-1)">
      <svg class="h-6 w-6 absolute top-8 left-8 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 386.242 386.242"><path d="M374.212 182.3H39.432l100.152-99.767c4.704-4.704 4.704-12.319 0-17.011-4.704-4.704-12.319-4.704-17.011 0L3.474 184.61c-4.632 4.632-4.632 12.379 0 17.011l119.1 119.1c4.704 4.704 12.319 4.704 17.011 0 4.704-4.704 4.704-12.319 0-17.011L39.432 206.36h334.779c6.641 0 12.03-5.39 12.03-12.03s-5.389-12.03-12.029-12.03z"/></svg>
    </a>
    <a href="/home">
      <svg class="h-6 w-6 absolute top-8 right-8 cursor-pointer" viewBox="0 0 311 311.077" xmlns="http://www.w3.org/2000/svg"><path d="M16.035 311.078c-4.097 0-8.195-1.558-11.308-4.695-6.25-6.25-6.25-16.383 0-22.633L283.789 4.687c6.25-6.25 16.383-6.25 22.633 0s6.25 16.383 0 22.637L27.363 306.383a16.045 16.045 0 01-11.328 4.695zm0 0"/><path d="M295.117 311.078a15.879 15.879 0 01-11.308-4.695L4.727 27.324c-6.25-6.254-6.25-16.386 0-22.636s16.382-6.25 22.636 0L306.422 283.75c6.25 6.25 6.25 16.383 0 22.633-3.137 3.117-7.23 4.695-11.305 4.695zm0 0"/></svg>
    </a>
  </div>
</template>

<script>
export default {
name: "create-project"
}
</script>

<style scoped>

</style>
