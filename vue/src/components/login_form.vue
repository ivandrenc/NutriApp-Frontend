<template>
  <div class="container">
    <b-form>
      <b-form-group
          id="input-group-1"
          label="Email address:"
          label-for="input-1"
      >
      <!--:validation has to actually be named state, check https://bootstrap-vue.org/docs/components/form-->
        <b-form-input
            id="input-1"
            v-model="form.email"
            type="email"
            placeholder="Enter it here"
            :state="validateEmail"
            required
        ></b-form-input>
      </b-form-group>

      <b-form-group
          id="input-group-2"
          label="Password:"
          label-for="input-2"
      >
      <!--:validation has to actually be named state as above,-->
        <b-form-input
            id="input-2"
            v-model="form.password"
            type="password"
            placeholder="Enter your password"
            :state="validatePassword"
            required
        ></b-form-input>
      </b-form-group>

      <b-button @click="validate_login" type="submit" variant="primary">Login</b-button>
      <b-button type="reset" variant="danger">Register</b-button>
    </b-form>

  </div>
</template>

<script>
export default {
  name:'login_form',
  data() {
    return {
      form: {
        email: '',
        password: '',
      },
      users: [
        {
          email: "roberto@outlook.com",
          password: "123"
        },
        {
          email: "Juanito@gmail.com",
          password: "456"
        }
      ],
      reg: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/
    }
  },
  //Its important though that validateEmail is in computed, in methods doesnt seem to work
  computed: {
    //here its ok to use validateEmail() and validateEmail: function()
    validateEmail: function(){
      //checks the syntax of the email written by the user
      return this.reg.test(this.form.email);
    },
    validatePassword: function(){
      //checks the syntax of the pass written by the user
      return 0;
    },
  }
}
</script>
<style>

body {
  text-align: center;
  padding: 50px;
}
.container {
  padding: 40px 80px;
  background-color: #fff;
  border-radius: 8px;
}
</style>