import axios from "axios";
import react, { useState, useMemo, useEffect } from "react";
import "../src/styles/App.css";
import PostService from "./API/PostService";
import PostFilter from "./components/PostFilter";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import MyModal from "./components/UI/myModal/MyModal";
import MySelect from "./components/UI/select/MySelect";

function App() {
    const [posts, setPosts] = useState([
        { id: 1, title: "111", content: "aaa" },
        { id: 2, title: "222", content: "bbb" },
        { id: 3, title: "333", content: "ccc" },
    ]);
    const [sortSelected, setSortSelected] = useState("");
    const [searchQuery, setSearchQuery] = useState("");
    const [modal, setModal] = useState(false);

    const createPost = (newPost) => setPosts([...posts, newPost], setModal(!modal));
    const deletePost = (post) => setPosts(posts.filter((p) => p.id !== post.id));
    const sortPost = (sort) => setSortSelected(sort);

    /////////////////////// вынести в отдельный хук (ниже) /////////////////////

    const sortedPost = useMemo(() => {
        console.log("sorted");
        if (sortSelected) {
            return [...posts].sort((a, b) => a[sortSelected].localeCompare(b[sortSelected]));
        }
        return posts;
    }, [sortSelected, posts]);

    const sortedAndSearchedPists = useMemo(() => {
        return sortedPost.filter((post) => {
            return post.title.toLowerCase().includes(searchQuery);
        });
    }, [searchQuery, sortedPost]);

    /////////////////////// вынести в отдельный хук (выше) /////////////////////

    async function fetchPost() {
        const response = await PostService.getAll();
        setPosts(response);
    }

    useEffect(() => {
        fetchPost();
    }, []);

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
            <PostList onDelete={deletePost} posts={sortedAndSearchedPists} title="Posts list" />
        </div>
    );
}

export default App;
