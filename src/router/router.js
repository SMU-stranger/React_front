import { createBrowserRouter } from "react-router-dom";
import React, { lazy } from "react";

import Layout from "../layout/Layout";

const HealthProgram = lazy(() => import("../page/healthprogram/HealthProgram"));
const Inquiry = lazy(() => import("../page/reservation/Inquiry"));
const Acceptance = lazy(() => import("../page/acceptance/Acceptance"));
const Floor = lazy(() => import("../page/floorinfo/floorinfo"));
const CheckInTwoStep = lazy(() => import("../page/checkin/CheckInTwoStep"));
const Consultation = lazy(() => import("../page/consultation/Consultation"));
const Home = lazy(() => import("../page/home/Home"));
const PatientInfo = lazy(() => import("../page/consultation/PatientInfo"));
const CheckIn = lazy(() => import("../page/checkin/CheckInOneStep"));
const Reservation = lazy(() => import("../page/reservation/Reservation"));
const Appointment = lazy(() => import("../page/reservation/Appointment"));
const Settings = lazy(() => import("../page/settings/Settings"));
const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "checkIn",
        element: <CheckIn />,
      },
      {
        path: "checkInTwoStep",
        element: <CheckInTwoStep />,
      },

      {
        path: "consultation",
        element: <Consultation />,
      },
      {
        path: "patient/:phoneNumber",
        element: <PatientInfo />,
      },
      {
        path: "acceptance",
        element: <Acceptance />,
      },
      {
        path: "healthProgram",
        element: <HealthProgram />,
      },
      {
        path: "floorInformation",
        element: <Floor />,
      },
      {
        path: "reservation",
        element: <Reservation />,
      },
      {
        path: "inquiry",
        element: <Inquiry />,
      },

      {
        path: "appointment",
        element: <Appointment />,
      },

      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },
]);
export default router;
