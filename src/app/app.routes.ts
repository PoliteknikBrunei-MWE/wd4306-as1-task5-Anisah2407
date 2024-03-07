import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'places',
    loadComponent: () =>
      import('./places/places.page').then((m) => m.PlacesPage),
  },
  {
    path: '',
    redirectTo: 'places',
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
      import('./place-detail/place-detail.page').then((m) => m.PlaceDetailPage),
  },
  {
    path: 'offers',
    loadComponent: () =>
      import('./offers/offers.page').then((m) => m.OffersPage),
  },
  {
    path: 'offer-details',
    loadComponent: () =>
      import('./offer-details/offer-details.page').then(
        (m) => m.OfferDetailsPage
      ),
  },
  {
    path: 'offer-booking',
    loadComponent: () =>
      import('./offer-booking/offer-booking.page').then(
        (m) => m.OfferBookingPage
      ),
  },
  {
    path: 'new-offers',
    loadComponent: () =>
      import('./new-offers/new-offers.page').then((m) => m.NewOffersPage),
  },
  {
    path: 'bookings',
    loadComponent: () =>
      import('./bookings/bookings.page').then((m) => m.BookingsPage),
  },
];
