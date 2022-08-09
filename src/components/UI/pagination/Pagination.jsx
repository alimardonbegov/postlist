import React from "react";

function Pagination(props) {
    return (
        <div className="pageBlock">
            {props.pagesArray.map((p) => (
                <span
                    onClick={() => props.changePage(p)}
                    key={p}
                    className={props.page === p ? "pageBtn pageCurrent" : "pageBtn"}
                >
                    {p}
                </span>
            ))}
        </div>
    );
}

export default Pagination;
