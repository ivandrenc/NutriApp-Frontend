<template>
  <b-container id="register_form">
    <b-row class="vh-100" align-v="center">
      <b-col cols="6" offset="3">
        <b-card title="Register" bg-variant="light">
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
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-2"
              label="Password"
              label-for="input-2"
            >
              <!--:validation has to actually be named state as above,-->
              <!-- password validation here to avoid unnecessary requests to server-->
              <b-form-input
                id="input-2"
                v-model="form.password"
                type="password"
                placeholder="Password"
                :state="validatePassword(form.password)"
                required
              ></b-form-input>
            </b-form-group>

             <b-form-group
              id="input-group-3"
              label="Password2"
              label-for="input-3"
            >
              <b-form-input
                id="input-3"
                v-model="form.password2"
                type="password"
                placeholder="Password"
                :state="checkequals()"
                required
              ></b-form-input>
            </b-form-group>

          </b-card-body>
          <div class="d-flex justify-content-center">
            <b-button @click="validate_Register" type="submit" variant="dark"
              >Register
            </b-button>
            <p v-if="msg">{{ msg }}</p>
          </div>
        </b-card>
        <div class="d-flex justify-content-center">
            Already registered? 
        </div>
        <div class="d-flex justify-content-center">
            <b-link href="/login"
                >Login!</b-link
              >
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import AuthService from '@/services/AuthService.js';

export default {
  name: "register_form",
  data() {
    return {
      form: {
        username:"",
        email: "",
        password: "",
        password2: "",
      },
      msg: "",
      reg_mail: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
      reg_pass: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
    }
  },
  //Its important though that validateEmail is in computed, in methods doesnt seem to work
  computed: {
    //here its ok to use validateEmail() and validateEmail: function()
    validateEmail: function () {
      //checks the syntax of the email written by the user
      return this.reg_mail.test(this.form.email);
    },
    validatePassword: function (pw){
      return this.reg_pass.test(pw);
    }
  },
  methods:{
    checkequals: function () {
      if((this.form.password==this.form.password2)&&this.validatePassword(this.form.password2)) {
        return true;
      }
      return false;
    },
    async validate_Register () {
      try {
        const credentials = {
          username: this.form.username,
          password: this.form.password,
          password_repeat: this.form.password2
        };
        const response = await AuthService.signUp(credentials);
        this.msg = response.msg;
         this.$router.push('/login');
      } catch (error) {
        this.msg = error.response.data.msg;
      }
    },
  }
}
</script>
<style scoped>
</style>  