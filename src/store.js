import {createStore, compose, applyMiddleware} from 'redux';
import finishOrNext from './middleware/finishOrNext';

const reducer = (state, action) => {
    if (action.type === 'GOSTER') {
        return {
            ...state,
            name: action.name,
        };
    }

    if (action.type === 'START_QUIZ') {
        return {
            ...state,
            quizStarted: true,
            questions: action.questions,
            currentQuizQuestionIndex: 0,
            nextQuestion: action.questions[0],
        };
    }

    if (action.type === 'SHOW_LOGIN_FORM') {
        return {
            ...state,
            loginForm: true,
        };
    }

    if (action.type === 'SET_NEXT_QUESTION') {
        const nextIndex = state.currentQuizQuestionIndex + 1;
        let nextQuestion = null;
        if (nextIndex < state.questionLimit) {
            nextQuestion = state.questions[nextIndex];
        }

        return {
            ...state,
            currentQuizQuestionIndex: state.currentQuizQuestionIndex + 1,
            nextQuestion,
            currentStudentsData: {
                ...state.currentStudentsData,
                userScore: state.currentStudentsData.userScore + action.payload.winPoint,
            },
        };
    }

    if (action.type === 'FINISH_QUIZ') {
        const currentStudent = state.currentStudentsData;
        // son puanı
        currentStudent.userScore += action.payload.winPoint;
        const studentsData = state.students.map((item) => {
            const itemTemp = item;
            if (currentStudent.userName !== itemTemp.userName) {
                return itemTemp;
            }
            itemTemp.userScore = currentStudent.userScore;
            return itemTemp;
        });

        return {
            ...state,
            currentQuizQuestionIndex: 0,
            students: studentsData,
            currentStudentsData: null,
            quizStarted: false,
        };
    }

    if (action.type === 'HIDE_LOGIN_FORM') {
        return {
            ...state,
            loginForm: false,
        };
    }

    if (action.type === 'USER_LOGOUT') {
        return {
            ...state,
            currentStudentsData: null,
        };
    }

    if (action.type === 'LOGIN_USER') {
        return {
            ...state,
            currentStudentsData: action.payload,
            loginForm: false,
        };
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
            userScore: 0,
        },
        {
            userId: 2,
            userName: 'Onur',
            userPassword: '1111',
            userScore: 0,
        },
        {
            userId: 3,
            userName: 'Batu',
            userPassword: '1357',
            userScore: 0,
        },
        {
            userId: 4,
            userName: 'Batu',
            userPassword: '1357',
            userScore: 0,
        },
        {
            userId: 5,
            userName: 'Batu',
            userPassword: '1357',
            userScore: 0,
        },
    ],
    questions: [],
    nextQuestion: null,
    quizQuestions: [], //! !!! iptal
    questionLimit: 3,
    currentQuizQuestionIndex: 0,

};

const composeEnhancers = global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
    reducer,
    initial,
    composeEnhancers(
        applyMiddleware(finishOrNext),
    ),
);
