import Header from '@/components/layouts/header'
import Navbar from '@/components/layouts/navbar'
import Footer from '@/components/layouts/footer'

// const Header = dynamic(() => import(''))
// const Navbar = dynamic(() => import(''))
// const Footer = dynamic(() => import(''))

export default function Layouts({ children }: any) {
    return (
    <div className="container mx-auto max-w-full md:max-w-xl md:shadow-xl">
      <div className="bg-white dark:bg-gray-900 min-h-screen shadow">
          <Header/>
          {children}
          <Navbar />
          <Footer />
      </div>
    </div>
    )
} 