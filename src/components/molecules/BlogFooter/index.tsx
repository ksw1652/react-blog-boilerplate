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

const BlogFooter: FC<BlogFooterProps> = ({ ...props }) => {
  return (
    <BlogFooterStyle>
      <Footer>{props.copyright}</Footer>
    </BlogFooterStyle>
  );
};
export default BlogFooter;
