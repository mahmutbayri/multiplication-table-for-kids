export default (store) => (next) => (action) => {
    let result = next(action);
    if (action.type === 'FINISH_OR_NEXT') {
        const state = store.getState();
        const nextIndex = state.currentQuizQuestionIndex + 1;
        let nextQuestion = null;
        if (nextIndex < state.questionLimit) {
            nextQuestion = state.questions[nextIndex];
        }
        result = nextQuestion
            ? next({type: 'SET_NEXT_QUESTION', payload: action.payload})
            : next({type: 'FINISH_QUIZ', payload: action.payload});
    }
    return result;
};
