<template>
  <div class="container">
    <b-form>
      <b-form-group
          id="input-group-1"
          label="Email address:"
          label-for="input-1"
      >
        <b-form-input
            id="input-1"
            v-model="form.email"
            type="email"
            placeholder="Enter it here"
            :validation="validateEmail"
            required
        ></b-form-input>
      </b-form-group>

      <b-form-group
          id="input-group-2"
          label="Password:"
          label-for="input-2"
      >
        <b-form-input
            id="input-2"
            v-model="form.password"
            type="password"
            placeholder="Enter your password"
            :validation="validatePassword"
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
          username: "roberto@outlook.com",
          password: "123"
        },
        {
          username: "Juanito@gmail.com",
          password: "456"
        }
      ],
      reg: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/
    }
  },
  methods: {
    validateEmail: function(){
      return (this.email == "")? "" : (this.reg.test(this.email)) ? true : false;
  },
  computed: {
      },
      validatePassword: function(){
        return 0;
      }
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