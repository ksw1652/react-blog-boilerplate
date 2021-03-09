import React, { FC } from 'react';
import { PageHeader } from 'antd';
import styled from '@emotion/styled';

const HeaderWrapper = styled.header`
  background: #000;
  .ant-page-header-heading-title {
    color: #ffffff;
  }
  .ant-page-header-heading-sub-title {
    color: #c8c8c8;
  }
`;

interface PageHeaderProps {
  title: string;
  subTitle: string;
}

const BlogHeader: FC<PageHeaderProps> = ({ title, subTitle }) => {
  return (
    <HeaderWrapper>
      <PageHeader
        className="blog-page-header"
        title={title}
        subTitle={subTitle}
      />
    </HeaderWrapper>
  );
};

export default BlogHeader;
