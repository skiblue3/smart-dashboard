import { HiOutlineViewGrid, HiLightningBolt } from 'react-icons/hi';
import { IoCloud, IoLogInOutline, IoSunny, IoWater } from 'react-icons/io5';

export const DASHBOARD_SIDEBAR_LINKS = [
  {
    key: 'dashboard',
    label: 'Dashboard',
    path: '/',
    icon: <HiOutlineViewGrid />
  },
  {
    key: 'Solar Energy Data',
    label: 'Solar Energy Data',
    path: '/solardata',
    icon: <IoSunny />
  },
  {
    key: 'Smart Meter',
    label: 'Smart Meter',
    path: '/smartmeter',
    icon: <HiLightningBolt />
  },
  {
    key: 'Weather Report',
    label: 'Weather Report',
    path: '/weather',
    icon: <IoCloud />
  },
  {
    key: 'Water Motor',
    label: 'Water Motor',
    path: '/watermotor',
    icon: <IoWater />
  }
  // {
  // 	key: 'messages',
  // 	label: 'Messages',
  // 	path: '/messages',
  // 	icon: <HiOutlineAnnotation />
  // }
];

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
  // {
  // 	key: 'support',
  // 	label: 'Help & Support',
  // 	path: '/support',
  // 	icon: <HiOutlineQuestionMarkCircle />
  // },
  {
    key: 'login',
    label: 'Login',
    path: '/login',
    icon: <IoLogInOutline />
  },
  {
    key: 'logout',
    label: 'Logout',
    path: '/logout',
    icon: <IoLogInOutline />
  }
];
