const componentsArray = [
   {
    name: 'TextAndCta',
    text: 'Hoodies',
    button: true, 
    logo: '', 
    sale: false
  },
  {
    name: 'PostCardStyle',
    button: true,
    height: '34.5',
    sale: false, 
    women: true,
    exclusive: true, 
    column: {
      description:{
        src: 'https://i8.amplience.net/t/jpl/jd_product_list?plu=jd_140351_a&qlt=80&wid=270&hei=345', 
        buttonText: 'show hoodies'
      } 
    }, 
    columnTwo:{
      description:{
        src: 'https://i8.amplience.net/t/jpl/jd_product_list?plu=jd_140351_a&qlt=80&wid=270&hei=345', 
        buttonText: 'show jackets'
      }
    }, 
  },
  {
    name: 'TwoColumnFootwear',
    sale: false,
    height: '19',
    women: true,
    exclusive: true, 
    column: {
      brand: 'Brand', 
      description:{
        one: 'Some product description', 
        price: '19.99', 
        oldPrice: '39.99', 
        src: 'https://i8.amplience.net/t/jpl/jd_product_list?plu=jd_140351_a&qlt=80&wid=270&hei=345'
      } 
    }, 
    columnTwo:{
      brand: 'Brand Two', 
      description:{
        one: 'Some product description', 
        price: '19.99', 
        oldPrice: '39.99',
        src: 'https://i8.amplience.net/t/jpl/jd_product_list?plu=jd_140351_a&qlt=80&wid=270&hei=345'
      }
    }
  },
  {
  name: 'FullApparel',
  full: true,
  sale: false,
  height: '53',
  women: true,
  exclusive: true, 
  column: {
    brand: 'Brand', 
    description:{
      one: 'Some product description', 
      two: 'Some product description two', 
      price: '19.99', 
      oldPrice: '39.99',
      priceTwo: '19.99', 
      oldPriceTwo: '39.99', 
      src: 'https://i8.amplience.net/t/jpl/jd_product_list?plu=jd_140351_a&qlt=80&wid=270&hei=345'
    } 
    }, 
  columnTwo:{
      brand: 'Brand Two', 
      description:{
      one: 'Some product description', 
      two: 'Some product description two', 
      price: '19.99', 
      oldPrice: '39.99',
      priceTwo: '19.99', 
      oldPriceTwo: '39.99', 
      src: 'https://i8.amplience.net/t/jpl/jd_product_list?plu=jd_140351_a&qlt=80&wid=270&hei=345'
      }
    }
  },
  {
    name: 'TwoColumnApparel',
    sale: false,
    height: '34.5',
    women: true,
    exclusive: true, 
    column: {
      brand: 'Brand', 
      description:{
        one: 'Some product description', 
        price: '19.99', 
        oldPrice: '39.99', 
        src: 'https://i8.amplience.net/t/jpl/jd_product_list?plu=jd_140351_a&qlt=80&wid=270&hei=345'
      } 
    }, 
    columnTwo:{
      brand: 'Brand Two', 
      description:{
        one: 'Some product description', 
        price: '19.99', 
        oldPrice: '39.99',
        src: 'https://i8.amplience.net/t/jpl/jd_product_list?plu=jd_140351_a&qlt=80&wid=270&hei=345'
      }
    }
  },
  {
    name: 'SingleFootwear',
    sale: false, 
    women: false,
    exclusive: false,
    src: 'https://i8.amplience.net/t/jpl/jd_product_list?plu=jd_282663_a&qlt=80&w=560&h=400&v=1', 
    brand: 'Brand',
    url: 'http://jdsports.com/men',
    description: 'Some product description',
    oldPrice: '49.99', 
    price: '35.99'
  },
  {
    name: 'HeaderImage',
    src: 'https://i8.amplience.net/i/jpl/mens-banner-84c27b007331dd3906d9d38fffdbef39', 
    url: 'http://jdsports.com/men', 
    color: '#111', 
    background: '#fff'
  },
  {
    name: 'SingleApparel',
    multiple: true, 
    sale: false, 
    women: true,
    invert: false,
    exclusive: true,
    src: 'https://i8.amplience.net/i/jpl/men-rightplu-e87a66499d2a4a7e462d289b7a734d68', 
    brand: 'Brand',
    url: 'http://jdsports.com/men',
    description:{
      one: 'Some Product Description Some Product Description', 
      two: 'Some second Description',
      oldPrice: '49.99', 
      oldPriceTwo: '29.99',
      price: '35.99',
      priceTwo: '15.99',
    }, 
    user: {
        backColor: '', 
        textColor: ''
      }
    }
  ];

  export default function(sale){
    let newComponents;
    if(sale === 'sale'){
      newComponents = componentsArray.map(component => {
        component.sale = true;
        return component;
      })
    }else {
      newComponents = componentsArray;
    }
    return newComponents;
  }
 
