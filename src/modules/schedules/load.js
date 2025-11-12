import { hoursLoad } from "../form/hour-load.js"
export { schedulesDay }

//Seleciona o input de data
const selectedDate = document.querySelector('#date')

function schedulesDay() {

    const date = selectedDate.value

hoursLoad({ date })

    //Busca na API os agendamentos para carregar do lado direito da tela


    // OS horários disponíveis (futuro e não agendado) do lado esquerdo (form)
}

