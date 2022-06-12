import { init } from "@rematch/core";
import articlesModel from './models/articles';

const store = init({
  models: {
    articlesModel
  }
})

export default store;