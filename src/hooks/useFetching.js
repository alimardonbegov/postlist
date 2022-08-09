import { useState } from "react";

export const useFetching = (callBack) => {
    const [isPostsLoading, setIsPostLoading] = useState(false);
    const [error, setError] = useState("");

    const fetching = async () => {
        try {
            setIsPostLoading(true);
            await callBack();
        } catch (e) {
            setError(e.message);
        } finally {
            setTimeout(() => {
                setIsPostLoading(false);
            }, 1000);
        }
    };
    return [fetching, isPostsLoading, error];
};
