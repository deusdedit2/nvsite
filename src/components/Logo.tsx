import { SVGProps } from "react";

export default function Logo({...rest}: SVGProps<SVGSVGElement>) {

    return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        baseProfile="tiny-ps"
        version="1.2"
        viewBox="0 0 180 132"
        {...rest}
      >
        <defs>
          <linearGradient id="gradient" x1="0%" x2="0%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="#1864f9"></stop>
            <stop offset="100%" stopColor="#068bf9"></stop>
          </linearGradient>
        </defs>
        <g>
          <path
            fill="url(#gradient)"
            fillRule="evenodd"
            d="M68.82 43.27V11.04c0-2.08.42-4.64-.28-6.62-.33-.93-1.79-2.81-1.23-3.77.61-1.07 4.42-.5 5.54-.5h14.79c1.31 0 4.24-.52 5.17.5 1.26 1.37 1.9 3.8 2.62 5.48 1.38 3.22 2.84 6.42 4.32 9.6 5.59 12.04 11.26 24.11 16.49 36.29 1.59 3.72 3.27 7.43 4.99 11.1.74 1.57 1.23 3.66 2.5 4.91 1.95-5.56 5.06-10.84 7.5-16.22 5.15-11.36 10.45-22.68 15.84-33.94 1.96-4.11 3.86-8.25 5.79-12.38.64-1.39 1.29-4.07 2.75-4.87 1.61-.89 5.07-.26 6.91-.26H180c-3.33 9.32-8.71 18.36-13 27.33-7.82 16.35-15.53 32.75-23.38 49.09-3.01 6.25-5.96 12.53-8.97 18.78-1.71 3.57-4.13 7.28-5.09 11.1 6.59-.28 13.14-4.63 18.83-7.36 1.97-.94 5.33-3.36 7.61-2.2 2.64 1.33-.41 3.49-1.78 4.28-4.56 2.64-9.58 4.89-14.57 6.69-2.58.93-5.15 1.74-7.85 2.33-1.29.28-3.09.27-4.23.95-1.7 1-1.34 4.07-3.61 4.27-.84.07-2.15.18-2.86-.33-1.25-.93-1.13-3.11-2.57-3.82-1.46-.72-3.52-.5-5.11-.84-1.99-.43-3.56-1.44-5.38-2.26-1.55 4.55-3.69 8.75-5.94 13.02-1.29 2.46-2.54 5.22-4.6 7.2-2.1 2-5.92 4.91-8.92 2.5-1.78-1.43-2.1-4.02-2.32-6.07-.33-3.14-.67-6.26-1.08-9.39H72.85c-2.08 0-4.03.55-4.04-1.92-1.92.95-3.4 2.61-5.37 3.55-5.98 2.82-14.29 3.56-19.02-1.63-2.53-2.78-3.4-7.05-4.6-10.46-.67-1.92-1.29-3.73-3.73-3.62-2.51.11-4.33 2.38-5.83 4.05-2.86 3.16-5.2 6.71-7.85 10.03-.99 1.25-1.79 2.8-3.14 3.75-3.22 2.25-3.75-1.74-3.58-3.75H4.26c-.89 0-3.2.39-3.81-.34-.86-1.03-.23-4.35-.23-5.64V8.48c0-2.12-1.03-7 1.57-7.88 2.02-.68 3.59.9 5.16 1.9 4.08 2.59 8.02 5.37 12.1 7.97 11.18 7.11 22.18 14.56 33.18 21.92 5.43 3.63 10.78 7.8 16.58 10.88m-44.38 62.75c1.24-1.68 2.73-3.24 4.26-4.69 1.11-1.06 2.15-2.11 3.59-2.77 1.18-.55 2.26-.85 3.58-.86 1.12-.01 2.3-.11 3.37.27 6.45 2.34 4.76 11.1 8.78 15.3 4.3 4.5 11.62 1.81 15.87-1.22 1.52-1.08 4.08-3.03 4.77-4.75.6-1.49.17-3.75.17-5.33V75.71c0-1.69.58-4.56-.14-6.12-.49-1.05-2.27-1.8-3.23-2.42-2.55-1.62-5.06-3.31-7.62-4.94-8.16-5.19-16.27-10.44-24.43-15.62-3.06-1.94-7.12-5.7-10.76-6.33v56.56c4.03.21 1.97 4.13 1.37 6.41-.26 1-.91 2.35.42 2.77zM91.9 53.94zm0 0c-.56 1.27-.22 3.11-.22 4.48v53.37c0 1.41.41 3.34-1.35 3.84l1.35 11.95c2.27-.44 3.51-3.1 4.48-4.91 2.58-4.81 5.08-9.59 6.88-14.73.75-2.13 1.76-6.11 4.33-6.91 2.33-.72 3.42 3.17 4.53 4.33 1.22 1.27 3.18 1.51 4.89 1.73l-7.33-16.01L91.9 53.94z"
            className="shp0"
          ></path>
        </g>
      </svg>
  
    )
}