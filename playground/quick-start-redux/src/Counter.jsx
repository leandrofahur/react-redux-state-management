import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./counterSlice";
import "./Counter.css";

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const disspatch = useDispatch();

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          disspatch(increment());
        }}
      >
        Increase
      </button>
      <span>{count}</span>
      <button
        type="button"
        onClick={() => {
          disspatch(decrement());
        }}
      >
        Decrease
      </button>
    </div>
  );
}
