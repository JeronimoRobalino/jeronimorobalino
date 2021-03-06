import React from "react";
import { Link } from "react-router-dom";

export const Inicio = () => {
  return (
    <div>
      <svg
        width="582"
        height="282"
        viewBox="0 0 582 282"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="all">
          <g id="pantallas" filter="url(#filter0_d_3_14)">
            <rect x="1" y="2" width="350" height="220" rx="12" fill="#C4C4C4" />
          </g>
          <g id="low-monitor">
            <rect
              id="Rectangle 2"
              x="161"
              y="222"
              width="29"
              height="50"
              fill="#C4C4C4"
            />
            <rect
              id="Rectangle 3"
              x="122"
              y="272"
              width="108"
              height="10"
              rx="2"
              fill="#C4C4C4"
            />
          </g>
          <rect
            id="pc"
            x="446"
            y="2"
            width="134"
            height="280"
            rx="10"
            fill="#C4C4C4"
          />
          <g id="top-pc" filter="url(#filter1_d_3_14)">
            <path
              d="M446 12C446 6.47715 450.477 2 456 2H570C575.523 2 580 6.47715 580 12V40H446V12Z"
              fill="#B8B8B8"
            />
          </g>
          <Link to="/loading"><g id="prender" filter="url(#filter2_d_3_14)">
            <ellipse cx="556" cy="21" rx="10" ry="9" fill="#626262" />
            <path
              d="M565.5 21C565.5 25.6462 561.298 29.5 556 29.5C550.702 29.5 546.5 25.6462 546.5 21C546.5 16.3538 550.702 12.5 556 12.5C561.298 12.5 565.5 16.3538 565.5 21Z"
              stroke="#CCCCCC"
            />
          </g>
          <ellipse
            id="foco"
            cx="556"
            cy="20.5"
            rx="2"
            ry="1.5"
            fill="#C7CE73"
          /></Link>
        </g>
        <defs>
          <filter
            id="filter0_d_3_14"
            x="0"
            y="2"
            width="352"
            height="222"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="1" />
            <feGaussianBlur stdDeviation="0.5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_3_14"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_3_14"
              result="shape"
            />
          </filter>
          <filter
            id="filter1_d_3_14"
            x="444"
            y="0.2"
            width="138"
            height="42"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="0.2" />
            <feGaussianBlur stdDeviation="1" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_3_14"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_3_14"
              result="shape"
            />
          </filter>
          <filter
            id="filter2_d_3_14"
            x="546"
            y="12"
            width="20"
            height="19"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="1" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_3_14"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_3_14"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};
