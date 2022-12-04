import AppointmentPage from "../src/components/Appointment/AppointmentPage";
import Layout from "../src/layout/Layout";
import PageBanner from "../src/layout/PageBanner";

const Appointment = () => {
  return (
    <Layout>
      <PageBanner pageTitle="Appointment" />
      <AppointmentPage />
    </Layout>
  );
};

export default Appointment;
