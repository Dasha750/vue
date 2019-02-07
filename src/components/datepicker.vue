<template>
  <input ref="picker" :value="value" type="text" class="form-control" />
</template>

<script>
import flatpickr from 'flatpickr'
import 'flatpickr/dist/flatpickr.css'

export default {
  name: 'Datepicker',
  props: {
    value: {
      type: String,
      required: true
    }
  },
  data: () => ({
    initDate: null
  }),
  watch: {
    value: 'updateDatepicker'
  },
  mounted() {
    this.initDatepicker()
  },
  beforeDestroy() {
    this.initDate.destroy()
  },
  methods: {
    initDatepicker() {
      this.initDate = flatpickr(this.$refs.picker, {
        dateFormat: 'd.m.Y',
        onChange: (_, dateStr) => {
          this.$emit('input', dateStr)
        }
      })
    }
  },
  updateDatepicker() {
    if (this.initDate) {
      this.initDate.setDate(this.value)
    }
  }
}
</script>

<style scoped></style>
