import { Routes, Route } from 'react-router-dom';;
const Welcome = () => {
    return <>
        <h3>
            The Welcome Page
        </h3>
        <Routes>
            <Route path="/welcome/new-user" element={
                    <p>Hello new user!!!</p>
            } />
        </Routes>
    </>
}
export default Welcome;