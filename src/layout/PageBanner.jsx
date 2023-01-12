import Link from "next/dist/client/link";
import useTranslation from "next-translate/useTranslation";
const PageBanner = ({ pageTitle, motherTitle, url }) => {
  const { t } = useTranslation('common');
  return (
    <div id="breadcrumb" className="division">
      <div className="container">
        <div className="row">
          <div className="col d-flex align-items-center justify-content-center">
            <div className="breadcrumb-holder d-flex align-items-center flex-column">
              {/* Breadcrumb Nav */}
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item ">
                    <Link href="/">{t("header-home")}</Link>
                  </li>
                  {motherTitle && (
                    <li className="breadcrumb-item">
                      <a href={`/${url}`}>{motherTitle}</a>
                    </li>
                  )}
                  <li className="breadcrumb-item active" aria-current="page">
                    {pageTitle}
                  </li>
                </ol>
              </nav>
              {/* Title */}
              <h4 className="h4-sm steelblue-color">{pageTitle}</h4>
            </div>
          </div>
        </div>{" "}
        {/* End row */}
      </div>{" "}
      {/* End container */}
    </div>
  );
};

export default PageBanner;
