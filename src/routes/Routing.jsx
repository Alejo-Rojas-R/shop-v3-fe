import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { ItemPage } from '../components/pages/ItemPage';
import { SearchPage } from '../components/pages/SearchPage';
import { Footer } from '../components/layout/Footer';
import { Header } from '../components/layout/Header';
import { LoginPage } from '../components/pages/LoginPage';
import { RegisterPage } from '../components/pages/RegisterPage';
import { AccountPage } from '../components/pages/AccountPage';
import { useSelector } from 'react-redux';

export const Routing = () => {
    const currentUser = useSelector(state => state.user);

    return (
        <BrowserRouter>
            <Header />
            <div className='body'>
                <Routes>
                    <Route path='/' element={<SearchPage />} />
                    <Route path='/home' element={<Navigate to='/' />} />
                    <Route path='/product/:id' element={<ItemPage />} />
                    <Route path='/search' element={<SearchPage />} />

                    <Route path='/login' element={<LoginPage />} />
                    <Route path='/register' element={<RegisterPage />} />

                    <Route path='/account' element={currentUser.name ? <AccountPage /> : <Navigate to='/login' />} />
                </Routes>
            </div>
            <Footer />
        </BrowserRouter>
    )
}