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
import FaqPage from '../pages/_Faq.vue';
import RentDetails from '../pages/_RentDetails.vue';
import BecomePremium from '../pages/_BecomePremium.vue';
import OurPartners from '../pages/_OurPartners.vue';


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
            name: '',
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
                    path: 'registration',
                    name: 'registration',
                    component: RegisterPage,
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
                },
                {
                    path: 'faq',
                    name: 'faq',
                    component: FaqPage,
                },
                {
                    path: 'rent-details',
                    name: 'rent-details',
                    component: RentDetails,
                },
                {
                    path: 'become-premium',
                    name: 'become-premium',
                    component: BecomePremium,
                },
                {
                    path: 'partners',
                    name: 'partners',
                    component: OurPartners,
                },
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