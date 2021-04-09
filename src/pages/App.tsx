import React, { FunctionComponent } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import { Global } from '@emotion/react';
// import { connect } from 'react-redux';

import GlobalStyle from '@styles/globalStyle';
import BlogList from '@pages/BlogList';
import BlogDetail from '@pages/BlogDetail';
import BlogManage from '@pages/BlogManage';
import UserProfile from '@pages/UserProfile';
import BlogHeader from '@components/molecules/BlogHeader';
import BlogFooter from '@components/molecules/BlogFooter';
// import fetchArticles from '@src/action/fetchArticles';

const { Content } = Layout;

const App: FunctionComponent = () => (
  <BrowserRouter>
    <Layout>
      <BlogHeader
        title="Blank.corp News"
        subTitle="블랭크의 최신 소식을 담아 전달해 드립니다"
      />
      <Content>
        <Switch>
          <Route exact path="/" component={BlogList} />
          <Route path="/blog-detail" component={BlogDetail} />
          <Route path="/blog-manage" component={BlogManage} />
          <Route path="/user-profile" component={UserProfile} />
        </Switch>
      </Content>
      <BlogFooter copyright="Blank Corp. Copyright, All rights reserved." />
    </Layout>
    <Global styles={GlobalStyle} />
  </BrowserRouter>
);

export default App;

// const MapStateToProps = (state) => {
//   return {
//     articles: state.articles,
//   };
// };
//
// const MapDispatchToProps = (dispatch) => {
//   return {
//     fetchArticles: () => dispatch(fetchArticles),
//   };
// };
//
// export default connect(MapStateToProps, MapDispatchToProps)(App);
