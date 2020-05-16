export default store => next => action => {

    let result = next(action);

    if (action.type === 'FINISH_OR_NEXT') {
        let state = store.getState();
        let nextIndex = state.currentQuizQuestionIndex + 1;
        // let last = false;
        // if(nextIndex + 1 === state.questionLimit) {
        //     last = true;
        // }

        let nextQuestion = null;
        if (nextIndex < state.questionLimit) {
            nextQuestion = state.questions[nextIndex];
        }

        if (nextQuestion) {
            console.log("next verildi");
            result = next({type: 'SET_NEXT_QUESTION', payload: action.payload})
        } else {
            result = next({type: 'FINISH_QUIZ', payload: action.payload})
        }
    }


    // console.group(action.type)
    // console.info('dispatching', action)
    // let result = next(action)
    // console.log('next state', store.getState())
    // console.groupEnd()
    return result
}
