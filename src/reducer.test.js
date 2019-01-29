import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
 } from './constants';

 import * as reducers from './reducer';

 describe('searchRobots', () => {
     const initialStateSearch = {
         searchField: ''
     }
     it('should return the initial state',() => {
         expect(reducers.searchRobots(undefined, {})).toEqual(initialStateSearch)
     })

     it('should handle CHANGE_SEARCH_FIELD',() => {
        expect(reducers.searchRobots(
            initialStateSearch, {
                type: CHANGE_SEARCH_FIELD,
                payload: 'abc'
            }
        )).toEqual({ searchField: 'abc'})
    })
 })

 describe('requestRobots', () => {
     const initStateRobots = {
        isPending: false,
        robots: [],
        error: ''
     }

    it('should return the initial state',() => {
        expect(reducers.requestRobots(undefined, {})).toEqual(initStateRobots)
    })

    it('should handle REQUEST_ROBOTS_PENDING',() => {
        expect(reducers.requestRobots(
            initStateRobots, {
                type: REQUEST_ROBOTS_PENDING,
            }
        )).toEqual({ 
            robots: [],
            isPending: true,
            error: ''
        })
    })

    it('should handle REQUEST_ROBOTS_SUCCESS',() => {
        expect(reducers.requestRobots(
            initStateRobots, {
                type: REQUEST_ROBOTS_SUCCESS,
                payload: [{id: '3', name: 'john', email: 'john@gmai.com'}]
            }
        )).toEqual({ 
            robots: [{id: '3', name: 'john', email: 'john@gmai.com'}],
            isPending: false,
            error: ''
        })
    })

    it('should handle REQUEST_ROBOTS_FAILED',() => {
        expect(reducers.requestRobots(
            initStateRobots, {
                type: REQUEST_ROBOTS_FAILED,
                payload: 'error'
            }
        )).toEqual({ 
            robots: [],
            isPending: false,
            error: 'error'
        })
    })
 })