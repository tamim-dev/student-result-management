import React, { useEffect, useState } from "react";
import { Button, Space, Table, Tag } from "antd";
import axios from "axios";

const Result = () => {
    let [results, setResults] = useState([]);
    let [realtime, setRealtime] = useState(Boolean);
    let [usersRoll, setUsersRoll] = useState([]);

    useEffect(() => {
        async function callfunc() {
            let user_data = await axios.get(
                "http://localhost:8000/getallresult"
            );
            setResults(user_data.data.data);
            let datas = [];

            user_data.data.data.map((item, index) => {
                datas.push({
                    text: item.name,
                    value: item.name,
                    key: item._id,
                });
            });
            setUsersRoll(datas);
        }
        callfunc();
    }, [realtime]);

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
                    <Button danger onClick={() => handleDelete(record)}>
                        Delete
                    </Button>

                    <Button danger>Edit</Button>
                </Space>
            ),
        },
    ];

    let handleDelete = async (id) => {
        let data = {
            id: id._id,
        };
        await axios.post("http://localhost:8000/deleteresult", data);
        setRealtime(!realtime);
    };
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
