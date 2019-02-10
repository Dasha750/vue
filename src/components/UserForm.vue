<template>
  <div>
    <form>
      <div class="form-group">
        <label for="user-name">User name</label>
        <input
          id="user-name"
          v-model="localUser.firstName"
          v-validate="{ required: true }"
          type="text"
          class="form-control"
          :class="{ 'is-invalid': errors.has('firstName') }"
          name="firstName"
        />
        <span v-show="errors.has('firstName')" class="help-block text-danger">
          {{ errors.first('firstName') }}
        </span>
      </div>
      <div class="form-group">
        <label for="user-name">User avatar</label>
        <input id="user-avatar" v-model="localUser.picture" type="text" class="form-control" />
        <avatar-uploader v-model="localUser.picture" />
      </div>
      <div class="form-group">
        <label for="user-name">User lastname</label>
        <input id="user-lastname" v-model="localUser.lastName" type="text" class="form-control" />
      </div>
      <birthdaypicker v-model="localUser.birthday"></birthdaypicker>
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
      <editor v-model="localUser.about"></editor>
      <datepicker v-model="localUser.registered"></datepicker>
    </form>
    <pre>{{ localUser }}</pre>
    <pre>{{ user }}</pre>
  </div>
</template>

<script>
export default {
  name: 'UserForm',
  components: {
    Datepicker: () => import('@/components/datepicker.vue'),
    AvatarUploader: () => import('@/components/avatar.vue'),
    Birthdaypicker: () => import('@/components/birthdaypicker.vue'),
    Editor: () => import('@/components/vueEditor.vue')
  },
  inject: ['$validator'],
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
