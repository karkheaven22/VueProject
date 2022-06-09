<template>
  <v-navigation-drawer permanent fixed class="sidebar" width="260" tag="nav" clipped app color="#eaf2f9">
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="title">
          Application
        </v-list-item-title>
        <v-list-item-subtitle>
          subtext
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider />

    <v-list dense nav>
      <v-list-group v-for="(item) in items" :key="item.title" no-action @click.stop="triggerMenu(item)" color="white">
        <template #prependIcon>
          <v-icon>{{ item.icon }}</v-icon>
        </template>
        <template #activator>
          <v-list-item-title>{{ $t(`route.${item.title}`) }}</v-list-item-title>
        </template>
        <template #appendIcon>
          <v-icon v-if="item.items">mdi-chevron-down</v-icon>
          <v-icon v-else />
        </template>
        <v-list-item v-for="(subItem, j) in item.items" :key="j" link route :to="subItem.path">
          <v-list-item-title>{{ $t(`route.${subItem.title}`) }}</v-list-item-title>
        </v-list-item>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { UserModule } from '@/store/modules/user'

@Component({
  name: 'Sidebar'
})
export default class extends Vue {
  items : any

  created() {
    this.items = [
      { title: 'dashboard', icon: 'mdi-view-dashboard', type: 'link', path: '/dashboard/index' },
      { title: 'photos', icon: 'mdi-image', type: 'link', path: '/scan' },
      { title: 'errorPages',
        icon: 'mdi-alert-circle-outline',
        items: [
          { type: 'link', path: '/error/401', title: 'page401' },
          { type: 'link', path: '/error/404', title: 'page404' }
        ]
      },
      { title: 'logout', icon: 'mdi-exit-to-app', type: 'button', func: this.logout }
    ]
  }

  private async logout() {
    await UserModule.LogOut()
    this.$router.push(`/login?redirect=${this.$route.fullPath}`)
  }

  private goPage = (link: string) => this.$router.push({ path: link })
  private isExternal = (path: string) => /^(https?:|mailto:|tel:)/.test(path)
  triggerMenu(item: any) {
    if (!item.items) item.type === 'link' ? this.goPage(item.path) : item.func.apply(this)
  }
}
</script>

<style lang="scss">
.hideSidebar{
  .v-list-group--active{
    .v-list-group__items{
      display:none;
    }
  }
}

.v-list--nav .v-list-item {
    padding: 0 10px;
}

.v-list-group__header.v-list-item--active,
.v-list-group__items .v-list-item--active {
  background-color:#0096FF;
}

</style>