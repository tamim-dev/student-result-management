import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Space, Table, Tag } from "antd";
import logo from "../assets/logo.svg";

const Result = () => {
  const location = useLocation();
  const user_data = location.state?.user_data;
  let [subject, setSubject] = useState([]);

  useEffect(() => {
    let data = [];

    user_data.subjects.map((item, index) => {
      console.log("kk", item);
      data.push({
        ...item,
      });
    });
    setSubject(data);
  }, []);

  const columns = [
    {
      title: "Code",
      dataIndex: "subjectcode",
    },
    {
      title: "Subject",
      dataIndex: "subjectname",
    },
    {
      title: "GPA",
      dataIndex: "gpa",
    },
    {
      title: "Score",
      dataIndex: "score",
    },
  ];

  const handlePrint = () => {
    window.print();
  };

  return (
    <section>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          background: "#ec7241",
          padding: "20px",
        }}
      >
        <img style={{ width: "100px", marginBottom: "20px" }} src={logo} />
        <h1 style={{ color: "white" }}>New Model Degree College</h1>
      </div>

      <div style={{ padding: "0 10%" }}>
        <h2
          style={{
            textAlign: "center",
            margin: "20px 0",
            textTransform: "uppercase",
          }}
        >
          Student Result Portal
        </h2>
        <div className="result_heading">
          <div
            id="result_sit_naming_div"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <span id="result_sit_naming">Name</span>
            <span id="result_sit_naming_value">: {user_data.name}</span>
          </div>
          <div id="result_sit_naming_div">
            <span id="result_sit_naming">Father Name</span>
            <span id="result_sit_naming_value">: {user_data.fathername}</span>
          </div>
          <div id="result_sit_naming_div">
            <span id="result_sit_naming">Mother Name</span>
            <span id="result_sit_naming_value">: {user_data.mothername}</span>
          </div>
          <div id="result_sit_naming_div">
            <span id="result_sit_naming">Roll No</span>
            <span id="result_sit_naming_value">: {user_data.roll}</span>
          </div>
          <div id="result_sit_naming_div">
            <span id="result_sit_naming">Department</span>
            <span id="result_sit_naming_value">: {user_data.department}</span>
          </div>
          <div id="result_sit_naming_div">
            <span id="result_sit_naming">Semester</span>
            <span id="result_sit_naming_value">: {user_data.semester}</span>
          </div>
          <div id="result_sit_naming_div">
            <span id="result_sit_naming">Session</span>
            <span id="result_sit_naming_value">: {user_data.session}</span>
          </div>
          <div id="result_sit_naming_div">
            <span id="result_sit_naming">GPA</span>
            <span id="result_sit_naming_value">: {user_data.gpa}</span>
          </div>
        </div>
        <Table
          style={{ marginTop: "20px" }}
          columns={columns}
          dataSource={subject}
          pagination={false}
        />
      </div>
      <div style={{ textAlign: "center", margin: "20px 0" }}>
        <button
          onClick={handlePrint}
          style={{
            backgroundColor: "#ec7241",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Print Result
        </button>
      </div>
    </section>
  );
};

export default Result;
