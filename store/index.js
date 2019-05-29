export const state = () => ({
  fascias: [], 
  categories: [],
  templates: [], 
  templateInfo: {
    // Persist this bit of information in local storage
    fascia: '', 
    category: '',
    type: {
      id: '',
      name: ''
    }
  }, 
  componentsData: [], 
  currentComponent: {
    name: '', 
    index: null
  },
});

export const getters = {

  getFascias: state => state.fascias, 
  getCategories: state => state.categories, 
  getTemplates: state => state.templates,
  getTemplateInfo: state => state.templateInfo, 
  getComponentsData: state => state.componentsData,
  getCurrentComponent: state => state.currentComponent
}

export const mutations = {

  setCategories: (state, categories) => state.categories = categories,

  setFascias: (state, fascias) => state.fascias = fascias,

  setTemplates: (state, templates) => state.templates = templates,
  
  setComponentsData: (state, data) => state.componentsData = data,

  setSelected: (state, data) => {
    const isState = state.templateInfo
    if(data.type === 'fascia'){
      return isState.fascia = data.id;
    }else if(data.type === 'category'){
      return isState.category = data.mapTemplates;
    }else {
      isState.type.id = data.id;
      isState.type.name = data.name;
      return;
    }
  }, 

  setButtonStyles: (state, styles) => {
    if(styles.allButtons === 'all' && styles.styleProp === 'text'){
      state.componentsData.forEach(curr => {
        curr.button ? curr.btnColor = styles.color : null
      })
    }else if(styles.allButtons === 'all' && styles.styleProp === 'background'){
      state.componentsData.forEach(curr => {
        curr.button ? curr.btnBackground = styles.color : null
      })
    }else if(styles.styleProp === 'price'){
      state.componentsData.forEach(curr => {
        curr.hasPrice ? curr.priceColor = styles.color : null
      })
    }
  }, 

  setCurrentComponent: (state, compData) => {
    //Add details of current component
    state.currentComponent.name = compData.name;
    state.currentComponent.index = compData.index;
  }, 
  setBorder: (state, index) => {
    // Add border for selected component
    state.componentsData.forEach(curr => curr.isSelected = false);
    state.componentsData[index].isSelected = true;
    console.log(state.componentsData);
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


