<template>
  <div class="headerimage" :style="{backgroundImage: 'url('+ src +')'}">
    <AppButton
    :color="color"
    :background="background"
    class="app__button"
    >shop now</AppButton>
  </div>
</template>

<script>
  export default {
    name: 'HeaderImage', 
    props: {
      src: {
        required: true, 
        type: String
      }, 
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
  .headerimage {
    width: 60rem;
    height: 60rem;
    position: relative;
  }
  .app__button {
    position: absolute;
    top: 90%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>
