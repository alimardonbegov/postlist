import axios from "axios";
import react, { useState, useMemo, useEffect } from "react";
import "../src/styles/App.css";
import PostService from "./API/PostService";
import PostFilter from "./components/PostFilter";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import Loader from "./components/UI/loader/Loader";
import MyModal from "./components/UI/myModal/MyModal";
import Pagination from "./components/UI/pagination/Pagination";
import { useFetching } from "./hooks/useFetching";
import { getPageCount, getPagesArray } from "./utils/pages";

function App() {
    const [posts, setPosts] = useState([]);
    const [sortSelected, setSortSelected] = useState("");
    const [searchQuery, setSearchQuery] = useState("");
    const [modal, setModal] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);

    let pagesArray = getPagesArray(totalPages);

    const [fetchPost, isPostsLoading, postError] = useFetching(async () => {
        const response = await PostService.getAll(limit, page);
        setPosts(response.data);
        const totalCount = response.headers["x-total-count"];
        setTotalPages(getPageCount(totalCount, limit));
    });

    const createPost = (newPost) => setPosts([...posts, newPost], setModal(!modal));
    const deletePost = (post) => setPosts(posts.filter((p) => p.id !== post.id));
    const sortPost = (sort) => setSortSelected(sort);
    const changePage = (page) => setPage(page);

    /////////////////////// вынести в отдельный хук (ниже) /////////////////////

    const sortedPost = useMemo(() => {
        if (sortSelected) {
            return [...posts].sort((a, b) => a[sortSelected].localeCompare(b[sortSelected]));
        }
        return posts;
    }, [sortSelected, posts]);
    console.log(sortSelected);

    const sortedAndSearchedPists = useMemo(() => {
        return sortedPost.filter((post) => {
            return post.title.toLowerCase().includes(searchQuery);
        });
    }, [searchQuery, sortedPost]);

    /////////////////////// вынести в отдельный хук (выше) /////////////////////

    useEffect(() => {
        fetchPost();
    }, [page]);

    return (
        <div className="App">
            <MyButton style={{ margin: "15px 0" }} onClick={() => setModal(!modal)}>
                Create post
            </MyButton>
            <MyModal visiable={modal} setVisiable={setModal}>
                <PostForm create={createPost} />
            </MyModal>
            <MyButton onClick={fetchPost}> Get posts</MyButton>
            <PostFilter
                searchQuery={searchQuery}
                sortSelected={sortSelected}
                sortPost={sortPost}
                setSearchQuery={setSearchQuery}
            />
            {postError && <h1> Error "{postError}"</h1>}
            {isPostsLoading ? (
                <Loader />
            ) : (
                <PostList onDelete={deletePost} posts={sortedAndSearchedPists} title="Posts list" />
            )}
            <Pagination pagesArray={pagesArray} changePage={changePage} page={page} />
        </div>
    );
}

export default App;
