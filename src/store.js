import {createStore} from 'redux';
import {questionGenerator} from './helpers'

const reducer = function (state, action) {
    if (action.type === 'GOSTER') {
        return Object.assign({}, state, {name: action.name});
    }

    if (action.type === 'START_QUIZ') {
        return Object.assign({}, state, {
            quizStarted: true,
            questions: action.questions,
            currentQuizQuestionIndex: 0,
        });
    }

    if (action.type === 'SHOW_LOGIN_FORM') {
        return Object.assign({}, state, {
            loginForm: true
        });
    }

    if (action.type === 'SET_NEXT_QUESTION') {
        return Object.assign({}, state, {
            currentQuizQuestionIndex: state.currentQuizQuestionIndex + 1,
            currentStudentsData: {
                ...state.currentStudentsData,
                userScore: state.currentStudentsData.userScore + action.payload.winPoint
            }
        })
    }

    if (action.type === 'FINISH_QUIZ') {
        let currentStudent = state.currentStudentsData;
        let studentsData = state.students.map(item => {
            if(currentStudent.userName !== item.userName) {
                return item;
            }
            item.userScore = currentStudent.userScore;
            return item;
        });

        return Object.assign({}, state, {
            currentQuizQuestionIndex: 0,
            students: studentsData,
            currentStudentsData: null,
            quizStarted: false
        })
    }

    if (action.type === 'HIDE_LOGIN_FORM') {
        return Object.assign({}, state, {
            loginForm: false
        });
    }

    if (action.type === 'USER_LOGOUT') {
        return Object.assign({}, state, {
            currentStudentsData: null,
        });
    }

    if (action.type === 'LOGIN_USER') {
        return Object.assign({}, state, {
            currentStudentsData: action.payload,
            loginForm: false
        });
    }

    return state;
};

const initial = {
    currentStudentsData: null,
    quizStarted: false,
    loginForm: false,
    students: [
        {
            userId: 1,
            userName: 'Hasan2',
            userPassword: '1234',
            userScore: 0
        },
        {
            userId: 2,
            userName: 'Onur',
            userPassword: '1111',
            userScore: 0
        },
        {
            userId: 3,
            userName: 'Batu',
            userPassword: '1357',
            userScore: 0
        },
        {
            userId: 4,
            userName: 'Batu',
            userPassword: '1357',
            userScore: 0
        },
        {
            userId: 5,
            userName: 'Batu',
            userPassword: '1357',
            userScore: 0
        }
    ],
    questions: [],
    quizQuestions: [], //!!!! iptal
    questionLimit: 3,
    currentQuizQuestionIndex: 0

}

export default createStore(
    reducer,
    initial,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
