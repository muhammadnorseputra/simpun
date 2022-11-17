import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const Header = dynamic(() => import('@/components/layouts/header'), {
  suspense: true,
})
const Navbar = dynamic(() => import('@/components/layouts/navbar'), {
  suspense: true,
})
const Footer = dynamic(() => import('@/components/layouts/footer'), {
  suspense: true,
})
export default function Layouts({ children }: any) {
    return (
    <div className="container mx-auto max-w-full md:max-w-xl md:shadow-2xl">
      <div className="bg-white dark:bg-slate-500 min-h-screen shadow-3xl">
          <Suspense fallback={`Loading...`}><Header/></Suspense>
          <Suspense fallback={`Loading...`}><Navbar /></Suspense>
          {children}
          <Suspense fallback={`Loading...`}><Footer /></Suspense>
      </div>
    </div>
    )
} 