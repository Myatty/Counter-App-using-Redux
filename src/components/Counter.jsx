import {useSelector, useDispatch} from "react-redux";

const Counter = () => {

    const counter = useSelector(state => state.counter);
    const isShow = useSelector(state => state.isShow);
    const dispatch = useDispatch();

    const increaseHandler = () => {
        dispatch({ type: "increase"});
    }
    const decreaseHandler = () => {
        dispatch({ type: "decrease"});
    }
    const increaseMoreHandler = () => {
        dispatch({type: "increaseMore" , amount: 5});
    }
    const counterHandler = () => {
        dispatch({type: "toggleCounter"})
    }

  return (
    <section>
      <h2>Redux Counter</h2>
      {
        isShow && <h1>{counter}</h1>
      }
      <hr />
      <div className="btn-div">
        <button onClick={increaseHandler}>Increase</button>
        <button onClick={increaseMoreHandler}>Increase By 5</button>
        <button onClick={decreaseHandler}>Decrease</button>
        {
            isShow && <button onClick={counterHandler}>Hide Counter</button>
        }
        {
            !isShow && <button onClick={counterHandler}>Show Counter</button>
        }
      </div>
    </section>
  );
};

export default Counter;
