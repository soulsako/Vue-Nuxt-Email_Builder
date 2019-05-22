<template>
  <div class="testing">
    <HeaderImage
    key="1" 
    v-bind="data1"/>
    <div style="border-bottom: 1px solid #111">
    <TextAndCta
    key="1" 
    v-bind="data2"/>
    </div>
    <SingleFootwear
    key="1" 
    v-bind="data3"/>
    <div style="border-bottom: 1px solid #111">
    <SingleApparel
    key="1" 
    v-bind="data4"/>
    </div>
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
          text: 'Accessories',
          button: true, 
          logo: '', 
          sale: false, 
          btnColor: '#111', 
          btnBackground: '#fff'
        }, 
        data3: {
          name: 'SingleFootwear',
          sale: false, 
          women: false,
          exclusive: true,
          src: 'https://i8.amplience.net/t/jpl/jd_product_list?plu=jd_282663_a&qlt=80&w=560&h=400&v=1', 
          brand: 'Addidas Originals',
          url: 'http://jdsports.com/men',
          description: 'Superstar junior',
          oldPrice: '49.99', 
          price: '35.99'
        }, 
        data4: {
          name: 'SingleApparel',
          multiple: false,
          multipleSplit: true, 
          sale: false, 
          women: false,
          invert: false,
          exclusive: true,
          src: 'https://i8.amplience.net/i/jpl/men-rightplu-e87a66499d2a4a7e462d289b7a734d68', 
          brand: 'Brand',
          url: 'http://jdsports.com/men',
          descriptionOne: 'Some Product Description Some Product Description', 
          descriptionTwo: 'Some second Description',
          oldPrice: '49.99', 
          oldPriceTwo: '29.99',
          price: '35.99',
          priceTwo: '15.99',
          color: '', 
          backgroundColor: ''
        }
      }
    }
  }
</script>

<style lang="scss">
  .testing {
    display: flex;
    align-items: center;
    flex-direction: column;
    border: 1px solid #111;
    width: 60rem;
  }
</style>