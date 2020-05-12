let images = {
    'image0': require('../img/user-0.svg'),
    'image1': require('../img/user-1.svg'),
    'image2': require('../img/user-2.svg'),
    'image3': require('../img/user-3.svg')
};

import React, {Component} from 'react';

class ScoreListItem extends Component {
    render() {
        let {userId, userName, userScore} = this.props.user;
        return (
            <div className="d-flex align-items-center justify-content-between py-2 border-bottom border-gray scoreboard-list-item">
                <div className="d-flex align-items-center">
                    <img className="mr-2 rounded" src={images['image' + (userId + 10) % Object.keys(images).length]} width="80" height="80"/>
                    <div className="media-body mb-0 small lh-125">
                        <div className="d-flex justify-content-between align-items-center w-100">
                            <h5 className="text-gray-dark">{userName}</h5>
                        </div>
                    </div>
                </div>
                <h4 className="user-score">
                    <span className="badge badge-success">{userScore}</span> <small>Puan</small>
                </h4>
            </div>
        );
    }
}

export default ScoreListItem;
