import { createBrowserRouter } from 'react-router';
import App from '@/App';
import PageHome from '@/components/PageHome';
import PageCart from '@/components/PageCart';
import PageOrder from '@/components/PageOrder';

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
      {
        path: 'order',
        Component: PageOrder,
      },
    ],
  },
]);

export default router;