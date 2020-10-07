const url = 'https://jsonplaceholder.typicode.com/posts'
const axios = require('axios')
axios.get(url).then(response => {
    const posts = response.data
    const maiorTitulo = (post, postAtual) => post.title.length < postAtual.title.length ? postAtual : post
    let postSelecionado = posts.filter(f => f.userId === 10).reduce(maiorTitulo)
    // console.log(posts)
    console.log(postSelecionado)
})