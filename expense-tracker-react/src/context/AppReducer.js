// Reducer: specify app state changes in response to actions on context
export default (state, action) => {
  switch (action.type) {
    case 'DELETE_TRANSACTION':
      console.log('');
      console.log('DELETE_TRANSACTION');
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id != action.payload
        ),
      };
    case 'ADD_TRANSACTION':
      console.log('');
      console.log('***AppReducer.ADD_TRANSACTION***');
      // console.log('action.payload.id = ' + action.payload.id);
      // console.log('action.payload.text = ' + action.payload.text);
      // console.log('action.payload.amount = ' + action.payload.amount);
      // console.log('[...state.transactions, action.payload].map((t) = ');
      // [...state.transactions, action.payload].map((t) => {
      //   console.log('t.id = ' + t.id);
      //   console.log('t.text = ' + t.text);
      //   console.log('t.amount = ' + t.amount);
      // });
      //console.log('');
      
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };

    default:
      return state;
  }
};
