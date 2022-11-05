import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import WebRoutes from './routes/WebRoutes';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <WebRoutes />
    </BrowserRouter>
  );
}

export default App;
