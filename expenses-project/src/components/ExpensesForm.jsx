
import { useState, useEffect } from "react"
import "./ExpensesForm.css"

export default function ExpensesForm({ onAddExpense }) {

    const [inputTitle, setInputTitle] = useState("");
    const [inputDate, setInputDate] = useState("");
    const [inputAmount, setInputAmount] = useState("");




    const handleTitleInput = (e) => {
        setInputTitle(e.target.value);
    }
    const handleDateInput = (e) => {
        setInputDate(e.target.value);
    }
    const handleAmountInput = (e) => {
        setInputAmount(e.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const newExpense = {
            id: Math.random().toString(),
            title: inputTitle,
            amount: inputAmount,
            date: new Date(inputDate)
        }
        onAddExpense(newExpense);
        setInputTitle("")
        setInputAmount("")
        setInputDate("")

    }


    return (
        <form onSubmit={handleSubmit} >
            <div>
                <label>Title</label>
                <input type="text" value={inputTitle} onChange={handleTitleInput} />
            </div>
            <div>
                <label>Amount</label>
                <input type="text" placeholder="$$$" value={inputAmount} onChange={handleAmountInput} />
            </div>
            <div>
                <label>Date</label>
                <input type="date" min='2019-01-01'
                    max='2022-12-31' value={inputDate} onChange={handleDateInput} />
            </div>
            <div>
                <button type="submit">Add</button>
            </div>
        </form>


    )

}

