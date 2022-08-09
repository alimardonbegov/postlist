import React from "react";

function MySelect(props) {
    return (
        <div>
            <select onChange={(event) => props.onChange(event.target.value)}>
                <option disabled value="">
                    {props.defaultValue}
                </option>
                {props.options.map((option) => {
                    return (
                        <option key={option.value} value={option.value}>
                            {option.name}
                        </option>
                    );
                })}
            </select>
        </div>
    );
}

export default MySelect;
