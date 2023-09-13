import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { PrivateRoutes } from './PrivateRoutes'
import { GeneralLayout } from '../layouts/GeneralLayout'
import AuthLayout from '../layouts/AuthLayout'
import { PublicRoutes } from './PublicRoutes'

export const AppRoutes = () => {


  return (
    <>
        <Routes>
            <Route path='/auth/*' element={
                <PublicRoutes>
                    <AuthLayout />
                </PublicRoutes>
            } />

            <Route path='/*' element={
                <PrivateRoutes>
                    <GeneralLayout />
                </PrivateRoutes>
            } />
        </Routes>
    </>
  )
}
