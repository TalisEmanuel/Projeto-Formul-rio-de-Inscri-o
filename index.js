// criando um array
let participantes = [
  {
  nome: "Ester Pereira",
  email:"esterpereira@gmail.com",
  dataInscriçao: new Date(2024,3,5,8,0),
  dataCheckIn: new Date(2024, 3,7,8,0)
  },
    {
      nome: "Diego Fernandes",
    email: "diego@gmail.com",
    dataInscricao: new Date(2024, 2, 1, 19, 23),
    dataCheckIn: new Date(2024, 2, 1, 20, 20)
  },
  {
    nome: "Mayk Brito",
    email: "mayk@gmail.com",
    dataInscricao: new Date(2024, 2, 23, 19, 23),
    dataCheckIn: null},
  {
    nome: "Ana Souza",
    email: "ana@gmail.com",
    dataInscricao: new Date(2024, 0, 3, 19, 23),
    dataCheckIn: new Date(2024, 0, 4, 20, 20)
  },
  {
    nome: "João Silva",
    email: "joao@gmail.com",
    dataInscricao: new Date(2023, 11, 4, 19, 23),
    dataCheckIn: null
  },
  {
    nome: "Maria Oliveira",
    email: "maria@gmail.com",
    dataInscricao: new Date(2023, 10, 5, 19, 23),
    dataCheckIn: null},
  {
    nome: "Pedro Santos",
    email: "pedro@gmail.com",
    dataInscricao: new Date(2023, 9, 6, 19, 23),
    dataCheckIn: new Date(2023, 9, 7, 20, 20)
  },
  {
    nome: "Carla Lima",
    email: "carla@gmail.com",
    dataInscricao: new Date(2023, 8, 7, 19, 23),
    dataCheckIn: new Date(2023, 8, 8, 20, 20)
  },
  {
    nome: "Lucas Sousa",
    email: "lucas@gmail.com",
    dataInscricao: new Date(2023, 7, 8, 19, 23),
    dataCheckIn: new Date(2023, 7, 9, 20, 20)
  },
  {
    nome: "Paula Costa",
    email: "paula@gmail.com",
    dataInscricao: new Date(2023, 6, 9, 19, 23),
    dataCheckIn: new Date(2023, 6, 10, 20, 20)
  },
  {
    nome: "Gabriel Almeida",
    email: "gabriel@gmail.com",
    dataInscricao: new Date(2023, 5, 10, 19, 23),
    dataCheckIn: new Date(2023, 5, 11, 20, 20)
  }
];

//variaveis
const criandoNovoParticipante = (participante) => {
  const dataInscricao = dayjs(Date.now()).to(participante.dataInscricao)
  let dataCheckIn = dayjs(Date.now()).to(participante.dataCheckIn)
  if (participante.dataCheckIn== null){
    dataCheckIn = 
    `<button
    data-email="${participante.email}"
    onclick ="fazerCheckIn(event)"
    >
    Confirmar Check-In
    </button>`
    
  
    

  }

  return `
  <tr>
                <td><strong>
                    ${participante.nome}
                    </strong>
                    <br>
                    <small>${participante.email}</small>
                </td>
                <td>${dataInscricao}</td>
                <td> ${dataCheckIn}</td>
            </tr>`
}

const atualizarLista = (participantes) => {
  
  //estrutura de repetiçao 
  let output= ""
    for(let participante of participantes){
      output = output + criandoNovoParticipante(participante)
    }
  


  //Substituindo uma informacao do HTML
  document.querySelector('tbody').innerHTML = output
  }

// funcao
 atualizarLista(participantes) 
 
 const adicionarParticipante = (event) =>{
  event.preventDefault()
 
 const dadosDoFormulario = new FormData(event.target)
 
 const participante = {
  nome:dadosDoFormulario.get('nome'),
  email:dadosDoFormulario.get('email'),
  dataInscricao: new Date(),
  dataCheckIn: null
  }
  //Verificando se o participante ja existe
  const participanteExiste = participantes.find(
    (p)=>{return p.email == participante.email}
  )

  if(participanteExiste){
    alert("E-mail já cadastrado")
    return
  }


  participantes= [participante, ... participantes]
  atualizarLista(participantes)

  //limpando o formulario
  event.target.querySelector('[name="nome"]').value =""
  event.target.querySelector('[name="email"]').value=""
 }

 const fazerCheckIn = (event) =>{
  // oque precisa pra fazer check-in?

  //Saber se realmente quer fazer o checkin
  const resultado = confirm ("Você tem certeza que deseja fazer o Check-In?")
  if(resultado == false){
    return 
  }
  alert(resultado)
  //primeiro localizar o participante para check in
  const participante = participantes.find((p) =>{
    return p.email == event.target.dataset.email
  })
 
  //segundo atualizar o check in do participante
  participante.dataCheckIn = new Date

  // terceiro atualizar a lista 
  atualizarLista(participantes)

 }
