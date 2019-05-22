const componentsArray = [
  {
    name: 'Text',
    text: 'Accessories', 
    sale: false
  },
  {
    name: 'TextCta',
    text: 'Accessories',
    button: true, 
    sale: false, 
    btnColor: '#111', 
    btnBackground: '#fff'
  },
  {
    name: 'TextLogoCta',
    text: 'Accessories',
    button: true, 
    logo: '', 
    sale: false, 
    btnColor: '#111', 
    btnBackground: '#fff'
  },
  {
    name: 'PostCardStyle',
    sale: true,
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
  {
    name: 'TwoColumnFootwear',
    sale: true,
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
  {
    name: 'FullApparel',
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
  {
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
    buttonText: 'Shop hoodies',
    buttonTextTwo: 'Shop Shorts', 
    button: false
  },
  {
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
  {
    name: 'HeaderImage',
    src: 'https://i8.amplience.net/i/jpl/mens-banner-84c27b007331dd3906d9d38fffdbef39', 
    url: 'http://jdsports.com/men', 
    btnColor: '', 
    btnBackground: '', 
    sale: true
  },
  {
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
 
