export const state = () => ({
  fascias: [], 
  categories: [], 
  fasciaId: ''
})
export const getters = {
  getFascias: state => state.fascias, 
  getCategories: state => state.categories, 
  getFasciaId: state => state.fasciaId
}
export const mutations = {
  setCategories: (state, categories) => state.categories = categories,
  setFascias: (state, fascias) => state.fascias = fascias,
  setSelected: (state, data) => {
    let type, typeString;
    if(data.type === 'fascia'){
      [type, typeString ] = [[...state.fascias], 'fascias'];
      state.fasciaId = data.id;
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
    //Use the code below to fetch all templates for admin view 
    // await context.$axios.$get('/api/templates/all')
    // .then(templates => {
    //   vuexContext.commit('setTemplates', templates)
    // })
  }
}

