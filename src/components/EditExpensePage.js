import React from "react";
import {connect} from "react-redux";
import { startEditExpense, startRemoveExpense } from "../actions/expenses";
import ExpenseForm from "./ExpenseForm";

export class EditExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.startEditExpense(this.props.expense.id, expense);
    this.props.history.push("/");
  }

  onClick = () => {
    this.props.startRemoveExpense(this.props.expense.id);
    this.props.history.push("/");
  }

  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container page-header__inline">
            <h1 className='page-header__title'>Edit Expense</h1>
            <div>
              <button className="button button--secondary" onClick={this.onClick}>
                Remove Expense
              </button>
            </div>
          </div>
        </div>
        <div className="content-container">
          <ExpenseForm 
            expense={this.props.expense}
            onSubmit={this.onSubmit} 
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    startRemoveExpense: (data) => dispatch(startRemoveExpense(data)),
    startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);