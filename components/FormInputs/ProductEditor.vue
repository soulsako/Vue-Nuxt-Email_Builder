<template>
  <v-tabs
    centered
    color="blue-grey darken-4"
    dark
    icons-and-text>
    <v-tabs-slider color="success"></v-tabs-slider>
    
    <v-tab  v-if="double" href="#tab-1">
      Details
      <v-icon>details</v-icon>
    </v-tab>

    <v-tab href="#tab-2">
      <slot/>
      <v-icon>invert_colors</v-icon>
    </v-tab>

    <v-tab-item
      value="tab-1"
    >
      <v-card flat>
        <ProductDetails :twoColumn="twoColumn"/>
      </v-card>
    </v-tab-item>

    <v-tab-item
      value="tab-2"
    >
      <v-card flat>
        <ProductStyles />
      </v-card>
    </v-tab-item>
  </v-tabs>
</template>

<script>
  export default {
    props: {
      double: {
        required: false, 
        default: () => false, 
        type: Boolean
      }, 
      twoColumn: {
        required: false, 
        default: () => false, 
        type: Boolean
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>