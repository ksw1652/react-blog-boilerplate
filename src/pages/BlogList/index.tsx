import React, { FC } from 'react';

import ArticleList from '@components/organisms/ArticleList';
import Avatar1 from '@images/avatar_img_1.png';
import Avatar2 from '@images/avatar_img_2.png';
import Avatar3 from '@images/avatar_img_3.png';

const BlogList: FC = () => {
  const articles = [
    {
      articleId: `1`,
      avatar: Avatar1,
      title: `바디럽, 자체 제작 웹예능 ‘스테이 바디럽’ 시리즈 공개!`,
      subTitle: `유튜브 공식 채널서 샘 해밍턴 부자, 엑소 카이 출연하는 웹예능 선보여`,
      content: (
        <section>
          ㈜블랭크코퍼레이션(대표 남대광)의 라이프스타일 브랜드 바디럽은 공식
          유튜브 채널에서 자체제작 웹예능 ‘스테이 바디럽’ 시리즈를 론칭한다고
          15일 밝혔다. 바디럽은 길어지는 코로나19 확산에 지친 이들에게 소소한
          행복을 공유하고, 깨끗한 물 사용과 손 씻기 등 안전한 습관의 중요성을
          전달하고자 이번 콘텐츠를 기획했다. ‘스테이 바디럽’에는 샘 해밍턴과
          윌리엄, 벤틀리 형제, 그룹 엑소(EXO)의 카이가 출연한다. 힐링 여행을
          주제로 하는 이번 콘텐츠에는 도시를 벗어나 휴식을 즐기는 모습을 담길
          예정이다. 윌벤저스와 엑소 카이의 첫 만남을 시작으로 식사 준비, 샘
          해밍턴의 낚시 도전, 크리스마스 트리 만들기 등 한적한 시골 마을을
          만끽하는 에피소드가 순차적으로 공개된다. ‘스테이 바디럽’은 매주 화,
          목요일 오후 7시 30분에 바디럽 공식 유튜브 채널 ‘스튜디오 바디럽’을
          통해 ....
        </section>
      ),
      userName: `김성우 기자`,
      createdAt: `2020.12.15`,
    },
    {
      articleId: `2`,
      avatar: Avatar2,
      title: `블랭크코퍼레이션, 무역의 날 맞아 700만불 수출의 탑 수상`,
      subTitle: ` 2018년 해외 법인 설립, 작년 300만 이어 올해 수출액 700만불 성과`,
      content: (
        <section>
          ㈜블랭크코퍼레이션(대표 남대광, 이하 블랭크)은 제57회 무역의 날
          시상식에서 ‘700만불 수출의 탑’을 수상했다고 8일 밝혔다. 블랭크는
          2019년 ‘300만불 수출의 탑’에 이어 1년 만에 수출액 700만불을
          달성(2019.7.1~2020.6.30 기준)하며 수상의 영예를 안았다. 2018년 10월
          대만, 홍콩, 싱가포르에 해외 법인 설립한 이래로 중국, 미국으로 수출
          대상 국가를 다변화하고 브랜드를 확대하는 등 체계적으로 글로벌 시장에
          문을 두드린 결과 작년 대비 수출액이 두배 이상 증가했다. 여기에
          오프라인 체험관 운영과 대형 유통처와의 협업 등 각 국가별 상황에 맞는
          활동이 더해지면서 성장세가 이어지고 있다. 이러한 성과는 우수한
          품질력을 기반으로 오리지널 콘텐츠로 고객과 소통하는 블랭크의 비즈니스
          모델이...
        </section>
      ),
      userName: `이재성 기자`,
      createdAt: `2020.12.08`,
    },
    {
      articleId: `3`,
      avatar: Avatar3,
      title: `반려동물교감 브랜드 아르르, 론칭 3년 만에 연매출 100억 돌파, 반려동물과 사람이 함께 사는 ‘펫테리어’ 시장 이끈다!`,
      subTitle: `지난달 기준 매출 100억 넘어서… 반려동물용품 브랜드로는 이례적 성과`,
      content: (
        <section>
          ㈜블랭크코퍼레이션(대표 남대광)의 반려동물교감 브랜드 아르르는 새해를
          맞아 프리미엄 패션 브랜드 폴로 랄프 로렌(이하 랄프 로렌)과 한정판
          선물세트를 선보인다. 아르르는 반려동물용품 브랜드 최초로 랄프 로렌과
          패키지 상품을 출시한다. 독보적인 스타일과 감성으로 전세계적인 명성을
          보유한 랄프 로렌과 반려동물의 안전과 편안함을 선사하는 제품으로 폭넓은
          팬덤을 구축하고 있는 아르르의 이색적인 조합에 관심이 집중되고 있다.
          아르르와 랄프 로렌은 고급스러움과 소장 가치를 더한 패키지에 인기
          제품을 구성해 반려동물과 새로운 한 해를 기념할 수 있는 선물세트를
          완성했다. 이번 선물세트에는 랄프 로렌의 시그니처 디자인을 반영한
          반려견 전용 폴로 티셔츠와 아르르의 마이핏 하네스, 리쉬 총 3종이
          포함됐다. 300세트 한정 수량으로 아르르 자사 홈페이지에서 판매한다.
        </section>
      ),
      userName: `서맹관 기자`,
      createdAt: `2020.11.24`,
    },
    {
      articleId: `4`,
      avatar: Avatar2,
      title: `언코티드247, 편안함 더한 슬랙스 ‘발란스 팬츠’ 15만 장 판매 돌파`,
      subTitle: `출시 이후 15만 장 판매 돌파, 누적 상품 후기 3만 건 이상`,
      content: (
        <section>
          ㈜블랭크코퍼레이션(대표 남대광)의 라이프스타일 웨어 브랜드
          언코티드247의 발란스 팬츠가 누적 판매량 15만 장을 돌파했다. 제품 론칭
          후 9개월 만에 성공적으로 시장에 안착, 이지웨어의 흥행을 주도하며
          온라인 전문 브랜드로는 이례적인 행보를 걷고 있다. 발란스 팬츠의 누적
          상품후기는 약 3만 건 이상으로 고객 만족과 호응 면에서도 좋은 성과를
          얻고 있다. 발란스 팬츠는 슈퍼 스트레치 원단을 사용해 어떠한 활동에서도
          편안함을 극대화한 것이 특징이다. 슬랙스 형태의 디자인에 주름 펴짐과
          정전기 방지 기능을 더해 외출 시에도 입기 좋다. 계절에 맞는 소재로
          변화를 주며 매 시즌 새로운 라인을 선보였으며, 블랙, 아이보리 등 기본
          컬러 포함 8가지 색상을 추가로 구성하며 선택의 폭을 넓혔다. 또한,
          온라인 브랜드 특성을 십분 살려 다양한 신체 유형과 상황 별 착장을
          이미지와 영상으로 소개했다. 제품 정보를 보다 상세히 기재하고, 이를
          직관적으로 확인할 수 있는 콘텐츠를 제공함으로써 오프라인 매장 이상의
          경험을 제공한 것도 흥행 비결로 꼽힌다.
        </section>
      ),
      userName: `김성우 기자`,
      createdAt: `2020.07.10`,
    },
    {
      articleId: `5`,
      avatar: Avatar1,
      title: `블랭크코퍼레이션 자체 직장 어린이집 ‘블랭크 키즈’ 설립 남대광 대표 사재출연, 육아복지에 선제적 투자`,
      subTitle: `스타트업이 단독으로 설립한 직장 어린이집 첫 사례, 3월 2일 정식 개원`,
      content: (
        <section>
          ㈜블랭크코퍼레이션(대표 남대광, 이하 블랭크)이 자체 직장 어린이집
          ‘블랭크 키즈(blank Kids)’의 설립을 마치고 오는 3월 2일 정식 개원한다고
          밝혔다. ‘블랭크 키즈’는 블랭크코퍼레이션 남대광 대표가 사재를 출연해
          마련한 시설로, 스타트업이 단독으로 설립한 직장 어린이집으로는 첫
          사례다. 스타트업 산업의 부흥과 성장에 발맞춰 보다 성숙한 복지문화
          제도를 선제적으로 정착시키고 미래 육아복지 수요를 충족시켜 나간다는
          방침이다. 블랭크코퍼레이션 남대광 대표는 “현재 블랭크는 끊임없이
          실험하고 도전해야 하는 시점으로 회사의 자원은 온연히 비즈니스 실험에
          투자되어야 한다”며, “그럼에도 불구하고 구성원이 회사를 통해 삶의
          안정감을 느끼고 육아보육의 어려움을 해소할 수 있는 울타리 조성을 위해
          사재를 투자를 결정했다”고 밝혔다. ‘블랭크 키즈’는 블랭크 본사 맞은편인
          서울시 선릉로 나라키움빌딩 1층에 위치했다. 만1세부터 만5세까지, 영아
          및 유아교육이 통합된 보육시설로, 푸르니보육지원재단의 위탁 운영을 통해
          전문적인 보육 및 교육 서비스를 제공한다.
        </section>
      ),
      userName: `김성우 기자`,
      createdAt: `2020.02.20`,
    },
  ];
  return <ArticleList articles={articles} />;
};



export default BlogList;
