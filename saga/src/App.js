import { useSelector, useDispatch } from "react-redux";
import {decreaseCount, getLatestNews, increaseCount} from "./redux/actions/actionCreator";

const App = () => {
  const count = useSelector((store) => store.counter.count);
  const dispatch = useDispatch();

  const handlePlus = () => {
    dispatch(increaseCount());
  };
  const handleMinus = () => {
    dispatch(decreaseCount());
  };
  const handleNews = () => {
    dispatch(getLatestNews());
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handlePlus}>+++</button>
      <button onClick={handleMinus}>---</button>
      <button onClick={handleNews}>add news</button>
    </div>
  );
};
export default App;
