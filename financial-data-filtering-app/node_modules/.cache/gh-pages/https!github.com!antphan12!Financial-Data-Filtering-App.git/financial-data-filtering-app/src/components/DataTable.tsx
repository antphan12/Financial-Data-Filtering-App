import React from 'react';
import '../styles/DataTable.css';


interface FinancialData {
    date: string;
    revenue: number;
    netIncome: number;
    grossProfit: number;
    eps: number;
    operatingIncome: number;
}

interface DataTableProps {
    data: FinancialData[];
}

const DataTable: React.FC<DataTableProps> = ({ data }) => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Revenue</th>
                        <th>Net Income</th>
                        <th>Gross Profit</th>
                        <th>Earnings Per Share (EPS)</th>
                        <th>Operating Income</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.date}>
                            <td>{item.date}</td>
                            <td>${item.revenue.toLocaleString()}</td>
                            <td>${item.netIncome.toLocaleString()}</td>
                            <td>${item.grossProfit.toLocaleString()}</td>
                            <td>${item.eps.toFixed(2)}</td>
                            <td>${item.operatingIncome.toLocaleString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DataTable;