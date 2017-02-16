import {expect} from 'chai';
import sinon from 'sinon';

import promiseReduxSimple from '../index';
import configureStore from 'redux-mock-store';
const mockStore = configureStore();

describe('PromiseReduxSimple', () => {

    it('should skip actions with non-promise payloads', () => {
        var action = {
            type: 'GET_USERS',
            payload: 'somestring'
        }         

        var expectedActions = [
            action
        ];             
        var store = mockStore({});
        store.dispatch(action)         
        expect(expectedActions).to.eql(store.getActions())
    });

    it('should handle actions with promise payloads', () => {
        const obj = {
            data: ['foo', 'bar']
        }       
        var promise = new Promise(function(resolve, reject){            
                resolve(obj);    
            }) 

        var action = {
            type: 'GET_USERS',
            payload: promise
        }            

        var expectedActions = [
            {
                type: 'GET_USERS',
                payload: obj.data
            }
        ];             
        var store = mockStore({});
        store.dispatch(action)         
        expect(expectedActions).to.eql(store.getActions())
    });
});
