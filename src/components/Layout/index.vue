<template>
  <div :class="classObj">
    <div v-if="device===0&&sidebar.opened" class="drawer-bg" @click="handleClickOutside"/>
    <Sidebar class="sidebar-container" />
    <v-main class="main-container">
      <Navbar />
      <TagsView />
      <AppMain />
    </v-main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { AppMain, Navbar, Sidebar, TagsView  } from './components'
import { AppModule, DeviceType } from '@/store/modules/app'
import ResizeMixin from './mixin/ResizeHandler'

@Component({
  name: 'Layout',
  components: {
    AppMain,
    Navbar,
    Sidebar,
    TagsView
  },
   mixins: [ResizeMixin]
})

export default class extends Vue {
  get sidebar() {
    return AppModule.sidebar
  }

  get device() {
    return AppModule.device;
  }

  get needTagsView() {
    return this.$store.getters.tagsView;
  }

  get classObj() {
    return {
      hideSidebar: !this.sidebar.opened,
      openSidebar: this.sidebar.opened,
      withoutAnimation: this.sidebar.withoutAnimation,
      mobile: this.device === DeviceType.Mobile
    }
  }

  handleClickOutside() {
    AppModule.CloseSideBar(false);
  }
}
</script>
<style lang="scss" scoped>
.sidebar{
  height: 100vh;
  top: 0px;
  max-height: calc(100% - 0px);
  transform: translateX(0%);
  width: 260px;
  z-index: 1001 !important;
  background-image: url('~@/assets/noise.png');
  background-repeat: repeat;
}

.hideSidebar {
  .v-main{
    -webkit-transition: padding-left .28s;
    transition: padding-left .28s;
    padding-left: 54px !important;
  }
  .sidebar{
    width: 54px !important;
  }
}

.mobile.hideSidebar {
  .v-main{
    -webkit-transition: padding-left .28s;
    transition: padding-left .28s;
    padding-left: 0px !important;
  }
  .sidebar{
    width: 0px !important;
  }
}

.drawer-bg {
  background: #000;
  opacity: 0.3;
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 999;
}

</style>