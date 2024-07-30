import { createCampaign, dashboard, logout, payment, profile, withdraw } from '../assets';

export const navlinks = [
  {
    name: 'dashboard',
    imgUrl: dashboard,
    link: '/',
  },
  {
    name: 'campaign',
    imgUrl: createCampaign,
    link: '/create-campaign-theta',
  },
  {
    name: 'create',
    imgUrl: payment,
    link: '/create-campaign',
  },
  {
    name: 'shows',
    imgUrl: withdraw,
    link: '/shows',
    disabled: false,
  },
  {
    name: 'logout',
    imgUrl: logout,
    link: '/',
    disabled: true,
  },
];
