import Header from "@/components/layouts/header";
import Navbar from "@/components/layouts/navbar";
import Footer from "@/components/layouts/footer";


export default function Layouts({ children }: any) {


    return (
    <div className="container mx-auto max-w-full md:max-w-xl md:shadow-2xl">
      <div className="bg-white dark:bg-slate-500 min-h-screen shadow-3xl">
          <Header/>
          <Navbar />
          {children}
          <Footer />
          {/* <button
      onClick={() => {
        // You win! Fade in the victory theme
        sound.play()
      }}
    >
      Click to win
    </button> */}
      </div>
    </div>
    )
} 