import React, { FC } from 'react';
import { Avatar, List } from 'antd';
import { useHistory } from 'react-router-dom';
import styled from '@emotion/styled';

const ItemWrapper = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

export interface ArticleItemType {
  articleId: number;
  title: string;
  description: string;
  content: string;
  author: string;
  publishedAt: string;
  url: string;
  urlToImage: string;
  avatar: string;
}

const ArticleItem: FC<ArticleItemType> = ({ ...item }: ArticleItemType) => {
  const history = useHistory();

  return (
    <ItemWrapper>
      <List.Item
        key={item.articleId}
        extra={<img width={272} alt="article" src={item.urlToImage} />}
        onClick={() => history.push(`/blog-detail/${item.articleId}`, item)}
      >
        <List.Item.Meta
          avatar={<Avatar src={item.avatar} />}
          title={item.title}
          description={item.description}
        />
        {item.content}
      </List.Item>
    </ItemWrapper>
  );
};

export default ArticleItem;
