import Api from '../services/Api'

export default {
  register (credentials) {
    console.log(credentials)
    return Api().post('register', credentials)
  }
}