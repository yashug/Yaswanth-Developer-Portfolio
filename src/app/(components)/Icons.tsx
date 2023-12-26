type IconProps = {
  className?: string;
};

export const GithubIcon = ({ className, ...rest }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <path fill="none" d="M0 0h512v512H0z" />
    <path
      fill="currentColor"
      d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32Z"
    />
  </svg>
);

export const TwitterIcon = ({ className, ...rest }: IconProps) => (
  <svg
    height="1em"
    viewBox="0 0 1200 1227"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" />
  </svg>
);

export const LinkedInIcon = ({ className, ...rest }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 256"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <path fill="none" d="M0 0h256v256H0z" />
    <g fill="none">
      <rect width={256} height={256} fill="#fff" rx={60} />
      <rect width={256} height={256} fill="#0A66C2" rx={60} />
      <path
        fill="#fff"
        d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82 19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4ZM38 59.627c0 11.865 9.767 21.627 21.632 21.627 11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38 47.762 38 38 47.763 38 59.627Zm6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4Z"
      />
    </g>
  </svg>
);

export const HashNodeIcon = ({ className, ...rest }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <path d="M35.19 171.1c-46.91 46-46.91 122.9 0 169.8L171.1 476.8c46 46.9 122.9 46.9 169.8 0l135.9-135.9c46.9-46.9 46.9-123.8 0-169.8L340.9 35.19c-46.9-46.91-123.8-46.91-169.8 0L35.19 171.1zM315.5 315.5c-32.9 32.8-86.1 32.8-118.9 0-32.9-32.9-32.9-86.1 0-118.9 32.8-32.9 86-32.9 118.9 0 32.8 32.8 32.8 86 0 118.9z" />
  </svg>
);

export const SunIcon = ({ className, ...rest }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <g strokeDasharray="2">
        <path d="M12 21v1M21 12h1M12 3v-1M3 12h-1">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.2s"
            values="4;2"
          />
        </path>
        <path d="M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.2s"
            dur="0.2s"
            values="4;2"
          />
        </path>
      </g>
      <path
        fill="currentColor"
        d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"
        opacity="0"
      ></path>
    </g>
    <g fill="currentColor" fillOpacity="0">
      <path d="m15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z">
        <animate
          id="lineMdSunnyFilledLoopToMoonFilledLoopTransition0"
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.6s;lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+6s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+0.4s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.8s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="m20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3.4s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.6s"
          dur="0.4s"
          values="1;0"
        />
      </path>
    </g>
    <mask id="lineMdSunnyFilledLoopToMoonFilledLoopTransition1">
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <circle cx="22" cy="2" r="3" fill="#fff">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.1s"
          dur="0.4s"
          values="22;18"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.1s"
          dur="0.4s"
          values="2;6"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.1s"
          dur="0.4s"
          values="3;12"
        />
      </circle>
      <circle cx="22" cy="2" r="1">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.1s"
          dur="0.4s"
          values="22;18"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.1s"
          dur="0.4s"
          values="2;6"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.1s"
          dur="0.4s"
          values="1;10"
        />
      </circle>
    </mask>
    <circle
      cx="12"
      cy="12"
      r="6"
      fill="currentColor"
      mask="url(#lineMdSunnyFilledLoopToMoonFilledLoopTransition1)"
    >
      <animate
        fill="freeze"
        attributeName="r"
        begin="0.1s"
        dur="0.4s"
        values="6;10"
      />
    </circle>
  </svg>
);

export const MoonIcon = ({ className, ...rest }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <rect x="0" y="0" width="24" height="24" fill="rgba(255, 255, 255, 0)" />
    <g
      fill="none"
      stroke="currentColor"
      strokeDasharray="2"
      strokeDashoffset="2"
      strokeLinecap="round"
      strokeWidth="2"
    >
      <path d="M0 0">
        <animate
          fill="freeze"
          attributeName="d"
          begin="1.2s"
          dur="0.2s"
          values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"
        />
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1.2s"
          dur="0.2s"
          values="2;0"
        />
      </path>
      <path d="M0 0">
        <animate
          fill="freeze"
          attributeName="d"
          begin="1.5s"
          dur="0.2s"
          values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"
        />
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1.5s"
          dur="1.2s"
          values="2;0"
        />
      </path>
      <animateTransform
        attributeName="transform"
        dur="30s"
        repeatCount="indefinite"
        type="rotate"
        values="0 12 12;360 12 12"
      />
    </g>
    <g fill="currentColor">
      <path d="M15.22 6.03L17.75 4.09L14.56 4L13.5 1L12.44 4L9.25 4.09L11.78 6.03L10.87 9.09L13.5 7.28L16.13 9.09L15.22 6.03Z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M19.61 12.25L21.25 11L19.19 10.95L18.5 9L17.81 10.95L15.75 11L17.39 12.25L16.8 14.23L18.5 13.06L20.2 14.23L19.61 12.25Z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
    </g>
    <g
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z" />
    </g>
    <mask id="lineMdMoonFilledToSunnyFilledLoopTransition0">
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <circle cx="18" cy="6" r="12" fill="#fff">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.6s"
          dur="0.4s"
          values="18;22"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.6s"
          dur="0.4s"
          values="6;2"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.6s"
          dur="0.4s"
          values="12;3"
        />
      </circle>
      <circle cx="18" cy="6" r="10">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.6s"
          dur="0.4s"
          values="18;22"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.6s"
          dur="0.4s"
          values="6;2"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.6s"
          dur="0.4s"
          values="10;1"
        />
      </circle>
    </mask>
    <circle
      cx="12"
      cy="12"
      r="10"
      fill="currentColor"
      mask="url(#lineMdMoonFilledToSunnyFilledLoopTransition0)"
      opacity="0"
    >
      <animate
        fill="freeze"
        attributeName="r"
        begin="0.6s"
        dur="0.4s"
        values="10;6"
      />
    </circle>
  </svg>
);

export const CircularText = ({ className, ...rest }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 1024 1024"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <path d="M225.635 373.357c-21.036-1.27-41.612-2.522-62.188-3.776l-.79.875c1.675 1.455 3.357 2.901 5.023 4.366 14.887 13.098 29.552 26.463 44.767 39.167 5.973 4.987 1.299 8.781.205 13.153-1.038 4.152-4.026 3.996-7.446 3.738-21.41-1.614-42.844-2.915-64.24-4.686-7.691-.636-15.535-.254-23.285-2.026.304-4.342 2.269-7.476 3.674-10.795.817-1.93 2.491-1.93 4.219-1.808 12.952.925 25.904 1.847 38.857 2.759 10.05.707 20.103 1.397 30.351 2.108-.58-2.31-2.283-3.212-3.592-4.38-15.668-13.978-31.329-27.962-47.101-41.82-2.416-2.121-3.875-4.047-2.06-7.176 1.864-3.215 1.911-7.864 7.781-7.391 18.086 1.456 36.2 2.556 54.306 3.753 4.795.316 9.599.483 15.471.77-9.622-8.447-18.564-16.318-27.53-24.161-7.524-6.583-15.126-13.079-22.602-19.716-6.783-6.022-6.039-4.263-2.744-12.388.548-1.351.82-2.925 2.393-3.667 1.743-.177 2.646 1.187 3.734 2.132 20.882 18.14 41.748 36.297 62.615 54.453 4.02 3.499 3.135 14.055-1.51 16.665-2.531 1.422-5.22-.305-8.308-.149zM636.81 179.786c-9.394 11.061-18.923 21.57-27.584 32.75-4.42 5.706-8.13 2.425-12.552 1.121-4.335-1.28-4.904-3.943-4.653-7.95 1.073-17.116 1.83-34.251 2.758-51.376.593-10.971 1.271-21.938 1.95-32.904.058-.953.4-1.889.65-3.008 4.18-.08 7.539 1.906 10.903 3.506 2.893 1.377 1.76 4.357 1.625 6.748-1.16 20.43-2.376 40.855-3.554 61.283-.086 1.482-.011 2.972-.011 4.947 2.811-.802 3.895-2.946 5.322-4.609 13.125-15.296 26.401-30.468 39.217-46.019 3.658-4.438 6.814-2.912 10.886-1.567 4.071 1.344 4.711 3.907 4.507 7.63-1.147 20.94-2.16 41.887-3.218 62.832-.075 1.481-.153 2.962-.303 5.885 5.759-6.703 10.724-12.412 15.612-18.186 10.01-11.825 20.028-23.644 29.92-35.568 1.926-2.322 3.811-3.024 6.437-1.545 2.414 1.36 5.496 1.433 7.753 4.126-7.215 8.684-14.39 17.386-21.637 26.028-11.56 13.783-23.28 27.435-34.672 41.355-2.665 3.256-4.821 4.11-8.784 2.324-7.696-3.468-7.978-3.238-7.62-11.724.838-19.792 1.864-39.576 2.8-59.363.06-1.283.008-2.571.008-5.093-5.672 6.609-10.603 12.356-15.76 18.377zM809.526 245.514c2.193-1.254 3.735-4.388 6.225-2.475a18.682 18.682 0 0 1 6.12 8.361c.577 1.594-1.435 2.399-2.584 3.295-7.715 6.014-15.44 12.015-24.032 18.697 13.174 3.128 21.921 10.267 26.321 22.29 2.6 7.105 3.087 14.237.724 21.5-5.12 15.742-21.66 26.654-37.967 25.024-16.851-1.684-27.377-14.555-30.197-36.949-.309 0-.7-.123-.922.018-5.75 3.653-9.55 2.319-12.17-4.142-1.11-2.74 1.03-3.544 2.519-4.695 16.076-12.44 32.18-24.844 48.274-37.262 5.804-4.479 11.601-8.968 17.689-13.662m-3.734 46.227c-8.38-8.63-18.826-10.282-28.422-4.495-9.996 6.029-14.63 16.584-11.165 26.236 2.945 8.203 8.419 13.987 17.42 15.238 10.79 1.5 18.85-3.386 24.35-12.193 5.134-8.22 3.834-16.502-2.183-24.786zM108.62 505.672c-3.636-3.425-2.617-7.456-2.168-11.305.192-1.65 1.876-1.6 3.212-1.678 4.151-.245 8.299-.634 12.452-.716 24.29-.478 48.583-.876 72.874-1.326 3.206-.06 6.316-.714 6.326 4.405.015 7.671.276 7.688-5.595 8.282-.485.049-.956.232-2.266.562 9.226 10.96 11.299 23.156 6.841 36.338-2.437 7.209-7.178 12.665-13.668 16.619-13.448 8.191-32.802 5.703-43.938-4.999-9.543-9.17-14.11-30.482-1.692-46.3-10.909-.995-21.442.428-32.379.118m75.114 4.061c-1.094-.756-2.139-1.598-3.29-2.253-8.634-4.91-21.122-3.965-28.215 2.095-6.638 5.672-9.17 15.626-6.153 24.194 2.978 8.457 10.319 13.737 19.758 14.21 10.801.54 19.038-3.875 23.08-12.373 3.86-8.111 2.033-18.106-5.18-25.873zM400.649 177.035c-1.135-21.575 24.646-41.617 50.771-28.825-1.738-8.387-3.365-16.25-4.998-24.11-.237-1.142-.519-2.275-.746-3.418-1.267-6.356-1.195-6.105 5.239-7.855 4.835-1.316 6.6.088 7.64 4.992 5.66 26.674 11.69 53.268 17.57 79.895 1.402 6.353 1.248 6.003-5.006 7.944-5.46 1.695-6.893-.939-7.477-5.386-.041-.312-.242-.603-.58-1.406-12.082 14.975-27.334 18.952-44.326 10.858-12.925-6.156-17.743-18.275-18.087-32.689m18.916 16.842c8.202 8.315 17.642 10.05 27.16 4.99 9.01-4.789 12.962-14.003 10.773-25.121-2.217-11.258-12.382-19.386-22.804-18.234-13.39 1.481-20.99 9.946-20.594 22.902.167 5.482 1.782 10.458 5.465 15.463zM855.785 435.803c-10.58 9.568-20.897 18.895-31.464 28.448-2.788-3.754-3.333-7.591-4.415-11.175-.695-2.301 1.153-3.63 2.659-4.96 3.87-3.418 7.7-6.882 11.627-10.233 1.97-1.683 2.781-3.368 1.894-6.081a1931.938 1931.938 0 0 1-11.573-36.673c-.856-2.805-2.385-4.098-5.246-4.343-4.305-.368-8.597-1.415-12.881-1.343-5.35.09-8.605-1.707-9.41-7.2-.308-2.099-1.795-3.975-1.126-6.771 6.36-.497 12.665.991 18.978 1.683 21.811 2.39 43.595 5.038 65.387 7.606 1.485.175 2.994.847 4.422.683 6.603-.756 8.958 2.893 10.392 8.648.897 3.604.333 5.794-2.376 8.216-12.29 10.987-24.42 22.154-36.868 33.495m4.504-21.018 19.798-17.733-44.708-4.5 11.048 34.231c5.066-4.392 9.192-7.969 13.862-11.998zM879.653 590.223c9.335 2.72 18.251 5.434 27.249 7.848 3.827 1.026 4.66 2.79 3.331 6.477-2.746 7.621-.59 8.54-10.398 5.488-8.086-2.516-16.218-4.884-25.102-7.55 1.888 5.707 2.955 10.925 2.68 16.388-.301 5.969-1.895 11.498-4.915 16.558-5.995 10.041-16.748 14.513-28.956 11.347-12.545-3.253-24.877-7.322-37.33-10.938-3.15-.914-3.95-2.6-2.676-5.547.524-1.211.871-2.52 1.136-3.818.695-3.407 2.435-4.119 5.773-3.086 9.534 2.952 19.164 5.59 28.757 8.35 1.12.322 2.234.664 3.36.956 11.852 3.075 19.108-.43 22.592-10.902 3.755-11.29-.041-20.805-10.915-24.83-10.586-3.918-21.5-6.992-32.368-10.093-3.935-1.122-5.096-2.613-3.7-6.66 2.541-7.363 2.37-7.555 9.928-5.34 17.077 5.005 34.115 10.141 51.554 15.352zM732.18 285.07c-17.777-3.043-31.157-14.932-34.516-30.308-3.21-14.693 3.973-29.874 17.934-37.905 12.383-7.125 27.827-5.244 38.923 4.74 14.219 12.794 15.39 32.63 2.974 47.503-2.35 2.815-4.093 2.434-6.607.354-11.165-9.238-22.43-18.355-33.68-27.487-1.389-1.127-2.563-2.652-4.517-2.88-4.72 6.42-4.573 14.853.894 22.232 4.812 6.494 11.022 11.058 19.493 11.656 6.425.453 6.2.48 6.382 7.58.145 5.64-3.744 4.289-7.28 4.515m-2.758-60.077c-3.772.765-7.318 1.936-10.183 5.735l31.573 25.676c4.318-7.68 4.725-14.627.43-21.089-4.864-7.32-11.681-11.716-21.82-10.322zM771.158 734.438c-15.03-8.373-33.083 4.77-34.584 20.542-.623 6.551-4.425 4.141-7.598 4.332-4.176.25-4.367-2.523-4.225-5.627.809-17.668 20.96-35.59 38.976-34.629 18.95 1.01 35.316 19.424 33.326 38.47-1.477 14.135-9.804 24.04-22.907 28.982-13.068 4.928-24.805 1.142-35.017-8.032-2.967-2.665-2.46-4.742.176-7.423 10.27-10.447 20.384-21.048 30.47-31.674 1.154-1.216 3.91-2.218 1.383-4.94m-9.01 27.206c-3.153 3.57-7.138 6.435-9.41 10.722 6.685 6.845 19.937 5.03 26.816-2.801 7.082-8.063 7.467-20.033.137-26.327a31237.634 31237.634 0 0 1-17.544 18.406zM229.399 648.525c9.855 9.71 15.364 20.846 13.987 34.641-1.346 13.475-11.605 24.913-25.606 28.826-13.976 3.905-27.625-.558-36.063-11.792-13.303-17.71-8.494-40.157 10.746-50.772 3.307-1.825 5.164-1.677 7.053 1.96 6.06 11.67 12.44 23.176 18.714 34.736 1.42 2.617 2.911 5.196 4.35 7.76 5.81-2.543 9.826-10.664 8.752-17.635-1.56-10.123-5.935-18.44-15.97-22.455-4.413-1.766-2.784-4.303-1.777-7.178 1.044-2.982 2.162-5.167 6.007-3.677 3.458 1.34 6.628 3.081 9.807 5.586m-40.674 20.873c-4.808 9.95-3.04 19.837 4.79 26.791 5.773 5.128 14.053 6.264 19.62 2.693-1.845-6.016-15.696-31.359-19.041-34.79-2.218.954-3.575 2.845-5.37 5.306zM302.142 256.644c-4.476-9.101-3.24-16.772 3.707-24.043 5.12-5.358 11.67-8.802 17.625-13.041 1.884-1.342 3.787-2.659 5.623-3.946-2.846-7.082-9.106-10.374-15.967-8.463-8.534 2.377-14.32 8.136-18.668 15.564-.915 1.562-1.71 3.194-2.631 4.93-3.173-.07-5.384-1.976-7.827-3.244-1.974-1.025-1.494-2.709-.988-4.356 3.431-11.166 21.332-25.335 33.028-26.366 8.717-.768 16.013 2.165 21 9.086 8.263 11.471 15.87 23.415 23.822 35.113 1.599 2.351.956 3.749-1.17 5.335-6.321 4.718-6.48 4.794-11.398-.441-2.89 10.463-9.967 16.81-19.259 21.01-4.01 1.811-8.178 2.9-12.6 2.345-6.15-.771-10.943-3.736-14.297-9.483m27.551-5.304c1.592-1.194 3.323-2.243 4.752-3.607 7.595-7.25 7.858-16.452.41-23.844-6.466 4.703-13.916 8.181-19.735 13.942-4.817 4.769-4.622 10.56.303 14.192 4.513 3.328 9.12 1.94 14.27-.683zM503.427 901.371c-.352 3.596-.973 6.745-.899 9.877.114 4.812-2.432 5.345-6.347 4.942-17.196-1.77-34.41-3.376-51.61-5.103-2.885-.29-6.199.061-5.39-4.914 1.268-7.79 1.071-7.732 6.736-7.143 12.737 1.326 25.5 2.4 38.233 3.764 4.054.435 5.63-.811 5.797-5.036.262-6.627 1.12-13.235 1.84-19.838.342-3.145-.78-4.483-4.043-4.739-11.114-.87-22.206-2.016-33.312-2.995-6.07-.535-6.009-.782-5.73-7.564.224-5.452 3.368-5.068 7.121-4.647 11.224 1.257 22.46 2.398 33.69 3.597 2.6.278 3.973-.56 4.244-3.452.837-8.925 2.132-17.812 2.779-26.749.27-3.726 1.57-5.126 5.144-4.682 1.65.205 3.311.306 4.968.451 2.969.262 3.822 1.91 3.533 4.762-1.61 15.883-3.117 31.775-4.656 47.665-.69 7.116-1.37 14.233-2.098 21.804zM380.16 796.77c23.094 18.822 12.71 49.778-6.819 58.82-22.524 10.431-52.113-7.408-51.27-31.747.921-26.651 25.533-43.38 50.99-31.44 2.393 1.123 4.549 2.752 7.1 4.367m-40.103 13.836c-3.714 5.981-6.024 12.291-4.072 19.422 2.808 10.256 12.122 16.98 22.789 16.586 9.584-.354 18.696-8.837 20.788-19.353 2.19-11.007-2.63-20.471-12.72-24.98-9.544-4.264-19.36-1.398-26.785 8.325zM306.404 810.373c-3.337 3.966-6.582 7.553-9.504 11.388-2.364 3.103-4.573 4.201-7.518.828-.648-.742-1.471-1.368-2.305-1.905-3.116-2.009-3.49-4.182-.609-6.74.573-.509 1.295-1.093.945-2.436-8.69-.072-16.325-3.237-22.878-9.084-12.25-10.928-13.894-24.573-4-37.677 5.809-7.695 12.284-14.888 18.46-22.307 1.064-1.28 2.133-2.555 3.189-3.84 5.29-6.445 8.43-6.265 13.712.493 1.64 2.097.473 3.28-.735 4.71-6.978 8.266-13.908 16.572-20.925 24.804-8.019 9.408-8.334 18.618-.776 25.684 9.269 8.666 20.228 8.892 28.747-.122 7.42-7.852 14.52-16.071 21.083-24.646 3.833-5.007 6.025-2.125 9.146.228 3.598 2.712 4.441 4.878.992 8.75-9.183 10.31-17.894 21.04-27.024 31.872zM157.556 610.318c4.907 13.008 12.917 17.293 25.907 13.883a899.975 899.975 0 0 0 29.293-8.229c3.564-1.065 5.37-.17 5.984 3.465.248 1.468.7 2.912 1.168 4.331.926 2.818-.102 4.423-2.9 5.176a18581.616 18581.616 0 0 0-58.284 15.772c-2.199.6-3.563.11-4.165-2.14-.558-2.09-1.213-4.16-1.663-6.273-.997-4.68 3.969-3.487 5.894-5.838-7.952-5.714-12.411-13.575-14.316-23.041-2.596-12.909 2.836-24.422 14.917-29.375 13.42-5.503 27.882-7.678 41.691-12 2.07-.648 2.946.48 3.712 2.235 3.804 8.716 3.364 9.637-5.83 12.09-9.16 2.445-18.354 4.788-27.435 7.502-12.886 3.85-16.006 8.939-13.973 22.442zM292.162 280.162c3.07-3.083 6.1-5.74 8.655-8.796 2.958-3.537 5.485-3.792 8.282 0 .871 1.182 1.937 2.22 2.796 3.19-.277 2.38-1.986 3.36-3.23 4.613-10.448 10.516-20.893 21.036-31.46 31.43-1.617 1.59-2.894 5.073-5.8 3.54-2.867-1.514-5.196-4.095-5.564-7.822-.98-9.937-1.954-19.876-3.125-29.791-1.068-9.038-1.377-18.177-3.315-27.566-2.594 1.338-4.22 3.18-5.938 4.909-5.983 6.028-12.075 11.953-17.922 18.111-3.061 3.224-4.862 1.015-6.936-1.007-2.122-2.069-4.148-3.936-1.064-6.987 11.248-11.127 22.376-22.374 33.557-33.57 1.061-1.062 2.283-2.478 3.837-1.342 2.55 1.865 4.98 3.997 5.363 7.468.712 6.446 1.366 12.898 2.074 19.344 1.391 12.664 2.802 25.325 4.371 39.489 5.645-5.569 10.407-10.266 15.419-15.213zM837.373 512.258c19.438-11.966 43.007-5.17 51.678 14.602 6.35 14.48 2.096 33.704-9.37 41.79-1.803 1.27-4.337 4.214-6.035.365-1.348-3.058-6.482-5.808-1.42-10.196 9.354-8.11 10.458-22.432 2.737-31.328-7.781-8.966-24.307-10.258-33.178-2.594-9.241 7.984-10.331 22.606-1.945 31.818 4.616 5.071-.955 7.064-2.649 9.854-2.1 3.46-4.372.32-5.992-1.211-12.733-12.03-11.479-37.397 2.397-50.038 1.106-1.008 2.315-1.902 3.777-3.062zM717.206 821.251c11.09-9.477 12.385-21.203 3.836-32.423-7.516-9.862-19.996-11.792-30.677-4.746-5.2 3.431-7.732 8.512-8.99 14.412-.744 3.489-4.27 4.823-9.6 3.778-3.746-.735-2.794-3.444-2.547-5.876 1.501-14.823 18.888-30.596 39.798-28.77 15.746 1.374 29.565 17.125 30.49 33.78 1.192 21.501-23.139 40.74-41.475 35.883-2.451-.65-6.267-.285-5.652-4.616.773-5.447 3.793-7.974 8.031-7.248 6.047 1.035 11.56-.304 16.786-4.174zM684.163 870.39c-9.133 3.939-9.123 3.934-13.062-4.659-.614-1.34-1.369-2.617-2.17-4.135-4.936 1.047-9.062 3.598-13.377 5.563-3.332 1.516-4.89.47-6.016-2.615-1.053-2.887-3.402-5.797 1.407-7.672 3.406-1.328 6.678-2.996 10.023-4.48 2.433-1.08 3.115-2.66 1.951-5.187-4.52-9.823-8.734-19.793-13.485-29.502-3.685-7.531-11.17-8.58-17.138-2.08-3.614 3.934-5.562 2.232-8.425-.319-3.619-3.224-1.51-5.595.899-7.854 12.433-11.662 29.484-12.665 37.547 6.23 3.853 9.026 8.152 17.862 12.01 26.886 1.585 3.707 3.366 4.687 7.154 2.685 4.8-2.537 9.319.777 9.164 6.31-.046 1.649-1.21 2.2-2.409 2.835-2.035 1.08-4.452 1.44-6.36 3.42.373 3.403 2.499 6.272 3.803 9.43.85 2.059 1.331 3.83-1.516 5.144zM268.895 726.583c-4.166 6.77-10.766 10.369-16.29 15.115a233.44 233.44 0 0 1-14.467 11.489c-3.044 2.223-3.13 4.02-.736 6.835 3.952 4.65 2.784 8.274-2.9 10.658-1.855.779-2.829-.155-3.815-1.33-1.488-1.772-2.92-3.588-4.514-5.556-3.39 1.263-5.778 3.59-8.195 5.78-2.534 2.296-4.599 2.39-6.478-.669-.347-.565-.795-1.068-1.204-1.593-4.059-5.206-4.058-5.205 1.204-9.549 1.156-.953 2.256-1.983 3.468-2.859 1.941-1.403 1.908-2.845.456-4.608-2.54-3.084-4.874-6.343-7.502-9.348-2.746-3.14-.513-4.661 1.703-6.353 2.181-1.665 4.05-4.33 6.958-.717 3.102 3.853 5.841 8.054 10.05 11.695 9.613-7.849 19.327-15.386 28.564-23.468 5.657-4.95 4.26-11.36-2.789-16.082-4.257-2.852-4.458-7.102-.566-10.4 1.238-1.049 2.421-.801 3.707-.297 10.308 4.038 20.673 18.571 13.346 31.257zM785.874 681.698c6.881.54 11.948 4.147 17.104 7.518 8.197 5.359 16.356 10.776 24.29 16.01 3.96-1.862 3.867-7.54 7.942-7.61 3.02-.052 5.39 2.861 7.936 4.895-.503 1.066-.79 1.83-1.201 2.52-4.24 7.13-4.27 7.165 2.94 11.73 2.835 1.796 5.374 3.09 2.397 7.21-4.975 6.885-4.695 7.004-9.522 4.048-2.38-1.457-4.425-3.54-7.488-4.24-3.173 2.98-5.184 6.858-7.437 10.48-2.17 3.491-4.01 4.564-7.893 1.977-3.984-2.655-4.02-4.917-1.337-8.409 2.514-3.27 4.575-6.889 7.198-10.91-7.042-4.631-13.819-9.082-20.589-13.543-2.782-1.833-5.504-3.762-8.334-5.517-8.183-5.072-14.993-2.743-17.024 6.57-1.092 5.006-3.137 5.01-7.193 4.23-4.77-.916-4.268-4.013-3.675-7.145 2.066-10.908 11.033-19.108 21.886-19.814zM376.411 160.378c2.61-1.322 4.791-3.417 6.778.56 3.714 7.436 3.814 8.095-.637 10.515-10.322 5.61-13.798 14.098-9.594 25.128 3.672 9.633 7.898 19.06 12.075 28.491 1.485 3.354 2.04 5.62-2.298 7.332-7.568 2.986-7.526 3.243-9.736-1.808-7.537-17.227-15.022-34.477-22.562-51.703-1.42-3.243-2.715-6.168 2.15-7.82 3.696-1.253 7.447-4.24 9.366 2.08.231.761.77 1.43 1.464 2.677 2.77-6.696 6.77-11.82 12.994-15.452zM875.102 481.926c-7.537-7.904-16.732-5.96-25.614-5.17-7.278.648-14.512 1.8-21.789 2.465-5.544.506-5.556.093-6.506-8.815-.486-4.555 2.512-4.28 5.308-4.583 18.516-2 37.03-4.026 55.556-5.936 2.183-.225 5.198-1.356 6.365 1.21 1.35 2.965 1.967 6.67.688 9.679-1.136 2.675-4.842 1.21-7.697 2.52 5.952 4.528 9.594 10.307 10.78 17.415.359 2.153 1.9 5.578-2.42 5.514-3.474-.05-8.72 4.136-9.783-3.195-.59-4.073-1.974-7.705-4.888-11.104zM425.66 871.532c-.635 2.138-1.093 3.91-1.625 5.659-2.038 6.694-2.047 6.69-8.527 4.69-5.335-1.648-5.335-1.648-3.74-10.154-6.465 3.93-13.289 4.483-20.266 3.444-2.275-.339-5.784-.57-4.063-4.39 1.368-3.035-.524-9.066 6.291-7.801 12.983 2.409 20.833-2.301 24.921-15.302 2.941-9.353 5.747-18.76 8.2-28.251 1.111-4.303 3.217-4.833 6.817-3.394 3.3 1.32 7.875.925 5.953 7.187-4.88 15.894-9.246 31.945-13.961 48.312zM249.799 310.177c4.958 3.677 9.594 7.192 14.331 10.564 2.69 1.915 3.43 3.829.896 6.442-1.148 1.184-2.092 2.586-3.011 3.966-1.591 2.389-3.33 2.226-5.43.65-15.956-11.967-31.92-23.923-47.93-35.816-2.507-1.862-3.116-3.675-.916-6.141.991-1.112 1.92-2.314 2.68-3.592 1.824-3.06 3.671-2.936 6.403-.84 10.812 8.294 21.784 16.382 32.977 24.767zM826.876 677.247c-11.246-5.52-22.102-10.995-33.085-16.2-3.698-1.754-4.388-3.571-2.408-7.286 3.675-6.898 3.465-7.021 10.572-3.527 16.14 7.935 32.293 15.842 48.386 23.871 1.905.951 5.288 1.33 4.603 4.356-.756 3.336-2.22 6.708-4.806 9.14-1.233 1.158-2.849-.207-4.143-.842-6.28-3.08-12.522-6.233-19.119-9.512zM585.83 834.938c-4.652 2.502-8.714 2.28-11.876-1.712-2.903-3.666-2.896-7.725-.122-11.488 2.584-3.507 6.193-4.185 10.208-2.82 5.27 1.795 8.83 11.001 1.79 16.02zM517.842 199.761c-1.7-5.899-.462-9.806 3.51-11.956 4.266-2.311 9.343-1.13 11.868 2.76 2.541 3.918 1.44 9.647-2.39 12.441-4.273 3.115-8.786 2.1-12.988-3.245zM201.266 276.73c-1.126 4.983-3.949 7.838-8.692 7.911-3.641.057-6.354-2.08-7.467-5.58-1.285-4.042-.141-7.559 3.273-10.176 2.423-1.858 5.124-2.403 7.944-1.006 3.454 1.711 5.205 4.514 4.942 8.851zM868.854 683.571c4.917-1.185 8.428.513 10.013 4.692 1.504 3.964.674 7.928-3.044 10.614-3.194 2.309-6.585 2.027-9.68-.208-5.319-3.842-4.2-10.704 2.711-15.098z" />
  </svg>
);

export const LinkArrow = ({ className, ...rest }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5m-7 1L20 4m-5 0h5v5"
    />
  </svg>
);
