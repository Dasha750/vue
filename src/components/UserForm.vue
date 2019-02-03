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
        <label for="user-name">Company</label>
        <input id="company" v-model="localUser.company" type="text" class="form-control" />
      </div>
      <div class="form-group">
        <label for="user-name">Email</label>
        <input id="email" v-model="localUser.email" type="text" class="form-control" />
      </div>
      <div class="form-group">
        <label for="user-name">Phone</label>
        <input id="phone" v-model="localUser.phone" type="text" class="form-control" />
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
