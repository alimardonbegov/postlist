import useMemo from "react";

export const useSortedPosts = (posts, sort) => {
    const sortedPost = useMemo(() => {
        if (sort) {
            return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
        }
        return posts;
    }, [sort, posts]);
    return sortedPost;
};

export const usePosts = (posts, sort, search) => {
    const sortedPost = useSortedPosts(posts, sort);
    const sortedAndSearchedPists = useMemo(() => {
        return sortedPost.filter((post) => {
            return post.title.toLowerCase().includes(search);
        });
    }, [search, sortedPost]);
    return sortedAndSearchedPists;
};
