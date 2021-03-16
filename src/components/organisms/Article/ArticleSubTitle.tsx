import React, { FC } from 'react';
import styled from '@emotion/styled';
import Title from 'antd/lib/typography/Title';

const ArticleSubTitleStyle = styled.section`
  margin-bottom: 20px;
`;

interface ArticleSubTttleProps {
  subTitle: string;
}

const ArticleSubTitle: FC<ArticleSubTttleProps> = ({
  ...props
}): React.ReactElement => {
  const { subTitle } = props;
  return (
    <ArticleSubTitleStyle>
      <Title level={5}>{subTitle}</Title>
    </ArticleSubTitleStyle>
  );
};

export default ArticleSubTitle;
