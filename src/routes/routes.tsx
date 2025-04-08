import { createBrowserRouter, useLocation } from 'react-router-dom';
import {
  EcommerceDashboardPage,
  MarketingDashboardPage,
  PasswordResetPage,
  ProjectsDashboardPage,
  SignInPage,
  SignUpPage,
  WelcomePage,
} from '../pages';
import {
  CorporateLayout,
  DashboardLayout,
  GuestLayout,
  UserAccountLayout,
} from '../layouts';
import React, { ReactNode, useEffect } from 'react';


// Custom scroll restoration function
export const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    }); // Scroll to the top when the location changes
  }, [pathname]);

  return null; // This component doesn't render anything
};

type PageProps = {
  children: ReactNode;
};

// Create an HOC to wrap your route components with ScrollToTop
const PageWrapper = ({ children }: PageProps) => {
  return (
    <>
      <ScrollToTop />
      {children}
    </>
  );
};

// Create the router
const router = createBrowserRouter([
  {
    path: '/',
    // element: <PageWrapper children={<GuestLayout />} />,
    children: [
      {
        index: true,
        path: '',
        element: <SignInPage/>
      },
    ],
  },
  {
    path: '/dashboards',
    element: <PageWrapper children={<DashboardLayout />} />,
    children: [
      {
        path: 'user',
        element: <ProjectsDashboardPage />,
      },
      {
        path: 'ecommerce',
        element: <EcommerceDashboardPage />,
      },
      {
        path: 'marketing',
        element: <MarketingDashboardPage />,
      },

    ],
  },
  {
    path: '/auth',
    children: [
      {
        path: 'signup',
        element: <SignUpPage />,
      },
      {
        path: 'signin',
        element: <SignInPage />,
      },
      {
        path: 'welcome',
        element: <WelcomePage />,
      },
      {
        path: 'password-reset',
        element: <PasswordResetPage />,
      },
    ],
  },
]);

export default router;
