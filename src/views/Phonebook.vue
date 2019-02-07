<template>
  <div>
    <h2>Список пользователей</h2>

    <div v-if="!users" class="alert alert-warning">
      Загрузка...
    </div>
    <div v-else>
      <router-link class="btn btn-primary" to="/create" type="button" tag="button">
        Add new user
      </router-link>
      <div class="users-on-page">
        <span>Показывать пользователей на странице: </span>
        <select v-model="usersOnPage">
          <option v-for="item in usersOnPageArr" :key="item" :value="item">{{ item }}</option>
        </select>
      </div>
      <user-list :users="getUsers" @removeUser="parentRemove">
        <template slot="table-header">
          <tr>
            <th>#</th>
            <th>Имя</th>
            <th>Фамилия</th>
            <th>Телефон</th>
          </tr>
        </template>
        <template slot="table-row" slot-scope="props">
          <td>{{ props.id + 1 }}</td>
          <td>{{ props.firstName }}</td>
          <td>{{ props.lastName }}</td>
          <td>{{ props.phone }}</td>
        </template>
      </user-list>
      <pagination v-model="currentPage" :page-count="pageCount"></pagination>
    </div>
  </div>
</template>

<script>
import axios from '@/axios.js'
import UserList from '@/components/UserList.vue'
import Pagination from '@/components/Pagination.vue'
import { URL_API } from '@/constants/config.js'

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
      currentPage: 1,
      usersOnPageArr: [5, 10, 15, 20]
    }
  },
  computed: {
    pageCount() {
      if (this.users) {
        return Math.ceil(this.users.length / this.usersOnPage)
      } else {
        return 0
      }
    },
    getUsers() {
      let startNubmer = (this.currentPage - 1) * this.usersOnPage
      let endNumber = this.currentPage * this.usersOnPage
      let filteredUsers = this.users.filter(function(item, i) {
        return i >= startNubmer && i < endNumber
      })
      return filteredUsers
    }
  },
  watch: {
    usersOnPage: 'changeCurrentPage'
  },
  mounted() {
    this.loadUsers()
  },
  methods: {
    parentRemove: function(id) {
      axios.delete(`${URL_API}users/${id}`).then(() => {
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
    changeCurrentPage() {
      this.currentPage = 1
    }
  }
}
</script>
