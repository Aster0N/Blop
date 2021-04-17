import VueRouter from "vue-router";

import UserPages from '../components/UserPages'
import Menu from '../pages/_HorizontalMenu'
import MenuLayout from '../pages/MenuLayout'
import LoginPage from '../pages/_LoginPage'
import VehiclesPage from '../pages/_VehiclesPage'
import RentPage from '../pages/_RentPage'
import CompanyPage from '../pages/_CompanyPage'
import ContactasPage from '../pages/_ContactsPage'


import NotFound from '../pages/404'

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'user-pages',
            component: UserPages,
        },
        {
            path: '/menu',
            name: 'menu-layout',
            component: MenuLayout,
            children: [
                {
                    path: '',
                    name: 'menu',
                    component: Menu,
                },
                {
                    path: 'login',
                    name: 'login',
                    component: LoginPage,
                },
                {
                  path: 'vehicles',
                  name: 'vehicles',
                  component: VehiclesPage,
                },
                {
                    path: 'rent',
                    name: 'rent',
                    component: RentPage,
                },
                {
                    path: 'company',
                    name: 'company',
                    component: CompanyPage,
                },
                {
                    path: 'contacts',
                    name: 'contacts',
                    component: ContactasPage,
                }
            ]
        },
        // 404 page
        {
            path: '*',
            name: 'notFound',
            component: NotFound,
        }
    ]
})