import { NavLink, useMatch } from 'react-router-dom';
import classes from './MainNavigation.module.css';

const MainNavigation = () => {

    const match1 = useMatch("/quotes")
    const match2 = useMatch("/new-quote")

    return <header className={classes.header}>
        <div className={classes.logo}>Great Quotes</div>
        <nav className={classes.nav}>
            <ul>
                <li>
                    <NavLink to="/quotes" className={match1 ? classes.active : ''}>All Quotes</NavLink>
                </li>
                <li>
                    <NavLink to="/new-quote" className={match2 ? classes.active : ''}>New Quotes</NavLink>
                </li>
            </ul>
        </nav>
    </header>

}

export default MainNavigation;