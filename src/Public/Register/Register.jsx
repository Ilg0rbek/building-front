import {
  FormControl,
  Button,
  Box,
  Typography,
  Stack,
  Paper,
} from '@mui/material'
import TextField from '@mui/material/TextField'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import axios from 'axios'
import { useContext } from 'react'
import { Context } from '../../Context'
import Logo from '../../assets/images/Logo 1.svg'
import { NavLink, useNavigate } from 'react-router-dom'
export const Register = () => {
  const { setToken, setUser } = useContext(Context)
  const date = new Date()
  const navigator = useNavigate()
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Email it's invalid")
      .required("Email it's required"),
    lastname: Yup.string().required("Lastname it's required"),
    name: Yup.string().required("Lastname it's required"),
    surname: Yup.string().required('Otch required'),
    password: Yup.string()
      .min(3, 'Minimum 3')
      .max(12, 'Maximum 12')
      .required('Password required'),
  })
  const {
    register,
    formState,
    watch,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
    values: {
      email: '',
      lastname: '',
      name: '',
      surname: '',
      password: '',
    },
    mode: 'onBlur',
    resolver: yupResolver(validationSchema),
  })
  const onSubmit = async (data) => {
    const jsons = await axios({
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data,
      url: 'http://localhost:8080/api/signup',
    }).catch((error) => console.log(error))
    let response = await jsons
    console.log(response)
    if (response) {
      const { accessToken, user } = response
      if (accessToken !== undefined || accessToken !== null) {
        setToken(accessToken)
        setUser(user)
      }
    }
  }
  console.log(formState)
  console.log(errors)
  watch()
  return (
    <div
      className="w-50 mx-auto d-flex align-items-center"
      style={{ minHeight: '100vh' }}
    >
      <Box className="w-100 text-center">
        <img src={Logo} className="pb-4" alt="Logo" />
        <Typography variant="h3" className="pb-5">
          Регистрация
        </Typography>
        <Paper className="p-5 w-75 mx-auto shadow">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={3}>
              <Box>
                <TextField
                  className="w-75"
                  id="email"
                  label="Email"
                  error={errors?.email ? true : false}
                  name="email"
                  type={'email'}
                  {...register('email')}
                  placeholder="Email"
                  variant="outlined"
                ></TextField>
                {errors?.email ? (
                  <Typography variant="body2" sx={{ color: 'crimson' }}>
                    {errors.email.message}
                  </Typography>
                ) : (
                  false
                )}
              </Box>
              <Box>
                <TextField
                  className="w-75"
                  name="familya"
                  error={errors?.lastname ? true : false}
                  label="Фамилия"
                  type="text"
                  {...register('lastname')}
                  placeholder="Фамилия"
                  variant="outlined"
                />
                {errors?.lastname ? (
                  <Typography variant="body2" sx={{ color: 'crimson' }}>
                    {errors.lastname.message}
                  </Typography>
                ) : (
                  false
                )}
              </Box>
              <Box>
                <TextField
                  className="w-75"
                  name="Ism"
                  error={errors?.name ? true : false}
                  label="Имя"
                  type="text"
                  {...register('name')}
                  placeholder="Имя"
                  variant="outlined"
                />
                {errors?.name ? (
                  <Typography variant="body2" sx={{ color: 'crimson' }}>
                    {errors.name.message}
                  </Typography>
                ) : (
                  false
                )}
              </Box>
              <Box>
                <TextField
                  className="w-75"
                  name="surname"
                  error={errors?.surname ? true : false}
                  label="Отчество"
                  type={'text'}
                  {...register('surname')}
                  placeholder="Отчество"
                  variant="outlined"
                />
                {errors?.surname ? (
                  <Typography variant="body2" sx={{ color: 'crimson' }}>
                    {errors.surname.message}
                  </Typography>
                ) : (
                  false
                )}
              </Box>
              <Box>
                <TextField
                  className="w-75"
                  name="parol"
                  label="Пароль"
                  error={errors?.password ? true : false}
                  type={'password'}
                  {...register('password')}
                  placeholder="Пароль"
                  variant="outlined"
                />
                {errors?.password ? (
                  <Typography variant="body2" sx={{ color: 'crimson' }}>
                    {errors.password.message}
                  </Typography>
                ) : (
                  false
                )}
              </Box>
              <Box className="d-flex justify-content-center">
                <Button disabled={!isValid} type="submit" variant="contained">
                  Регистрация
                </Button>
                <Box className="px-2">
                  <Typography variant="body1">Уже есть аккаунт?</Typography>
                  <NavLink
                    to={'/'}
                    className="text-decoration-none"
                    style={{ color: '#939393' }}
                  >
                    Войти
                  </NavLink>
                </Box>
              </Box>
            </Stack>
          </form>
        </Paper>
      </Box>
    </div>
  )
}
