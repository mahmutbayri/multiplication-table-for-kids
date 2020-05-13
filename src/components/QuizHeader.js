import React, {Component} from 'react';
import {connect} from "react-redux";

class QuizHeader extends Component {
    render() {
        const {user} = this.props;

        return (
            <div className="quiz-heading">
                <div className="d-flex align-items-center justify-content-between border-bottom border-gray">
                    <div className="d-flex align-items-center">
                        <img alt="32x32" className="mr-2 rounded" src={`/img/user-${(user.userId + 10) % 4}.svg`} width="100" height="100"/>
                        <div className="media-body mb-0 small lh-125">
                            <div className="d-flex justify-content-between align-items-center w-100 flex-column">
                                <h5 className="text-gray-dark active-user-name">{user.userName}</h5>
                            </div>
                        </div>
                    </div>
                    <h3 className="user-score-box">
                        Toplam Puanın:
                        {' '}
                        <span className="user-score">{user.userScore}</span>
                        <span className="userHistoryBtn" data-toggle="modal" data-target="#historyModal">Cevap Geçmişi</span>
                    </h3>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.currentStudentsData,
    }
};

export default connect(mapStateToProps)(QuizHeader);
