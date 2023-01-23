import React from "react";
import App from "../App";
import Button from "../Components/UI/Button/Button";
import { shallow, mount } from "enzyme";

import "./setupTest";

var wrapper;
describe('Testing App Component', () => {

   // App Component renders without crashing 
    test('testcase1', () => {
        wrapper = mount(<App />);
        expect(wrapper.instance()).toBeDefined();
        wrapper.unmount();
    });

    // Testing the Start Quiz button 

    test('testcase2', () => {
        wrapper = mount(<App />);
        expect(wrapper.find('h1').text()).toBe('Quizz App');
        expect(wrapper.find('button').instance()).toBeDefined();
        wrapper.unmount();
    });

    // Checking the UI after clicking the Start Quiz button

    test('testcase3', () => {
        wrapper = mount(<App />);
        wrapper.find('button').simulate('click')
        wrapper.find('button').forEach(node => {
            expect(node.text()).not.toBe('Start Quiz');
        })
        wrapper.unmount();
    });

    // After finishing all the questions, checking whether the show result button shows up

    test('testcase4', () => {
        wrapper = mount(<App />);
        wrapper.find('button').simulate('click')
        wrapper.find('button').forEach(node => {
            expect(node.simulate('click'));
        });
        
        expect(wrapper.find('button').last().text()).toBe('Show Results');
        wrapper.unmount();
    });

    // checking the Banner component works after clicking the Show Results button

    test('testcase5', () => {
        wrapper = mount(<App />);
        wrapper.find('button').simulate('click')
        wrapper.find('button').forEach(node => {
            expect(node.simulate('click'));
        });
        wrapper.find('button').last().simulate('click');
        expect(wrapper.find('button').text()).toBe('Start Quiz');

        // wrapper.instance().setScore(
        //     5
        // );

        expect(wrapper.find('Banner').text()).toEqual("You have answered 3/5 correctly")

    })
      // render the button without any error
    
    //   test('testcase8', () => {
    //     const wrapper = shallow(<Button />);
    //     expect(wrapper.instance()).toBeDefined();
    // })

    // // displays the correct text inside the component

    // test('testcase9', () => {
    //     const TestingInput = 'Button Works'
    // const wrapper = shallow(<Button>{TestingInput}</Button>)
    //     expect(wrapper.props().children).toBe(TestingInput)
    // })
})