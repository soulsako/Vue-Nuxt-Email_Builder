export const state = () => ({
  fascias: [], 
  categories: []
})
export const getters = {

  getFascias: state => state.fascias, 
  getCategories: state => state.categories
}
export const mutations = {
  setCategories: (state, categories) => state.categories = categories,
  setFascias: (state, fascias) => state.fascias = fascias,
  setSelected: (state, data) => {
    let type;
    let typeString;
    if(data.type === 'fascia'){
      type = [...state.fascias];
      typeString = 'fascias'
    }else {
      type = [...state.categories];
      typeString = 'categories'
    }
    const index = type.findIndex(curr => curr._id === data.id)
    type[index].isSelected = type[index].isSelected ? false : true;
    state[typeString] = type
  }
}

export const actions = {
  async nuxtServerInit(vuexContext, context){
    await context.$axios.$get('/api/categories/all')
    .then(response => {
      vuexContext.commit('setCategories', response)
    })
    await context.$axios.$get('/api/fascias/all')
    .then(data => {
      vuexContext.commit('setFascias', data)
    })
  }
}

