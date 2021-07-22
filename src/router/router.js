import VueRouter from "vue-router";

import UserPages from '../pages/UserPages'
import Menu from '../pages/_HorizontalMenu'
import MenuLayout from '../components/MenuLayout'
import LoginPage from '../pages/_LoginPage'
import RegisterPage from '../pages/_RegisterPage'
import VehiclesPage from '../pages/_VehiclesPage'
import RentPage from '../pages/_RentPage'
import CompanyPage from '../pages/_CompanyPage'
import ContactasPage from '../pages/_ContactsPage'


// import NotFound from '../pages/404'

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
                // !=============
                // if this path in menu's children, than 'login' component is the same width with 'MenuLayout'(about 200px)
                // but if it is in login's children, than horizontal menu is so hard sensitive and it's just fly out the screen
                // think I need to read about 'nested routs'
                {
                    path: 'registration',
                    name: 'registration',
                    component: RegisterPage,
                },
                // !=============
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
        // {
        //     path: '*',
        //     name: 'notFound',
        //     component: NotFound,
        // }
    ]
})