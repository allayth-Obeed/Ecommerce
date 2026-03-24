import { ShoppingCartOutlined } from "@mui/icons-material"
import { Container, Stack, Typography } from "@mui/material"

export default function Header2() {
  return (
    <Container>
      <Stack alignItems={"center"}>
        <ShoppingCartOutlined />
        <Typography variant="body2">E-commerce</Typography>
      </Stack>
    </Container>
  )
}