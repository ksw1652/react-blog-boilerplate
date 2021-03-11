import React, { FC } from 'react';
import styled from "@emotion/styled";

const ArticleContentStyle = styled.section`
  margin-top: 20px;
  line-height: 150%;
  white-space: pre-wrap;
`;

interface ArticleContentProps {
  content: string;
}

const ArticleContent: FC<ArticleContentProps> = ({...props}): React.ReactElement => {
  const { content } = props;
  return (
    <ArticleContentStyle>{content}</ArticleContentStyle>
  );
};

export default ArticleContent;
