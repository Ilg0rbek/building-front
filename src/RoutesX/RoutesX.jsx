import { useRoutes } from "react-router"
import { Asosiy } from "../Pages"
import { Sklad } from "../Pages/Cклад"
import { Klient } from "../Pages/Klient/Klient"
import { Zayafki } from "../Pages/Заявки/Zayafki"
import { Sotrudkiko } from "../Pages/Сотрудники"
import {Статистика} from "../Pages/Статистика"
import {Расходы} from "../Pages/Расходы"
import {Настройки} from "../Pages/Настройки"
import {Здания} from "../Pages/Здания"
export const RoutesX = () => {
    const route = [
        {
            path: "/",
            element: <Asosiy/>
        },
        {
            path: "/главная/*",
            element: <Asosiy/>,
        },
        {
            path: "/здания/*",
            element: <Здания/>
        },
        {
            path: "/сотрудники",
            element: <Sotrudkiko/>
        },
        {
            path: "/заявки",
            element: <Zayafki/>
        },
        {
            path: "/клиенты",
            element: <Klient/>
        },
        {
            path: "/склад",
            element: <Sklad/>
        },
        {
            path: "/статистика/*",
            element: <Статистика/> 
        },
        {
            path: "/расходы",
            element:<Расходы/> 
        },
        {
            path: "/настройки",
            element: <Настройки/>
        }
    ]
    return useRoutes(route)
}