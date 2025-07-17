import React from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';

// Button Component
const Button = ({ children }) => (
  <button className="px-4 py-2 bg-black text-[#00BD2B] rounded-full shadow-md hover:bg-gray-800 transition-colors duration-200">
    {children}
  </button>
);

// Logo Component
const Logo = () => {
  // IMPORTANT: Replace this placeholder Base64 string with your actual logo.png's Base64 string.
  // Make sure to copy the ENTIRE string, starting with "data:image/png;base64,..."
  const logoBase64 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAAAkCAYAAADSO4eRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQ/SURBVHgB5VnhedowED2c/i9NBsCZoDBBnAlCJ4g7QekEkAmaTICZIM0EOBNAJkATBBZI3HdwIoeQwRhIoHnfd0jySSf7dHc6iQoVQBU4OTmJsiy74CbKUFiTSqXyBBq+vLykE4COGJVVTOigHgTBNaoxN2k9ktfX1xvoxNARwqsMtgQooY1qy8OeCDFC8uP2+fn5Nx0ZlpQBPYRQRJ/Uh8ItUtADqn/dVWfrQVGHq7RBoWIZWMnlMVnJgjJcRUABBvQTH5RSAWB87CjlqBQyV4bHInr4kNamQZHlQBl/QE15xAppHFVwPT097YIyoYS2BMtQ8rp0BJhaBlYzEquYusZ4PD6nLcFBGNYxsC4j7pLSASPgH+QQbfsAyrikHYDdguONbXMsoQNHwD6Ol46knewy2LElQAkp11FGbIF0wIB3BLFtwJR7tGMgM71Rk0V0wAiwYhdSn+zJp4ckSRossE57BuaIQV2hcJOxX+wADpxnZ2csKISFcHI1zJlsmmRJ01g3cCFBOQKfcxVWBgfU77QF5F1jUMJyPfyu8C3Y0g0Vhdr+XGq5LwLqZ8sYuSuAse08ubQFZC7G2MNrqncag+43tYxgBU/vMCEK3nojTz/mDRwXiKkEWIaYOVPV4VXpLSGsunzn3RqwnB8+61mFVcrQk7XVi7DJc1Dkg5hRfe9V/5DKgbPWrtBXzcCH2XkNzy1tDeuCk02VYPFlXQflpxYNOxl4CYoBzT6e3YjPJgntCZDdQdFZ06102h8U6BOr+kLgktW5U/xrKgnJdWrqUYOfaXcQN4pUXjR1H2nrfvM+vjG58lYE0EwG9FVg8gms6sBVRGaOMvIQqT4jG7SdD/dhJPxb9azuzDmW59OjSBHL0AKWtluxDiNNVkyNysHQookbKrYtTjz99NhUPY9sRRRjrYnvagopY25+nqClJ7f4RiUA2Xw41C7HOcp5Xh6jxg1lrO1nZJw9Y+nxOs9ZWmRWhqHdIveuFKsxpHeGLGAqzaZizTNvq3BWxq7PI/qOdAFQxh19DB6k1G5sLePRdgpwcdshv0Lsixv7YEU8mJscm22OvB5S/IQ+BqmqX8oOVXd50zwDColxluDj9hXOE6y9R1ESgz8utIJAiZ5F8pCqFoyxLcgzuCe5Ap+v/XofebHDC5TJ+YhmSjCKnVJRQEhLbU19D/+X4se0BTC+o2TVPPyRu7UqXj+PJ3y7xY7UNy30LbKbJPQWA3hPv1YThPT234rZZ/a5A6RShqAr59kUa5XhyTKTbHYi5PODTcUZPVnZDpWHUfWIdovUI/uRygAfmWQFQSWR+bPJmuKPyrqJ08ci1PwibjIFLCRGwRe8e8sVZL93t99SSVwOHlR9WPZ0+64QC2Ha6TWhY3lH8V/O3pAtHtqa9JmhYg6jSp8N2ezOog8afHoX8exQoyznonjttd9/glTKJ9Bt3i7yDwI32xLUo15uAAAAAElFTkSuQmCC"; // YOUR LOGO.PNG BASE64 STRING HERE

  return (
    <Link to="/" className="flex items-center text-white text-xl font-bold">
      <img src={logoBase64} alt="QTify Logo" width={67} />
    </Link>
  );
};

// Search Component
const Search = ({ placeholder, searchData }) => {
  // Base64 string for a simple search icon SVG (magnifying glass) with white fill
  const searchIconBase64 = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNC4zMjU3IDEyLjg5ODdMMTkuNzA1NyAxOC4yNzg3QzE5Ljg5NDggMTguNDY4IDIwLjAwMSAxOC43MjQ2IDIwLjAwMDkgMTguOTkyMUMyMC4wMDA4IDE5LjI1OTYgMTkuODk0NSAxOS41MTYxIDE5LjcwNTIgMTkuNzA1MkMxOS41MTYgMTkuODk0MyAxOS4yNTk0IDIwLjAwMDUgMTguOTkxOSAyMC4wMDA0QzE4LjcyNDQgMjAuMDAwMyAxOC40Njc4IDE5Ljg5NCAxOC4yNzg3IDE5LjcwNDdMMTIuODk4NyAxNC4zMjQ3QzExLjI5MDUgMTUuNTcwNCA5LjI2ODAyIDE2LjE1NjYgNy4yNDI4NyAxNS45NjQxQzUuMjE3NzIgMTUuNzcxNiAzLjM0MTk4IDE0LjgwNzcgMS45OTcyMyAxMy4yODg0QzAuNjUyNDc3IDExLjc2MTkgLTAuMDYwMjY1MSA5Ljc4MDU2IDAuMDAzOTk2MzMgNy43NDcyOUMwLjA2ODI1NzcgNS43MTQwMiAwLjkwNDY5NSAzLjc4MTYgMi4zNDMxNSAyLjM0MzE1QzMuNzgxNiAwLjkwNDY5NSA1LjcxNDAyIDAuMDY4MjU3NyA3Ljc0NzI5IDAuMDAzOTk2MzNDOS43ODA1NiAtMC4wNjAyNjUxIDExLjY1NzIgMC42NTI0NzcgMTMuMjg4NCAxLjk5NzIzQzE0LjgwNzcgMy4zNDE5OCAxNS43NzE2IDUuMjE3NzIgMTUuOTY0MSA3LjI0Mjg3QzE2LjE1NjYgOS4yNjgwMiAxNS41NzA0IDExLjI5MDUgMTQuMzI0NyAxMi44OTg3SDE0LjMyNTdaTTguMDAwNzQgMTMuOTk5N0M5LjU5MjA0IDEzLjY1NzIgMTEuMTE4MiAxMy4zNjc2IDEyLjI0MzQgMTIuMjQyNEMxMy4zNjg2IDExLjExNzIgMTQuMDAwNyA5LjU5MTA0IDE0LjAwMDcgNy45OTk3NEMxNC4wMDA3IDYuNDA4NDUgMTMuMzY4NiA0Ljg4MjMyIDEyLjI0MzQgMy43NTcxQzExLjExODIgMi42MzE4OSA5LjU5MjA0IDEuOTk5NzQgOC4wMDA3NCAxLjk5OTc0QzYuNDEwNzQgMS45OTk3NCA0Ljg4MzMyIDIuNjMxODkgMy43NTgxIDMuNzU3MUMyLjYzMjg5IDQuODgyMzIgMi4wMDA3NCA2LjQwODQ1IDIuMDAwNzQgNy45OTk3NEMyLjAwMDc0IDkuNTkxMDQgMi42MzI4OSAxMS4xMTcyIDMuNzU4MSAxMi4yNDI0QzQuODgzMzIgMTMuMzY3NiA2LjQwOTQ0IDEzLjk5OTcgOC4wMDA3NCAxMy45OTk3WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==";

  return (
    // Wrapper for the search bar, applying the overall height and flex properties.
    // The `rounded-lg` on the outer div will give it the 8px corner radius.
    // `border border-black` for the 1px black border.
    <div className="flex items-stretch h-12 border border-black rounded-lg overflow-hidden">
      <input
        type="text"
        placeholder={placeholder}
        // Input styling: flex-grow to take available space, no border, specific padding.
        // rounded-tl-lg and rounded-bl-lg for the left corners.
        className="flex-grow px-5 py-3.5 border-none focus:outline-none bg-white text-gray-800 rounded-tl-lg rounded-bl-lg"
      />
      <button
        // Button styling: specific padding, black background, white text, no left border.
        // rounded-tr-lg and rounded-br-lg for the right corners.
        className="flex-shrink-0 px-5 py-3.5 bg-black text-white rounded-tr-lg rounded-br-lg border-l-0 border border-black hover:bg-gray-800 transition-colors duration-200 cursor-pointer"
      >
        <img src={searchIconBase64} alt="search icon" className="h-5 w-5" />
      </button>
    </div>
  );
};

// Navbar Component
function Navbar({ searchData }) {
  return (
    <nav
      style={{
        backgroundColor: '#00BD2B', // Green background
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        borderRadius: '8px',
      }}
      className="w-full"
    >
      <Logo />

      <div className="flex-grow flex justify-center mx-4"> {/* Centering search bar */}
        <Search
          placeholder="Search a album of your choice"
          searchData={searchData}
        />
      </div>

      <Button>Give Feedback</Button>
    </nav>
  );
}

// Main App Component
function App() {
  const mockSearchData = [];

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <Navbar searchData={mockSearchData} />
        <main className="flex-grow p-4">
          <h1 className="text-2xl font-bold text-center mt-8">Welcome to the App!</h1>
          <p className="text-center text-gray-600 mt-2">This is where your main content would go.</p>
          <Routes>
            <Route path="/" element={<div>Home Content</div>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
