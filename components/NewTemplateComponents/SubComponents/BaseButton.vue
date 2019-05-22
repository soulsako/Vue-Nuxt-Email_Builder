<template>
  <div
  :style="{backgroundColor: background, color: color, border: '1px solid ' + color}"
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
    }
  }
</script>

<style lang="scss" scoped>
  .button {
    width: 27rem;
    display: inline-block;
    padding: 1.5rem 0;
    text-transform: uppercase;
    text-align: center;
  }
</style>