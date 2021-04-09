import React, { FC } from 'react';
import { Divider, List } from 'antd';

import ArticleItem from '@components/molecules/ArticleItem';
import styled from '@emotion/styled';
import { DataProps } from '@src/hooks/useArticleFetch';

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

const ArticleList: FC<DataProps> = ({ articles, status, totalResults }) => {
  return (
    <ListStyle>
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          position: 'bottom',
          pageSize: 5,
          total: totalResults,
          showSizeChanger: false,
          onChange: (page) => {
            console.log('page::\n\n', page);
            window.scrollTo(0, 0);
          },
        }}
        dataSource={articles}
        renderItem={(item, index) => (
          <>
            <ArticleItem
              articleId={index}
              title={item.title}
              description={item.description}
              content={item.content}
              author={item.author}
              publishedAt={item.publishedAt}
              avatar={item.avatar}
              url={item.url}
              urlToImage={item.urlToImage}
            />
            <Divider />
          </>
        )}
      />
    </ListStyle>
  );
};

export default ArticleList;
