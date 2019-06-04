<template>
  <div>
    <v-alert
      :value="value"
      :type="type"
      :outline="outline"
      :dismissible="dismissible"
    >
    <slot/>
    </v-alert>
  </div>
</template>

<script>
  
  export default {
    name: 'AlertMessage',
    props: {
      value: {
        required: true, 
        type: Boolean, 
        default: () => false
      }, 
      type: {
        required: true, 
        type: String
      },  
      outline: {
        required: false, 
        type: Boolean, 
        default: () => false
      }, 
      dismissible: {
        required: false, 
        type: Boolean, 
        default: () => false
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>