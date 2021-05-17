import { Redirect } from 'react-router-dom'
import { useFormik } from 'formik'
import * as yup from 'yup'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

import './Form.css'
import { useDispatch, useSelector } from 'react-redux'
import { State } from '../../store/reducers/reducers'
import { loginUser, loginGoogleUser } from '../../store/actions'
import { LinearProgress } from '@material-ui/core'

interface FormProps {
  isAuthenticated: boolean
  loginUser(email: string, password: string): void
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  })
)

const validationSchema = yup.object({
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup.string().required('Password is required'),
})

const Form: React.FC<FormProps> = () => {
  const dispatch = useDispatch()
  const { isAuthenticated, isLoggingIn } = useSelector(
    (state: State) => state.auth
  )
  const classes = useStyles()

  const googleLogin = () => {
    dispatch(loginGoogleUser())
  }

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(loginUser(values.email, values.password))
    },
  })

  return isAuthenticated ? (
    <Redirect to="/newcases" />
  ) : (
    <div className="login_container">
      {isLoggingIn ? (
        <LinearProgress />
      ) : (
        <div className="login_form_container">
          <h1>Welcome!</h1>
          <h3>Please Login</h3>
          <form className={classes.root} onSubmit={formik.handleSubmit}>
            <TextField
              fullWidth
              id="email"
              name="email"
              label="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <Button color="primary" variant="contained" fullWidth type="submit">
              Submit
            </Button>
          </form>
          <br />
          <Button onClick={googleLogin} variant={'contained'} color="secondary">
            Continue with Google
          </Button>
        </div>
      )}
    </div>
  )
}

export default Form
