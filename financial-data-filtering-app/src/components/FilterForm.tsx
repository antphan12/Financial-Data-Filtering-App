import React, { useState } from 'react';
import '../styles/FilterForm.css';

// Define the FilterForm component with props containing the onFilter function
const FilterForm: React.FC<{ onFilter: (filters: { dateRange: [string, string]; revenueRange: [number, number]; netIncomeRange: [number, number] }) => void }> = ({ onFilter }) => {
    // State hooks to manage the form inputs
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [minRevenue, setMinRevenue] = useState('');
    const [maxRevenue, setMaxRevenue] = useState('');
    const [minNetIncome, setMinNetIncome] = useState('');
    const [maxNetIncome, setMaxNetIncome] = useState('');

    // Handle form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Call the onFilter function with the current state values
        onFilter({
            dateRange: [startDate, endDate],
            revenueRange: [parseFloat(minRevenue), parseFloat(maxRevenue)],
            netIncomeRange: [parseFloat(minNetIncome), parseFloat(maxNetIncome)],
        });
    };

    return (
        <form onSubmit={handleSubmit} className="form">
            <div>
                <label>Date Range:</label>
                {/* Input fields for date range */}
                <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
            </div>
            <div>
                <label>Revenue Range:</label>
                {/* Input fields for revenue range */}
                <input type="number" value={minRevenue} onChange={(e) => setMinRevenue(e.target.value)} placeholder="Min Revenue" />
                <input type="number" value={maxRevenue} onChange={(e) => setMaxRevenue(e.target.value)} placeholder="Max Revenue" />
            </div>
            <div>
                <label>Net Income Range:</label>
                {/* Input fields for net income range */}
                <input type="number" value={minNetIncome} onChange={(e) => setMinNetIncome(e.target.value)} placeholder="Min Net Income" />
                <input type="number" value={maxNetIncome} onChange={(e) => setMaxNetIncome(e.target.value)} placeholder="Max Net Income" />
            </div>
            {/* Submit button to apply filters */}
            <button type="submit">Apply Filters</button>
        </form>
    );
};

export default FilterForm;