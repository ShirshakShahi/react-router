import { Link } from 'react-router-dom';
const Products = () => {
    return <section>
        <h3>
            The Product Page
        </h3>
        <ul>
            <li><Link to = "/product/macbook">MacBook</Link></li>
            <li><Link to = "/product/ipad">Ipad</Link></li>
            <li><Link to = "/product/iphone">Iphone</Link></li>
        </ul>
    </section>
}
export default Products;