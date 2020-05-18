import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Header from './Header';
import ScoreList from './ScoreList';
import Quiz from './Quiz';
import LoginForm from './LoginForm';

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

App.propTypes = {
    loginForm: PropTypes.bool.isRequired,
    currentStudentsData: PropTypes.oneOfType([
        PropTypes.shape({
            userId: PropTypes.number,
            userName: PropTypes.string,
            userScore: PropTypes.number,
        }).isRequired,
        PropTypes.oneOf([null]).isRequired,
    ]),
};

const mapStateToProps = (state) => ({
    currentStudentsData: state.currentStudentsData,
    loginForm: state.loginForm,
});

export default connect(
    mapStateToProps,
)(App);
