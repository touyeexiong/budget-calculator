import React from 'react'
import {MdEditNote, MdOutlineDeleteOutline} from "react-icons/md"

const ExpenseItem = ({expense}) => {
const {id, charge, amount} = expense
    return (
        <li className='item'>
            <div className='info'>
                <span className='expense'>{charge}</span>
                <span className='amount'>${amount}</span>
            </div>
            <div>
                <button className='edit-btn' aria-label="edit button">
                    <MdEditNote />
                </button>
                <button className='clear-btn' aria-label="delete button">
                    <MdOutlineDeleteOutline />
                </button>
            </div>
        </li>

    )
}

export default ExpenseItem
