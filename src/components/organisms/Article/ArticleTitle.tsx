import React, { FC } from 'react';
import styled from "@emotion/styled";
import Title from "antd/lib/typography/Title";

const ArticleTitleStyle = styled.section`
  margin-top: 20px;
`;

interface ArticleTttleProps {
  title: string;
}

const ArticleTitle: FC<ArticleTttleProps> = ({...props}): React.ReactElement => {
  const { title } = props;
  return (
    <ArticleTitleStyle>
      <Title level={2}>{title}</Title>
    </ArticleTitleStyle>
  );
};

export default ArticleTitle;
