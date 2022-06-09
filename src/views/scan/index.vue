<template>
  <v-layout fullscreen justify-center class="scanPanel">
    <p class="decode-result">Result222: <b>{{ result }}</b></p>
    <BarcodeStreamer ref="StreamReader" @decode="onDecode" />
  </v-layout>
</template>

<script>
import BarcodeStreamer from '@/components/Adapter/BarcodeStreamer.vue'

export default {
  name: 'QrScanner',
  components: { BarcodeStreamer },
  data() {
    return {
      result: '',
      errorMsg: '',
      camera: 'rear',
      noRearCamera: false,
      noFrontCamera: false,
      reader: ''
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  methods: {
    switchCamera() {
      switch (this.camera) {
      case 'front':
        this.camera = 'rear'
        break
      case 'rear':
        this.camera = 'front'
        break
      }
    },
    async onDecode(result) {
      this.result = result
      this.$emit('scanResult', result)
    },
    async onInit(promise) {
      try {
        await promise
      } catch (error) {
        if (error.name === 'NotAllowedError') {
          this.errorMsg = 'ERROR: you need to grant camera access permisson'
        } else if (error.name === 'NotFoundError') {
          this.errorMsg = 'ERROR: no camera on this device'
        } else if (error.name === 'NotSupportedError') {
          this.errorMsg = 'ERROR: secure context required (HTTPS, localhost)'
        } else if (error.name === 'NotReadableError') {
          this.errorMsg = 'ERROR: is the camera already in use?'
        } else if (error.name === 'OverconstrainedError') {
          this.ererrorMsgror = 'ERROR: installed cameras are not suitable'
        } else if (error.name === 'StreamApiNotSupportedError') {
          this.errorMsg = 'ERROR: Stream API is not supported in this browser'
        }
      }
    }
  }
}
</script>
<style lang="scss">
body{
  padding: 0px;
  margin: 0px;
}
.scanPanel{
  box-sizing: border-box;
  padding: 0px !important;
  margin: 0px !important;
  height:100vh;
  position:relative;
  overflow: hidden;
}
.btn-camera-party {
  position: absolute;
  right: 10px;
  bottom: 10px;
  display: none;
}
.decode-error {
  position: absolute;
  top: 0px;
  right: 0px;
  left: 0px;
}
.decode-result {
  position: absolute;
  left: 0px;
  right: 0px;
  bottom:0px;
  margin-bottom: 0px !important;
  background-color: rgba(0,0,0);
  padding:5px;
  color:white;
  z-index: 999;
}
</style>
