
import dynamic from 'next/dynamic'

const Header = dynamic(() => import('@/components/layouts/header'), {ssr: false})
const Navbar = dynamic(() => import('@/components/layouts/navbar'), {ssr: false})
const Footer = dynamic(() => import('@/components/layouts/footer'), {ssr: false})

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