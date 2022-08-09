import React, { useState } from "react";
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

function PostForm(props) {
    const [post, setPost] = useState({ title: "", content: "" });

    function handleChange(event) {
        const { name, value } = event.target;
        setPost((prevValue) => {
            return { ...prevValue, [name]: value };
        });
    }

    function createPost(event) {
        const newPost = { id: Date.now(), ...post };
        props.create(newPost);
        event.preventDefault();
        setPost({ title: "", content: "" });
    }

    return (
        <form>
            <MyInput
                value={post.title}
                onChange={handleChange}
                name="title"
                type="text"
                placeholder="Title"
            />
            <MyInput
                value={post.content}
                onChange={handleChange}
                name="content"
                type="text"
                placeholder="Content"
            />
            <MyButton onClick={createPost}>Add post</MyButton>
        </form>
    );
}

export default PostForm;
