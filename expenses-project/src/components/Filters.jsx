import "./Filters.css"
import { useState } from "react";

export default function Filters({ filteredYear, onChangeFilter }) {




    const changeFilter = (event) => {
        onChangeFilter(event.target.value);
    }





    return (
        <div className="filters">
            <label>Choose year</label>
            <select value={filteredYear} onChange={changeFilter} >
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
            </select>
        </div>
    )
}