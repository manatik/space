import React from "react";
import {Route, Switch, Redirect} from 'react-router-dom'
import ProgramEng from "../Pages/ProgramEng/ProgramEng";
import MainPage from "../Pages/MainPage/MainPage";
import About from "../Pages/AboutPage/About";
import Lesson from "../Pages/Lesson/Lesson";
import Exercise from "../Pages/Exercise/Exercise";
import Words from "../Pages/Exercise/Words/Words";
import Sentence from "../Pages/Exercise/Sentence/Sentence";
import Dialogs from "../Pages/Exercise/Dialogs/Dialogs";
import Cabinet from "../Pages/Cabinet/Cabinet";

const Router = (isAuthenticated) => {
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
                <Route path={"/cabinet"} component={Cabinet}/>
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
export default Router
