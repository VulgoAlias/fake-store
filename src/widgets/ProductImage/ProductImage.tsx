import styled from '@emotion/styled'
import { Box } from '@mui/material'

export interface ProductImageProps {
  src: string
  alt: string
}
export function ProductImage({ src, alt }: ProductImageProps) {
  
  const Wrapper = styled(Box)`
    width: 18rem;
    height: 18rem;
    display: flex;
    align-items: center;
    justify-content: center;
  `

  const Image = styled.img`
    max-width: 18rem;
    max-height: 18rem;
    height: auto;
  `

  return (
    <Wrapper>
      <Image src={src} alt={alt} />
    </Wrapper>
  )
}