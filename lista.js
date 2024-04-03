let participantes = [
    {
        nome: 'kinito jose',
        email: 'kini@gmail.com',
        dataIns: new Date(2024, 3, 16, 15, 30),
        dataCheck: new Date(2024, 3, 19, 12, 20)
    },
    {
        nome: 'joao markes',
        email: 'mark@gmail.com',
        dataIns: new Date(2024, 3, 16, 15, 30),
        dataCheck: new Date(2024, 3, 19, 12, 20)
    },
    {
        nome: 'Maria Silva',
        email: 'maria@gmail.com',
        dataIns: new Date(2024, 3, 17, 14, 45),
        dataCheck: new Date(2024, 3, 20, 11, 10)
    },
    {
        nome: 'Carlos Souza',
        email: 'carlos@gmail.com',
        dataIns: new Date(2024, 3, 17, 14, 45),
        dataCheck: new Date(2024, 3, 20, 11, 10)
    },
    {
        nome: 'Ana Oliveira',
        email: 'ana@gmail.com',
        dataIns: new Date(2024, 3, 18, 12, 0),
        dataCheck: new Date(2024, 3, 21, 9, 30)
    },
    {
        nome: 'Pedro Santos',
        email: 'pedro@gmail.com',
        dataIns: new Date(2024, 3, 18, 12, 0),
        dataCheck: new Date(2024, 3, 21, 9, 30)
    },
    {
        nome: 'Mariana Costa',
        email: 'mariana@gmail.com',
        dataIns: new Date(2024, 3, 19, 10, 15),
        dataCheck: new Date(2024, 3, 22, 8, 45)
    },
    {
        nome: 'Rafaela Pereira',
        email: 'rafaela@gmail.com',
        dataIns: new Date(2024, 3, 19, 10, 15),
        dataCheck: new Date(2024, 3, 22, 8, 45)
    },
    {
        nome: 'Fernando Oliveira',
        email: 'fernando@gmail.com',
        dataIns: new Date(2024, 3, 20, 9, 0),
        dataCheck: new Date(2024, 3, 23, 7, 20)
    },
    {
        nome: 'Juliana Martins',
        email: 'juliana@gmail.com',
        dataIns: new Date(2024, 3, 20, 9, 0),
        dataCheck: new Date(2024, 3, 23, 7, 20)
    }
];

const criarNovoParticipante = (participante) => {

    const dataIns = dayjs(Date.now()).from(participante.dataIns)
    let dataCheck = dayjs(Date.now()).from(participante.dataCheck)

    //Condicional
    if(participante.dataCheck == null){
        dataCheck = `
            <button data-email="${participante.email}" onclick="fazerCheckIn(event)">
            Confirmar Check-in
            </button>
        `
    }

    return `
        <tr>
            <td>
                <strong>${participante.nome}</strong><br>
                <small>${participante.email}</small>
            </td>
            <td>${dataIns}</td>
            <td>${dataCheck}</td>
        </tr>
    `
}

const atualizarLista = (participantes) => {
    let output = ""

    //Extrutura de repeticao ou loop
    for (let participante of participantes) {
        output = output + criarNovoParticipante(participante)
    }

    //Substituir a informacao do HTML
    document.querySelector('tbody').innerHTML = output
}

atualizarLista(participantes)

const adicionarParticipante = (event) => {
    event.preventDefault()

    const dadosFormulario = new FormData(event.target)

    const participante = {
        nome: dadosFormulario.get('nome'),
        email: dadosFormulario.get('email'),
        dataIns: new Date(),
        dataCheck: null
    }
    //Veroficar se o participante já existe 
    const participanteExiste = participantes.find((p) => {
        return p.email == participante.email
    })
    
    if(participanteExiste) {
        alert('Participante já cadastrado!')
        return
    }

    participantes = [participante, ...participantes]
    atualizarLista(participantes)

    //limpar formulário
    event.target.querySelector('[name="nome"]').value=""
    event.target.querySelector('[name="email"]').value=""

}

const fazerCheckIn = (event) => {
    //Confirmar se realmente quer o check-in
    const smsconfirmacao = "Tem certeza que deseja fazer o check-in?"
    if(confirm(smsconfirmacao) == false) {
        return
    }
    //Encontrar o participate dentro da lista 
    const participante = participantes.find((p) => {
        return p.email == event.target.dataset.email
    })
    //Actualizar check-in
    participante.dataCheck = new Date()
    //Atualizar a lista
    atualizarLista(participantes)
}