<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script>
import { AppModule } from '@/store/modules/app'
export default {
  name: 'App',
  metaInfo: {
    htmlAttrs: { lang: AppModule.language }
  }
}
</script>
