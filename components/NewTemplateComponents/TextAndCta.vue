<template>
  <div class="textcta">
    <img :src="logo" v-if="logo" alt="some logo" class="textcta__img">
    <h1 :style="{color: saleColor}" class="display-3 font-weight-bold">{{ text }}</h1>
    <BaseButton
    :color="saleColor"
    background="#fff"
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
      }
    },
    computed: {
      saleColor(){
      return this.sale ? 'red' : '#111'
      }
    } 
  }
</script>

<style lang="scss" scoped>
  .textcta {
    width: 100%;
    padding: 1rem;
    text-align: center;
    display: flex;
    flex-direction: column;
  }
</style>