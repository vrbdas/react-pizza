import { createBrowserRouter } from 'react-router';
import App from '@/App';
import PageHome from '@/components/PageHome';
import PageCart from '@/components/PageCart';
import PageOrder from '@/components/PageOrder';
import PageDelivery from '@/components/PageDelivery';
import PageNotFound from '@/components/PageNotFound';
import PageOrderSuccess from '@/components/PageOrderSuccess';
import PageProfile from '@/components/PageProfile';

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
      {
        path: 'delivery',
        Component: PageDelivery,
      },
      {
        path: 'order-success',
        Component: PageOrderSuccess,
      },
      {
        path: 'profile',
        Component: PageProfile,
      },
      {
        path: '*',
        Component: PageNotFound,
      },
    ],
  },
]);

export default router;
