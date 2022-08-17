import './Expenses.css'
import Card from '../UI/Card'
import ExpensesFilter from "./ExpensesFilter";
import ExpenseChart from "./ExpenseChart";
import React from 'react';
import ExpensesList from './ExpensesList';

class  Expenses extends React.Component{
constructor(){
    super()
    this.state={
        filteredYear:'2022',
    }
}
filterChangeHandler = (selectedYear) => {
    this.setState({filteredYear:selectedYear});
  };

 
     render(){
        const filteredExpenses = this.props.expenses.filter((expense) => {
            return expense.date.getFullYear().toString() === this.state.filteredYear;
          });
 return (
    <Card className="expenses">
      <ExpensesFilter selected={this.state.filteredYear} onChangeFilter={this.filterChangeHandler} />
      <ExpenseChart expenses={filteredExpenses}/>
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
     }
}

  
//  function Expenses(props){
//     const [filteredYear, setFilteredYear] = useState('2022')
    
//     const filterChangeHandler = (selectedYear) =>{
//         setFilteredYear(selectedYear)
//     }

//     const filteredExpenses = props.expenses.filter(expense => {
//         return expense.date.getFullYear().toString() === filteredYear
//     });

//     return (
//         <Card className="expenses">
//            { console.log(filteredYear)}

//             <ExpensesFilter  
//             selected={filteredYear} onChangeFilter={filterChangeHandler} />
            
//             <ExpenseChart expenses={filteredExpenses} />

//             {filteredExpenses.length === 0 ? <p style={{textAlign: 'center', color: 'white'}}>
//                 No expense Found</p> : filteredExpenses.map((el) => (
                 
//                  <ExpenseItem 
//                  key={el.id}
//                  date={el.date} 
//                  text={el.title} 
//                  price={el.amount} 
//              />
            
//             ))}
           
//             </Card>
  
//     );
// };

export default Expenses;