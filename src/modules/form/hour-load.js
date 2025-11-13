import { openingHours } from "../../utils/opening-hours.js"
import dayjs from "dayjs"
import { hoursClick } from "./hours.click.js"

export { hoursLoad }

const ul = document.querySelector('ul#hours')

function hoursLoad({ date }) {
    // Limpa a lista de horários
    ul.innerHTML = ""

    const opening = openingHours.map((hour) => {
        // Recuperar somente a hora
        const [scheduleHour] = hour.split(":")

        //Adiciona a hora na date e verifica se está no passado
        const isHourPast = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs())
        
        return{
            hour,
            available: isHourPast,
        }
    })

    // Renderizar os horários.
    opening.forEach(({ hour,  available}) => {

        const li = document.createElement("li")
        li.classList.add("hour")
        li.classList.add(available ? "hour-available" : "hour-unavailable")

        li.textContent = hour

        if (hour === "08:00") {
            hourHeaderAdd("Manhã")
        } else if (hour === "14:00") {
            hourHeaderAdd("Tarde")
        } else if (hour === "18:00") {
            hourHeaderAdd("Noite")
        }

        ul.append(li)

    })

//Adiciona o evento de clique nos horários disponíveis
hoursClick()
}


function hourHeaderAdd(title){
    const header = document.createElement('li')
    header.classList.add("hour-period")
    header.textContent = title

    ul.append(header)
}

