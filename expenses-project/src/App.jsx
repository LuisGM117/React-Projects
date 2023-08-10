import { useEffect, useState } from 'react'
import './App.css'
import ExpensesForm from './components/ExpensesForm'
import Expense from './components/Expense'
import { expensesArray } from './data/expensesArray'
import Filters from "./components/Filters"

function App() {
  const [expensesList, setExpensesList] = useState(expensesArray);
  const [filteredYear, setFilteredYear] = useState('2019');




  function handleAddExpense(newExpense) {
    setExpensesList((prev) => {
      return [newExpense, ...prev];
    })
  }

  function handleFilteredYear(year) {
    setFilteredYear(year)
  }



  const filteredExpenses = expensesList.filter(item => item.date.getFullYear().toString() === filteredYear);







  return (

    <div>
      <div className='form-div'>
        <ExpensesForm onAddExpense={handleAddExpense} />
      </div>
      <div className='app'>
        <Filters filteredYear={filteredYear} onChangeFilter={handleFilteredYear} />
        {filteredExpenses.map(item =>
          <Expense key={item.id} fecha={item.date} title={item.title} amount={item.amount} />)}
      </div>
    </div>


  )
}

export default App
