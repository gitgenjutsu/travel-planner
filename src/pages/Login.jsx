import AuthForm from "../components/Auth/AuthForm";

export default function Login() {
  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login form submitted");
  };

  return <AuthForm type="login" onSubmit={handleLogin} />;
}
