import Form from './components/Form';
import TaskList from './components/TaskList';
import Filter from './components/Filter';

function App() {
  return (
    <div className='container' style={{margin: 50}}>
      <Form></Form>
      <Filter></Filter>
      <TaskList></TaskList>
    </div>
  );
}

export default App;
