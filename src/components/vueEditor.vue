<template>
  <div class="form-group">
    <label for="user-about">About</label>
    <vue-editor id="user-about" v-model="initEditor"></vue-editor>
  </div>
</template>

<script>
import { VueEditor } from 'vue2-editor'
export default {
  name: 'Editor',
  components: {
    VueEditor
  },
  props: {
    value: {
      type: String,
      required: true
    }
  },
  data: () => ({
    initEditor: ''
  }),
  watch: {
    initEditor() {
      this.$emit('input', this.initEditor)
    }
  },
  mounted() {
    this.initEditor = this.value
  }
}
</script>
