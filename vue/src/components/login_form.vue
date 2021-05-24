<template>
  <b-container class="login_form">
    <b-row class="vh-100" align-v="center">
      <b-col cols="6" offset="3">
        <b-card title="Login" bg-variant="light">
          <b-card-body>
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
            <div class="d-flex flex-row-reverse">
              <b-link style="color: rgb(61, 61, 61); font-size: 0.9em;"
                >Forgot Password?</b-link
              >
            </div>
          </b-card-body>
          <div class="d-flex justify-content-center">
            <b-button @click="validate_login" type="submit" variant="dark"
              >Login
            </b-button>
          </div>
        </b-card>
        <div class="d-flex justify-content-center">
            Dont have an account yet?
        </div>
        <div class="d-flex justify-content-center">
            <b-link
                >Register!</b-link
              >
        </div>
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
        email: "",
        password: "",
      },
      users: [
        {
          email: "roberto@outlook.com",
          password: "123",
        },
        {
          email: "Juanito@gmail.com",
          password: "456",
        },
      ],
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
    validatePassword: function () {
      //checks the syntax of the pass written by the user
      return 0
    },
  },
}
</script>
<style scoped>
</style>  