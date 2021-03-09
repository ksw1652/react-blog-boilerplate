import React, { FC, ReactNode } from 'react';
import { Avatar, List } from 'antd';
import { useHistory } from 'react-router-dom';
import styled from '@emotion/styled';

const ItemWrapper = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

export interface ArticleItemType {
  articleId: string;
  title: string;
  subTitle: string;
  content: ReactNode;
  userName: string;
  createdAt: string;
  avatar: string;
}

const ArticleItem: FC<ArticleItemType> = ({ ...item }: ArticleItemType) => {
  const history = useHistory();

  return (
    <ItemWrapper>
      <List.Item
        key={item.articleId}
        extra={
          <img
            width={272}
            alt="logo"
            src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
          />
        }
        onClick={() => history.push(`/blog-detail/${item.articleId}`)}
      >
        <List.Item.Meta
          avatar={<Avatar src={item.avatar} />}
          title={item.title}
          description={item.subTitle}
        />
        {item.content}
      </List.Item>
    </ItemWrapper>
  );
};

export default ArticleItem;
