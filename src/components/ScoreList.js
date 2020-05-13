import React, {Component} from 'react';
import ScoreListItem from './ScoreListItem';
import {connect} from "react-redux";

class ScoreList extends Component {
    render() {

        const students = this.props.students;

        return (
            <div className="my-3 p-3 bg-white rounded shadow-sm position-relative score-list-container flipInX">
                <h4 className="pb-2 mb-3 question-title">Skor Listesi</h4>
                <div className="mt-3 intro-score-list">
                    {students.map((item) => <ScoreListItem key={item.userId} user={item}/>)}
                </div>
            </div>
        );
    }
}


let mapStateToProps = function (state) {
    return {
        students: state.students,
    }
};

export default connect(
    mapStateToProps,
)(ScoreList)

