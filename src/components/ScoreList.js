import React, {Component} from 'react';
import ScoreListItem from "./ScoreListItem";

class ScoreList extends Component {
    render() {

        const items = [
            {
                "userId": 1,
                "userName": "Hasan",
                "userPassword": "1234",
                "userScore": 0
            },
            {
                "userId": 2,
                "userName": "Onur",
                "userPassword": "2468",
                "userScore": 0
            },
            {
                "userId": 3,
                "userName": "Batu",
                "userPassword": "1357",
                "userScore": 0
            },
            {
                "userId": 4,
                "userName": "Batu",
                "userPassword": "1357",
                "userScore": 0
            },
            {
                "userId": 5,
                "userName": "Batu",
                "userPassword": "1357",
                "userScore": 0
            }
        ];

        return (
            <div className="my-3 p-3 bg-white rounded shadow-sm position-relative score-list-container flipInX">
                <h4 className="pb-2 mb-3 question-title">Skor Listesi</h4>
                <div className="mt-3 intro-score-list">
                    {items.map(item => <ScoreListItem key={item.userId} user={item} />)}
                </div>
            </div>
        );
    }
}

export default ScoreList;
