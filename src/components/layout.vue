<template>
  <div class="w-full bg-gray-100 h-full">
<!--    <top-bar :active="active"></top-bar>-->
    <user-top-bar></user-top-bar>
    <side-bar :active="active"></side-bar>
    <div class="flex mt-16">
      <div style="width: 17.5%">
        <div class=""></div>
      </div>
      <div style="width: 83.7%">
        <div class="w-full ">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopBar from "./menus/top-bar.vue";
import SideBar from "./menus/side-bar.vue";
import UserTopBar from "./menus/user-top-bar.vue";
export default {
name: "Layout",
  props: {
    active: {
      type: String,
      default: ''
    },
  },
  components: {UserTopBar, SideBar, TopBar}
}
</script>

<style scoped>

</style>
