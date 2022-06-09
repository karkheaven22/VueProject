<template>
  <v-container fluid class="login-container">
    <v-form ref="form" v-model="valid" class="loginForm">
      <v-row>
        <v-col cols="12" md="12">
          <v-text-field
            v-model="loginForm.username"
            :label="$t('message.username')"
            prepend-inner-icon="mdi-account"
            counter="50"
            maxlength="50"
            :rules="[rules.requiredUsername]"
            required
            outlined
            flat
            single-line
            autocomplete="off"
            tabindex="1"
            clearable />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="12">
          <v-text-field
            v-model="loginForm.password"
            :label="$t('message.password')"
            prepend-inner-icon="mdi-lock"
            :append-icon="ShowPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :type="ShowPassword ? 'text' : 'password'"
            :rules="[rules.requiredPassword, rules.min]"
            counter="20"
            maxlength="20"
            required
            outlined
            flat
            single-line
            tabindex="2"
            clearable
            @click:append="() => (ShowPassword = !ShowPassword)"
            @keyup.enter.native="validate" />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="12">
          <v-btn
            :disabled="!valid"
            :loading="loader"
            block
            large
            class="primary"
            tabindex="3"
            @click="validate">
            {{ $t('message.login') }}
            <template v-slot:loader>
              <v-progress-circular
                :size="20"
                :width="3"
                indeterminate
                color="primary" />&nbsp;
              {{ $t('message.login') }}
            </template>
          </v-btn>
        </v-col>
      </v-row>
      <QrButton @scanResult="scanResult"/>
    </v-form>
  </v-container>
</template>

<script>
import { UserModule } from '@/store/modules/user'
import QrButton from '@/components/Adapter/QrButton.vue'

export default {
  components: { QrButton },
  data() {
    return {
      loader: false,
      loginForm: {
        username: '',
        password: ''
      },
      valid: false,
      ShowPassword: false,
      rules: {
        requiredUsername: value => !!value || this.$i18n.t('required.username'),
        requiredPassword: value => !!value || this.$i18n.t('required.password'),
        min: v => v.length >= 8 || this.$i18n.t('required.minCharacters', [8])
      },
      redirect: undefined
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
    async validate() {
      this.loader = true
      this.valid = false
      if (this.$refs.form.validate()) {
        const { result, message } = await UserModule.Login(this.loginForm)
        if (result) {
          this.$router.push({ path: this.redirect || '/dashboard', query: this.otherQuery })
        } else{
          this.$notify({
            title: this.$i18n.t('message.warning'),
            message: message,
            type: 'warning',
            duration: 0
          });
        }
      }

      setTimeout(() => {
        this.loader = false
        this.valid = true
      }, 1000)
    },
    scanResult(result) {
      alert(result)
    }
  }
}
</script>

<style lang="scss">

.login-container {
  height: 100%;
  width: 100%;
  overflow: hidden;
  background-color: #2d3a4b;

  .loginForm{
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 150px 0px 0px;
    margin: 0 auto;
    overflow: hidden;

    .v-input__slot{
        border: 1px solid hsla(0,0%,100%,.1);
        background: rgba(0,0,0,.1) !important;
        border-radius: 5px;
        color: #454545
    }
    .v-label, .v-input input{
        color:white;
        letter-spacing: 2px;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    .v-icon, .v-counter{
        color: #889aa4
    }
    fieldset{
        display:none;
    }
    .v-btn.v-btn--disabled.primary:disabled{
        opacity: 0.65;
        color: white !important;
    }
  }
}

.custom-loader {
    animation: loader 1s infinite;
    display: flex;
  }
  @-moz-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-o-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }

</style>
