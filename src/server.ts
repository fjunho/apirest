import fastify from 'fastify'
import { knex } from './database'
import crypto from 'node:crypto'

const app = fastify()

app.get('/hello', async () => {
 const transaction = await knex('transaction').insert({
  id: crypto.randomUUID(),
  title:'transacao de teste',
  amount:1000,
 }).returning('*')

  return transaction
})

app
  .listen({
    port:3333,
  }).then(() => {
    console.log('HTTP SERVER RUNNING!!')
  })