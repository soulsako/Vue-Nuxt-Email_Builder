<template>
  <div class="textandcta">
    <img :src="logo" v-if="logo" alt="some logo" class="textandcta__img">
    <h1 :style="{color: saleColor}" class="display-3 font-weight-bold">{{ text }}</h1>
    <BaseButton
    :color="saleColor"
    :background="btnBackground"
    v-if="button">Shop now</BaseButton>
  </div>
</template>

<script>
  export default {
    props: {
      text: {
        type: String
      }, 
      button: {
        type: Boolean
      }, 
      logo: {
        type: String, 
        default: () => ''
      }, 
      sale: {
        type: Boolean
      }, 
      btnColor: {
        required: false, 
        type: String
      }, 
      btnBackground: {
        required: false, 
        type: String
      }
    },
    computed: {
      saleColor(){
      return this.sale ? 'red' : this.btnColor
      }
    } 
  }
</script>

<style lang="scss" scoped>
  .textandcta {
    width: 100%;
    padding: 1rem;
    text-align: center;
    justify-content: space-between;
    display: flex;
    flex-direction: column;
  }
</style>