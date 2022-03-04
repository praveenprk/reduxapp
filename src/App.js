import logo from './logo.svg';
import './App.css';
import Counter from './features/Counter/Counter';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Orders from './features/Orders/Orders';
import Auth from './features/Auth/Auth';

function App() {
  return (
    //Here, you're saying that, Provide
    //me the store that I created
    //hence <Provider store={store}>
    
    <Provider store={store}>
      <div className="App">
        {/* <Counter/> */}
        {/* <Orders/> */}
        <Auth/>
      </div>
    </Provider>
  );
}

export default App;
