<template>
    <v-container fluid>
      <v-row class="fill-height">
        <v-col>
          <transition name="fade">
            <router-view :key="key" />
          </transition>
        </v-col>
      </v-row>
    </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'AppMain'
})

export default class extends Vue {
  get sidebar() {
    return this.$store.getters.sidebar
  }

  get device() {
    return this.$store.getters.device
  }

  get showSettings() {
    return this.$store.getters.showSettings
  }

  get needTagsView() {
    return this.$store.getters.tagsView
  }

  get fixedHeader() {
    return this.$store.getters.fixedHeader
  }

  get cachedViews() {
    return ''
  }

  get key() {
    return this.$route.path
  }
}
</script>