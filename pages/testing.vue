<template>
  <div class="testing">
    <HeaderImage
    key="1" 
    v-bind="data1"/>
    <TextAndCta
    key="1" 
    v-bind="data2"/>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        data1:  {
          name: 'HeaderImage',
          src: 'https://i8.amplience.net/i/jpl/mens-banner-84c27b007331dd3906d9d38fffdbef39', 
          url: 'http://jdsports.com/men', 
          btnColor: '#fff', 
          btnBackground: '#111'
        },
        data2:  {
          name: 'TextAndCta',
          text: 'Hoodies',
          button: true, 
          logo: '', 
          sale: false, 
          btnColor: '#111', 
          btnBackground: '#fff'
        }
      }
    }
  }
</script>

<style lang="scss">
  .testing {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #111;
    width: 60rem;
  }
</style>