<template>
  <div>
    <form>
      <div class="form-group">
        <label for="user-name">User name</label>
        <input id="user-name" type="text" class="form-control" :value="user.firstName" />
      </div>
      <div class="form-group">
        <label for="user-name">User lastname</label>
        <input id="user-lastname" type="text" class="form-control" :value="user.lastName" />
      </div>
      <div class="form-group">
        <label for="user-name">Company</label>
        <input id="company" type="text" class="form-control" :value="user.company" />
      </div>
      <div class="form-group">
        <label for="user-name">Email</label>
        <input id="email" type="text" class="form-control" :value="user.email" />
      </div>
      <div class="form-group">
        <label for="user-name">Phone</label>
        <input id="phone" type="text" class="form-control" :value="user.phone" />
      </div>

      <button type="button" class="btn btn-primary">Save</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'EditUser',
  data: function() {
    return {
      user: []
    }
  },
  mounted() {
    this.loadUser()
  },
  methods: {
    parentRemove: function(id) {
      console.log('PARENT REMOVE', id, this.condition),
        axios.delete('http://localhost:3004/users/' + id).then(() => {
          this.users = this.users.filter(function(item) {
            return item.id !== id
          })
        })
    },
    loadUser() {
      let id = this.$route.params.userId
      console.log(id)
      axios
        .get(`http://localhost:3004/users/${id}`)
        .then(response => {
          this.user = response.data
        })
        .catch(error => console.error(error))
    }
  }
}
</script>

<style scoped></style>
