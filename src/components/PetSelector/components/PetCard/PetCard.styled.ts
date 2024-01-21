import { device } from "@/styles/sizes";
import { motion } from "framer-motion";
import styled from "styled-components";

export const Card = styled(motion.div)`
  padding: 36px;
  width: fit-content;
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.primary};
  transition: opacity 0.3s ease;
  cursor: pointer;
  margin: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  user-select: none;
  max-width: 120px;

  &:hover {
    opacity: 0.8;
  }

  @media ${device.tablet} {
    width: calc(25vw - 16px);
    height: calc(25vw - 16px - 16px);
    flex: 1;
    max-width: unset;
  }

  @media ${device.mobile} {
    width: calc(50vw - 16px);
    height: calc(50vw - 16px - 16px);
    flex: 1;
  }

  
`;

export const ComingSoon = styled.div`
  position: absolute;
  color: ${({ theme }) => theme.colors.white};
  right: 0;
  top: 0;
  font-size: 12px;
  background: ${({ theme }) => theme.colors.accent};
  padding: 6px 10px;
  border-top-right-radius: 16px;
  border-bottom-left-radius: 16px;
`;