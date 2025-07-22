import { Link } from 'react-router-dom';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <nav className="bg-white shadow mb-8">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Hawaii Ryan</h1>
          <div className="space-x-4">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/income-strategies" className="hover:underline">Income Ideas</Link>
            <Link to="/auction" className="hover:underline">Auction Biz</Link>
          </div>
        </div>
      </nav>
      <main className="container mx-auto px-4">{children}</main>
      <footer className="text-center py-4 bg-white mt-8">
        © {new Date().getFullYear()} Hawaii Ryan
      </footer>
    </div>
  );
}

