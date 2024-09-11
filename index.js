const { select, input, checkbox } = require('@inquirer/prompts')

let mensagem = 'Bem-vindo ao app de metas'

let meta = {
    value: 'Tomar 3L de água por dia',
    checked: false
}
let metas = [ meta ]

const cadastrar_meta = async () => {
    const meta = await input({ message: 'Digite a meta'})

    if(meta.length == 0) {
        mensagem = 'A meta não pode ser vazia.'
        return
    }

    metas.push(
        { value: meta, checked: false }
    )

    mensagem = 'Meta cadastrada com sucesso! :)'
}

const listar_metas = async () => {
    const respostas = await checkbox({
        message: 'Use as setas para mudar de meta, o espaço para marcar ou desmarcar e o Enter para finalizar essa etapa',
        choices: [...metas],
        instructions: false
    })

    metas.forEach((m) => {
        m.checked = false
    })

    if(respostas.length == 0) {
        mensagem = 'Nenhuma meta selecionada!'
        return
    }

    respostas.forEach((resposta) => {
        const meta = metas.find((m) => {
            return m.value == resposta
        })

        meta.checked = true
    })

    mensagem = 'Meta(s) marcada(s) concluída(s)'
}

const metas_realizadas = async () => {
    const realizadas = metas.filter((meta) => {
        return meta.checked
    })

    if(realizadas.length == 0) {
        mensagem = 'Não existem metas realizadas :('
        return
    }

    await select ({
        message: 'Metas Realizadas: ' + realizadas.length,
        choices: [...realizadas]
    })
}

const metas_abertas = async () => {
    const abertas = metas.filter((meta) => {
        return meta.checked != true
    })

    if(abertas.length == 0) {
        mensagem = 'Não existem metas abertas! :)'
        return
    }

    await select ({
        message: 'Metas Abertas: ' + abertas.length,
        choices: [...abertas]
    })
}

const deletar_metas = async () => {
    const metas_desmarcadas = metas.map((meta) => {
        return { value: meta.value, checked: false }
    })

    const items_para_deletar = await checkbox({
        message: 'Selecione o(s) item(ns) para deletar',
        choices: [...metas_desmarcadas],
        instructions: false
    })

    if(items_para_deletar.lenght == 0) {
        mensagem = 'Nenhum item para deletar'
        return
    }

    items_para_deletar.forEach((item) => {
        metas = metas.filter((meta) => {
            return meta.value != item
        })
        mensagem = 'Meta(s) deletada(s) com sucesso!'
    })
}

const mostrar_mensagem = () => {
    console.clear()

    if(mensagem != '') {
        console.log(mensagem)
        console.log('')
        mensagem = ''
    }
}

const start = async () => {

    while(true) {
        mostrar_mensagem()

        const opcao = await select({
            message: 'Menu >',
            choices: [
                {
                    name: 'Cadastrar meta',
                    value: 'cadastrar'
                },
                {
                    name: 'Listar metas',
                    value: 'listar'
                },
                {
                    name: 'Metas realizadas',
                    value: 'realizadas'
                },
                {
                    name: 'Metas abertas',
                    value: 'abertas'
                },
                {
                    name: 'Deletar metas',
                    value: 'deletar'
                },
                {
                    name: 'Sair',
                    value: 'sair'
                }
            ]
        })

        switch(opcao) {
            case 'cadastrar':
                await cadastrar_meta()
                console.log(metas)
                break
            case 'listar':
                await listar_metas()
                break
            case 'realizadas':
                await metas_realizadas()
                break
            case 'abertas':
                await metas_abertas()
                break
            case 'deletar':
                await deletar_metas()
                break
            case 'sair':
                console.log('Até a próxima!')
                return 
        }
    }
}

start()