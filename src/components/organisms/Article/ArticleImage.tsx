import React, { FC } from 'react';
import { Image } from 'antd';
import styled from '@emotion/styled';

const ImageStyle = styled.section``;

interface ImageProps {
  src: string;
}

interface ArticleImageType {
  image: ImageProps;
}

const ArticleImage: FC<ArticleImageType> = ({ image }): React.ReactElement => (
  <ImageStyle>
    <Image src={image.src} />
  </ImageStyle>
);
export default ArticleImage;
