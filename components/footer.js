import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" mt={12} opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} Joomart Akimov
    </Box>
  )
}

export default Footer
