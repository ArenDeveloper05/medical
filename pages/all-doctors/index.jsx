import dynamic from "next/dynamic";
import useTranslation from "next-translate/useTranslation";
import { useState, useEffect } from "react";
import Pagination from "../../src/components/Pagination";
import { getDoctorsLength, getPaginateDoctors } from "../../src/DataServices";
const Layout = dynamic (() => import("../../src/layout/Layout"));
import PageBanner from "../../src/layout/PageBanner";
import { generateLanguage } from "../../src/utils";
import AllDoctors from "../../src/components/All-doctors/AllDoctors";
import { useCallback } from "react";

const AllDoctorsPage = () => {
  const { t, lang } = useTranslation("common");

  const [doctorsData, setDoctorsData] = useState([]);
  const [doctorsDataLoading, setDoctorsDataLoading] = useState(false);
  const [doctordDataError, setDoctorsDataError] = useState(false);

  const [dataLength, setDataLength] = useState(-1);
  const itemsPerPage = 10;
  const [selectedPage, setSelectedPage] = useState({
    page: 1,
    request: true,
  });

  const getPageDoctors = async (page) => {
    window.scrollTo({ top: 0 });
    setDoctorsDataLoading(true);
    try {
      const {
        data: { data },
      } = await getPaginateDoctors(generateLanguage(lang), itemsPerPage, page);
      setDoctorsData(data[0]);
      doctordDataError && setDoctorsDataError(false);
    } catch (error) {
      console.log(error);
      setDoctorsDataError(true);
    }
    setDoctorsDataLoading(false);
  };

  useEffect(() => {
    async function getDoctors() {
      setDoctorsDataLoading(true);
      try {
        const {
          data: { data },
        } = await getPaginateDoctors(generateLanguage(lang), itemsPerPage, 1);
        const length = await getDoctorsLength();
        setDataLength(length.data.data);
        setDoctorsData(data[0]);
        doctordDataError && setDoctorsDataError(false);
      } catch (error) {
        setDoctorsDataError(true);
      }
      setDoctorsDataLoading(false);
    }
    getDoctors();
  }, []);

  return (
    <Layout>
      <PageBanner pageTitle={t("banner.doctors")} />
      <AllDoctors
        doctorsData={doctorsData}
        setDoctorsData={setDoctorsData}
        doctorsDataLoading={doctorsDataLoading}
        setDoctorsDataLoading={setDoctorsDataLoading}
        doctordDataError={setDoctorsDataError}
        setDoctorsDataError={setDoctorsDataError}
        setDataLength={setDataLength}
        setSelectedPage={setSelectedPage}
      />
      <div style={{ width: "max-content", margin: "16px auto" }}>
        {dataLength !== -1 && (
          <Pagination
            dataLength={dataLength}
            itemsPerPage={itemsPerPage}
            getData={getPageDoctors}
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
      </div>
    </Layout>
  );
};

export default AllDoctorsPage;
