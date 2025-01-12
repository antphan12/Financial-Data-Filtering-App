import React, { useState } from 'react';
import '../styles/FilterForm.css';

const FilterForm: React.FC<{ onFilter: (filters: { dateRange: [string, string]; revenueRange: [number, number]; netIncomeRange: [number, number] }) => void }> = ({ onFilter }) => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [minRevenue, setMinRevenue] = useState('');
    const [maxRevenue, setMaxRevenue] = useState('');
    const [minNetIncome, setMinNetIncome] = useState('');
    const [maxNetIncome, setMaxNetIncome] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
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
                <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
            </div>
            <div>
                <label>Revenue Range:</label>
                <input type="number" value={minRevenue} onChange={(e) => setMinRevenue(e.target.value)} placeholder="Min Revenue" />
                <input type="number" value={maxRevenue} onChange={(e) => setMaxRevenue(e.target.value)} placeholder="Max Revenue" />
            </div>
            <div>
                <label>Net Income Range:</label>
                <input type="number" value={minNetIncome} onChange={(e) => setMinNetIncome(e.target.value)} placeholder="Min Net Income" />
                <input type="number" value={maxNetIncome} onChange={(e) => setMaxNetIncome(e.target.value)} placeholder="Max Net Income" />
            </div>
            <button type="submit">Apply Filters</button>
        </form>
    );
};

export default FilterForm;