<template>
  <v-breadcrumbs :items="breadcrumbs">
    <template v-slot:item="{item}">
      <v-breadcrumbs-item :href="item.path" link router :to="item.path">
        {{ $t(`route.${item.meta.title}`) }}
      </v-breadcrumbs-item>
    </template>
  </v-breadcrumbs>
</template>

<script lang="ts">
import { compile } from 'path-to-regexp/dist'
import { Component, Vue, Watch } from 'vue-property-decorator'
import { RouteRecord, Route } from 'vue-router'
@Component({
  name: 'Breadcrumb'
})
export default class extends Vue {
  breadcrumbs : RouteRecord[] = []

  @Watch('$route')
  private onRouteChange(route: Route) {
    // if you go to the redirect page, do not update the breadcrumbs
    if (route.path.startsWith('/redirect/')) {
      return
    }
    this.getBreadcrumb()
  }

  created() {
    this.getBreadcrumb()
  }

  private getBreadcrumb() {
    const matched = this.$route.matched.filter((item) => item.meta && item.meta.title)
    // this.breadcrumbs = matched.map((item, index) => {
    //   return {
    //     text: item.meta.title,
    //     href: `${item.path}`,
    //     disabled: item.redirect === 'noredirect' || index === matched.length - 1
    //   }
    // })
    // this.breadcrumbs = data
    this.breadcrumbs = matched.filter((item) => {
      return item.meta && item.meta.title
    })
  }

  private isDashboard(route: RouteRecord) {
    const name = route && route.name
    if (!name) {
      return false
    }
    return name.trim().toLocaleLowerCase() === 'Dashboard'.toLocaleLowerCase()
  }

  private pathCompile(path: string) {
    // To solve this problem https://github.com/PanJiaChen/vue-element-admin/issues/561
    const { params } = this.$route
    const toPath = compile(path)
    return toPath(params)
  }

  private handleLink(item: any) {
    const { redirect, path } = item
    if (redirect) {
      this.$router.push(redirect).catch(err => {
        // Throw Error "NavigationDuplicated"
        // https://github.com/vuejs/vue-router/issues/2872#issuecomment-522341874
        console.warn(err)
      })
      return
    }
    this.$router.push(this.pathCompile(path)).catch(err => {
      // Throw Error "NavigationDuplicated"
      // https://github.com/vuejs/vue-router/issues/2872#issuecomment-522341874
      console.warn(err)
    })
  }
}
</script>

<style lang="scss" scoped>
.el-breadcrumb__inner,
.el-breadcrumb__inner a {
  font-weight: 400 !important;
}
.app-breadcrumb.el-breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 8px;
  .no-redirect {
    color: #97a8be;
    cursor: text;
  }
}
</style>
