import React, {useState} from "react";

const BlogContext = React.createContext();

export const BlogProvider = ({children}) =>  {
    
    const [blogPosts , setBlogPosts ] = useState([]);

    const addBlogPost = () => {
        // create a new array , then take all the blogPosts and put them into the new array
        setBlogPosts([...blogPosts, { title: `Blog Post #${blogPosts.length + 1}`}  ])
    }

    return ( 
        <BlogContext.Provider value={{data:blogPosts, addBlogPost}} >
            {children}
        </BlogContext.Provider>
    )
}
export default BlogContext