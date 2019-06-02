<template>
  <div>
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#" class="text-uppercase">{{app_name }}</b-navbar-brand>

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#">HOME</b-nav-item>
            <!--<b-nav-item href="#" disabled>Disabled</b-nav-item>-->
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <!--<b-nav-form>-->
              <!--<b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>-->
              <!--<b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>-->
            <!--</b-nav-form>-->

            <!--<b-nav-item-dropdown text="Lang" right>-->
              <!--<b-dropdown-item href="#">EN</b-dropdown-item>-->
              <!--<b-dropdown-item href="#">ES</b-dropdown-item>-->
              <!--<b-dropdown-item href="#">RU</b-dropdown-item>-->
              <!--<b-dropdown-item href="#">FA</b-dropdown-item>-->
            <!--</b-nav-item-dropdown>-->


            <b-nav-item v-if="!this.$auth.$state.loggedIn">
                <b-link to="auth/login">Ingresar</b-link>
            </b-nav-item>

            <b-nav-item-dropdown right v-else>
              <!-- Using 'button-content' slot -->
              <template slot="button-content"><em>User</em></template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item @click="logout">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>

          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <section class="container">
      <div>
        <logo />
        <h1 class="title">
          sysbase
        </h1>
        <h2 class="subtitle">
          My praiseworthy Nuxt.js project
        </h2>
        <div class="links">
          <a
                  href="https://nuxtjs.org/"
                  target="_blank"
                  class="button--green"
          >Documentation</a>
          <a
                  href="https://github.com/nuxt/nuxt.js"
                  target="_blank"
                  class="button--grey"
          >GitHub</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import  pkg from '../package';
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
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
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
