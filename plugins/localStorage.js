import createPersistedState from 'vuex-persistedstate'
 
export default ({store}) => {
  createPersistedState({
      key: 'vuex', 
      reducer: state => ({
        templates: state.templates, 
        templateInfo: state.templateInfo
      })
  })(store)
}