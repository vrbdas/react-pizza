import './index.scss';
import { RouterProvider } from 'react-router-dom';

import React from 'react';
import ReactDOM from 'react-dom/client';
import router from './routes.jsx';

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(<RouterProvider router={router} />);
