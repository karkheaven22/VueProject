<template>
  <v-toolbar class="navbar" light flat>
    <v-app-bar-nav-icon @click.native="toggleSideBar">
      <v-icon v-show="sidebar.opened">mdi-menu-open</v-icon>
      <v-icon v-show="!sidebar.opened">mdi-menu</v-icon>
    </v-app-bar-nav-icon>

    <v-toolbar-title />
    <breadcrumb id="breadcrumb-container" class="breadcrumb-container hidden-xs-only" />
    <v-spacer />
    <LanguageSelect />
    <v-btn icon class="hidden-xs-only" @click.native="logout">
      <v-icon>mdi-exit-to-app</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { AppModule } from '@/store/modules/app'
import { UserModule } from '@/store/modules/user'
import Breadcrumb from '@/components/Breadcrumb/index.vue'
import LanguageSelect from '@/components/LanguageSelect/index.vue'

@Component({
  name: 'Navbar',
  components: {
    Breadcrumb,
    LanguageSelect
  }
})
export default class extends Vue {
  get sidebar() {
    return this.$store.getters.sidebar
  }

  get avatar() {
    return UserModule.avatar
  }

  async logout() {
    await UserModule.LogOut()
    this.$router.push(`/login?redirect=${this.$route.fullPath}`)
  }

  toggleSideBar() {
    AppModule.ToggleSideBar(false)
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  overflow: hidden;
  position: relative;
  background: #fff;
  height: 75px;
  margin-top: 0px;
  transform: translateY(0px);
}
</style>
