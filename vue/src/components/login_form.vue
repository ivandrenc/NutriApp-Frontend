<template>
  <div>
    <b-form>
      <b-form-group
          id="input-group-1"
          label="Email address:"
          label-for="input-1"
          description="We'll never share your email with anyone else."
      >
        <b-form-input
            id="input-1"
            v-model="form.email"
            type="email"
            placeholder="Enter email"
            required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input
            id="input-2"
            v-model="form.name"
            placeholder="Enter username"
            required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
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
        name: '',
      },
    }
  },
  methods: {

  }
}
</script>
<style>

</style>