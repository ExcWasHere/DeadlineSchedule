import Loader from "../components/loader";
import SEO from "../components/SEO";

export default function LoaderPage() {
  return (
    <>
      <SEO
        title="DeadlineHunter | Loading..."
        description="Memuat aplikasi DeadlineHunter, mohon tunggu sebentar."
      />
      <Loader />
    </>
  );
}
