//config
import config from 'src/config';

//Pages
import Home from 'src/pages/Home';
import Village from 'src/pages/Village';
import Product from 'src/pages/Product';
import Introduce from '~/pages/Introduce';
import Contact from '~/pages/Contact';

const publicRoutes = [
  {
    path: config.routes.home,
    component: Home,
  },
  {
    path: config.routes.villages,
    component: Village,
  },
  {
    path: config.routes.products,
    component: Product,
  },
  {
    path: config.routes.introduce,
    component: Introduce,
  },
  {
    path: config.routes.contact,
    component: Contact,
  },
];

const privateRoutes: never[] = [];

export { publicRoutes, privateRoutes };
