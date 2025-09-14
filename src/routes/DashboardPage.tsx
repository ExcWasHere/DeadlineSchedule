import Dashboard from "../components/dashboard";
import SEO from "../components/SEO";

export default function DashboardPage() {
  return (
    <>
      <SEO
        title="DeadlineHunter | Dashboard"
        description="Dashboard application to track your deadlines effectively."
        keywords="deadline, schedule, tasks, reminders"
        author="Exc"
      />
      <Dashboard />
    </>
  );
}
