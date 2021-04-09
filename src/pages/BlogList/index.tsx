import React, { FC } from 'react';
import ArticleList from '@components/organisms/ArticleList';
import useArticleFetch from '@src/hooks/useArticleFetch';

const BlogList: FC = () => {
  const result = useArticleFetch();
  return (
    <ArticleList
      articles={result.articles}
      status={result.status}
      totalResults={result.totalResults}
    />
  );
};

export default BlogList;
