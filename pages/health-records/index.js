import React from 'react';
import { Button, Space, Table, Tag } from 'antd';

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Type',
        dataIndex: 'type',
        key: 'type',
        filters: [
            {
                text: 'Student',
                value: 'Student',
            },
            {
                text: 'Employee',
                value: 'Employee',
            },
        ],
        onFilter: (value, record) => record.type.indexOf(value) === 0,
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
        sorter: (a, b) => a.age - b.age,
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: (_, { tags }) => (
            <>
                {
                    tags.map((tag) => {
                        let color = tag.length > 5 ? 'geekblue' : 'green';
                        if (tag === 'loser') {
                            color = 'volcano';
                        }
                        return (
                            <Tag color={color} key={tag}>
                                {tag.toUpperCase()}
                            </Tag>
                        );
                    })
                }
            </>
        ),
    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <a>Invite {record.name}</a>
                <a>Delete</a>
            </Space>
        ),
    },
];

const data = [
    {
        key: '1',
        name: 'John Brown',
        type: 'Student',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        name: 'Jim Green',
        type: 'Employee',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        name: 'Joe Black',
        type: 'Student',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },,
    {
        key: 4,
        name: 'Joe Black',
        type: 'Student',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },,
    {
        key: 5,
        name: 'Joe Black',
        type: 'Student',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },,
    {
        key: 6,
        name: 'Joe Black',
        type: 'Student',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },,
    {
        key: 7,
        name: 'Joe Black',
        type: 'Employee',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },,
    {
        key: 8,
        name: 'Joe Black',
        type: 'Student',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },,
    {
        key: 9,
        name: 'Joe Black',
        type: 'Employee',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },,
    {
        key: 10,
        name: 'Joe Black',
        type: 'Student',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },,
    {
        key: 11,
        name: 'Joe Black',
        type: 'Employee',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },,
    {
        key: 12,
        name: 'Joe Black',
        type: 'Student',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];

const onTableChange = (pagination, filters, sorter, extra) => {
    // console.log('params', pagination, filters, sorter, extra);
};

function HealthRecords() {
    return (
        <>
            <h1>Health Records Page</h1>
            <Space wrap>
                <Button type="primary">Primary Button</Button>
                <Button>Default Button</Button>
                <Button type="dashed">Dashed Button</Button>
                <Button type="text">Text Button</Button>
                <Button type="link">Link Button</Button>
            </Space>
            <Table columns={columns} dataSource={data} onChange={onTableChange} />
        </>
    )
}

export default HealthRecords