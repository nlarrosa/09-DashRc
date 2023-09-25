import { render,  screen  } from '@testing-library/react';
import { PublicRoutes } from '../../src/Routes/PublicRoutes';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { PrivateRoutes } from '../../src/Routes/PrivateRoutes';

describe('TEST ROUTES <PublicRoutes />',  () => {

    const state = {
        isLogged: false
    }

    test('STATUS Mostrar un children si esta logueado', () => {

        render(
            <MemoryRouter initialEntries={['/auth/user/login']}>

            <Routes>
                <Route path='/auth/*' element={
                    <PublicRoutes isLogged={state.isLogged}>
                        <h1> TEST ROUTE PUBLIC </h1>
                    </PublicRoutes>
                } />

                <Route path='/*' element={
                    <PrivateRoutes  isLogged={state.isLogged}>
                        <h1> TEST ROUTE PRIVATE </h1>
                    </PrivateRoutes>
                } />
            </Routes>
            </MemoryRouter>
        )

        expect(screen.getByText('TEST ROUTE PUBLIC')).toBeTruthy();
    })
})