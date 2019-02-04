<template>
  <div>
    <h2>Список пользователей</h2>

    <div v-if="!users" class="alert alert-warning">
      Загрузка...
    </div>
    <div v-else>
      <router-link class="btn btn-primary" to="/create" tag="button">
        Add new user
      </router-link>
      <div class="users-on-page">
        <span>Показывать пользователей на странице: </span>
        <select v-model="usersOnPage">
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
      </div>
      <user-list :users="getUsers()" @click="parentRemove"></user-list>
      <pagination v-model="currentPage" :page-count="pageCount"></pagination>
    </div>
  </div>
</template>

<script>
import axios from '@/axios.js'
import UserList from '@/components/UserList.vue'
import Pagination from '@/components/Pagination'

export default {
  name: 'UsersListPage',
  components: {
    Pagination,
    'user-list': UserList
  },
  data: function() {
    return {
      users: null,
      usersOnPage: 5,
      currentPage: 1
    }
  },
  computed: {
    pageCount() {
      if (this.users) {
        return Math.ceil(this.users.length / this.usersOnPage)
      } else {
        return 0
      }
    }
  },
  watch: {
    usersOnPage: {
      handler: 'changeCurrentPage'
    }
  },
  mounted() {
    this.loadUsers()
  },
  methods: {
    parentRemove: function(id) {
      axios.delete('http://localhost:3004/users/' + id).then(() => {
        this.users = this.users.filter(function(item) {
          return item.id !== id
        })
      })
    },
    loadUsers() {
      axios
        .get('/users')
        .then(response => {
          this.users = response.data
        })
        .catch(error => console.error(error))
    },
    getUsers() {
      let startNubmer = (this.currentPage - 1) * this.usersOnPage
      let endNumber = this.currentPage * this.usersOnPage
      let filteredUsers = this.users.filter(function(item, i) {
        return i >= startNubmer && i < endNumber
      })
      return filteredUsers
    },
    changeCurrentPage() {
      this.currentPage = 1
    }
  }
}
</script>
