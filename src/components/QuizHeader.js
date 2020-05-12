import React, {Component} from 'react';

let images = {
    'image0': require('../img/user-0.svg'),
    'image1': require('../img/user-1.svg'),
    'image2': require('../img/user-2.svg'),
    'image3': require('../img/user-3.svg')
};

class QuizHeader extends Component {
    render() {

        const user = {
            "userId": 1,
            "userName": "Hasan",
            "userPassword": "1234",
            "userScore": 2000
        }

        return (
            <div className="quiz-heading">
                <div className="d-flex align-items-center justify-content-between border-bottom border-gray">
                    <div className="d-flex align-items-center">
                        <img alt="32x32" className="mr-2 rounded" src={images['image' + (user.userId + 10) % 3 ]} width="100" height="100" />
                            <div className="media-body mb-0 small lh-125">
                                <div className="d-flex justify-content-between align-items-center w-100 flex-column">
                                    <h5 className="text-gray-dark active-user-name">{user.userName}</h5>
                                </div>
                            </div>
                    </div>
                    <h3 className="user-score-box">
                        Toplam Puanın: <span className="user-score">{user.userScore}</span>
                        <span className="userHistoryBtn" data-toggle="modal" data-target="#historyModal">Cevap Geçmişi</span>
                    </h3>
                </div>
            </div>
        );
    }
}

export default QuizHeader;
