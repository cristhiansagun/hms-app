import { useRouter } from 'next/router'
import { React, useState, useEffect } from 'react';
import { Table, Card, Radio, Button } from 'antd';
import { PERSON_TABLE_COLUMN, PERSON_TYPE_OPTIONS } from '@/utilities/constants'

function UserManagement() {

    const [persons, setPersons] = useState([])
    const [filterByTypeValue, setFilterByTypeValue] = useState('All')

    useEffect(() => {
        fetchPersons(filterByTypeValue)
    }, [filterByTypeValue])

    const fetchPersons = async (filter) => {
        const response = await fetch('/api/v1/persons')
        const person = await response.json()

        person.find((data) => {
            return data.personType === filter
        })

        setPersons(person)
    }
    
    const handleFilterByType = ({ target: { value } }) => {
        setFilterByTypeValue(value);
    }

    const filterByType = (
        <Radio.Group options={PERSON_TYPE_OPTIONS} onChange={handleFilterByType} value={filterByTypeValue} optionType="button" buttonStyle="solid"/>
    )

    const router = useRouter()

    const handleNavigateAddPerson = () => {
        router.push('/user-management/add-person')
    }

    return (
        <>
            <Button
                onClick={handleNavigateAddPerson}
                type="primary"
                style={{
                    marginBottom: 16,
                }}
            >
                Add New Person
            </Button>
            <Card title="Card title" bordered={false} extra={filterByType} bodyStyle={{ padding: 0 }}>
                <Table
                    columns={PERSON_TABLE_COLUMN}
                    dataSource={persons}
                    pagination={{
                    pageSize: 50,
                    }}
                    scroll={{
                        y: 240,
                    }}
                />
            </Card>
        </>
    )
}

export default UserManagement