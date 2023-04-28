import Addtask from './Component/Addtask';
import ListTask from './Component/ListTask';
import {Provider} from 'react-redux';


import './App.css';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
     <ListTask/>
    </div>
    </Provider>
  );
}

export default App;
