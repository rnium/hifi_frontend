import NavBar from '@/app/components/navigation/NavBar'
export const metadata = {
  title: "Checkout",
  description: "Checkout your cart"
}


const Layout = ({ children }) => {
  return (
    <>
    <NavBar />
      <section>
        {children}
      </section>
    </>
  )
}

export default Layout;