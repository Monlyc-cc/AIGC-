import { createRoot } from 'react-dom/client'
import { unstableSetRender } from 'antd-mobile'; // Support since version ^5.40.0

import App from './App.jsx'
import './styles/global.css'

unstableSetRender((node, container) => {
  container._reactRoot ||= createRoot(container);
  const root = container._reactRoot;
  root.render(node);
  return async () => {
    await new Promise((resolve) => setTimeout(resolve, 0));
    root.unmount();
  };
});
createRoot(document.getElementById('root')).render(
    <App />
)
