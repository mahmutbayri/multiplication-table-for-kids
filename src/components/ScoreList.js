import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import ScoreListItem from './ScoreListItem';

class ScoreList extends Component {
    render() {
        const {students} = this.props;
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

ScoreList.propTypes = {
    students: PropTypes.arrayOf(
        PropTypes.shape({
            userId: PropTypes.number,
            userName: PropTypes.string,
            userPassword: PropTypes.string,
            userScore: PropTypes.number,
        }),
    ).isRequired,
};


const mapStateToProps = (state) => ({
    students: state.students,
});


export default connect(
    mapStateToProps,
)(ScoreList);
