import AllDoctorsDoctors3 from "../src/components/All-doctors/AllDoctorsDoctors3";
import { getAllDoctors } from "../src/DataServices";
import Layouts from "../src/layout/Layouts";
import PageBanner from "../src/layout/PageBanner";

const AllDoctors = ({ data }) => {
  console.log(data);
  return (
    <Layouts>
      <PageBanner pageTitle="Meet the Doctors" />
      <AllDoctorsDoctors3 doctorsData={data.data} />
    </Layouts>
  )
};

export async function getServerSideProps() {

  const { data } = await getAllDoctors();
  console.log(data, " dataaaaaaaaaaa");
  return {
    props: {
      data
    }
  }

}
export default AllDoctors;
