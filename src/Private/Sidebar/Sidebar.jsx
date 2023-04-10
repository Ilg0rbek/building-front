import './Sidebar.css'
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/images/Logo 1.svg'
export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar_img">
        <img src={Logo} alt="" />
      </div>
      <div className="sidebar_links">
        <NavLink
          to={'/главная'}
          className={(params) => (params.isActive ? 'active' : false)}
        >
          Главная
        </NavLink>
        <NavLink to={'/здания'}>Здания</NavLink>
        <NavLink to={'/сотрудники'}>Сотрудники</NavLink>
        <NavLink to={'/заявки'}> Заявки</NavLink>
        <NavLink to={'/клиенты'}> Клиенты</NavLink>
        <NavLink to={'/склад'}> Склад</NavLink>
        <NavLink to={'/статистика'}> Статистика</NavLink>
        <NavLink to={'/расходы'}> Расходы</NavLink>
        <NavLink to={'/настройки'}>Настройки</NavLink>
      </div>
    </div>
  )
}
