import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Partners from "@/components/Partners"
import Courses from "@/components/Courses"
import Testimonials from "@/components/Testimonials"
import Articles from "@/components/Articles"
import Footer from "@/components/Footer"
import "@/styles/globals.css"

export default function Home() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Partners />
        <Courses />
        <Testimonials />
        <Articles />
      </main>
      <Footer />
    </div>
  )
}
