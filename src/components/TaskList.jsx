import { useSelector, useDispatch } from "react-redux"
import { listActions } from "../redux/listSlice";
import { formActions } from "../redux/formSlice";

export default function TaskList() {
  const dispatch = useDispatch();
  const items = useSelector((store) => store.listSlice.items);
  const filter = useSelector((store) => store.filterSlice.filter);
  
  const handleEdit = (item) => {
    dispatch(formActions.change({type: 'name', value: item.name}));
    dispatch(formActions.change({type: 'price', value: item.price}));
  }

  const handleRemove = (id) => {
    dispatch(listActions.deleteItem(id));
  }
  
  let filteredList = [];
  let noMatch = null;

  if (filter !== '' && filter !== undefined) {
    items.filter((item) => {
      if (!item.name.startsWith(filter)) {
        return noMatch = 'Нет совпадений, попробуйте изменить поиск';
      } 
      else {
        noMatch = null;
        return filteredList.push(item);
      }
    });

    return (
      (noMatch !== null) ? 
      <div>{noMatch}</div> : 
      <ul className='list'>
        {filteredList.map(item => (
          <li key={item.id} style={{marginTop: 10}}>
            <div style={{display: 'inline-block', width: 200}}>
              {item.name}
            </div>
            <div style={{display: 'inline-block', width: 100}}>
              {item.price}
            </div>
            <button onClick={() => handleEdit(item)}>✎</button>
            <button onClick={() => handleRemove(item.id)}>X</button>
          </li>
        ))}
      </ul>
    )
  }

  return (
    <ul className='list'>
      {items && 
        items.map(item => (
          <li key={item.id} style={{marginTop: 10}}>
            <div style={{display: 'inline-block', width: 200}}>
              {item.name}
            </div>
            <div style={{display: 'inline-block', width: 100}}>
              {item.price}
            </div>
            <button onClick={() => handleEdit(item)}>✎</button>
            <button onClick={() => handleRemove(item.id)}>X</button>
          </li>
        ))}
    </ul>
  )
}
