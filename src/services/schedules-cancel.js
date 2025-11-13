import { apiConfig } from "./api-config.js"
import { supabase } from "../supabase-cliente.js";

export async function scheduleCancel({ id }) {
    try {
        await fetch(`${apiConfig.baseURL}/schedules/${id}`, {
            method: "DELETE",
        })
        console.log(id)

        alert("Agendamento cancelado com sucesso!")

    } catch (error) {
        console.log(error)
        alert("Não foi possível cancelar o agendamento.")
    }
}