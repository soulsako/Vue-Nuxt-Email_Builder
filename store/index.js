// import menComponents from '@/components'

export const state = () => ({
  fascias: [], 
  categories: [], 
  components: [
            {
              name: 'TextOnly',
              text: 'Hoodies',
              button: true, 
              logo: '', 
              sale: false
            }
        //  {
        //   name: 'PostCardStyle',
        //   button: true,
        //   height: '34.5',
        //   women: true,
        //   exclusive: true, 
        //   column: {
        //     description:{
        //        src: 'https://i8.amplience.net/t/jpl/jd_product_list?plu=jd_140351_a&qlt=80&wid=270&hei=345', 
        //        buttonText: 'show hoodies'
        //     } 
        //   }, 
        //   columnTwo:{
        //     description:{
        //       src: 'https://i8.amplience.net/t/jpl/jd_product_list?plu=jd_140351_a&qlt=80&wid=270&hei=345', 
        //       buttonText: 'show jackets'
        //     }
        //   }, 

          
        // }
    // {
    //     name: 'TwoColumnFootwear',
    //     sale: false,
    //     height: '19',
    //     women: true,
    //     exclusive: true, 
    //     column: {
    //       brand: 'Brand', 
    //       description:{
    //         one: 'Some product description', 
    //         price: '19.99', 
    //         oldPrice: '39.99', 
    //         src: 'https://i8.amplience.net/t/jpl/jd_product_list?plu=jd_140351_a&qlt=80&wid=270&hei=345'
    //       } 
    //     }, 
    //     columnTwo:{
    //       brand: 'Brand Two', 
    //       description:{
    //         one: 'Some product description', 
    //         price: '19.99', 
    //         oldPrice: '39.99',
    //         src: 'https://i8.amplience.net/t/jpl/jd_product_list?plu=jd_140351_a&qlt=80&wid=270&hei=345'
    //       }
    //     }
    //   }
    // {
    //   name: 'FullApparel',
    //   full: true,
    //   sale: false,
    //   height: '53',
    //   women: true,
    //   exclusive: true, 
    //   column: {
    //     brand: 'Brand', 
    //     description:{
    //       one: 'Some product description', 
    //       two: 'Some product description two', 
    //       price: '19.99', 
    //       oldPrice: '39.99',
    //       priceTwo: '19.99', 
    //       oldPriceTwo: '39.99', 
    //       src: 'https://i8.amplience.net/t/jpl/jd_product_list?plu=jd_140351_a&qlt=80&wid=270&hei=345'
    //     } 
    //   }, 
    //   columnTwo:{
    //     brand: 'Brand Two', 
    //     description:{
    //       one: 'Some product description', 
    //       two: 'Some product description two', 
    //       price: '19.99', 
    //       oldPrice: '39.99',
    //       priceTwo: '19.99', 
    //       oldPriceTwo: '39.99', 
    //       src: 'https://i8.amplience.net/t/jpl/jd_product_list?plu=jd_140351_a&qlt=80&wid=270&hei=345'
    //     }
    //   }
    // }
    // {
    //   name: 'TwoColumnApparel',
    //   sale: true,
    //   height: '34.5',
    //   women: true,
    //   exclusive: true, 
    //   column: {
    //     brand: 'Brand', 
    //     description:{
    //       one: 'Some product description', 
    //       price: '19.99', 
    //       oldPrice: '39.99', 
    //       src: 'https://i8.amplience.net/t/jpl/jd_product_list?plu=jd_140351_a&qlt=80&wid=270&hei=345'
    //     } 
    //   }, 
    //   columnTwo:{
    //     brand: 'Brand Two', 
    //     description:{
    //       one: 'Some product description', 
    //       price: '19.99', 
    //       oldPrice: '39.99',
    //       src: 'https://i8.amplience.net/t/jpl/jd_product_list?plu=jd_140351_a&qlt=80&wid=270&hei=345'
    //     }
    //   }
    // }

      // {
      //   name: 'SingleFootwear',
      //   sale: false, 
      //   women: false,
      //   exclusive: false,
      //   src: 'https://i8.amplience.net/t/jpl/jd_product_list?plu=jd_282663_a&qlt=80&w=560&h=400&v=1', 
      //   brand: 'Brand',
      //   url: 'http://jdsports.com/men',
      //   description: 'Some product description',
      //   oldPrice: '49.99', 
      //   price: '35.99'
      // }
    // {
    //   name: 'HeaderImage',
    //   src: 'https://i8.amplience.net/i/jpl/mens-banner-84c27b007331dd3906d9d38fffdbef39', 
    //   url: 'http://jdsports.com/men', 
    //   color: '#111', 
    //   background: '#fff'
    // },
    // {
    //   name: 'SingleApparel',
    //   multiple: true, 
    //   sale: false, 
    //   women: true,
    //   invert: false,
    //   exclusive: true,
    //   src: 'https://i8.amplience.net/i/jpl/men-rightplu-e87a66499d2a4a7e462d289b7a734d68', 
    //   brand: 'Brand',
    //   url: 'http://jdsports.com/men',
    //   description:{
    //     one: 'Some Product Description Some Product Description', 
    //     two: 'Some second Description',
    //     oldPrice: '49.99', 
    //     oldPriceTwo: '29.99',
    //     price: '35.99',
    //     priceTwo: '15.99',
    //   }, 
    //   user: {
    //       backColor: '', 
    //       textColor: ''
    //     }
    //   }
  ]
})
export const getters = {
  getFascias: state => state.fascias, 
  getCategories: state => state.categories, 
  getFasciaId: state => state.fasciaId,
  getComponents: state => state.components,
}

export const mutations = {
  setCategories: (state, categories) => state.categories = categories,
  setFascias: (state, fascias) => state.fascias = fascias,
  setSelected: (state, data) => {
    let type, typeString;
    if(data.type === 'fascia'){
      [type, typeString ] = [[...state.fascias], 'fascias'];
    }else {
      [type, typeString] = [[...state.categories], 'categories'];
    }
    const index = type.findIndex(curr => curr._id === data.id)
    type[index].isSelected = type[index].isSelected ? false : true;
    state[typeString] = type
  }, 
  setTemplates: (state, templates) => state.templates = templates
}

// Set Master data to store state
export const actions = {
  async nuxtServerInit(vuexContext, context){
    await context.$axios.$get('/api/categories/all')
    .then(categories => {
      vuexContext.commit('setCategories', categories)
    })
    await context.$axios.$get('/api/fascias/all')
    .then(fascias => {
      vuexContext.commit('setFascias', fascias)
    })
  }
}

