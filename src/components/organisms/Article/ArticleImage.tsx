import React, { FC } from 'react';
import { Image } from 'antd';
import styled from '@emotion/styled';

const ImageStyle = styled.section``;

interface ArticleImageType {
  src: string;
}

const ArticleImage: FC<ArticleImageType> = ({ src }): React.ReactElement => {
  return (
    <ImageStyle>
      <Image src={src} />
    </ImageStyle>
  );
};

export default ArticleImage;
