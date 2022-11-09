import './App.css';
import { RouterProvider } from 'react-router-dom';
import routes from './Routes/Routes/Routes';
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <div>
      <RouterProvider
        router={routes}
      />
      <ToastContainer />
    </div>
  );
}

export default App;
