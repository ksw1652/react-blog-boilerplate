import React, { FunctionComponent } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import BlogList from "@pages/BlogList";
import BlogDetail from "@pages/BlogDetail";
import BlogManage from "@pages/BlogManage";
import UserProfile from "@pages/UserProfile";

const App: FunctionComponent = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={BlogList} />
      <Route path="/blog-detail" component={BlogDetail} />
      <Route path="/blog-manage" component={BlogManage} />
      <Route path="/user-profile" component={UserProfile} />
    </Switch>
  </BrowserRouter>
);
export default App;
