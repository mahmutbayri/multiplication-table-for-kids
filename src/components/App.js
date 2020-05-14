import React, {Component} from 'react';
import Header from './Header';
import ScoreList from './ScoreList';
import Quiz from './Quiz';
import {connect} from "react-redux";
import LoginForm from "./LoginForm";

class App extends Component {
    render() {
        const {currentStudentsData, loginForm} = this.props;
        return (
            <main role="main" className="container-sm">
                <Header/>
                {currentStudentsData === null ? <ScoreList/> : <Quiz/>}
                {loginForm === true ? <LoginForm/> : null}
            </main>
        );
    }
}

let mapStateToProps = function (state, ownProps) {
    return {
        currentStudentsData: state.currentStudentsData,
        loginForm: state.loginForm,
    }
};

export default connect(
    mapStateToProps,
)(App)



