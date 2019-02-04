<template>
  <div>
    <form>
      <div class="form-group">
        <label for="user-name">User name</label>
        <input id="user-name" v-model="localUser.firstName" type="text" class="form-control" />
      </div>
      <div class="form-group">
        <label for="user-name">User lastname</label>
        <input id="user-lastname" v-model="localUser.lastName" type="text" class="form-control" />
      </div>
      <div class="form-group">
        <label for="user-balance">User balance</label>
        <input id="user-balance" v-model="localUser.balance" type="text" class="form-control" />
      </div>
      <div class="form-group">
        <label for="user-age">User age</label>
        <input id="user-age" v-model="localUser.age" type="text" class="form-control" />
      </div>
      <div class="form-group">
        <label for="user-name">Company</label>
        <input id="company" v-model="localUser.company" type="text" class="form-control" />
      </div>
      <div class="form-group">
        <label for="user-email">Email</label>
        <input id="user-email" v-model="localUser.email" type="text" class="form-control" />
      </div>
      <div class="form-group">
        <label for="user-address">Address</label>
        <input id="user-address" v-model="localUser.address" type="text" class="form-control" />
      </div>
      <div class="form-group">
        <label for="user-phone">Phone</label>
        <input id="user-phone" v-model="localUser.phone" type="text" class="form-control" />
      </div>
      <div class="form-group">
        <label for="user-about">About</label>
        <textarea id="user-about" v-model="localUser.about" class="form-control" />
      </div>
    </form>
    <pre>{{ localUser }}</pre>
    <pre>{{ user }}</pre>
  </div>
</template>

<script>
export default {
  name: 'UserForm',
  model: {
    prop: 'user',
    event: 'myupdate'
  },
  props: {
    user: {
      // value: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    localUser: null
  }),
  watch: {
    localUser: {
      deep: true,
      handler: 'updateUser'
    }
  },
  created() {
    this.localUser = { ...this.user }
    // document.write(this.localUser);
  },
  methods: {
    updateUser() {
      this.$emit('myupdate', { ...this.localUser })
    }
  }
}
</script>

<style scoped></style>
