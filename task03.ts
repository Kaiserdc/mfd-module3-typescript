const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';

interface IComment {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string
}

// type CommentEmail = Pick<IComment, 'id' | 'email'>

const getData = async (url: string): Promise<IComment[]> => {
    const res = await fetch(url)

    return await res.json()
}

getData(COMMENTS_URL)
    .then(data => {
        // Your code here...
        console.log(data)
    });