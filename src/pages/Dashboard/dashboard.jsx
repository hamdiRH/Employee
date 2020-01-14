import React, { useEffect } from "react";
import Modal from "./modal"
import Table from "./table";

import LoadingWraper from "../../utils/LoadingWrapper";
// import Modal from "../modal";

const EmploymentList = ({
  deleteEmployments,
  fetchEmployments,
  addEmployment,
  updateEmployment,
  history,
  data,
  loading
}) => {
  useEffect(() => {
    fetchEmployments();
  }, [fetchEmployments]);

  const oneRowItemSkeleton = (loading, active = true) => ({
    active,
    title: { rows: 1, width: "80%" },
    paragraph: true,
    loading
  });
  return (
    <div>
      <div className="table-operations">{/* <Modal /> */}</div>
      <LoadingWraper skeletonConfig={oneRowItemSkeleton(loading)}>
          <Modal addEmployment={addEmployment}/>
        <Table
          data={data}
          deleteEmployments={deleteEmployments}
          updateEmployment={updateEmployment}
          history={history}
        />
      </LoadingWraper>
    </div>
  );
};

export default EmploymentList;
