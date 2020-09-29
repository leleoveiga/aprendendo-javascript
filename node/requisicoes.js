const url = 'https://jsonplaceholder.typicode.com/posts'
const axios = require('axios')
axios.get(url).then(response => {
    const posts = response.data
    const comentariosSelecionados = []
    for (let i = 0; i < posts.length; i++) {
        const element = posts[i];
        if (element.userId === 10 && element.title.length > 20) {
            comentariosSelecionados.push(element)
        }

    }
    console.log(comentariosSelecionados)
})