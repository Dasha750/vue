<template>
  <div class="form-group">
    <label for="user-birthday">User birthday</label>
    <div class="input-group ">
      <div class="input-group-prepend">
        <button
          id="button-addon1"
          class="btn btn-outline-secondary"
          type="button"
          @click="chooseBirthdayDate"
        >
          Choose date
        </button>
      </div>
      <input
        id="user-birthday"
        ref="birthdaypicker"
        :value="value"
        type="text"
        class="form-control"
      />
    </div>
  </div>
</template>

<script>
import flatpickr from 'flatpickr'
import 'flatpickr/dist/flatpickr.css'

export default {
  name: 'Birthdaypicker',
  props: {
    value: {
      type: String,
      required: true
    }
  },
  data: () => ({
    initBirthday: null
  }),
  watch: {
    value: 'updateBirthdaypicker'
  },
  mounted() {
    this.initBirthdaypicker()
  },
  beforeDestroy() {
    this.initBirthday.destroy()
  },
  methods: {
    initBirthdaypicker() {
      this.initBirthday = flatpickr(this.$refs.birthdaypicker, {
        dateFormat: 'd.m.Y',
        onChange: (_, dateStr) => {
          this.$emit('input', dateStr)
        }
      })
    },
    chooseBirthdayDate() {
      this.$refs.birthdaypicker.select()
    }
  },
  updateBirthdaypicker() {
    if (this.initBirthday) {
      this.initBirthday.setDate(this.value)
    }
  }
}
</script>

<style scoped></style>
