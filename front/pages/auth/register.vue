<template>
  <div class="app flex-row align-items-center">
    <div class="container p-0">
      <b-row class="justify-content-center">
        <b-col md="6" sm="8">
          <b-card no-body class="mx-4">
            <b-card-body class="p-3">
              <h1>Register</h1>
              <p class="text-muted">Create your account</p>
              <form @submit.prevent="register">
              <b-input-group class="mb-3">
                <b-input-group-prepend>
                  <b-input-group-text><i class="icon-user"></i></b-input-group-text>
                </b-input-group-prepend>
                <input type="text" v-model="form.name" class="form-control" :class="{ 'is-invalid': errors.name }" placeholder="Username">
                  <div class="invalid-feedback" v-if="errors.name">
                      {{errors.name[0]}}
                  </div>
              </b-input-group>

              <b-input-group class="mb-3">
                <b-input-group-prepend>
                  <b-input-group-text>@</b-input-group-text>
                </b-input-group-prepend>
                <input type="text" v-model="form.email" class="form-control" :class="{ 'is-invalid': errors.email }" placeholder="Email">
                  <div class="invalid-feedback" v-if="errors.email">
                      {{errors.email[0]}}
                  </div>
              </b-input-group>

              <b-input-group class="mb-3">
                <b-input-group-prepend>
                  <b-input-group-text><i class="icon-lock"></i></b-input-group-text>
                </b-input-group-prepend>
                <input type="password" v-model="form.password" class="form-control" :class="{ 'is-invalid': errors.password }" placeholder="Password">
                  <div class="invalid-feedback" v-if="errors.password">
                      {{errors.password[0]}}
                  </div>
              </b-input-group>

              <b-input-group class="mb-4">
                <b-input-group-prepend>
                  <b-input-group-text><i class="icon-lock"></i></b-input-group-text>
                </b-input-group-prepend>
                <input type="password" class="form-control" placeholder="Repeat password">
              </b-input-group>

                <b-row>
                  <b-col>
                    <b-button variant="">
                      <nuxt-link to="../auth/login">Cancelar</nuxt-link>
                    </b-button>
                  </b-col>
                  <b-col>
                    <input type="submit" value="Create Account" class="form-control btn btn-success">
                  </b-col>
                </b-row>


              </form>
            </b-card-body>
            <b-card-footer class="p-4">
              <b-row>
                <b-col cols="6">
                  <b-button block class="btn btn-facebook pr-0"><span>facebook</span></b-button>
                </b-col>
                <b-col cols="6">
                  <b-button block class="btn btn-twitter" type="button"><span>twitter</span></b-button>
                </b-col>
              </b-row>
            </b-card-footer>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  layout: 'clean',
    auth: false,
    data(){
      return {
          form: {
              name:'',
              email:'',
              password:'',
          }
      }
    },
    methods: {
      async register(){

          try {
              await this.$axios.post('/auth/register', this.form);
          } catch(e) {
              return;
          }

          this.$auth.login({data: this.form});

          this.$router.push({ name: 'index' });

      }
    }
}
</script>
<style scoped>
  .container {
    margin-top: 5rem;
  }
</style>