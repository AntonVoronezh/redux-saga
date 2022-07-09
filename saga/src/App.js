import { useSelector, useDispatch } from "react-redux";
import { decreaseCount, increaseCount } from "./redux/actions/actionCreator";

const App = () => {
  const count = useSelector((store) => store.counter.count);
  const dispatch = useDispatch();

  const handlePlus = () => {
    dispatch(increaseCount());
  };
  const handleMinus = () => {
    dispatch(decreaseCount());
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handlePlus}>+++</button>
      <button onClick={handleMinus}>---</button>
    </div>
  );
};
export default App;
