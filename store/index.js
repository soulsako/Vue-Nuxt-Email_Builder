export const state = () => ({
  fascias: [], 
  categories: [],
  templates: [], 
  templateInfo: {
    // Persist this bit of information in local storage
    fascia: {
      id: '', 
      name: ''
    }, 
    category: '',
    type: {
      id: '',
      name: ''
    }
  }, 
  componentsData: [], 
  currComp: {},
  currCompImages: []
});

export const getters = {

  getFascias: state => state.fascias, 
  getCategories: state => state.categories, 
  getTemplates: state => state.templates,
  getTemplateInfo: state => state.templateInfo, 
  getComponentsData: state => state.componentsData,
  getCurrComp: state => state.currComp, 
  getFascia: state => state.templateInfo.fascia,
  getCurrCompImages: state => state.currCompImages

}

export const mutations = {

  setCategories: (state, categories) => state.categories = categories,

  setFascias: (state, fascias) => state.fascias = fascias,

  setTemplates: (state, templates) => state.templates = templates,
  
  setComponentsData: (state, data) => state.componentsData = data,

  setSelected: (state, data) => {
    const isState = state.templateInfo
    if(data.type === 'fascia'){
      isState.fascia.id = data.id;
      isState.fascia.name = data.name;
      return;
    }else if(data.type === 'category'){
      return isState.category = data.mapTemplates;
    }else {
      isState.type.id = data.id;
      isState.type.name = data.name;
      return;
    }
  }, 

  setStyles: (state, styles) => {

    if(styles.singleApparel){
      const newCurrComp = { ...state.currComp }
      if(styles.styleProp === 'text'){
        newCurrComp.color = styles.color;
      }else if(styles.styleProp === 'background'){
        newCurrComp.backgroundColor = styles.color;
      }else if(styles.styleProp === 'price'){
        newCurrComp.priceColor = styles.color;
      }
      state.currComp = newCurrComp;
    }else {
      const newCompData = [ ...state.componentsData ];
      if(styles.styleProp === 'text'){
        newCompData.forEach(curr => {
          curr.button ? curr.btnColor = styles.color : null
        })
      }else if(styles.styleProp === 'background'){
        newCompData.forEach(curr => {
          curr.button ? curr.btnBackground = styles.color : null
        })
      }else if(styles.styleProp === 'price'){
        newCompData.forEach(curr => {
          curr.hasPrice ? curr.priceColor = styles.color : null
        })
      }
      state.componentsData = newCompData;
    }
  }, 
  //Add details of current component
  setCurrComp: (state, compData) => state.currComp = compData,

  setNewCurrComp: state => {

    const index = state.currComp.index;
    const newCompData = [ ...state.componentsData ]
    newCompData[index] = { ...state.currComp }
    state.componentsData = newCompData
  }, 

  setProductOne: (state, proOne) => {

    const productInfo = proOne[0]; // {brand: '', category, plu, exclusive: '', price, title, url}
    const productImages = proOne[1];//  [{format, height, opaque, src, type, width}, {}]

    const newCurrComp = { ...state.currComp };
    const returnedNewCurrComp = Object.assign(newCurrComp, productInfo);
    state.currComp = returnedNewCurrComp;
    state.currCompImages = productImages;
  },

  setProductTwo: (state, proTwo) => {
    console.log(proTwo);
  },

  setInvert: (state, isInvert) => {
    const newCurrComp = { ...state.currComp }
    isInvert !== null ? newCurrComp.invert = true : newCurrComp.invert = false
    state.currComp = newCurrComp 
  },

  setSplit: (state, isSplit) => {
    const newCurrComp = { ...state.currComp }
    isSplit !== null ? newCurrComp.multipleSplit = true : newCurrComp.multipleSplit = false
    state.currComp = newCurrComp 
  }, 
  setNewImage: (state, src) => {
    const newCurrComp = { ...state.currComp };
    newCurrComp.src = src;
    state.currComp = newCurrComp;
  }
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


