# Financial Data Filtering App

This project is a financial data filtering application that allows users to fetch, filter, and analyze annual income statements for Apple Inc. (AAPL) using data from a public API. The application is built with React and TypeScript, and styled using TailwindCSS.

## Features

- Fetch annual income statements for AAPL from the Financial Modeling Prep API.
- Display key financial metrics in a responsive table format.
- Filter data based on:
  - Date Range
  - Revenue
  - Net Income
- Sort data by:
  - Date (ascending/descending)
  - Revenue (ascending/descending)
  - Net Income (ascending/descending)

## Technologies Used

- React (with TypeScript)
- TailwindCSS
- Financial Modeling Prep API

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd financial-data-filtering-app
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Configure the API key:**
   Replace `<api_key>` in the `useFetchData.ts` file with your actual API key from Financial Modeling Prep.

4. **Run the application:**
   ```
   npm start
   ```

5. **Open your browser:**
   Navigate to `http://localhost:3000` to view the application.

## Usage

- Use the filter form to specify criteria for filtering the financial data.
- Click on the sort buttons to arrange the data in the desired order.
- The table will update dynamically based on the applied filters and sorting options.
