import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        if (event.target.value > 20000) {
            alert("The value cannot exceed remaining funds  £20,000");
        } else {
            setNewBudget(event.target.value);
        }
    }
    useEffect(() => {
        dispatch(newBudget);
        if(newBudget > 20000 ){
            alert("The value cannot exceed remaining funds  £20,000");
            setNewBudget(20000)
        }
    }, [newBudget])

    return (
        <div className='alert alert-secondary'>
            {<span>Budget: £</span> /*{budget} */}
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
};
export default Budget;