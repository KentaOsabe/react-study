import { useReducer } from 'react';

export default function HookReducerUp({ init }) {
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case 'update':
          console.log(state.count + action.step);
          return { count: state.count + action.step };
        case 'reset' :
          console.log('Reset!!');
          return { count: action.init };
        default:
          console.log('Iya!!');
          return state;
      }
    },
    {
        count: init
    }
  );
  const handleUp = () => dispatch({ type: 'update', step: 1 });
  const handleDown = () => dispatch({ type: 'update', step: -1 });
  const handleReset = () => dispatch({ type: 'reset', init: 0 });

  return (
  <>
    <button onClick={handleUp}>カウントアップ</button>
    <button onClick={handleDown}>カウントダウン</button>
    <button onClick={handleReset}>リセット</button>
    <p>{state.count}回、クリックされました。</p>
  </>
  );
}