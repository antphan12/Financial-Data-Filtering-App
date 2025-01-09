import React, { useEffect, useState } from 'react';
import DataTable from '../components/DataTable';
import FilterForm from '../components/FilterForm';
import SortButtons from '../components/SortButtons';
import useFetchData from '../hooks/useFetchData';
import { FinancialData } from '../types';

const HomePage: React.FC = () => {
    const { data, loading, error } = useFetchData('https://financialmodelingprep.com/api/v3/income-statement/AAPL?period=annual&apikey=<api_key>');
    const [filteredData, setFilteredData] = useState<FinancialData[]>(data || []);
    
    const handleFilter = (filters: any) => {
        // Implement filtering logic based on filters
    };

    const handleSort = (sortKey: keyof FinancialData, ascending: boolean) => {
        // Implement sorting logic based on sortKey and ascending
    };

    useEffect(() => {
        if (data) {
            setFilteredData(data);
        }
    }, [data]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error fetching data</div>;

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Financial Data Filtering App</h1>
            <FilterForm onFilter={handleFilter} />
            <SortButtons onSort={handleSort} />
            <DataTable data={filteredData} />
        </div>
    );
};

export default HomePage;