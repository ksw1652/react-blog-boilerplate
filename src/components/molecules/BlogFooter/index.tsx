import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Layout } from 'antd';

const { Footer } = Layout;

const BlogFooterStyle = styled.div`
  text-align: center;
`;

interface BlogFooterProps {
  copyright: string;
}

const BlogFooter: FC<BlogFooterProps> = ({ ...props }): React.ReactElement => {
  const { copyright } = props;
  return (
    <BlogFooterStyle>
      <Footer>{copyright}</Footer>
    </BlogFooterStyle>
  );
};
export default BlogFooter;
