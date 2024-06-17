const initialState = {
    count: 0,
  };
  
  const counterReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return {
          ...state,
          count: state.count + action.payload,
        };
      case 'DECREMENT':
        return {
          ...state,
          count: Math.max(0, state.count - action.payload),
        };
      case 'RESET':
        return {
          ...state,
          count: 0,
        };
      default:
        return state;
    }
  };
  
  export const increment = (value) => ({
    type: 'INCREMENT',
    payload: value,
  });
  
  export const decrement = (value) => ({
    type: 'DECREMENT',
    payload: value,
  });
  
  export const reset = () => ({
    type: 'RESET',
  });
  
  export default counterReducer;