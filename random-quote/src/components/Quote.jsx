function Quote({ text, autor, onNewQuote }) {
    return (
        <main>
            <div className="container">
                <div className="quote">
                    <p>{text}</p>
                    <h3>{autor}r</h3>
                    <button onClick={onNewQuote}>New quote</button>
                </div>
            </div>
        </main>
    )
}


export default Quote;