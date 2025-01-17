import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";

export const AppContext = createContext();

function AppContextProvider({ children }) {
    const [loading, setLoading] = useState(false);
    const [post, setPost] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);

    async function fetchBlogPosts(page = 1) {

        setLoading(true);
        let url = `${baseUrl}?page=${page}`;
        try {
            const result = await fetch(url);
            const data = await result.json();
            console.log(data);
            setPage(data.page);
            setPost(data.posts);
            setTotalPages(data.totalPages);
        }
        catch (error) {
            console.log({ "Error in fetching"});
            setPage(1);
            setPost([]);
            setTotalPages(null);
        }
        setLoading(false);
    }

    const value = {
        post,
        setPost,
        loading,
        setLoading,
        page,
        setPage,
        totalPages,
        setTotalPages
    };
    return <AppContext.Provider value={value} >
        {children}
    </AppContext.Provider>
}