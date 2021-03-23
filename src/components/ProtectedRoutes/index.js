/**
 * Import React 
 */
import React from 'react'

// import { Redirect } from 'react-router-dom';
// import { getToken } from '../../utils/utils';

/**
 * @class ProtectedRoute
 * @description Creates ProtectedRoutes for all the routes
 */
class ProtectedRoute extends React.Component {

  render() {
    const Component = this.props.component;
    // const isAuthenticated = getToken();
    // return isAuthenticated ? (

    return (
      <Component />
      
      // ) : (
      // <Redirect to={{ pathname: '/login' }} />
      // );
    )
  }
}

export default ProtectedRoute;