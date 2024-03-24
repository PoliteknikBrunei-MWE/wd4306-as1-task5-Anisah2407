import { Routes } from '@angular/router';
import { TabsPage } from './tabs/tabs.page';

export const routes: Routes = [
  {
    path: 'auth',
    loadComponent: () => import('./auth/auth.page').then((m) => m.AuthPage),
  },
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadComponent: () => import('./auth/auth.page').then((m) => m.AuthPage),
  },
  {
    path: 'places',
    loadComponent: () =>
      import('./places/places.page').then((m) => m.PlacesPage),
  },
  {
    path: 'place-detail',
    loadComponent: () =>
      import('./places/place-detail/place-detail.page').then(
        (m) => m.PlaceDetailPage
      ),
  },
  {
    path: 'offers',
    loadComponent: () =>
      import('./offers/offers.page').then((m) => m.OffersPage),
  },

  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'places',
        loadComponent: () =>
          import('./places/places.page').then((m) => m.PlacesPage),
      },
      {
        path: 'offers',
        loadComponent: () =>
          import('./offers/offers.page').then((m) => m.OffersPage),
      },
    ],
  },
  {
    path: 'places',
    redirectTo: '/tabs/places',
    pathMatch: 'full',
  },

  {
    path: 'offer-details',
    loadComponent: () =>
      import('./offers/offer-details/offer-details.page').then(
        (m) => m.OfferDetailsPage
      ),
  },
  {
    path: 'booking',
    loadComponent: () =>
      import('./bookings/bookings.page').then((m) => m.BookingsPage),
  },
  {
    path: 'offer-bookings',
    loadComponent: () =>
      import('./offers/offer-booking/offer-booking.page').then(
        (m) => m.OfferBookingPage
      ),
  },

  {
    path: 'new-offers',
    loadComponent: () =>
      import('./offers/new-offers/new-offers.page').then(
        (m) => m.NewOffersPage
      ),
  },
  {
    path: 'tabs',
    loadComponent: () => import('./tabs/tabs.page').then((m) => m.TabsPage),
  },
];
