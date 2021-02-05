import React, { Component } from 'react'

export default class Posts extends Component {
    //cono s ehara una peticion http a un server externo
    //la operacion llevara tiempo asi que se hace de manera asincrona
    //con async y wait
    //fectch es el metodo que se utiliza apra hacer peticiones a otros servers
    state ={
        Posts:[]
    }
    async componentDidMount(){
        const resultados = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await resultados.json();
                this.setState({Posts:data})
    }
    render() {
        return (
            <div>
                <h1>Posts</h1>
                {
                    this.state.Posts.map(post => {
                        return (
                            <div key={post.id}>
                                <h1>{post.title}</h1>
                                <p>{post.body}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

