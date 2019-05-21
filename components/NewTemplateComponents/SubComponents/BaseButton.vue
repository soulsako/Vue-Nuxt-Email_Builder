<template>
  <div
  :style="{backgroundColor: background, color: color, border: '1px solid ' + color, width: width}"
  class="button">
  <slot/>
  </div>
</template>

<script>
  export default {
    props: {
      color: {
        required: false,
        type: String
      }, 
      background: {
        required: false,
        type: String
      }, 
      fullWidth: {
        required: false, 
        type: Boolean
      }
    }, 
    computed: {
      width(){
        return this.fullWidth ? '100%' : 'auto'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .button {
    display: inline-block;
    padding: 1rem;
    width: 5rem;
    text-transform: uppercase;
    text-align: center;
  }
</style>