import NavBar from '@/app/components/navigation/NavBar'

export const metadata = {
  title: "Order",
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