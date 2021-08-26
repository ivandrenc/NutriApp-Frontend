<template>
  <div>
    <left-side-dashboard></left-side-dashboard>
    <right-side-dashboard></right-side-dashboard>
    <input type="button" value="Logout" @click="logout" />
  </div>
</template>

<script>
//import AuthService from '@/services/AuthService.js';
import leftSideDashboard from "../components/leftSideDashboard.vue";
import rightSideDashboard from "@/components/rightSideDashboard";
export default {
  name:'Dashboard',
  components: {
    LeftSideDashboard: leftSideDashboard,
    RightSideDashboard: rightSideDashboard
  },
  data() {
    return {
      secretMessage: '',
      username: ''
    };
  },
  /*async created() {
    if (!this.$store.getters.isLoggedIn) {
      this.$router.push('/login');
    }
    this.username = this.$store.getters.getUser.username;
    this.secretMessage = await AuthService.getSecretContent();
  },
  methods: {
    logout() {
      this.$store.dispatch('logout');
      this.$router.push('/login');
    }
  }*/
};
</script>