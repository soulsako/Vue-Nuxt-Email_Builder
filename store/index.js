// import menComponents from '@/components'

export const state = () => ({
  fascias: [], 
  categories: [],
  templates: [], 
  templateInfo: {
    // Persist this bit of information in local storage
    fascia: '', 
    category: '',
    type: ''
  }, 
  componentsData: []
});

export const getters = {

  getFascias: state => state.fascias, 
  getCategories: state => state.categories, 
  getTemplates: state => state.templates,
  getTemplateInfo: state => state.templateInfo, 
  getComponentsData: state => state.componentsData
}

export const mutations = {

  setCategories: (state, categories) => state.categories = categories,

  setFascias: (state, fascias) => state.fascias = fascias,

  setTemplates: (state, templates) => state.templates = templates,

  setComponentsData: (state, data) => state.componentsData = data,

  setSelected: (state, data) => {
    let type, typeString;
    if(data.type === 'fascia'){
      [type, typeString ] = [[...state.fascias], 'fascias'];
      state.templateInfo.fascia = data.type;
    }else if(data.type === 'category'){
      [type, typeString] = [[...state.categories], 'categories'];
      state.templateInfo.category = data.type;
    }else {
      return state.templateInfo.type = data;
    }
    const index = type.findIndex(curr => curr._id === data.id)
    type[index].isSelected = type[index].isSelected ? false : true;
    state[typeString] = type;
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

