import { createBrowserRouter } from 'react-router';
import App from '@/App.jsx';
import PageHome from '@/components/PageHome.jsx';
import PageCart from '@/components/PageCart.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      {
        path: '',
        Component: PageHome,
      },
      {
        path: 'cart',
        Component: PageCart, 
      },
    ]
  },
]);

export default router;