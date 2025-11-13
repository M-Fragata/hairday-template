import dayjs from "dayjs"
import { scheduleNew } from "../../services/schedules-new.js" 

const form = document.querySelector('.form')
const selectedDate = document.querySelector('input#date')
const clienteName = document.querySelector('input#client')

// Data atual para o input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

// Carrega a data atual e a data mínima
selectedDate.value = inputToday
selectedDate.min = inputToday

form.addEventListener('submit', async (event) =>{
    //Previne o comportamento padrão de carregar a página submit
    event.preventDefault()
    

    try {
        //Recuperando o nome do cliente
        const name = clienteName.value.trim()
        if(!name){
            return alert("Informe o nome do cliente!")
        }

        // Recuperando o horário selecionado.
        const hourSelected = document.querySelector('.hour-selected')
        if(!hourSelected){
            return alert("Informe o horário desejado!")
        }

        // Recupera somente a hora
        const [hour] = hourSelected.innerText.split(":")

        // Insere a hora na data
        const when = dayjs(selectedDate.value).add(hour, "hour")

        // Gera um ID
        const id = new Date().getTime()

        await scheduleNew({
            id,
            name,
            when
        })
    } catch (error) {
        alert("Não foi possível realizar o agendamento.")
        console.log(error)
    }
})