import React from "react";

const Searchtodos = () => {
  return (
    <div className="search-box-wrapper">
    <button className="search-button">
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 19C12.3869 19 14.6761 18.0518 16.364 16.364C18.0518 14.6761 19 12.3869 19 10C19 7.61305 18.0518 5.32387 16.364 3.63604C14.6761 1.94821 12.3869 1 10 1C7.61305 1 5.32387 1.94821 3.63604 3.63604C1.94821 5.32387 1 7.61305 1 10C1 12.3869 1.94821 14.6761 3.63604 16.364C5.32387 18.0518 7.61305 19 10 19V19ZM17.93 19.69C18.46 21.29 19.67 21.45 20.6 20.05C21.45 18.77 20.89 17.72 19.35 17.72C18.21 17.71 17.57 18.6 17.93 19.69V19.69Z"
          stroke="#6850FF"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      </button>

      <input type="search" placeholder="Search Todo's" className="search-text"/>

      <button className="fillter-button">
      <svg
        width="20"
        height="22"
        viewBox="0 0 20 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.92999 1.10001L3.99999 9.00001M3.39999 1.10001H16.6C17.7 1.10001 18.6 2.00001 18.6 3.10001V5.30001C18.6 6.10001 18.1 7.10001 17.6 7.60001L13.3 11.4C12.7 11.9 12.3 12.9 12.3 13.7V18C12.3 18.6 11.9 19.4 11.4 19.7L9.99999 20.6C8.69999 21.4 6.89999 20.5 6.89999 18.9V13.6C6.89999 12.9 6.49999 12 6.09999 11.5L2.29999 7.50001C1.79999 7.00001 1.39999 6.10001 1.39999 5.50001V3.20001C1.39999 2.00001 2.29999 1.10001 3.39999 1.10001Z"
          stroke="#6850FF"
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      </button>
    </div>
  );
};

export default Searchtodos;
