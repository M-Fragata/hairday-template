const periods = document.querySelectorAll('.period')

periods.forEach((period) => {

    period.addEventListener('click', (event) => {
        const alvoDoClique = event.target

        if(alvoDoClique.classList.contains('cancel-icon')){
            const itemParaExcluir = alvoDoClique.parentNode
            itemParaExcluir.remove()
        }
    })

})