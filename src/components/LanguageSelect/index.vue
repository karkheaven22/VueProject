<template>
  <v-menu offset-y close-on-click close-on-content-click>
    <template v-slot:activator="{on}">
      <v-btn icon v-on="on">
        <v-icon>mdi-translate </v-icon>
      </v-btn>
    </template>
    <v-list dense>
      <v-list-item-group>
        <v-list-item link @click="handleSetLanguage('en')">
          <v-list-item-icon>
            <v-icon>mdi-exit-to-app</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>English</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link @click="handleSetLanguage('zh')">
          <v-list-item-icon>
            <v-icon>mdi-exit-to-app</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Chinese</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-menu>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { AppModule } from '@/store/modules/app'

// export default {
//   name: 'LanguageSelect',
//   data() {
//     return {
//       language: AppModule.language
//     }
//   },
//   methods: {
//     handleSetLanguage: function(lang: string) {
//       AppModule.SetLanguage(lang)
//       this.$i18n.locale = lang
//       this.$root.$i18n.locale = lang
//       const matched = this.$route.matched.filter((item) => item.meta && item.meta.title)
//       const last = matched[matched.length - 1]
//       const pageName = this.$t(`route.${last.meta.title}`) as string
//       document.title = pageName
//     }
//   }
// }
@Component({
  name: 'LanguageSelect'
})

export default class extends Vue {
  get language() {
    return AppModule.language
  }

  handleSetLanguage(lang: string) {
    AppModule.SetLanguage(lang)
    this.$i18n.locale = lang
    this.$root.$i18n.locale = lang
    const matched = this.$route.matched.filter((item) => item.meta && item.meta.title)
    const last = matched[matched.length - 1]
    const pageName = this.$t(`route.${last.meta.title}`) as string
    document.title = pageName
  }
}
</script>
