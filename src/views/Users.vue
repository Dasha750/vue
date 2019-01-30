<template>
  <div>
    <h2>Список пользователей</h2>
    <div v-if="!users.length" class="alert alert-warning">
      Загрузка...
    </div>
    <user-list v-else :users="users" @click="parentRemove"></user-list>
  </div>
</template>

<script>
import axios from 'axios'
import UserList from '@/components/UserList.vue'

export default {
  name: 'UsersListPage',
  components: {
    'user-list': UserList
  },
  data: function() {
    return {
      users: []
    }
  },
  mounted() {
    this.loadUsers()
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
    loadUsers() {
      axios
        .get(' http://localhost:3004/users')
        .then(response => {
          this.users = response.data
        })
        .catch(error => console.error(error))
    }
  }
}
</script>
