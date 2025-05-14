import SignupForm from "@/components/SignupForm"
import Header from "@/components/Header"
import "@/styles/Auth.css"
import Footer from "@/components/Footer"

export default function SignupPage() {
  return (
  <div className="app">
    <Header />
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-image">
          <img
            src="/placeholder.svg?height=400&width=400"
            alt="Illustration de course"
            className="signup-illustration"
          />
        </div>
        <div className="auth-form-container">
          <SignupForm />
        </div>
      </div>
    </div>
    <Footer />
  </div>
  )
}
