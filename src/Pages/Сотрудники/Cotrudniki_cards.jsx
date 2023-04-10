import { NavLink } from 'react-router-dom'

// import "./Sotrudniki.css"
export const Sotrudniki_cards = ({ data }) => {
  return (
    <div className="sotrudniki_cards">
      {data?.map((v) => (
        <div key={v._id}>
          <strong>FIO</strong>
          <strong>{v.name}</strong>
          <strong>{v.phone_number}</strong>
          <strong>...</strong>
        </div>
      ))}
    </div>
  )
}
