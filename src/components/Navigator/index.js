/**
 * Import React and React Component
 */
import React, { Component } from 'react'

/**
 * Import BrowserRouter,Switch,Route,Redirect from react router dom
 */
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import DashboardContainer from '../../screens/Dashboard/Dashboard'
import TakeTest from '../../screens/StudentDashboard/TakeTest'
import StudentProfile from '../../screens/StudentDashboard/ProfileModal/index'
import TeacherDashboard from '../../screens/TeacherDashboard'

/**
 * Importing ProtectedRoute Component
 */
import ProtectedRoute from '../ProtectedRoutes'
import StudentContainer from '../../screens/StudentDashboard/StudentContainer'

/**
 * @class Navigator
 * @description Creates Navigation for all the routes
 */
export class Navigator extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <ProtectedRoute exact path='/' component={DashboardContainer} />
          <ProtectedRoute exact path='/signin' component={DashboardContainer} />
          <ProtectedRoute exact path='/signup' component={DashboardContainer} />
          <ProtectedRoute exact path='/student/dashboard' component={StudentContainer} />
          <ProtectedRoute exact path='/student/profile' component={StudentContainer} />
          <ProtectedRoute exact path='/teacher/dashboard' component={TeacherDashboard} />
          <ProtectedRoute exact path='/teacher/profile' component={TeacherDashboard} />
          <ProtectedRoute exact path='/studenttest' component={TakeTest}/>
          <ProtectedRoute exact path='/dashboard/profile' compoennt={StudentProfile}/>
          <ProtectedRoute exact path='/teacher/teachertest' component={TakeTest}/>
          <Route
            render={() => {
              return <Redirect to='/' />
            }}
          />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default Navigator
