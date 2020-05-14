import {createStore} from 'redux';

const reducer = function (state, action) {
    if (action.type === 'GOSTER') {
        return Object.assign({}, state, {name: action.name});
    }

    if (action.type === 'START_QUIZ') {
        return Object.assign({}, state, {quizStarted: true});
    }

    if (action.type === 'SHOW_LOGIN_FORM') {
        return Object.assign({}, state, {
            loginForm: true
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
    // currentStudentsData: {
    //     userId: 1,
    //     userName: 'Hasan2',
    //     userScore: 0,
    // },
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
    ]
}

export default createStore(
    reducer,
    initial,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
