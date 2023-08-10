import "./Expense.css"

export default function Expense({ fecha, title, amount }) {


    const month = fecha.toLocaleString('en-US', { month: 'long' });
    const day = fecha.toLocaleString('en-US', { day: '2-digit' });
    const year = fecha.getFullYear()

    return (
        <div className="expense">
            <div className="date">
                <h1>{month}</h1>
                <h2>{year}</h2>
                <h3>{day}</h3>
            </div>
            <div className="title">
                <h1>{title}</h1>
            </div>
            <div className="amount">
                <p>${amount}</p>
            </div>
        </div>
    )
}

