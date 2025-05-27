import './index.scss';
import { RouterProvider } from 'react-router-dom';
import * as ReactDOM from 'react-dom/client';
import router from './routes';

const root = document.getElementById('root');
if (root) {
  ReactDOM.createRoot(root).render(<RouterProvider router={router} />);
}