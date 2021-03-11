import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';

import Article from '@components/organisms/Article';

const BlogDetailStyle = styled.article`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BlogDetail: FunctionComponent = () => {
  const article = {
    title: `블랭크코퍼레이션, 라이프스타일 매거진 ‘툴즈’ 창간 일상 속 도구를 바라보는 새로운 시각, 창간호 주제는 비누!`,
    subTitle: `
    - 매회 한가지 도구 선정, 다채로운 콘텐츠로 소개하는 반기별 전문 잡지 선보여
    - 창간호 주제로 ‘비누’ 선정, 코로나 시대를 맞아 가장 주목해야 할 도구로 꼽아
    - 11일부터 전국 온오프라인 서점 판매, 올 상반기 중 영문판 출간해 해외 진출
    `,
    image: {
      src: `http://blankcorp.kr/data/file/41/thumb-3667427847_wCE50oGv_f4abfb38bf32082bb9facfb0fc81b9286de5415c_780x519.jpg`,
    },
    content: `㈜블랭크코퍼레이션(대표 남대광)은 일상 속 도구의 가치를 조명하는 라이프스타일 잡지 ‘툴즈(TOOLS)’를 창간한다고 11일 밝혔다.\n
‘툴즈’는 생활에 꼭 필요한 일상품 중 한 가지를 선정, 익숙한 도구의 이면을 철저히 탐구한다. 반기별로 선보이는 각 호마다 선정된 도구의 기원, 유명 브랜드 스토리, 인터뷰, 화보 등 다채로운 시각이 담길 예정이다.\n
창간호의 주제는 ‘비누’다. 수천 년의 역사 속에서 전염병을 막는데 중요한 역할을 해온 비누야말로 코로나19를 겪고 있는 현재 시점에 가장 주목해야 할 도구라는 점에서 대망의 첫 번째 주제로 채택했다.\n
비누의 탄생 비화 및 러쉬, 이솝 등 글로벌 브랜드의 철학, 배우 봉태규와 작가 하시시박 인터뷰, 비누의 새로운 모습을 담은 화보 등 역사와 인문학, 예술을 아우르는 폭넓은 콘텐츠를 만날 수 있다.\n
창간호 출간을 기념해 300부 한정으로 스페셜 에디션을 선보인다. 해로운 것을 씻어내는 비누의 역할을 형상화한 패키지 및 욕실제품 전문 브랜드 ‘한아조’와 제작한 프리미엄 비누가 포함되어 있다.\n
블랭크코퍼레이션 남대광 대표는 “툴즈 매거진을 통해 일상에서 습관처럼 사용하는 도구를 새로운 시각으로 바라보는 즐거움을 느낄 수 있을 것”이라며, “앞으로도 유무형의 도구를 깊이 있게 다루고 독자와 소통하며 블랭크가 추구하는 브랜드 가치를 전달하고자 한다”고 전했다.\n  
툴즈는 전국 온오프라인 서점에서 판매된다. 올 상반기 중 영문판을 출간해 해외에도 선보일 계획이다.`,
  };
  return (
    <BlogDetailStyle>
      <Article>
        <Article.ArticleTitle title={article.title}/>
        <Article.ArticleSubTitle subTitle={article.subTitle}/>
        <Article.ArticleImage image={article.image}/>
        <Article.ArticleContent content={article.content}/>
      </Article>
    </BlogDetailStyle>
  );
};
export default BlogDetail;
