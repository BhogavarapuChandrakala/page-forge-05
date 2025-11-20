import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import VerifyEmail from "./pages/VerifyEmail";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import FindJob from "./pages/FindJob";
import JobDetails from "./pages/JobDetails";
import FindEmployers from "./pages/FindEmployers";
import EmployerDetails from "./pages/EmployerDetails";
import FindCandidate from "./pages/FindCandidate";
import Dashboard from "./pages/Dashboard";
import AppliedJobs from "./pages/AppliedJobs";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/verify-email" element={<VerifyEmail />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/find-job" element={<FindJob />} />
          <Route path="/job/:id" element={<JobDetails />} />
          <Route path="/find-employers" element={<FindEmployers />} />
          <Route path="/employer/:id" element={<EmployerDetails />} />
          <Route path="/find-candidate" element={<FindCandidate />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/applied-jobs" element={<AppliedJobs />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
