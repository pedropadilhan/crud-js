// [CRUD] JavaScript BÁSICO

const miniTwitter = {
    usuarios: [
        {
            username: 'pedropadiilha',
        }
    ],
    posts: [
        {
            id: 1,
            owner: 'pedropadiilha',
            content: 'Meu primeiro tweet'
        }
    ],
};

// CREATE
function criaPost(dados){
    miniTwitter.posts.push({
        id: miniTwitter.posts.length+1,
        owner: dados.owner,
        content: dados.content
    })
}
criaPost({owner: 'pedropadiilha', content: 'segundo tweet'})
console.log(miniTwitter.posts)

// READ
function pegaPost(){
    return miniTwitter.posts;
}
console.log(pegaPost())

// UPDATE
function atualizaContentDoPost(id, novoConteudo){
    const postQueVaiSerAtualizado = pegaPost().find((posto) => {
        return posto.id === id;
    })
    console.log(postQueVaiSerAtualizado)
    postQueVaiSerAtualizado.content = novoConteudo;
}
atualizaContentDoPost(1, 'Novo conteúdo do post')
console.log(pegaPost())

// DELETE
function apagaPost(id) {
    const listaDePostsAtualizada = pegaPost().filter((postAtual) =>{
        return postAtual.id !== id;
    })
    miniTwitter.posts = listaDePostsAtualizada;
}
apagaPost(1)
apagaPost(2)
apagaPost(3)
console.log(pegaPost())