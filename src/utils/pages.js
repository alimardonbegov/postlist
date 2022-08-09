export const getPageCount = (totalCount, limit) => {
    return Math.ceil(totalCount / limit);
};

export const getPagesArray = (totalPages) => {
    let result = [];
    for (let i = 0; i < totalPages; i++) {
        result.push(i + 1);
    }
    return result;
};

//The Math.ceil() function always rounds a number up to the next largest integer.
