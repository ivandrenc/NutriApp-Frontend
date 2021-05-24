<template>
  <b-card bg-variant="light">
    <b-form-group
      label-cols-lg="3"
      label="Shipping Address"
      label-size="lg"
      label-class="font-weight-bold pt-0"
      class="mb-0"
    >
      <b-form-group
        label="Street:"
        label-for="nested-street"
        label-cols-sm="3"
        label-align-sm="right"
      >
        <b-form-input id="nested-street"></b-form-input>
      </b-form-group>

      <b-form-group
        label="City:"
        label-for="nested-city"
        label-cols-sm="3"
        label-align-sm="right"
      >
        <b-form-input id="nested-city"></b-form-input>
      </b-form-group>

      <b-form-group
        label="State:"
        label-for="nested-state"
        label-cols-sm="3"
        label-align-sm="right"
      >
        <b-form-input id="nested-state"></b-form-input>
      </b-form-group>

      <b-form-group
        label="Country:"
        label-for="nested-country"
        label-cols-sm="3"
        label-align-sm="right"
      >
        <b-form-input id="nested-country"></b-form-input>
      </b-form-group>

      <b-form-group
        label="Ship via:"
        label-cols-sm="3"
        label-align-sm="right"
        class="mb-0"
        v-slot="{ ariaDescribedby }"
      >
        <b-form-radio-group
          class="pt-2"
          :options="['Air', 'Courier', 'Mail']"
          :aria-describedby="ariaDescribedby"
        ></b-form-radio-group>
      </b-form-group>
    </b-form-group>
  </b-card>
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

</style>