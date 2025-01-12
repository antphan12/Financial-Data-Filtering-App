import React from 'react';

// Define the props for the SortButtons component
interface SortButtonsProps {
    onSort: (column: string, order: 'asc' | 'desc') => void;
}

// SortButtons component to provide sorting functionality for different columns
const SortButtons: React.FC<SortButtonsProps> = ({ onSort }) => {
    return (
        <div className="flex space-x-4">
            {/* Buttons to sort by date in ascending and descending order */}
            <button onClick={() => onSort('date', 'asc')} className="bg-blue-500 text-white px-4 py-2 rounded">Sort Date Asc</button>
            <button onClick={() => onSort('date', 'desc')} className="bg-blue-500 text-white px-4 py-2 rounded">Sort Date Desc</button>
            {/* Buttons to sort by revenue in ascending and descending order */}
            <button onClick={() => onSort('revenue', 'asc')} className="bg-blue-500 text-white px-4 py-2 rounded">Sort Revenue Asc</button>
            <button onClick={() => onSort('revenue', 'desc')} className="bg-blue-500 text-white px-4 py-2 rounded">Sort Revenue Desc</button>
            {/* Buttons to sort by net income in ascending and descending order */}
            <button onClick={() => onSort('netIncome', 'asc')} className="bg-blue-500 text-white px-4 py-2 rounded">Sort Net Income Asc</button>
            <button onClick={() => onSort('netIncome', 'desc')} className="bg-blue-500 text-white px-4 py-2 rounded">Sort Net Income Desc</button>
        </div>
    );
};

export default SortButtons;