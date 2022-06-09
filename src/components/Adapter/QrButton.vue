<template>
  <v-layout justify-center>
    <v-btn icon @click.native.stop="dialog=true">
      <v-icon>mdi-qrcode-scan</v-icon>
    </v-btn>
    <v-dialog
      v-model="dialog"
      fullscreen
      transition="dialog-bottom-transition">
      <v-card>
        <v-toolbar dark>
          <v-spacer />
          <v-toolbar-items>
            <v-btn icon dark @click="closeDialog()">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-layout justify-center class="scanPanel">
          <p class="decode-result">Result: <b>{{ result }}</b></p>
          <BarcodeStreamer ref="StreamReader" @decode="onDecode" />
        </v-layout>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
import BarcodeStreamer from './BarcodeStreamer.vue'

export default {
  name: 'QrButton',
  components: { BarcodeStreamer },
  data() {
    return {
      dialog: false,
      result: ''
    }
  },
  watch: {
    dialog: function() {
      if (this.dialog) {
        this.result = ''
        setTimeout(() => {
          this.$refs.StreamReader.start()
        }, 1000)
      } else {
        this.$refs.StreamReader.reset()
      }
    }
  },
  methods: {
    closeDialog() {
      this.dialog = false
    },
    readBarcode() {
      this.dialog = false
    },
    onDecode(result) {
      this.dialog = false
      this.result = result
      this.$emit('scanResult', result)
    }
  }
}
</script>
<style lang="scss" scoped>
.v-dialog--fullscreen {
    .v-card {
      height: 100%;
      width: 100%;
      flex-direction: column;
      display: flex;
  }
}
.scanPanel{
  box-sizing: border-box;
  padding: 0px !important;
  margin: 0px !important;
  height: 100%;
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
