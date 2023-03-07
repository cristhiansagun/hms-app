export const PERSON_TYPE_OPTIONS = [
    { label: 'All', value: 'All' },
    { label: 'Employee', value: 'Employee' },
    { label: 'Student', value: 'Student' }
]

export const PERSON_TABLE_COLUMN = [
    {
        title: 'First Name',
        dataIndex: 'firstName',
        key: 'firstName'
    },
    {
        title: 'Middle Name',
        dataIndex: 'middleName',
        key: 'middleName'
    },
    {
        title: 'Last Name',
        dataIndex: 'lastName',
        key: 'lastName'
    },
    {
        title: 'Person Type',
        dataIndex: 'personType',
        key: 'personType'
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
    // {
    //     title: 'Temperature',
    //     key: 'temperature',
    //     dataIndex: 'temperature',
    //     render: (_, {temperature}) => (
    //         <>
    //             <Tag color="success">
    //                 {temperature} Celcius
    //             </Tag>
    //         </>
    //     ),
    // },
    // {
    //     title: 'Action',
    //     key: 'action',
    //     render: (_, record) => (
    //         <Space size="middle">
    //             <a>Invite {record.name}</a>
    //             <a>Delete</a>
    //         </Space>
    //     ),
    // },
]

export const SIDENAV_MENU = [
    {
        key: 1,
        link: '/',
        title: 'Dashboard',
        icon: 'bx bxs-dashboard'
    },
    {
        key: 2,
        link: '/health-records',
        title: 'Health Records',
        icon: 'bx bxs-folder'
    },
    {
        key: 3,
        link: '/analytics',
        title: 'Analytics',
        icon: 'bx bxs-doughnut-chart'
    },
    {
        key: 4,
        link: '/user-management',
        title: 'User Management',
        icon: 'bx bxs-doughnut-chart'
    }
]