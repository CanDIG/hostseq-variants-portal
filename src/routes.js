/*!

=========================================================
* Paper Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.

*/
import VariantsSearch from './views/VariantsSearch';
import Help from './views/Help';
import ErrorPageNotFound from 'views/ErrorPageNotFound';


const routes = [
  {
    path: '/variants-search',
    name: 'Variants Search',
    icon: 'nc-icon nc-zoom-split',
    component: VariantsSearch,
    layout: '/dashboard',
  },
  {
    path: '/help',
    name: 'Help',
    icon: 'nc-icon nc-alert-circle-i',
    component: Help,
    layout: '/dashboard',
  },
  {
    path: '*',
    name: 'ErrorPageNotFound',
    icon: 'nc-icon nc-alert-circle-i',
    component: ErrorPageNotFound,
    layout: '/dashboard',
  },

];
export default routes;
