// import HelloWorld from '@/views/HelloWorld';
const HelloWorld = () => import('@/views/HelloWorld');

const routes = [
  {
    path: '/',
    name: 'Hello',
    component: HelloWorld,
  },
];

export default routes;
