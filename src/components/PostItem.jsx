import React from "react";
import MyButton from "./UI/button/MyButton";

function PostItem(props) {
    return (
        <div className="post">
            <div className="post-content">
                <strong>
                    {props.number}. {props.title}
                </strong>
                <div> {props.content}</div>
            </div>
            <div>
                <MyButton onClick={() => props.onDelete(props.post)}> Delete</MyButton>
            </div>
        </div>
    );
}

export default PostItem;
