function initialState() {
    return {
      entry: {
        current_password: '',
        new_password: '',
        confirm_password: ''
      },
      loading: false
    }
  }
  
  const route = 'change-password'
  
  const getters = {
    entry: state => state.entry,
    loading: state => state.loading
  }
  
  const actions = {
    submitPassword({ commit, state, dispatch }) {
      commit('setLoading', true)
      dispatch('Alert/resetState', null, { root: true })
  
      return new Promise((resolve, reject) => {
        let params = objectToFormData(state.entry, {
          indices: true,
          booleansAsIntegers: true
        })
        axios
          .post(route, params)
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            let message = error.response.data.message || error.message
            let errors = error.response.data.errors
  
            dispatch(
              'Alert/setAlert',
              { message: message, errors: errors, color: 'danger' },
              { root: true }
            )
  
            reject(error)
          })
          .finally(() => {
            commit('setLoading', false)
          })
      })
    },
    setCurrentPassword({ commit }, value) {
      commit('setCurrentPassword', value)
    },
    setNewPassowrd({ commit }, value) {
      commit('setNewPassowrd', value)
    },
    setCofirmPassowrd({ commit }, value) {
      commit('setCofirmPassowrd', value)
    },
    resetState({ commit }) {
      commit('resetState')
    }
  }
  
  const mutations = {
    setEntry(state, entry) {
      state.entry = entry
    },
    setCurrentPassword(state, value) {
      state.entry.current_password = value
    },
    setNewPassowrd(state, value) {
      state.entry.new_password = value
    },
    setCofirmPassowrd(state, value) {
      state.entry.confirm_password = value
    },
    setLoading(state, loading) {
      state.loading = loading
    },
    resetState(state) {
      state = Object.assign(state, initialState())
    }
  }
  
  export default {
    namespaced: true,
    state: initialState,
    getters,
    actions,
    mutations
  }
  