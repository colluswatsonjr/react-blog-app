import './Home.css'

import { useEffect, useState } from "react";

const Home = () => {
    const [posts, setPosts] = useState([])
    const [displayPost, setDisplayPost] = useState({})

    const [formData, setFormData] = useState({
        title: '',
        content: '',
        created: new Date().toISOString().slice(0, 10),
        id: ''
    })

    useEffect(() => {                       //fetch data
        fetch(`http://localhost:3000/data`)
            .then(r => r.json())
            .then(d => setPosts(d))
            .catch(e => console.log(e))
    }, [])

    function handleSubmit() {
        fetch(`http://localhost:3000/data`, {   //post data
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(r => r.json())
            .then(d => setPosts([...posts, d]))
            .catch(e => console.log(e))
    }

    const createPost = posts.map((post) => {
        return (
            <div className='card' key={post.id}>
                <h2 className='card_top'>{post.title}</h2>

                <div className="card_middle">
                    <h3>{post.author}</h3>
                    <p>{post.content}</p>
                    <p>{post.created}</p>
                </div>

                <div className='card_bottom'>
                    <button className='display'>Display</button>
                    <button className='edit'>Edit</button>
                    <button className='delete'>Delete</button>
                </div>
            </div>
        )
    })


    return (
        <div className="home">
            <h1>
                Homepage
            </h1>

            <div className='form'>
                <h2>Create Post:</h2>
                <h4>Title:</h4>
                <input type='text' onChange={(e) => setFormData({ ...formData, title: e.target.value })} />
                <br />
                <h4>Content:</h4>
                <textarea rows="4" cols="50" onChange={(e) => setFormData({ ...formData, content: e.target.value })} />
                <br />
                <button onClick={handleSubmit}>Submit!</button>
            </div>

            <div className="container">
                {createPost}
            </div>
            <div className='display'>
                {/* {displayPost} */}
            </div>
        </div>
    );
}

export default Home;