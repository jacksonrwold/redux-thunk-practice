const initialState = {
    counter:0,
    foo:true
}

export const thunkFunction = () => (dispatch, getState) => {
    // I understand this thunk isn't really taking advantage of what a thunk can do, but I just wanted to create a basic redux app with a thunk in it
    const foo = getState().foo
    
    if (foo === true) {
        return dispatch({type: "MAKE_FALSE"})
    } else if (foo === false) {
        return dispatch({type: "MAKE_TRUE"})
    }
}

function rootReducer(state = initialState, action) {
    switch(action.type) {
        case "INCREMENT" :
            return { counter: state.counter + 1, foo: state.foo}
        case "DECREMENT" :
            return { counter: state.counter - 1, foo: state.foo}
        case "MAKE_FALSE":
            return { counter: state.counter, foo: false }
        case "MAKE_TRUE":
            return { counter: state.counter, foo: true }

        default:
            return state
    }
}

export default rootReducer