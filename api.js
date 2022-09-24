import axios from 'axios';
const baseUrl = 'https://damp-mesa-48217.herokuapp.com/api/v1';

export default new (class api {
  async login(data) {
    console.log(data)
    return await axios
      .post(baseUrl + '/Login',data)
      .then(res => res.data)
      .catch(err => {
        console.log('err',err.response)
        throw err;
      });
  }
  async Regiter(data) {
    return await axios
      .post(baseUrl + '/Register',data)
      .then(res => res.data)
      .catch(err => {
        throw err;
      });
  }
})();
