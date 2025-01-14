const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';

interface IComment {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string
}

type CommentEmail = Pick<IComment, 'id' | 'email'>

const getData = async (url: string): Promise<CommentEmail[]> => {
    const res = await fetch(url)

    return await res.json()
}

getData(COMMENTS_URL)
    .then(data => {
        // Your code here...
        data.forEach(item=>{
            console.log(`ID: ${item.id}, Email:${item.email}`)
        })
    });