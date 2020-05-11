import {createStore} from 'redux';

const reducer = function(state, action) {

    if (action.type === 'GOSTER') {
        return Object.assign({}, state, {name: action.name});
    }

    return state;
};

const initial = {
    name: 'recep'
}

export default createStore(
    reducer,
    initial,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
