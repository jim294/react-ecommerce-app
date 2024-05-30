import React from "react";
import BreadCrumb from "../components/BreadCrumb.js";
import Meta from "../components/Meta.js";

const RefundPolicy = () => {
  return (
    <>
      <Meta title={"Refund Policy"} />
      <BreadCrumb title="Refund Policy" />
      <section className="policy-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
            <div className="row">
                <div className="col-12">
                    <div className="policy"></div>
                </div>
            </div>
        </div>
      </section>
    </>
  );
};

export default RefundPolicy;
