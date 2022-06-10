<template>
  <v-navigation-drawer permanent fixed class="sidebar" width="260" tag="nav" clipped app color="#eaf2f9">
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="title">
          <v-img
            lazy-src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
            max-height="150"
            max-width="250"
            contain
            src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
          ></v-img>
        </v-list-item-title>
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
      { title: 'purchasing.text',
        icon: 'mdi-cart-variant',
        items: [
          { type: 'link', path: '/error/404', title: 'purchasing.quotation' },
          { type: 'link', path: '/error/401', title: 'purchasing.product' },
          { type: 'link', path: '/error/404', title: 'purchasing.plan' },
          { type: 'link', path: '/error/404', title: 'purchasing.order' },
          { type: 'link', path: '/error/404', title: 'purchasing.invoice' },
          { type: 'link', path: '/error/404', title: 'purchasing.vendor' }
        ]
      },
      { title: 'production.text',
        icon: 'mdi-cube-outline',
        items: [
          { type: 'link', path: '/error/401', title: 'production.bom' },
          { type: 'link', path: '/error/404', title: 'production.defect' },
          { type: 'link', path: '/error/404', title: 'production.process' },
          { type: 'link', path: '/error/404', title: 'production.job' }
        ]
      },
      { title: 'sales.text',
        icon: 'mdi-hail',
        items: [
          { type: 'link', path: '/error/401', title: 'sales.quotation' },
          { type: 'link', path: '/error/401', title: 'sales.order' },
          { type: 'link', path: '/error/404', title: 'sales.customer' }
        ]
      },
      { title: 'inventory.text',
        icon: 'mdi-package-variant-closed',
        items: [
          { type: 'link', path: '/error/401', title: 'inventory.adjustment' },
          { type: 'link', path: '/error/404', title: 'inventory.item' },
          { type: 'link', path: '/error/404', title: 'inventory.location' },
          { type: 'link', path: '/error/404', title: 'inventory.transfer' }
        ]
      },
      { title: 'manufacturing.text',
        icon: 'mdi-home-city-outline',
        items: [
          { type: 'link', path: '/error/401', title: 'inventory.adjustment' },
          { type: 'link', path: '/error/404', title: 'inventory.location' },
          { type: 'link', path: '/error/404', title: 'inventory.transfer' }
        ]
      },
      { title: 'settings.text',
        icon: 'mdi-cogs',
        items: [
          { type: 'link', path: '/error/401', title: 'inventory.adjustment' },
          { type: 'link', path: '/error/404', title: 'inventory.location' },
          { type: 'link', path: '/error/404', title: 'inventory.transfer' }
        ]
      },
      { title: 'errorPages',
        icon: 'mdi-alert-circle-outline',
        items: [
          { type: 'link', path: '/error/401', title: 'page401' },
          { type: 'link', path: '/error/404', title: 'page404' },
          { type: 'link', path: '/scan', title: 'photos', icon: 'mdi-image' }
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