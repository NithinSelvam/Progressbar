import './App.css';
import Routes from './routes';
import { Provider } from 'react-redux';
import { getStore } from './model/store/Store';

function App() {
  return (
    <Provider store={getStore()}>
      <div className="App">
        <Routes />
      </div>
    </Provider>
  );
}

export default App;
