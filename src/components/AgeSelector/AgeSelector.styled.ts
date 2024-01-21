import { motion } from "framer-motion";
import styled from "styled-components";

export const SectionControls = styled(motion.section)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SubmitButton = styled.button`
  width: 350px;
  margin-top: 24px;
  border-radius: 16px;
  border: none;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: 16px 24px;
  font-family: inherit;
  transition: opacity 0.3s ease;
  cursor: pointer;
  font-size: 18px;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    filter: grayscale(80%);
  }

  &:hover:not(:disabled) {
    opacity: 0.8;
  }
`

export const CalendarWrapper = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 8px;

  .react-calendar {
    border: 0;
    background: transparent;

    .react-calendar__navigation {
      border-radius: 16px;
      button {
        color: ${({ theme }) => theme.colors.dark};
        font-size: 18px;
        background-color: ${({ theme }) => theme.colors.blackTransparent}
      }
      button:enabled:focus {
        background-color: ${({ theme }) => theme.colors.blackTransparentFocus}
      }

      .react-calendar__navigation__prev2-button {
        border-top-left-radius: 16px;
        border-bottom-left-radius: 16px;
      }
      .react-calendar__navigation__next2-button {
        border-top-right-radius: 16px;
        border-bottom-right-radius: 16px;
      }
    }

    .react-calendar__tile:not(.react-calendar__month-view__days__day--weekend):not(.react-calendar__month-view__days__day--neighboringMonth) {
      color: ${({ theme }) => theme.colors.dark};
    }

    .react-calendar__tile:enabled:hover {
      background-color: ${({ theme }) => theme.colors.blackTransparentFocus};
    }

    .react-calendar__month-view__days__day--neighboringMonth {
      color: ${({ theme }) => theme.colors.dark};
    }

    .react-calendar__tile--now:not(:disabled) {
      background-color: ${({ theme }) => theme.colors.blackTransparentFocus};
      color: ${({ theme }) => theme.colors.white};
    }

    .react-calendar__tile:disabled {
      opacity: 0.8;
      text-decoration: line-through;
    }

    .react-calendar__tile--active, .react-calendar__tile--active:hover {
      background-color: ${({ theme }) => theme.colors.primary}
    }

    .react-calendar__viewContainer {
      border-radius: 16px;
      background-color: ${({ theme }) => theme.colors.blackTransparent}
    }

    .react-calendar__month-view__weekdays__weekday, .react-calendar__month-view__days__day {
      min-height: 44px;
    }

    .react-calendar__month-view__weekdays__weekday {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const ButtonRow = styled.section`
  display: flex;
  margin-bottom: 16px;
  position: relative;
  width: 350px;
`

export const ButtonType = styled(motion.button) <{ selected: boolean }>`
  flex: 1;
  font-size: 18px;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  padding: 8px 16px;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  transition: opacity 0.3s ease;
  
  &:hover {
    opacity: 0.8;
  }

  ${({ selected, theme }) => selected && `
    color: ${theme.colors.white};
  `}

  &:nth-child(1) {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  &:nth-child(2) {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`

export const Indicator = styled(motion.div) <{ type: 'calendar' | 'input' }>`
  height: 100%;
  width: 50%;
  position: absolute;
  bottom: 0;
  left: 0;
  background: ${({ theme }) => theme.colors.primary};
  z-index: -1;

  ${({ type }) => type === 'calendar' ? `
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  ` : `
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  `}
`