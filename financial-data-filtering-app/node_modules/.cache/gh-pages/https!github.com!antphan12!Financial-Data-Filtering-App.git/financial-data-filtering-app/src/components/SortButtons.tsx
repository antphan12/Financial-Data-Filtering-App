import React from 'react';

interface SortButtonsProps {
    onSort: (column: string, order: 'asc' | 'desc') => void;
}

const SortButtons: React.FC<SortButtonsProps> = ({ onSort }) => {
    return (
        <div className="flex space-x-4">
            <button onClick={() => onSort('date', 'asc')} className="bg-blue-500 text-white px-4 py-2 rounded">Sort Date Asc</button>
            <button onClick={() => onSort('date', 'desc')} className="bg-blue-500 text-white px-4 py-2 rounded">Sort Date Desc</button>
            <button onClick={() => onSort('revenue', 'asc')} className="bg-blue-500 text-white px-4 py-2 rounded">Sort Revenue Asc</button>
            <button onClick={() => onSort('revenue', 'desc')} className="bg-blue-500 text-white px-4 py-2 rounded">Sort Revenue Desc</button>
            <button onClick={() => onSort('netIncome', 'asc')} className="bg-blue-500 text-white px-4 py-2 rounded">Sort Net Income Asc</button>
            <button onClick={() => onSort('netIncome', 'desc')} className="bg-blue-500 text-white px-4 py-2 rounded">Sort Net Income Desc</button>
        </div>
    );
};

export default SortButtons;