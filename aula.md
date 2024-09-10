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