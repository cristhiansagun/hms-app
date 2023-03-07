import { React, useState, useEffect } from 'react'
import { Card } from 'antd';
import Image from 'next/image'
import AvatarImage from '../images/people.png'

function RecentActivityList() {

    const [persons, setPersons] = useState([])

    useEffect(() => {
        fetchPersons()
    }, [])

    const fetchPersons = async (filter) => {
        const response = await fetch('/api/v1/persons')
        const person = await response.json()

        person.find((data) => {
            return data.personType === filter
        })

        setPersons(person)
    }

    return (
        <Card
            title="Recent Activity"
            className="order"
            bordered={false}
            bodyStyle={{
                padding: 0
            }}
        >
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {persons.map((person) => {
                        return (
                            <tr key={person.id}>
                                <td>
                                    <Image alt="" src={AvatarImage} width="64" height="64"/>
                                    <p>{person.firstName} {person.middleName} {person.lastName}</p>
                                </td>
                                <td>{person.dateCreated}</td>
                                <td><span className="status normal">Normal</span></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </Card>
    )
}

export default RecentActivityList