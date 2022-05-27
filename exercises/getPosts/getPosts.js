const url = 'https://jsonplaceholder.typicode.com/posts';

const getPosts = async () => {
    try {
        const posts = await (await fetch(url)).json();

        return posts.filter(post => post.userId === 7 && post.title.startsWith('e')).reduce((ac, v) => v.id, undefined);    
    } 
    catch (error) {
        console.log(error);
    }
}

const getPost = async () => {
    console.log(await getPosts());
} 

getPost();