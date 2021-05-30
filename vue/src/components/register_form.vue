<template>
  <b-container class="login_form">
    <b-row class="vh-100" align-v="center">
      <b-col cols="6" offset="3">
        <b-card title="Login" bg-variant="light">
          <b-card-body>
            <b-form-group
              id="input-group-0"
              label="Username"
              label-for="input-0"
            >
              <!--:validation has to ask server if that username is taken-->
              <b-form-input
                id="input-0"
                v-model="form.username"
                type="text"
                placeholder="Cool username"
                :state="validateUsername"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-1" label="Email" label-for="input-1">
              <!--:validation has to actually be named state, check https://bootstrap-vue.org/docs/components/form-->
              <b-form-input
                id="input-1"
                v-model="form.email"
                type="email"
                placeholder="Email"
                :state="validateEmail"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-2"
              label="Password"
              label-for="input-2"
            >
              <!--:validation has to actually be named state as above,-->
              <b-form-input
                id="input-2"
                v-model="form.password"
                type="password"
                placeholder="Password"
                :state="validatePassword"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-3"
              label="Height"
              label-for="input-3"
            >
              
            </b-form-group>
            <b-form-spinbutton
              id="sb-locale"
              v-model="value"
              :locale="locale"
              min="0"
              max="2.5"
              step="0.05"
            ></b-form-spinbutton>

          </b-card-body>
          <div class="d-flex justify-content-center">
            <b-button @click="validate_Register" type="submit" variant="dark"
              >Register
            </b-button>
          </div>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "login_form",
  data() {
    return {
      form: {
        username:"",
        email: "",
        password: "",
        height:"",//con ruedita
        genero:"",//switch
        edad:"",//con ruedita
      },
      
      reg: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
    }
  },
  //Its important though that validateEmail is in computed, in methods doesnt seem to work
  computed: {
    //here its ok to use validateEmail() and validateEmail: function()
    validateEmail: function () {
      //checks the syntax of the email written by the user
      return this.reg.test(this.form.email)
    },
    
  },
  methods:{
    validateLogin: function () {
      //checks if user exists
      return 0
    },
  }
}
</script>
<style scoped>
</style>  