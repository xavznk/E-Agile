import LoginForm from "@/components/LoginForm"
import Header from "@/components/Header"
import "@/styles/Auth.css"
import Footer from "@/components/Footer"

export default function LoginPage() {
  return (
  <div className="app">
    <Header />
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-image">
          <img
            src="/placeholder.svg?height=400&width=400"
            alt="Illustration de méditation"
            className="login-illustration"
          />
        </div>
        <div className="auth-form-container">
          <LoginForm />
        </div>
      </div>
    </div>
    <Footer />
  </div>
  )
}
