import { Route, HashRouter as Router, Routes, Switch } from 'react-router-dom';
import './assets/scss/global.scss'
import { AppHeader } from './cmps/AppHeader'
import { HomePage } from './views/HomePage'
import { ContactIndex } from './views/ContactIndex';
import { ContactDetails } from './views/ContactDetails';
import { ContactEdit } from './views/ContactEdit';
import { StatisticPage } from './views/StatisticPage';
import { Signup } from './views/Signup';
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";

Chart.register(CategoryScale);

function App() {
  return (
    <Router>
      <section className="main-app">
        <AppHeader />

        <main className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactIndex />} />
            <Route path="/contact/:id" element={<ContactDetails />} />
            <Route path="/contact/edit/:id?" element={<ContactEdit />} />
            <Route path="/statistic" element={<StatisticPage />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </main>

        <footer>
          <section className="container">
            BitcoinRights 2022 &copy;
          </section>
        </footer>

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </section>
    </Router>
  )
}

export default App;
