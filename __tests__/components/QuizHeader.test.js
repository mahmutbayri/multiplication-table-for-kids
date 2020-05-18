import React from 'react';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import QuizHeader from '../../src/components/QuizHeader';
import {describe, expect} from "@jest/globals";

const mockStore = configureStore([]);
// https://www.robinwieruch.de/react-connected-component-test
// https://reactjs.org/docs/test-renderer.html
let store = mockStore({
    currentStudentsData: {
        userName: 'some name',
        userId: 1,
        userScore: 4,
    },
})

describe('Quiz Header component', () => {
    test('accessible test', () => {
        const component = renderer.create(
            <Provider store={store}>
                <QuizHeader/>
            </Provider>
        );
        expect(component.root.findByType('h5').children).toEqual(['some name']);
    });
});
