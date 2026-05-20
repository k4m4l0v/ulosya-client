import Admin from "./pages/Admin"
import Device from "./pages/Device"
import Login from "./pages/Login"
import Shop from "./pages/Shop"
import { ADMIN_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "./utils/consts"

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    }
]

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: LOGIN_ROUTE,
        Component: Login
    },
    {
        path: DEVICE_ROUTE + '/:id',
        Component: Device
    }
]
