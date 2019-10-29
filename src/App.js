import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import Mainpage from './containers/Mainpage/Mainpage';
import BrowseClothes from './containers/BrowseClothes/BrowseClothes';
import Clothing from './containers/Clothing/Clothing'
import { connect } from 'react-redux';
import * as actions from './store/actions/index'
require('dotenv').config();



function App(props) {

  const { getNavbarLinks } = props;

  useEffect(() => {
    getNavbarLinks();
  }, [getNavbarLinks])




  return (
    <Layout>

      <Switch>
        <Route path="/men/:slug" component={BrowseClothes} />
        <Route path="/women/:slug" component={BrowseClothes} />
        <Route path="/clothing/:slug" component={Clothing} />
        <Route path="/" component={Mainpage} />
      </Switch>

    </Layout>
  );
}

const mapDispatchToProps = dispatch => {

  return {
    getNavbarLinks: () => dispatch(actions.fetchNavbarLinks())
  }

}




export default connect(null, mapDispatchToProps)(App);
