import { useReducer } from 'react';

export default function HookReducer({ init }) {
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case 'update':
          console.log(state.count);
          return { count: state.count + 1 };
        default:
          console.log('iya!!');
          return state;
      }
    },
    {
      count: init
    }
  );

  const handleClick = () => {
    dispatch({ type: 'update' });
  };

  return (
    <>
      <button onClick={handleClick}>カウント</button>
      <p>{state.count}回、クリックされました。</p>
    </>
  );
}