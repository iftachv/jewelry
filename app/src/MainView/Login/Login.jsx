import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { forwardRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../images/logo.png";
import "./Login.css";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const URl = "http://localhost:3002";

function Login({ showLoginINfo, setShowLoginInfo }) {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [openNotifcation, setOpenNotifcation] = useState(false);
  const [notification, setNotifcation] = useState("");
  const [error, setError] = useState("");
  const onSumbitHandler = (e) => {
    e.preventDefault();
    fetch(URl + "/user/login", {
      method: "POST", // or 'PUT',
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setOpenNotifcation(true);
        if (data.ok) {
          localStorage.setItem("user", email);
          setError("success");
          setShowLoginInfo({ login: true, name: data.name });
        } else {
          setError("error");
        }
        const timer = setTimeout(() => {
          setOpenNotifcation(false);
          clearTimeout(timer);
        }, 2000);
        setNotifcation(data.message);
        if (data.ok) {
          navigate("/");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <form onSubmit={onSumbitHandler} className="login">
      <div className="login__header">
        <img className="login__logo" src={logo} alt="logo" />
        <Snackbar open={openNotifcation} autoHideDuration={6000}>
          <Alert severity={error} sx={{ width: "100%" }}>
            {notification}
          </Alert>
        </Snackbar>
        <Typography className="login__header_text" variant="h6" gutterBottom>
          Login
        </Typography>
      </div>

      <TextField
        id="email"
        label="Email"
        variant="standard"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <TextField
        id="password"
        label="Password"
        type="password"
        variant="standard"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <input
        disabled={!password || !email}
        type="submit"
        className={!password || !email ? "not_work_login" : "login__button"}
        value="Login"
      />
      <Typography variant="subtitle1" gutterBottom>
        have an account? <Link to="/signup">create an account</Link>
      </Typography>
    </form>
  );
}

export default Login;
