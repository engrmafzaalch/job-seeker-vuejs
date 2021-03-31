import Vue from "vue";
import Vuex from "vuex";
//then you use Vuex
Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        step:1,
        tab:1,
        tabs:1,
        status: '',
        token: localStorage.getItem('token') || '',
        user: {}
    },
    mutations: {
        auth_request(state) {
            state.status = 'loading'
        },
        auth_success(state, token, user) {
            state.status = 'success'
            state.token = token
            state.user = user
        },
        auth_error(state) {
            state.status = 'error'
        },
        logout(state) {
            state.status = ''
            state.token = ''
        },
      change(state, step) {
        state.step = step
      },
      changetab(state,tab){
          state.tab = tab
      }
    },
    actions: {
        login({ commit }, user) {
            return new Promise((resolve, reject) => {
                commit('auth_request')
                // axios({ url: 'http://206.189.120.24:32002/user/signin', data: user, method: 'POST' })
                //     .then(resp => {
                //         const token = resp.data.token
                //         const user = resp.data.user
                //       alert(user)
                localStorage.setItem('token', token)
                // axios.defaults.headers.common['Authorization'] = token
                commit('auth_success', user.email, user)
                // resolve(resp)
                // })
                // .catch(err => {
                //     commit('auth_error')
                //     localStorage.removeItem('token')
                //     reject(err)
                // })
            })
        },
        logout({ commit }) {
            return new Promise((resolve, reject) => {
                commit('logout')
                localStorage.removeItem('token')
               // delete axios.defaults.headers.common['Authorization']
                resolve()
            })
        }
    },
    getters: {
        isLoggedIn: state => !!state.token,
        authStatus: state => state.status,
        steps: state => state.step,
        tab: state => state.tab
    }
});
