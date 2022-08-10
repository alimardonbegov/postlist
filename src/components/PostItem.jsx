import React from "react";
import MyButton from "./UI/button/MyButton";
import { useNavigate } from "react-router-dom";

function PostItem(props) {
    const navigate = useNavigate();
    console.log(navigate);
    return (
        <div className="post">
            <div className="post-content">
                <strong>
                    {props.post.id}. {props.title}
                </strong>
                <div> {props.content}</div>
            </div>
            <div className="post-btns">
                <MyButton onClick={() => navigate(`/posts/${props.post.id}`)}> Open</MyButton>
                <MyButton onClick={() => props.onDelete(props.post)}> Delete</MyButton>
            </div>
        </div>
    );
}

export default PostItem;
