import React, { FunctionComponent } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
const { Content } = Layout;
import { Global } from '@emotion/react';

import GlobalStyle from '@styles/globalStyle';
import BlogList from '@pages/BlogList';
import BlogDetail from '@pages/BlogDetail';
import BlogManage from '@pages/BlogManage';
import UserProfile from '@pages/UserProfile';
import BlogHeader from '@components/molecules/BlogHeader';
import BlogFooter from '@components/molecules/BlogFooter';
import styled from "@emotion/styled";

const ContentStyle = styled.div`
  //min-height: 800px;
`;

const App: FunctionComponent = () => (
  <BrowserRouter>
    <Layout>
      <BlogHeader
        title="Blank.corp News"
        subTitle="블랭크의 최신 소식을 담아 전달해 드립니다"
      />
      <ContentStyle>
        <Content>
          <Switch>
            <Route exact path="/" component={BlogList} />
            <Route path="/blog-detail" component={BlogDetail} />
            <Route path="/blog-manage" component={BlogManage} />
            <Route path="/user-profile" component={UserProfile} />
          </Switch>
        </Content>
      </ContentStyle>
      <BlogFooter copyright="Blank Corp. Copyright, All rights reserved." />
    </Layout>
    <Global styles={GlobalStyle} />
  </BrowserRouter>
);
export default App;
