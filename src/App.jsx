import { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router'
import { Context } from './Context'
import { Home } from './Private'
import { Login, Register } from './Public'

const App = () => {
  const { token } = useContext(Context)

  return (
    <div>
      <Routes>
        {token !== null ? (
          <>
            <Route path="/*" element={<Home />} />
            <Route path="*" element={<Navigate to={'/'} replace={true} />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Navigate to={'/'} replace={true} />} />
          </>
        )}
      </Routes>
    </div>
  )
}

export default App
