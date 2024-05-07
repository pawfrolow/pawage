import { motion } from "framer-motion";
import styled from "styled-components";

export const FactsWrapper = styled.section`
  max-width: 800px;
`

export const Fact = styled(motion.div)`
  padding: 24px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  position: relative;
`

export const Title = styled.h3`
  margin: 16px 0;
`

export const Description = styled.div`
  margin: 16px 0 16px 0;
`

export const Badge = styled.div`
  position: absolute;
  top: -16px;
  right: 16px;
  /* transform: translateX(-50%); */
  padding: 8px 16px;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
`