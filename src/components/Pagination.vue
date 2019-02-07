<template>
  <ul>
    <li
      v-for="item in pageCount"
      :key="item"
      type="button"
      class="btn btn-secondary pagination"
      @click="goPage(item)"
    >
      {{ item }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Pagination',
  model: {
    prop: 'currentPage',
    event: 'selectPage'
  },
  props: {
    pageCount: {
      type: Number,
      required: true
    }
  },
  methods: {
    goPage(currentPage) {
      this.$emit('selectPage', currentPage)
    }
  }
}
</script>

<style scoped>
.pagination {
  display: inline;
  margin-right: 5px;
  padding: 10px;
}
</style>
