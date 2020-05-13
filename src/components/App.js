import React, {Component} from 'react';
import Header from './Header';
import ScoreList from './ScoreList';
import Quiz from './Quiz';
import {connect} from "react-redux";

class App extends Component {
    render() {

        const {currentStudentsData} = this.props;

        return (
            <main role="main" className="container-sm">
                <Header/>
                {currentStudentsData === null ? <ScoreList/> : <Quiz/>}
            </main>
        );
    }
}

let mapStateToProps = function (state, ownProps) {
    return {
        currentStudentsData: state.currentStudentsData,
    }
};


export default connect(
    mapStateToProps,
)(App)



