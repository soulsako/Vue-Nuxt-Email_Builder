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
      }
    }
  }
</script>

<style lang="scss" scoped>
  .button {
    width: 27rem;
    display: inline-block;
    padding: 1.8rem;
    font-size: $font-size-1;
    text-transform: uppercase;
    text-align: center;
    font-weight: bold;
  }
</style>