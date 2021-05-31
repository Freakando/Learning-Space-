import React from 'react';
import './App.css';
import Navigation from "./components/Navigation";
import ColorfulBoxes from "./components/ColorfulBoxes";
import CountThings from "./components/CountThings";
import UpperLower from "./components/UpperLower";
import Numbers from "./components/Numbers";
import Box from "./components/Box";
import CustomTitle from "./components/CustomTitle";
import UserInfo from "./components/UserInfo";
import Clock from "./components/Clock"
import MyButton from "./components/MyButton";
import AccountData from "./components/AccountData"
import TestCodeSpace from "./components/TestCodeSpace";
import HelloForm from "./components/HelloForm";
import Methods from "./components/Methods";
import UdemyExercises from "./components/UdemyExercises";
import ShoppingCartUDEMY from "./components/ShoppingCartUDEMY";
// import Home from "./components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UdemyListForm from "./components/UdemyListFrom";
import UdemyHooksTutorial from "./components/UdemyHooksTutorial";


function App() {

    return (
        <Router>
            <>
                <Navigation/>
                <Switch>
                    <Route exact path="/ColorfulBoxes">
                        <ColorfulBoxes />
                    </Route>

                    <Route exact path="/CountThings">
                        <CountThings />
                    </Route>

                    <Route exact path="/UpperLower">
                        <UpperLower />
                    </Route>

                    <Route exact path="/Numbers">
                        <Numbers />
                    </Route>

                    <Route exact path="/Box">
                        <Box />
                    </Route>

                    <Route exact path="/CustomTitle">
                        <CustomTitle />
                    </Route>

                    <Route exact path="/UserInfo">
                        <UserInfo />
                    </Route>

                    <Route exact path="/Clock">
                        <Clock />
                    </Route>

                    <Route exact path="/MyButton">
                        <MyButton />
                    </Route>

                    <Route exact path="/AccountData">
                        <AccountData />
                    </Route>

                    <Route exact path="/TestCodeSpace">
                        <TestCodeSpace />
                    </Route>

                    <Route exact path="/HelloForm">
                        <HelloForm />
                    </Route>

                    <Route exact path="/Methods">
                        <Methods />
                    </Route>

                    <Route exact path="/UdemyExercises">
                        <UdemyExercises />
                    </Route>

                    <Route exact path="/ShoppingCartUDEMY">
                        <ShoppingCartUDEMY />
                    </Route>

                    <Route exact path="/UdemyListForm">
                        <UdemyListForm />
                    </Route>

                    <Route exact path="/UdemyHooksTutorial">
                        <UdemyHooksTutorial />
                    </Route>
                </Switch>

            </>
        </Router>
    );
}

export default App;

// router , each component should render in another path.
// questions: - which installation should be used: one with dom or npm install --save react-router ?
