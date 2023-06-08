import { Routes, Route } from 'react-router-dom';

import './index.css';
import Welcome from './components/Welcome';
import Products from './components/Products';

function App() {
    return (
        <div>
            <h2>Let's get started</h2>
            <Routes>
                <Route path="/welcome" element={<Welcome />} />
                <Route path="/products" element={<Products />} />
            </Routes>
        </div>
    );
}
export default App;