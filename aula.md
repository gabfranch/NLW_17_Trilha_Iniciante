## Git bash

- Baixar o git installer no site
- Instalar
- Mudar o terminal no vscode
- Escrever o comando 'git init'

## Local e Global

// hello world
const mensagem = 'hello global'

{
    const mensagem = 'hello local'
    console.log(mensagem)
}


console.log(mensagem);


# Arrays, Objects

// arrays, objetos
let metas = ['pablo', 'olá']
console.log(metas[1] + ', ' + metas[0])


let metas = {
    value: 'ler um livro todo mês',
    checked: false
}
console.log(metas.value)

# Functions and Methods

let meta = {
    value: 'ler um livro todo mês',
    checked: false,
    log: (info) => {
        console.log(info)
    }
}

meta.log(meta.value)

// functions  // arrow functions
const criarMeta = () => {}

function criarMeta() {}

-----

todo tido de dado vira objeto, é só colocar um .
.forEach, .find, .push -> Métodos

-----

const metasRealizadas = async () => {
    const realizadas = metas.filter((meta) => {   -> Higher Order Function -> método que requer uma função dentro
        return true
    })
}

## While

function start() {
    let count = 0
    while(count <= 10) {
        console.log(count)
        count+= 1
    }
}

## Conditionals

function start() {
    while(true) {
        let opcao = 'sair'
        switch(opcao) {
            case 'cadastrar':
                console.log('vamos cadastrar')
                break
            case 'listar':
                console.log('vamos listar')
                break
            case 'sair':
                return 
        }
    }
}

start()

---------------

if(meta.length == 0) {
        console.log('A meta não pode ser vazia.')
        return
    }

## Módulos em Node.js

const { select } = require('@inquirer/prompts')

promp -> fazer pergunta pro usuário

## Programação Assíncrona e Promises

const { select } = require('@inquirer/prompts')

const start = async () => {

    while(true) {

        const opcao = await select({   -> PROMISE
            message: 'Menu >',
            choices: [
                {
                    name: 'Cadastrar meta',
                    value: 'cadastrar'
                },
                {
                    name: 'Listar metas',
                    value: ''
                },
                {
                    name: 'Sair',
                    value: 'sair'
                }
            ]
        })

        switch(opcao) {
            case 'cadastrar':
                console.log('vamos cadastrar')
                break
            case 'listar':
                console.log('vamos listar')
                break
            case 'sair':
                console.log('Até a próxima!')
                return 
        }
    }
}

start()


## Try catch

const carregar_metas = async () => {
    try {
        const dados = await fs.readFile('metas.json', 'utf-8')
        metas = JSON.parse(dados)
    }
    catch(erro) {
        metas = []
    }
}

## JSON

const carregar_metas = async () => {
    try {
        const dados = await fs.readFile('metas.json', 'utf-8')
        metas = JSON.parse(dados) -> transforma de JSON para JS
    }
    catch(erro) {
        metas = []
    }
}

const salvar_metas = async () => {
    await fs.writeFile('metas.json', JSON.stringify(metas, null, 2)) -> de JSON para JS
}