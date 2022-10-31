import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { forwardRef, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const URl = "http://localhost:3002";
function Signup() {
  const [fName, setFname] = useState("");
  const [lName, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [openNotifcation, setOpenNotifcation] = useState(false);
  const [notification, setNotifcation] = useState("");
  const [error, setError] = useState("");

  const onSumbitHandler = (e) => {
    e.preventDefault();
    console.log(URl + "/user/signup");
    fetch(URl + "/user/signup", {
      method: "POST", // or 'PUT',
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: fName,
        lastName: lName,
        email: email,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setOpenNotifcation(true);
        if (data.ok) {
          setError("success");
        } else {
          setError("error");
        }
        const timer = setTimeout(() => {
          setOpenNotifcation(false);
          clearTimeout(timer);
        }, 2000);
        setNotifcation(data.message);
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
          Sign Up
        </Typography>
      </div>
      <TextField
        id="firstname"
        label="First Name"
        variant="standard"
        onChange={(e) => {
          setFname(e.target.value);
        }}
      />
      <TextField
        id="lastname"
        label="Last Name"
        variant="standard"
        onChange={(e) => {
          setLname(e.target.value);
        }}
      />
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
        disabled={!fName || !lName || !password || !email}
        type="submit"
        className={
          !fName || !lName || !password || !email
            ? "not_work_login"
            : "login__button"
        }
        value="Sign Up"
      />
      <Typography variant="subtitle1" gutterBottom>
        already have an account? <Link to="/login">Login</Link>
      </Typography>
    </form>
  );
}

export default Signup;
