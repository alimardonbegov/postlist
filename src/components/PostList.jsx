import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import PostItem from "./PostItem";

function PostList(props) {
    return props.posts.length !== 0 ? (
        <div>
            <h1 style={{ textAlign: "center" }}> {props.title}</h1>
            <TransitionGroup>
                {props.posts.map((post, index) => {
                    return (
                        <CSSTransition key={post.id} timeout={500} classNames="post">
                            <PostItem
                                number={index + 1}
                                title={post.title}
                                post={post}
                                content={post.body}
                                id={post.id}
                                onDelete={props.onDelete}
                            />
                        </CSSTransition>
                    );
                })}
            </TransitionGroup>
        </div>
    ) : (
        <h1 style={{ textAlign: "center" }}>There is no posts yet </h1>
    );
}

export default PostList;
