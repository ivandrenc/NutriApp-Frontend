<template>
  <b-container class="login_form">
    <b-row class="vh-100" align-v="center">
      <b-col cols="6" offset="3">
        <b-card title="Login" bg-variant="light">
          <b-card-body>

            <b-form-group id="username-login" label-for="input-0">
              <!--:validation has to ask server if that username is taken-->
              <b-form-input
                  id="input-0"
                  v-model="form.username"
                  type="text"
                  placeholder="Username"
                  required
              ></b-form-input>
            </b-form-group>

            <b-form-group id="password-login" label-for="input-2">
              <!--:validation has to actually be named state as above,-->
              <!-- password validation here to avoid unnecessary requests to server-->
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
              >Forgot Password?
              </b-link
              >
            </div>

          </b-card-body>
          <div class="d-flex justify-content-center">
            <b-button @click="validateLogin" type="submit" variant="dark"
            >Login
            </b-button>
            <p v-if="msg">{{ msg }}</p>
          </div>
        </b-card>
        <div class="d-flex justify-content-center">
          Dont have an account yet?
        </div>
        <div class="d-flex justify-content-center">
          <b-link href="/register"
          >Register!
          </b-link
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
        username: "",
        password: "",
      },
      msg: "",
    }
  },
  methods: {
    async validateLogin() {
      //  const credentials = {
      //    username: this.username,
      //    password: this.password
      //  };
     //   const response = await AuthService.login(credentials);

     //   this.msg = response.msg;

        //const token = response.token;

       // const user = response.user;

       // this.$store.dispatch('login', {token, user});
        this.$router.push('/dashboard');


    },
  }
}
</script>
<style scoped>
</style>  