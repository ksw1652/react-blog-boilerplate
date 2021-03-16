import React, { FC } from 'react';
import ArticleImage from '@components/organisms/Article/ArticleImage';
import ArticleContent from '@components/organisms/Article/ArticleContent';
import ArticleSubTitle from '@components/organisms/Article/ArticleSubTitle';
import ArticleTitle from '@components/organisms/Article/ArticleTitle';
import styled from '@emotion/styled';

const ArticleStyle = styled.article`
  width: 680px;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 60px;
`;

interface ArticleProps {
  children: any;
}

interface ArticleChildComponents {
  ArticleTitle: typeof ArticleTitle;
  ArticleSubTitle: typeof ArticleSubTitle;
  ArticleImage: typeof ArticleImage;
  ArticleContent: typeof ArticleContent;
}

const Article: FC<ArticleProps> & ArticleChildComponents = ({
  children,
}: ArticleProps): React.ReactElement => <ArticleStyle>{children}</ArticleStyle>;

Article.ArticleTitle = ArticleTitle;
Article.ArticleSubTitle = ArticleSubTitle;
Article.ArticleImage = ArticleImage;
Article.ArticleContent = ArticleContent;

export default Article;
