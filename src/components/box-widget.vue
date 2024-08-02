<template>
  <div class="w-full bg-white rounded">
    <div class="text-vs font-semibold text-gray-500 family-poppins border-b pt-2 pb-1 px-2">{{title}}</div>
    <div :class="'px-4 py-2 '+styling">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
name: "box-widget",
  props:{
  styling:{
    type: String,
    default:'h-32'
  },
  title:{
    type: String,
  }
  }
}
</script>

<style scoped>

</style>
