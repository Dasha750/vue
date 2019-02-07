<template>
  <div>
    Edit user {{ id }}
    <div v-if="!user" class="alert alert-warning">
      Loading...
    </div>
    <!--<user-form v-else :user="user" @update="user = $event" />-->
    <user-form v-else v-model="user" />
    <button type="button" class="btn btn-primary" @click="saveUser">Save</button>
  </div>
</template>
d
<script>
import axios from 'axios'
import UserForm from '@/components/UserForm.vue'
import { URL_API } from '@/constants/config.js'

export default {
  name: 'EditUser',
  components: {
    'user-form': UserForm
  },
  data: () => ({
    user: null
  }),
  computed: {
    id() {
      return this.$route.params.userId
    },
    url() {
      return `${URL_API}users/${this.id}`
    }
  },
  mounted() {
    this.loadUser()
  },
  methods: {
    loadUser() {
      axios
        .get(this.url)
        .then(response => {
          this.user = response.data
        })
        .catch(error => console.error(error))
    },
    saveUser() {
      axios
        .patch(this.url, this.user)
        .then(() => {
          this.$router.push('/users')
        })
        .catch(error => console.error(error))
    }
  }
}
</script>
