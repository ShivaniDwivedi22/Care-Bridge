import { createBrowserRouter } from "react-router";
import HomePage from "./pages/HomePage";
import SeekerFlow from "./pages/seeker/SeekerFlow";
import SeekerCategories from "./pages/seeker/SeekerCategories";
import SeekerDetails from "./pages/seeker/SeekerDetails";
import SeekerMatches from "./pages/seeker/SeekerMatches";
import SeekerCheckout from "./pages/seeker/SeekerCheckout";
import SeekerConfirmed from "./pages/seeker/SeekerConfirmed";
import SeekerProfilePage from "./pages/seeker/SeekerProfilePage";
import CarePlanPage from "./pages/seeker/CarePlanPage";
import FamilyDashboardPage from "./pages/seeker/FamilyDashboardPage";
import ProviderFlow from "./pages/provider/ProviderFlow";
import ProviderWhy from "./pages/provider/ProviderWhy";
import ProviderSignupPage from "./pages/provider/ProviderSignupPage";
import ProviderDashboardPage from "./pages/provider/ProviderDashboardPage";
import ProviderProfilePage from "./pages/provider/ProviderProfilePage";
import ProviderCalendarPage from "./pages/provider/ProviderCalendarPage";
import ProviderCommunicationPage from "./pages/provider/ProviderCommunicationPage";
import ProviderGrowthPage from "./pages/provider/ProviderGrowthPage";
import OurStoryPage from "./pages/OurStoryPage";
import FeatureRequestPage from "./pages/FeatureRequestPage";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/seeker",
    Component: SeekerFlow,
    children: [
      { index: true, Component: SeekerCategories },
      { path: "details", Component: SeekerDetails },
      { path: "matches", Component: SeekerMatches },
      { path: "checkout", Component: SeekerCheckout },
      { path: "confirmed", Component: SeekerConfirmed },
      { path: "profile", Component: SeekerProfilePage },
      { path: "care-plan", Component: CarePlanPage },
      { path: "dashboard", Component: FamilyDashboardPage },
    ],
  },
  {
    path: "/provider",
    Component: ProviderFlow,
    children: [
      { index: true, Component: ProviderWhy },
      { path: "signup", Component: ProviderSignupPage },
      { path: "dashboard", Component: ProviderDashboardPage },
      { path: "profile", Component: ProviderProfilePage },
      { path: "calendar", Component: ProviderCalendarPage },
      { path: "communication", Component: ProviderCommunicationPage },
      { path: "growth", Component: ProviderGrowthPage },
    ],
  },
  {
    path: "/our-story",
    Component: OurStoryPage,
  },
  {
    path: "/feature-request",
    Component: FeatureRequestPage,
  },
  {
    path: "*",
    Component: NotFound,
  },
]);