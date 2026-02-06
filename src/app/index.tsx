import './styles/main.scss';

import { MainPage } from 'pages';
import { Layout } from 'widgets';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { AboutPage } from 'pages/about-page';
import { EquipmentPage } from 'pages/equipment-page';
import { ReviewsPage } from 'pages/reviews-page';
import { TariffsPage } from 'pages/tariffs-page';

import { RoutesPath } from 'shared/routes-path';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: Infinity,
    },
  },
});

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Pages />
      </BrowserRouter>
      <ToastContainer closeOnClick theme="colored" />
    </QueryClientProvider>
  );
};

const Pages = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path={RoutesPath.MAIN} element={<MainPage />} />
        <Route path={RoutesPath.ABOUT} element={<AboutPage />} />
        <Route path={RoutesPath.EQUIPMENT} element={<EquipmentPage />} />
        <Route path={RoutesPath.REVIEWS} element={<ReviewsPage />} />
        <Route path={RoutesPath.TARIFFS} element={<TariffsPage />} />
      </Route>
      <Route path="*" element={<Navigate replace to={RoutesPath.MAIN} />} />
    </Routes>
  );
};
