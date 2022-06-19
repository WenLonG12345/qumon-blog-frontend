import request from '../../utils/request';


const baseUrl = process.env.API_URL;

export default {
  state: {},
  reducers: {},
  effects: () => ({
    async getAllArticles() {
      const res = await request(`${baseUrl}/api/articles`);

      const {status, data} = res;
    },

    async uploadImage(file) {
      const formData = new FormData();

      formData.append('files', file);

      const res = await request(`${baseUrl}/api/upload`, formData);

      console.log('upload', res.status, res.data);
    }
  })
}