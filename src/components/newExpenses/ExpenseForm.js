import React from 'react';
import './ExpenseForm.css'


class ExpenseForm extends React.Component {
	constructor() {
		super()
		this.state = {
			enteredTitle: '',
			enteredAmount: '',
			enteredDate: '',
		}
	}
	titleChangeHandler = (event) => {
		this.setState({
			enteredTitle: event.target.value,
		})
	}

	amountChangeHandler = (event) => {
		this.setState({ enteredAmount: event.target.value })
	}
	dateChangeHandler = (event) => {
		this.setState({ enteredDate: event.target.value })
	}

	submitHandler = (event) => {
		event.preventDefault()
		const expenseData = {
			title: this.state.enteredTitle,
			amount: this.state.enteredAmount,
			date: new Date(this.state.enteredDate),
		}

		this.props.onAddData(expenseData)
	}

	render() {
		return (
			<form onSubmit={this.submitHandler}>
				<div className='new-expense__controls'>
					<div className='new-expense__control'>
						<label>Title</label>
						<input type='text' onChange={this.titleChangeHandler}
						value={this.state.enteredTitle} />
					</div>
					<div className='new-expense__control'>
						<label>Amout</label>
						<input
							type='number'
							min='0.01'
							step='0.01'
							onChange={this.amountChangeHandler}
							value={this.state.enteredAmount}
						/>
					</div>
					<div className='new-expense__control'>
						<label>Date</label>
						<input
							type='date'
							min='2021-01-01'
							max='2022-12-31'
							onChange={this.dateChangeHandler}
							value={this.state.enteredDate}
						/>
					</div>
				</div>
				<div className='new-expense__actions'>
					<button>Add Expense</button>
				</div>
			</form>
		)
	}
}

// function ExpenseForm(props){
//     const [enteredTitle, setEnteredTitle]=useState('')
//     const [enteredAmount, setEnteredAmount]=useState('')
//     const [enteredDate, setEnteredDate]=useState('')
    
//     const titleChangeHandler=(event) => {
//         setEnteredTitle(event.target.value);
//         console.log(enteredTitle);
//     }

//     const amountChangeHandler=(event)=>{
//         setEnteredAmount(event.target.value);
//     }
//     const dateChangeHandler=(event)=>{
//         setEnteredDate(event.target.value);
//     }


//     const submitHandler = (event) => {
//         event.preventDefault()
//         // console.log(enteredTitle, enteredAmount, enteredDate);
//         const expenseDate = {
//             title: enteredTitle,
//             amount: enteredAmount,
//             date: new Date(enteredDate)
//         }
//         // console.log(expenseDate);
//         props.onAddData(expenseDate)
//     }

//     return(
//         <form onSubmit={submitHandler}>
//             <div className='new-expense__controls'>
//                 <div className='new-expense__control'>
//                     <label>Title</label>
//                     <input type="text" onChange={titleChangeHandler} />
//                 </div>
//                 <div className='new-expense__control'>
//                     <label>Amout</label>
//                     <input type="number" min="0.01" step="0.01"  onChange={amountChangeHandler} />
//                 </div>
//                 <div className='new-expense__control'>
//                     <label>Date</label>
//                     <input type="date" min="2022-01-01" max="2022-12-31"  onChange={dateChangeHandler} />
//                 </div>
//             </div>
//             <div className='new-expense__actions'>
//                 <button>Add Expense</button>
//             </div>
//         </form>
//     )
// }

export default ExpenseForm