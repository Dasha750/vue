<template>
  <div>
    <table class="table table-hover">
      <thead>
        <tr>
          <th>#</th>
          <th>Имя</th>
          <th>Фамилия</th>
          <th>Активен</th>
          <th>Баланс</th>
          <th>Email</th>
          <th>Телефон</th>
          <th>Зарегистрирован</th>
          <th>Редактировать</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in users" :key="item.id">
          <td>{{ item.id + 1 }}</td>
          <td>{{ item.firstName }}</td>
          <td>{{ item.lastName }}</td>
          <td>{{ item.isActive }}</td>
          <td>{{ item.balance }}</td>
          <td>{{ item.email }}</td>
          <td>{{ item.phone }}</td>
          <td>{{ item.registered }}</td>
          <td>
            <router-link class="btn btn-primary" :to="{ name: 'edit', params: { userId: item.id } }"
              >edit</router-link
            >
            <button type="button" class="btn btn-primary delete" @click="removeUser(item.id)">
              delete
            </button>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th colspan="8">{{ totalUsersTitle }}</th>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
export default {
  name: 'UserList',
  props: {
    users: {
      type: Array,
      required: true
    }
  },
  computed: {
    total() {
      return this.users.length
    },
    totalUsersTitle() {
      return 'Всего пользователей: ' + this.total
    },
    url(id) {
      return `/edit/${id}`
    }
  },
  methods: {
    removeUser: function(id) {
      this.$emit('click', id)
    }
  }
}
</script>
<style>
.btn.btn-primary {
  display: inline;
  margin: 5px;
}

.btn.delete {
  background: red;
  border: red;
}
</style>
