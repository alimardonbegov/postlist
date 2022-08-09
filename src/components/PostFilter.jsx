import React from "react";
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

function PostFilter(props) {
    return (
        <div>
            <MyInput
                value={props.searchQuery}
                onChange={(e) => props.setSearchQuery(e.target.value)}
                placeholder="Search"
            />
            <MySelect
                value={props.sortSelected}
                onChange={props.sortPost}
                defaultValue="Sort By"
                options={[
                    { value: "title", name: "By title" },
                    { value: "content", name: "By content" },
                ]}
            />
        </div>
    );
}

export default PostFilter;
