import { React, useState, useEffect } from 'react';
import { Button, Table, Card, Radio, notification } from 'antd';
import { PERSON_TABLE_COLUMN, PERSON_TYPE_OPTIONS } from '@/utilities/constants'

function HealthRecords() {

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

    return (
        <>
            <h1>Health Records Page</h1>

            <Card
                title="Card title"
                bordered={false}
                extra={filterByType}
                bodyStyle={{
                    padding: 0
                }}
            >
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

export default HealthRecords