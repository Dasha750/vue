<template>
  <div>
    Created user
    <user-form v-model="user" />
    <button type="button" class="btn btn-primary" @click="saveUser">Save</button>
  </div>
</template>

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
    user: {}
  }),
  computed: {
    url() {
      return `${URL_API}users`
    },
    editUsers() {
      return { ...this.user, registered: this.userRegistered() }
    }
  },
  methods: {
    saveUser() {
      axios
        .post(this.url, this.editUsers)
        .then(() => {
          this.$router.push('/users')
        })
        .catch(error => console.error(error))
    },
    userRegistered() {
      let currentDate = new Date()
      return `${currentDate.getDate()}.${currentDate.getMonth()}.${currentDate.getFullYear()}`
    }
  }
}
</script>
