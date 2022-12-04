import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import { useState } from "react";
import uuid from "react-uuid";
import { CONFIG } from "../../src/config";
import Layout from "../../src/layout/Layout";

const Service = () => {
  const { asPath } = useRouter();
  const pageUrl = asPath.substring(1);
  const { t } = useTranslation("common");
  const [selected, setSelected] = useState(0);

  return (
    <Layout>
      <section id="tabs-2" className="wide-100 tabs-section division">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="list-group text-center clearfix">doctors</div>
            </div>
            <div className="col-lg-8">
              <h1>{"Namena"}</h1>
              descriptionna
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Service;
