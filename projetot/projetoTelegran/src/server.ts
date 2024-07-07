import { PrismaClient } from '@prisma/client'
import Fastify from 'fastify'
import cors from '@fastify/cors'
//Criando rotas
const app = Fastify()
const prisma = new PrismaClient()
/**
 * Método HTTP: GET, Post, Put, Patch, Delete
 */
//definir quem pode modificar
app.register(cors)

app.get('/hello', async () => {
    const habits = await prisma.habit.findMany()

    return habits
})

app.listen({
    port:3333,
}).then(() => {
    console.log('HTTP Server running!')
})

//Back-end API RESTful



//localhost:3333/habits
//localhost:3333/habits
