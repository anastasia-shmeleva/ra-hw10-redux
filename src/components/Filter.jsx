import { useSelector, useDispatch } from "react-redux";
import { filterActions } from "../redux/filterSlice";

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector((store) => store.filterSlice.filter);

  const handleChange = (event) => {
    const { value } = event.target;
    dispatch(filterActions.change(value));
  }

  return (
    <form style={{marginTop: 10}}>
      <input 
        name='filter'
        value={filter}
        onChange={handleChange}
        style={{width: 408}}
      />
    </form>
  )
}
