import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import IncomeStrategies from './pages/IncomeStrategies';
import Auction from './pages/Auction';

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/income-strategies" element={<IncomeStrategies />} />
          <Route path="/auction" element={<Auction />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
