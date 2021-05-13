import { Redirect } from 'react-router-dom'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { loginUser } from '../../store/actions/auth'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

import './Form.css'

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

const Form = (props: any) => {
  const { isAuthenticated, dispatch } = props
  const classes = useStyles()

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
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />
  } else {
    return (
      <div className="login_container">
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
        </div>
      </div>
    )
  }
}

export default Form
