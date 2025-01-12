import React, { useState, useEffect } from 'react';
import SortButtons from '../components/SortButtons';
import useFetchData from '../hooks/useFetchData';
import { FinancialData, FilterCriteria } from '../types';
import DataTable from '../components/DataTable';
import FilterForm from '../components/FilterForm';
import '../styles/HomePage.css';

// HomePage component definition
const HomePage: React.FC = () => {
    // Fetch data from the API
    const { data, loading, error } = useFetchData(`https://financialmodelingprep.com/api/v3/income-statement/AAPL?period=annual&apikey=4TiqIE3kxLx0SCU7HqNhURgxpkdgA19h`);
    
    // State to hold the filtered data
    const [filteredData, setFilteredData] = useState<FinancialData[]>(data || []);

    // Update filteredData when data changes
    useEffect(() => {
        if (data) {
            setFilteredData(data);
        }
    }, [data]);

    // Function to handle filtering of data based on filter criteria
    const handleFilter = (filters: FilterCriteria) => {
        const { dateRange, revenueRange, netIncomeRange } = filters;
        const [startDate, endDate] = dateRange;
        const [minRevenue, maxRevenue] = revenueRange;
        const [minNetIncome, maxNetIncome] = netIncomeRange;

        // Filter the data based on the provided criteria
        const filtered = data.filter(item => {
            const date = new Date(item.date).getFullYear();
            const startYear = new Date(startDate).getFullYear();
            const endYear = new Date(endDate).getFullYear();
            return (
                date >= startYear && date <= endYear &&
                item.revenue >= minRevenue && item.revenue <= maxRevenue &&
                item.netIncome >= minNetIncome && item.netIncome <= maxNetIncome
            );
        });

        // Update the state with the filtered data
        setFilteredData(filtered);
    };

    // Function to handle sorting of data based on a column and order
    const handleSort = (column: string, order: 'asc' | 'desc') => {
        const sortKey = column as keyof FinancialData;
        const ascending = order === 'asc';
        const sorted = [...filteredData].sort((a, b) => {
            if (ascending) {
                return a[sortKey] > b[sortKey] ? 1 : -1;
            } else {
                return a[sortKey] < b[sortKey] ? 1 : -1;
            }
        });
        setFilteredData(sorted);
    };

    // Render loading state
    if (loading) return <div>Loading...</div>;
    
    // Render error state
    if (error) return <div>Error fetching data: {error}</div>;

    // Render the main content
    return (
        <div className="container">
            <h1>Financial Data Filtering App</h1>
            <FilterForm onFilter={handleFilter} />
            <SortButtons onSort={handleSort} />
            <div className="data-table">
                <DataTable data={filteredData} />
            </div>
        </div>
    );
};

export default HomePage;