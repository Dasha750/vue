<template>
  <div ref="imagezone">
    <p>
      <img class="img-thumbnail" :src="picture" />
    </p>
    <div class="row">
      <div class="col-md-2">
        <input ref="image" type="file" class="hidden" @change="upload" />
        <button class="btn btn-primary btn-block" @click="selectNewImage">Выбрать новую</button>
      </div>
      <div class="col-md-10">
        <input v-model="picture" type="text" class="form-control" readonly />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
// import Dropzone from 'dropzone'
// import 'dropzone/dist/dropzone.css'

export default {
  name: 'AvatarUploader',
  model: {
    prop: 'picture'
  },
  props: {
    picture: {
      type: String,
      required: true
    }
  },
  methods: {
    selectNewImage() {
      this.$refs.image.click()
    },
    setNewAvatar(picture) {
      this.$emit('input', picture)
    },
    upload() {
      const url = 'https://api.imgur.com/3/image'
      const data = new FormData()
      data.append('image', this.$refs.image.files[0])
      // Добавляем ключ от IMGUR
      // https://api.imgur.com/oauth2/addclient
      const config = {
        headers: {
          Authorization: 'Client-ID 3bef0b8892d4b04'
        }
      }
      axios
        .post(url, data, config)
        .then(response => response.data)
        .then(response => {
          this.setNewAvatar(response.data.link)
          this.$refs.image.value = ''
        })
    }
  }
}
</script>

<style scoped></style>
