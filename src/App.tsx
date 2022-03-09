import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import { Navbar } from './components/Navbar';
import {
  BankAccounts, CreditCards, Dashboard, Loans, SubscriptionList,
} from './pages';

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/bankAccounts" element={<BankAccounts />} />
        <Route path="/creditCards" element={<CreditCards />} />
        <Route path="/subscriptions" element={<SubscriptionList />} />
        <Route path="/loans" element={<Loans />} />
      </Routes>

    </Router>
  );
}

export default App;
