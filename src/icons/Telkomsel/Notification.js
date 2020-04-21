import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import clsx from 'clsx';

const Deposit = props => {
  const { className, ...rest } = props;
  return (
    <SvgIcon
      {...rest}
      className={clsx(className)}
    >
      <svg
        fill="none"
        viewBox="0 0 45 45"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          clipRule="evenodd"
          d="M0 0H45V45H0V0Z"
          fill="#FF0000"
          fillOpacity="0.1"
          fillRule="evenodd"
          opacity="0.01"
        />
        <path
          clipRule="evenodd"
          d="M21.5625 41.25C23.625 41.25 25.3125 39.5625 25.3125 37.5H17.8125C17.8125 39.5625 19.5 41.25 21.5625 41.25ZM33.75 30V19.6875C33.75 13.9312 29.7563 9.1125 24.375 7.8375V6.5625C24.375 5.00625 23.1187 3.75 21.5625 3.75C20.0063 3.75 18.75 5.00625 18.75 6.5625V7.8375C13.3687 9.1125 9.375 13.9312 9.375 19.6875V30L5.625 33.75V35.625H37.5V33.75L33.75 30ZM30 31.875H13.125V19.6875C13.125 15.0188 16.8938 11.25 21.5625 11.25C26.2313 11.25 30 15.0188 30 19.6875V31.875Z"
          fill="black"
          fillRule="evenodd"
          opacity="0.3"
        />
        <path
          clipRule="evenodd"
          d="M31.875 20.25C35.81 20.25 39 17.06 39 13.125C39 9.18997 35.81 6 31.875 6C27.94 6 24.75 9.18997 24.75 13.125C24.75 17.06 27.94 20.25 31.875 20.25Z"
          fill="url(#paint0_linear)"
          fillRule="evenodd"
          stroke="white"
          strokeWidth="2"
        />
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear"
            x1="32.2016"
            x2="41.1802"
            y1="6"
            y2="12.8387"
          >
            <stop stopColor="#BB010A" />
            <stop
              offset="1"
              stopColor="#ED6A2C"
            />
          </linearGradient>
        </defs>
      </svg>
    </SvgIcon>
  );
};

export default Deposit;
