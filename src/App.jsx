import { Button } from "@mui/material";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addCount } from "./features/dummy/countSlice";

function App() {
  const { count } = useSelector((store) => store.testCount);
  const dispatch = useDispatch();

  return <Button onClick={() => dispatch(addCount())}>count is {count}</Button>;
}

export default App;
