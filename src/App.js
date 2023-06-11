import { Route, Routes } from 'react-router-dom';
import NewQuote from './pages/NewQuote';
import AllQuotes from './pages/AllQuotes';
import QuoteDetail from './pages/QuoteDetail';
import Comments from './components/comments/Comments';
import Layout from './components/layout/Layout';
import NotFound from './pages/NotFound';


function App() {
  return (<Layout>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quotes" element={<AllQuotes />} />
      <Route path="/quotes/:quoteId" element={<QuoteDetail />} />
      <Route path="/quotes/:quoteId/comments" element={<Comments />} />
      <Route path="/new-quote" element={<NewQuote />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Layout>
  );
}

function Home() {
  return <AllQuotes />;
}

export default App;
