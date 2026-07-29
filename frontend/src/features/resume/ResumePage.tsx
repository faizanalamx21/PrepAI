import DashboardSidebar from "../../components/dashboard/DashboardSidebar";
import DashboardNavbar from "../../components/dashboard/DashboardNavbar";
import ResumeUpload from "./ResumeUpload";

export default function ResumePage() {
  return (
    <div className="flex min-h-screen bg-slate-950">

      <DashboardSidebar />

      <div className="flex-1">

        <DashboardNavbar />

        <main className="p-8">

          <ResumeUpload />

        </main>

      </div>

    </div>
  );
}