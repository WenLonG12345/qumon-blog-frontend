import request from '../../utils/request';


const baseUrl = process.env.API_URL;

export default {
  state: {},
  reducers: {},
  effects: () => ({
    async getAllArticles() {
      const res = await request(`${baseUrl}/api/articles`);

      const {status, data} = res;

      console.log('getAll', status, data);
    }
  })
}