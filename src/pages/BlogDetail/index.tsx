import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { useLocation } from 'react-router-dom';

import Article from '@components/organisms/Article';
import { ArticleItemType } from '@components/molecules/ArticleItem';

const BlogDetailStyle = styled.article`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BlogDetail: FunctionComponent = () => {
  const location = useLocation();
  const article = location.state as ArticleItemType;

  console.log('myState::\n\n', article);

  return (
    <BlogDetailStyle>
      <Article>
        <Article.ArticleTitle title={article.title} />
        <Article.ArticleSubTitle subTitle={article.description} />
        <Article.ArticleImage src={article.urlToImage} />
        <Article.ArticleContent content={article.content} />
      </Article>
    </BlogDetailStyle>
  );
};
export default BlogDetail;
