import AuthForm from "../components/Auth/AuthForm";

export default function Signup() {
  const handleSignup = (e) => {
    e.preventDefault();
    console.log("Signup form submitted");
  };

  return <AuthForm type="signup" onSubmit={handleSignup} />;
}
