import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { ArticleItemType } from '@components/molecules/ArticleItem';

export interface DataProps {
  articles: Array<ArticleItemType>;
  status: string;
  totalResults: number;
}

function useArticleFetch(): DataProps {
  const url = `https://newsapi.org/v2/top-headlines?pageSize=100&page=1&country=us&category=technology&apiKey=984c5a3c2b9243229284f8663d3788db`;
  const initialState: DataProps = {
    articles: [],
    status: '',
    totalResults: 0,
  };

  const [data, setData] = useState(initialState);

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(url);
      if (response.status === 200) {
        setData({
          status: response.data.status,
          articles: response.data.articles,
          totalResults: response.data.totalResults,
        });
      } else throw new Error(`${response.data.code}`);
    } catch (error) {
      console.log('error::\n\n', error);
      setData({
        ...initialState,
        status: error,
      });
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return data;
}

export default useArticleFetch;
