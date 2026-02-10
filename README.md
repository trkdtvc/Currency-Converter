# Currency Converter
A simple and responsive currency converter built with React that allows users to convert between ten major world currencies using a clean and intuitive interface.
## Features
- Convert between 10 widely used global currencies
- Mutual currency conversion using a single base reference
- Clear separation between calculation logic and display logic
- Instant updates when input amount or source currency changes
- Modern, minimal UI with responsive styling
## Supported Currencies
- USD (US Dollar)
- EUR (Euro)
- GBP (British Pound)
- JPY (Japanese Yen)
- CHF (Swiss Franc)
- CAD (Canadian Dollar)
- AUD (Australian Dollar)
- CNY (Chinese Yuan)
- SEK (Swedish Krona)
- NZD (New Zealand Dollar)
## How It Works
The converter normalizes the input amount to a base currency (USD) and derives all other currency values from it. Changing the source currency or amount recalculates the base value, while changing the target currency only updates the displayed result.
## Tech Stack
- React (hooks-based state management)
- JavaScript (ES6+)
- HTML
- CSS
## Project Structure
- `index.html` – Application entry point
- `index.jsx` – Currency converter logic and UI
- `styles.css` – Application styling
## Usage
Open the project in a browser, enter an amount, select the source currency, and choose the target currency to see the converted value instantly.
