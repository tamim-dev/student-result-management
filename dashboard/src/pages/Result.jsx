import React, { useEffect, useState } from "react";
import { Button, Space, Table, Tag } from "antd";
import axios from "axios";

const Result = () => {
    let [results, setResults] = useState([]);
    let [usersRoll, setUsersRoll] = useState([]);

    useEffect(() => {
        async function callfunc() {
            let user_data = await axios.get(
                "http://localhost:8000/getallresult"
            );
            setResults(user_data.data.data);
            console.log(user_data.data.data);
        }
        callfunc();
        // let data = [];

        // user_data.subjects.map((item, index) => {
        //     console.log("kk", item);
        //     data.push({
        //         text: item.email,
        //         value: item.email,
        //         key: item._id,
        //     });
        // });
    }, []);
    const columns = [
        {
            title: "Roll",
            dataIndex: "roll",
            filters: usersRoll,
            filterSearch: true,
            onFilter: (value, record) => record.email.startsWith(value),
            width: "30%",
        },
        {
            title: "Name",
            dataIndex: "name",
        },
        {
            title: "Action",
            dataIndex: "action",
            render: (_, record) => (
                <Space>
                    <Button
                        danger
                        // onClick={() => handleDelete(record)}
                    >
                        Delete
                    </Button>

                    <Button success>Edit</Button>
                </Space>
            ),
        },
    ];
    return (
        <>
            {" "}
            <Table
                style={{ marginTop: "20px" }}
                columns={columns}
                dataSource={results}
                rowKey="_id"
            />
        </>
    );
};

export default Result;
