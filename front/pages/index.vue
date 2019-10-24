<template>
  <v-app>
    //Include new components here and see the magics.
    //BTW,you must have v-app in the root file encompassing all the
    //Vuetify components
  </v-app>
</template>

<script>
  import  pkg from '../package';

export default {
  components: {
  },
    data() {
      return {
          app_name : pkg.name
      }
    },
    methods: {
        async logout() {
            try {
                const logout = await this.$auth.logout();

                this.$router.replace("/");
                this.$toast.success('Salio del sistema con éxito',{duration: 5000})

            }catch (e) {
                this.$toast.error('Algo a salido Mal',{duration: 5000});
                console.log(e.response)
            }
        }
    }
}
</script>

<style>

</style>
