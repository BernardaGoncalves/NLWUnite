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
    const dataCheck = dayjs(Date.now()).from(participante.dataCheck)

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