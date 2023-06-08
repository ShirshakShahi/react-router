import { Routes, Route } from 'react-router-dom';
import './index.css';
import Welcome from './Pages/Welcome';
import Products from './Pages/Products';
import MainHeader from './components/MainHeader';
import ProductDetail from './Pages/ProductDetail';

function App() {
    return (
        <div>
            <MainHeader />
            <main>
                <Routes>
                    <Route path="/welcome" element={<Welcome />} />
                    <Route path="/products" element={<Products />} exact />
                    <Route path="/product/:productId" element={<ProductDetail />} />
                </Routes>
            </main>
        </div>
    );
}
export default App;