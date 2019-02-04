<template>
  <ul>
    <li
      v-for="item in pagesObj"
      :key="item"
      type="button"
      class="btn btn-secondary pagination"
      @click="goPage"
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
  computed: {
    pagesObj() {
      let pages = []
      for (let i = 1; i <= this.pageCount; i++) {
        pages.push(i)
      }
      return pages
    }
  },
  methods: {
    goPage() {
      let currentPage = event.target.outerText
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
