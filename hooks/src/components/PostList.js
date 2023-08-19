import axios from "axios";
import { useEffect, useState } from "react"
import PostItem from "./PostItem";

const PostList = () => {
    const [posts, setPosts] = useState([]);

    // useEffect(() => {
    //     const url = 'https://jsonplaceholder.typicode.com/posts';
    //     axios.get(url)
    //         .then(res => setPosts(res.data))
    //         .catch(err => console.log(err))
    // }, [])

    useEffect(() => {
        const fetchPosts = async () => {
            const url = 'https://jsonplaceholder.typicode.com/posts';
            const res = await axios.get(url)
            setPosts(res.data)
        }
        fetchPosts()
    },[])

    return posts.map(item => <PostItem key={item.id} obj={item} />)
}
export default PostList