import React, { FC } from 'react';
import { Divider, List } from 'antd';

import ArticleItem, {
  ArticleItemType,
} from '@components/molecules/ArticleItem';
import styled from '@emotion/styled';

const ListStyle = styled.div`
  position: relative;
  .ant-list {
    min-height: 800px;
  }
  .ant-list-pagination {
    position: absolute;
    bottom: 0;
    width: 100%;
    text-align: center;
  }
`;

interface NewsListProps {
  articles: Array<ArticleItemType>;
}

const ArticleList: FC<NewsListProps> = ({ articles }) => (
  <ListStyle>
    <List
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: (page) => {
          console.log(page);
          window.scrollTo(0, 0);
        },
        pageSize: 3,
        hideOnSinglePage: true,
      }}
      dataSource={articles}
      renderItem={(item) => (
        <>
          <ArticleItem
            articleId={item.articleId}
            title={item.title}
            subTitle={item.subTitle}
            content={item.content}
            userName={item.userName}
            createdAt={item.createdAt}
            avatar={item.avatar}
          />
          <Divider />
        </>
      )}
    />
  </ListStyle>
);

export default ArticleList;
