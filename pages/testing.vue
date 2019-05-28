<template>
  <div class="testing">
    <HeaderImage
    key="1" 
    v-bind="data1"/>
    
    <TextAndCta
    key="2" 
    v-bind="data2"/>
    
    <SingleFootwear
    key="3" 
    v-bind="data3"/>
    
    <SingleApparel
    key="4" 
    v-bind="data4"/>
    
    
    <TwoColumn
    key="5" 
    v-bind="data5"/>
    
    
    <TwoColumn
    key="6" 
    v-bind="data6"/>
    
    
    <TwoColumn
    key="7" 
    v-bind="data7"/>
    
    
    <TwoColumn
    key="8" 
    v-bind="data8"/>
    
     
    <TextAndCta
    key="9" 
    v-bind="data9"/>
    
     
    <TextAndCta
    key="10" 
    v-bind="data10"/>
    
     
    <TextAndCta
    key="11" 
    v-bind="data11"/>

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
          btnColor: '', 
          btnBackground: '', 
          sale: false
        },
        data2:  {
          name: 'TextAndCta',
          text: "men's",
          sale: false, 
        }, 
        data3: {
          name: 'SingleFootwear',
          sale: true, 
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
          women: true,
          invert: false,
          exclusive: true,
          src: 'https://i8.amplience.net/i/jpl/men-rightplu-e87a66499d2a4a7e462d289b7a734d68', 
          brand: 'Brand',
          url: 'http://jdsports.com/men',
          descriptionOne: 'Some Product Description', 
          descriptionTwo: 'Some second Description',
          oldPrice: '49.99', 
          oldPriceTwo: '29.99',
          price: '35.99',
          priceTwo: '15.99',
          color: '', 
          backgroundColor: 'yellowgreen'
        }, 
        data5: {
          name: 'TwoColumnApparel',
          sale: true,
          height: '34.5',
          women: false,
          exclusive: true,
          brand: 'Brand', 
          description: 'Some product description', 
          price: '19.99', 
          oldPrice: '39.99', 
          src: 'https://i8.amplience.net/t/jpl/jd_product_list?plu=jd_140351_a&qlt=80&wid=270&hei=345',
          brandTwo: 'Brand Two', 
          descriptionTwo: 'Some product description', 
          priceTwo: '19.99', 
          oldPriceTwo: '39.99',
          srcTwo: 'https://i8.amplience.net/t/jpl/jd_product_list?plu=jd_140351_a&qlt=80&wid=270&hei=345',          
        }, 
        data6: {
          name: 'TwoColumnFootwear',
          sale: false,
          height: '19',
          women: true,
          exclusive: true,
          brand: 'Brand', 
          description: 'Some product description', 
          price: '19.99', 
          oldPrice: '39.99', 
          src: 'https://i8.amplience.net/t/jpl/jd_product_list?plu=jd_140351_a&qlt=80&wid=270&hei=345',
          brandTwo: 'Brand Two', 
          descriptionTwo: 'Some product description', 
          priceTwo: '19.99', 
          oldPriceTwo: '39.99',
          srcTwo: 'https://i8.amplience.net/t/jpl/jd_product_list?plu=jd_140351_a&qlt=80&wid=270&hei=345', 
        }, 
        data7: {
          name: 'TwoColumnFullApparel',
          full: true,
          sale: false,
          height: '53',
          women: true,
          exclusive: true,
          brand: 'Brand', 
          description: 'Some product description', 
          price: '19.99', 
          oldPrice: '39.99', 
          src: 'https://i8.amplience.net/t/jpl/jd_product_list?plu=jd_140351_a&qlt=80&wid=270&hei=345',
          brandTwo: 'Brand Two', 
          descriptionTwo: 'Some second product description', 
          priceTwo: '19.99', 
          oldPriceTwo: '39.99',
          srcTwo: 'https://i8.amplience.net/t/jpl/jd_product_list?plu=jd_140351_a&qlt=80&wid=270&hei=345',
          descriptionThree: 'Some third product description', 
          descriptionFour: 'Some fourth product description', 
          priceThree: '19.99', 
          priceFour: '13.99', 
          oldPriceThree: '59.99', 
          oldPriceFour: '89.99'
        }, 
        data8: {
          name: 'PostCardStyle',
          sale: false,
          height: '34.5',
          women: true,
          exclusive: true,
          brand: 'Brand', 
          description: 'Some product description', 
          price: '19.99', 
          oldPrice: '39.99', 
          src: 'https://i8.amplience.net/t/jpl/jd_product_list?plu=jd_140351_a&qlt=80&wid=270&hei=345',
          brandTwo: 'Brand Two', 
          descriptionTwo: 'Some product description', 
          priceTwo: '19.99', 
          oldPriceTwo: '39.99',
          srcTwo: 'https://i8.amplience.net/t/jpl/jd_product_list?plu=jd_140351_a&qlt=80&wid=270&hei=345',
          buttonText: 'Shop hoodies',
          buttonTextTwo: 'Shop Shorts', 
          button: true 
        }, 
        data9: {
          name: 'Text',
          text: "men's", 
          sale: false
        },
        data10:{
          name: 'TextCta',
          text: "men's",
          button: true, 
          sale: false, 
          btnColor: '#111', 
          btnBackground: '#fff'
        },
        data11:{
          name: 'TextLogoCta',
          text: "men's",
          button: true, 
          logo: 'https://i8.amplience.net/t/jpl/jd_product_list?plu=jd_140351_a&qlt=80&wid=270&hei=345', 
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
    align-items: center;
    flex-direction: column;
    border: 1px solid #111;
    width: 60rem;
  }
</style>