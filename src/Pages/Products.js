import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/Button';
const Products = () => {
    const navigate = useNavigate();
    const redirectToWelcome = () => {
        navigate("/welcome");
    }
    return <section>
        <h3>
            The Product Page
        </h3>
        <ul>
            <li><Link to="/product/macbook">MacBook</Link></li>
            <li><Link to="/product/ipad">Ipad</Link></li>
            <li><Link to="/product/iphone">Iphone</Link></li>
        </ul>
        <Button type="submit" onClick={redirectToWelcome}>Click me</Button>
    </section>
}
export default Products;