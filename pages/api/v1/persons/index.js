import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(request, response) {
    
    if (request.method === 'GET') {
        const persons = await prisma.persons.findMany()
        response.status(200).json(persons)
    } else if (request.method === 'POST') {
        const { body: data } = request
        const newPerson = await prisma.persons.create({ data })
        response.status(200).json(newPerson)
    }
    
}