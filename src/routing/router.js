// packages
import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
// components
import ProgramEng from '../pages/programEng/ProgramEng'
import MainPage from '../pages/mainPage/MainPage'
import About from '../pages/aboutPage/About'
import Lesson from '../pages/lesson/Lesson'
import Exercise from '../pages/exercise/Exercise'
import Words from '../pages/exercise/words/Words'
import Sentence from '../pages/exercise/sentence/Sentence'
import Dialogs from '../pages/exercise/dialogs/Dialogs'
import Profile from '../pages/profile/Profile'

const router = (isAuthenticated) => {
  if (isAuthenticated) {
    return (
        <Switch>
            <Route component={MainPage} exact path={'/'}/>
            <Route component={ProgramEng} exact path={'/programEng'}/>
            <Route component={About} exact path={'/about'}/>
            <Route component={Lesson} exact path={'/lesson'}/>
            <Route component={Exercise} exact path={'/exercise'}/>
            <Route component={Words} exact path={'/words'}/>
            <Route component={Sentence} exact path={'/sentence'}/>
            <Route component={Dialogs} exact path={'/dialog'}/>
            <Route component={Profile} exact path={'/profile'}/>
            <Redirect to={'/'}/>
        </Switch>
    )
  }
  return (
      <Switch>
          <Route component={MainPage} exact path={'/'}/>
          <Route component={About} exact path={'/about'}/>
          <Redirect to={'/'}/>
      </Switch>
  )
}
export default router
