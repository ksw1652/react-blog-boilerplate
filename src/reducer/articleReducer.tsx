import {FETCH_ARTICLES} from "@src/action/fetchArticles";

interface actionType {
  type: string,
  payload: any;
}

const articleReducer = (state = {}, {type, payload}: actionType) => {
  switch (type) {
    case FETCH_ARTICLES :
      return payload;
    default:
      return state;
  }
};

export default articleReducer;