// Pages
import Home from '~/pages/Home';
import Ipad from '~/pages/Ipad';
import Iphone from '~/pages/Iphone';
import Mac from '~/pages/Mac';

// Public routes
export const publicRoutes = [
    { path: '/', component: Home },
    { path: '/iphone', component: Iphone },
    { path: '/ipad', component: Ipad },
    { path: '/mac', component: Mac },
];

// Private routes
export const privateRoutes = [];
