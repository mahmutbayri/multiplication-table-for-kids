import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ScoreListItem extends Component {
    render() {
        const {user} = this.props;
        const {userId, userName, userScore} = user;
        const imageSuffix = (userId + 10) % 4;
        return (
            <div className="d-flex align-items-center justify-content-between py-2 border-bottom border-gray scoreboard-list-item">
                <div className="d-flex align-items-center">
                    <img className="mr-2 rounded" alt="avatars" src={`/img/user-${imageSuffix}.svg`} width="80" height="80"/>
                    <div className="media-body mb-0 small lh-125">
                        <div className="d-flex justify-content-between align-items-center w-100">
                            <h5 className="text-gray-dark">{userName}</h5>
                        </div>
                    </div>
                </div>
                <h4 className="user-score">
                    <span className="badge badge-success">{userScore}</span>
                    {' '}
                    <small>Puan</small>
                </h4>
            </div>
        );
    }
}

ScoreListItem.propTypes = {
    user: PropTypes.shape({
        userId: PropTypes.number,
        userName: PropTypes.string,
        userScore: PropTypes.number,
    }).isRequired,
};

export default ScoreListItem;
