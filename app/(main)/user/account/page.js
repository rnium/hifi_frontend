import CustomerProfileWithOrders from "@/app/components/user/CustomerProfile"
import { Container } from "@mui/material"

const Page = () => {
  return (
    <Container sx={{ py: 3 }} disableGutters={false}>
      <CustomerProfileWithOrders />
    </Container>
  )
}

export default Page