// packages
import React from "react";
import {Route, Switch, Redirect} from 'react-router-dom'
//components
import ProgramEng from "../pages/programEng/ProgramEng";
import MainPage from "../pages/mainPage/MainPage";
import About from "../pages/aboutPage/About";
import Lesson from "../pages/lesson/Lesson";
import Exercise from "../pages/exercise/Exercise";
import Words from "../pages/exercise/words/Words";
import Sentence from "../pages/exercise/sentence/Sentence";
import Dialogs from "../pages/exercise/dialogs/Dialogs";
import Profile from "../pages/profile/Profile";

const router = (isAuthenticated) => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route exact path={"/"} component={MainPage}/>
        <Route path={"/programEng"} component={ProgramEng}/>
        <Route path={"/about"} component={About}/>
        <Route path={"/lesson"} component={Lesson}/>
        <Route path={"/exercise"} component={Exercise}/>
        <Route path={"/words"} component={Words}/>
        <Route path={"/sentence"} component={Sentence}/>
        <Route path={"/dialog"} component={Dialogs}/>
        <Route path={"/profile"} component={Profile}/>
        <Redirect to={"/"}/>
      </Switch>
    )
  }
  return (
    <Switch>
      <Route exact path={"/"} component={MainPage}/>
      <Route path={"/about"} component={About}/>
      <Redirect to={"/"}/>
    </Switch>
  )
}
export default router
