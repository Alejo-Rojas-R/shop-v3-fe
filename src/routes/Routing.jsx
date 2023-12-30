import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { ItemPage } from '../components/pages/ItemPage';
import { ResultsPage } from '../components/pages/ResultsPage';
import { HomePage } from '../components/pages/HomePage';
import { Footer } from '../components/layout/Footer';
import { LoginPage } from '../components/pages/LoginPage';
import { RegisterPage } from '../components/pages/RegisterPage';
import { AccountPage } from '../components/pages/AccountPage';
import { useSelector } from 'react-redux';
import { NavBar } from '../components/layout/NavBar';

export const Routing = () => {
    const currentUser = useSelector(state => state.user);

    return (
        <BrowserRouter>
            <NavBar />
            <div className='body'>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/home' element={<Navigate to='/' />} />
                    <Route path='/product/:id' element={<ItemPage />} />
                    <Route path='/search' element={<ResultsPage />} />

                    <Route path='/login' element={<LoginPage />} />
                    <Route path='/register' element={<RegisterPage />} />

                    <Route path='/account' element={currentUser.name ? <AccountPage /> : <Navigate to='/login' />} />
                </Routes>
            </div>
            <Footer />
        </BrowserRouter>
    )
}