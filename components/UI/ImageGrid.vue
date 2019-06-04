<template>
  <v-layout pa-3>
    <v-flex xs12 sm12>
      <v-card flat>
        <v-container grid-list-md fluid>
          <v-layout row wrap>
            <v-flex
              v-for="(image, index) in images"
              :key="index"
              xs4
              d-flex
              @click="$emit('onImageClick', image.src)"
            >
              <v-card flat tile class="d-flex">
                <v-img
                  :src="image.src"
                  :lazy-src="image.src"
                  aspect-ratio="1"
                  class="grey lighten-2"
                >
                </v-img>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    props: {
      images: {
        required: true, 
        type: Array
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>