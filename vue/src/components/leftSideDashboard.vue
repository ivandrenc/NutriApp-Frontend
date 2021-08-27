<template>
  <div>
    <b-sidebar no-header-close :visible="true" width="200px" id="sidebar-1" bg-variant="light" text-variant="dark"
               title="Nutriapp" left shadow="sm">
      <b-container>
        <b-row class="mt-5 mb-5" align-content="center" align-v="center" align-h="center">
          <b-col>
            <span id="dashboard">Dashboard</span>
          </b-col>
        </b-row>

        <b-row class="mt-5 mb-5" align-content="center" align-v="center" align-h="center">
          <b-col>
            <span id="my-foods">My foods</span>
          </b-col>
        </b-row>

        <b-row id="dashboard" class="mt-5 mb-5" align-content="center" align-v="center" align-h="center">
          <b-col>
            <span id="statistics">Statistics</span>
          </b-col>
        </b-row>

        <b-row id="dashboard" class="mt-5 mb-5" align-content="center" align-v="center" align-h="center">
          <b-col>
            <span id="settings">Settings</span>
          </b-col>
        </b-row>
      </b-container>
    </b-sidebar>
  </div>
</template>

<script>
export default {
  name: 'leftSideDashboard',
  data() {
    return {
      hovered: false
    }
  },
  methods: {

  },

}

</script>

<style>
#my-foods:hover {
  color: lightgray;
}

#my-foods:hover {
  color: lightgray;
}

#my-foods:hover {
  color: lightgray;
}
</style>