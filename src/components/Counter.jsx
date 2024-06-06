import {useSelector, useDispatch} from "react-redux";
import { counterActions } from "../store/counterReducer";

const Counter = () => {

    const counter = useSelector(state => state.counter.counter);
    const isShow = useSelector(state => state.counter.isShow);
    const dispatch = useDispatch();

    const increaseHandler = () => {
        dispatch(counterActions.increase());
    }
    const decreaseHandler = () => {
        dispatch(counterActions.decrease());
    }
    const increaseMoreHandler = () => {
        dispatch(counterActions.increaseMore(5));
    }
    const counterHandler = () => {
        dispatch(counterActions.toggle())
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
