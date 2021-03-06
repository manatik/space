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
import Profile from '../pages/profile/Profile'
import MainChat from '../mainChat/MainChat'
// paths
const lessonPath = '/programEng/:level'
const exercisePath = '/programEng/:level/exercise/:number'
const wordsPath = '/programEng/:level/exercise/:number/words'
const sentencePath = '/programEng/:level/exercise/:number/sentence'
const programEngPath = '/programEng'
const aboutPath = '/about'
const profilePath = '/profile'
const mainChat = '/chat'

const router = (isAuthenticated) => {
  if (isAuthenticated) {
    return (
        <Switch>
            <Route component={MainPage} exact path={'/'}/>
            <Route component={ProgramEng} exact path={programEngPath}/>
            <Route component={About} exact path={aboutPath}/>
            <Route component={Lesson} exact path={lessonPath}/>
            <Route component={Exercise} exact path={exercisePath}/>
            <Route component={Words} exact path={wordsPath}/>
            <Route component={Sentence} exact path={sentencePath}/>
            <Route component={Profile} exact path={profilePath}/>
            <Route component={MainChat} exact path={mainChat}/>
            <Redirect to={'/'}/>
        </Switch>
    )
  }
  return (
      <Switch>
          <Route component={MainPage} exact path={'/'}/>
          <Route component={About} exact path={aboutPath}/>
          <Redirect to={'/'}/>
      </Switch>
  )
}
export default router
