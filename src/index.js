import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter,RouterProvider} from "react-router-dom";

import TherapistFinal from './therapist/therapist.js';
import Tips from "./tips/tips.js"
import Booking from './booknow/booknow.js';
import Home from './home/HomePage.js';
import AboutUs from './about/AboutUs.js';
import Testimonial from './testimonial/testimonial.js';
import RehabEvent from './rehab_event/rehab.js';
import RehabForm from './rehab_form/rehab_form.js';

const router = createBrowserRouter(
  [
    {
      path:"/",
      element:<Home />
    },
    {
      path:'tips',
      element:<Tips />
    },
    {
      path:'booknow',
      element:<Booking />
    },
    {
      path:'home',
      element:<Home />
    },
    {
      path:'about',
      element:<AboutUs />
    },
    {
      path:'therapists',
      element:<TherapistFinal />
    },
    {
      path:'testimonials',
      element:<Testimonial />
    },
    {
      path:'rehab',
      element:<RehabEvent />
    },
    {
      path:'rehab_form',
      element:<RehabForm />
    }

  ])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
