import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostService from "../API/PostService";
import { useFetching } from "../hooks/useFetching";
import Loader from "../components/UI/loader/Loader";

function PostIdPage() {
    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);

    const [fetchPostById, isPostLoading, errorPost] = useFetching(async (id) => {
        const response = await PostService.getById(id);
        setPost(response.data);
    });

    const [fetchCommentByPostId, isCommentLoading, errorComment] = useFetching(async (id) => {
        const response = await PostService.getCommentsByPostId(id);
        setComments(response.data);
    });

    useEffect(() => {
        fetchPostById(params.id);
        fetchCommentByPostId(params.id);
    }, []);

    return (
        <div>
            {isPostLoading === true && isCommentLoading === true ? (
                <Loader />
            ) : (
                <div>
                    <h1> You have opened post's page with id = {params.id}</h1>
                    <div> {post.title}</div>
                    <div>
                        {comments.map((comment) => (
                            <div key={comment.name} style={{ marginTop: "10px" }}>
                                {comment.email}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default PostIdPage;

// хуки всегда импортируем в {таких} скобках
