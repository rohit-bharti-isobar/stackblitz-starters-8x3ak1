import React from 'react';
import './assets/scss/style.scss';
import Header from './components/common/Header';
import Footer from './components/common/Footer';

export default function App() {
  return (
    <div>
      <Header />
      <div className="container mt-4 mb-4">
        <h1>Hello StackBlitz!</h1>
        <p>Start editing to see some magic happen :)</p>
      </div>
      <Footer />
    </div>
  );
}
