const schedule = require('node-schedule')

// de 5 em 5 segundos as 00 horas da sexta feira
// segundos minuto horas dia_do_mes mes dia
const tarefa1 = schedule.scheduleJob('*/5 * 00 * * 5', () => {
  console.log('Executando Tarefa 1', new Date().getSeconds())
})

setTimeout(() => {
  tarefa1.cancel()
  console.log('Cancelando Tarefa 1')
}, 10000)

// setImmediate

// setInterval

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)] // de segunda a sexta
regra.hour = 00
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, () => {
  console.log('Executando Tarefa 2', new Date().getSeconds())
})