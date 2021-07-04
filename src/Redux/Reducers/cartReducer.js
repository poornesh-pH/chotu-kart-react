const defaultCart = [];

export default (state = defaultCart, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.item];
    case 'EDIT_CART':
      return state.map((i)=>{
       if(i.id == action.item.id){
        return {...action.item}
       }
      })
    case 'REMOVE_FROM_CART':
      return state.filter(item => item.id !== action.id);
    default:
      return state;
  }
};
