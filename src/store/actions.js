import axios from 'axios'
import router from "../router";

export const register = ({ commit }, registerForm) => {
        axios(`${process.env.VUE_APP_URL}api/auth/register`, {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          data: {
            firstname: registerForm.firstname,
            lastname: registerForm.lastname,
            email: registerForm.email,
            siret: registerForm.siret,
            password: registerForm.password,
          } 
        })
        .then((response)=> {
          router.push({ path: `/` })
          console.log(response)
        })
        .catch((error) => {
          commit('messages', [error.response.data.errors.firstname[0], 
          error.response.data.errors.lastname[0], 
          error.response.data.errors.siret[0],
          error.response.data.errors.email[0],
          error.response.data.errors.password[0]])

      });
}

export const login = ({ commit }, loginForm) => {
  axios(`${process.env.VUE_APP_URL}api/auth/login`, {
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data: {
        email: loginForm.email,
        password: loginForm.password,
      } 
    })
    .then((response)=> {
      const user = {
        firstname: response.data.firstname,
        lastname: response.data.lastname,
        email: response.data.email,  
        siret: response.data.siret,
        password: response.data.password,
        isAdmin: response.data.isAdmin
      }
      commit('data', user)
      router.push({ path: `/` })
      console.log(response)
    })
    .catch((error) => {
      console.log(error)
      commit('messages', [error.response.data.errors.email[0], error.response.data.errors.password[0]])  
  });
}



export const logout = ({ commit, state }) => {
    const token = state.user.token;
    if (!token) {
        return;
    }
    commit('token', null);
    commit('data', {});
    router.push({ path: `/` })
}

export const getAllNews = ({commit}) => {
    axios.get(`${process.env.VUE_APP_URL}api/news`)
    .then((response)=> {
      const news = response.data.allNews
      commit('news', news)  
    //   this.allNews = response.data.allNews
      console.log(response)
    })
    .catch(error => {
      console.log(error);
  });
}
