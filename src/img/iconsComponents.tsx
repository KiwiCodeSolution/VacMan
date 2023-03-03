/* eslint-disable prettier/prettier */
export const Rubber = () => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14.2277 15.2279L9.9847 10.9849L4.3277 16.6419L6.4497 18.7629C7.01228 19.3254 7.77521 19.6413 8.5707 19.6413C9.36619 19.6413 10.1291 19.3254 10.6917 18.7629L14.2277 15.2279ZM12.7837 19.4999H15.4997C15.7649 19.4999 16.0193 19.6053 16.2068 19.7928C16.3943 19.9804 16.4997 20.2347 16.4997 20.4999C16.4997 20.7652 16.3943 21.0195 16.2068 21.2071C16.0193 21.3946 15.7649 21.4999 15.4997 21.4999H4.4997C4.24617 21.4997 4.00218 21.4032 3.81711 21.2299C3.63203 21.0567 3.51968 20.8196 3.50278 20.5666C3.48588 20.3136 3.5657 20.0637 3.72609 19.8673C3.88647 19.671 4.11545 19.5429 4.3667 19.5089L2.9137 18.0559C2.53876 17.6809 2.32812 17.1723 2.32812 16.6419C2.32812 16.1116 2.53876 15.603 2.9137 15.2279L14.2277 3.91394C14.6028 3.539 15.1114 3.32837 15.6417 3.32837C16.172 3.32837 16.6806 3.539 17.0557 3.91394L21.2997 8.15694C21.6746 8.532 21.8853 9.04061 21.8853 9.57094C21.8853 10.1013 21.6746 10.6099 21.2997 10.9849L12.7837 19.4999Z"
        fill="#5B5B69"
      />
    </svg>
  );
};
export const Eye = (props: { fill?: string; cross?: boolean }) => {
  const { cross, fill = 'none' } = props;
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={fill}
      stroke="#5B5B69"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M21.2565 10.962C21.7305 11.582 21.7305 12.419 21.2565 13.038C19.7635 14.987 16.1815 19 11.9995 19C7.81752 19 4.23552 14.987 2.74252 13.038C2.51191 12.7411 2.38672 12.3759 2.38672 12C2.38672 11.6241 2.51191 11.2589 2.74252 10.962C4.23552 9.013 7.81752 5 11.9995 5C16.1815 5 19.7635 9.013 21.2565 10.962V10.962Z" />
      <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" />
      {cross && <path d="M4 4L20 20" />}
    </svg>
  );
};
export const SuitMan = () =>  (
  <svg fill="orange" xmlns="http://www.w3.org/2000/svg" width="48px" height="48px" viewBox="0 0 48 48" version="1.1">
    <path d="M 24 18.945312 C 29.222656 18.945312 33.472656 14.695312 33.472656 9.472656 C 33.472656 4.25 29.222656 0 24 0 C 18.777344 0 14.53125 4.25 14.53125 9.472656 C 14.53125 14.695312 18.777344 18.945312 24 18.945312 Z M 24 18.945312 " />
    <path d="M 36.710938 23.535156 C 36.707031 23.53125 36.699219 23.53125 36.695312 23.527344 C 35.460938 23.226562 31.6875 22.699219 31.6875 22.699219 C 31.257812 22.566406 30.804688 22.792969 30.652344 23.214844 L 24.964844 38.8125 C 24.636719 39.710938 23.367188 39.710938 23.039062 38.8125 L 17.351562 23.214844 C 17.230469 22.875 16.910156 22.660156 16.566406 22.660156 C 16.484375 22.660156 12.601562 23.207031 11.308594 23.527344 C 7.773438 24.40625 5.546875 27.878906 5.546875 31.5 L 5.546875 44.476562 C 5.546875 46.421875 7.125 48 9.066406 48 L 38.933594 48 C 40.875 48 42.453125 46.421875 42.453125 44.476562 L 42.453125 31.457031 C 42.453125 27.851562 40.136719 24.652344 36.710938 23.535156 Z M 36.710938 23.535156 " />
    <path d="M 26.144531 22.402344 C 25.917969 22.15625 25.585938 22.03125 25.25 22.03125 L 22.75 22.03125 C 22.414062 22.03125 22.082031 22.15625 21.855469 22.402344 C 21.503906 22.785156 21.453125 23.335938 21.703125 23.769531 L 23.039062 25.785156 L 22.414062 31.070312 L 23.648438 34.351562 C 23.765625 34.679688 24.234375 34.679688 24.355469 34.351562 L 25.585938 31.070312 L 24.960938 25.785156 L 26.296875 23.769531 C 26.546875 23.335938 26.496094 22.785156 26.144531 22.402344 Z M 26.144531 22.402344 " />
  </svg>
);
export const LeftWave = () => (
  <svg width="360" height="358" viewBox="0 0 360 358" fill="#FFFDF4" xmlns="http://www.w3.org/2000/svg">
    <path d="M360 46.5C360 41.6284 337.894 78.4688 119.199 7.18381C38.4192 -19.1468 9.88977 34.8295 0 42.199C0 120.698 0 358 0 358H360C360 358 359.998 152.61 360 46.5Z" />
  </svg>
);

export const RightWave = () => (
  <svg width="360" height="358" viewBox="0 0 360 358" fill="#FFFDF4" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.76455e-10 46.5C-7.21173e-05 41.6284 22.1056 78.4688 240.801 7.18381C321.581 -19.1468 350.11 34.8295 360 42.199C360 120.698 360 358 360 358H1.78014e-10C1.78014e-10 358 0.0015708 152.61 1.76455e-10 46.5Z" />
  </svg>
);
export const Rectangle = () => (
  <svg width="360" height="248" viewBox="0 0 360 248" fill="#040C0C" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 0H360V158.372L0 248V0Z" />
  </svg>
);
export const Todos = () => (
  <svg width="270" height="230" viewBox="0 0 270 230" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g opacity="0.6">
    <path opacity="0.4" d="M266.9 196.348C265.545 185.385 258.795 174.583 248.408 171.015C252.504 182.299 252.503 194.678 248.405 205.962C246.809 210.307 244.584 214.974 246.086 219.354C247.02 222.079 249.305 224.164 251.859 225.468C254.414 226.772 257.249 227.393 260.049 228.002L260.6 228.461C265.044 218.359 268.254 207.311 266.9 196.348Z" fill="#04E474" fillOpacity="0.5"/>
    <path d="M248.299 171.223C254.348 178.045 258.108 186.612 259.044 195.708C259.28 197.662 259.208 199.642 258.832 201.574C258.405 203.444 257.488 205.165 256.177 206.558C254.98 207.881 253.604 209.096 252.748 210.689C252.321 211.511 252.073 212.414 252.017 213.34C251.962 214.266 252.102 215.193 252.428 216.06C253.184 218.243 254.674 220.022 256.191 221.71C257.876 223.585 259.655 225.506 260.371 227.992C260.458 228.293 260.917 228.14 260.831 227.839C259.585 223.514 255.414 221.058 253.425 217.162C252.497 215.345 252.107 213.235 252.977 211.316C253.738 209.638 255.156 208.385 256.38 207.055C257.679 205.716 258.632 204.076 259.156 202.28C259.629 200.373 259.776 198.399 259.591 196.443C259.245 192.032 258.211 187.704 256.529 183.616C254.634 178.94 251.959 174.625 248.619 170.857C248.412 170.624 248.093 170.991 248.299 171.223Z" fill="#5B5B69"/>
    <path d="M258.916 192.761C260.411 192.396 261.728 191.507 262.632 190.255C263.536 189.002 263.968 187.467 263.852 185.923C263.827 185.611 263.344 185.635 263.369 185.948C263.48 187.385 263.077 188.815 262.233 189.98C261.388 191.144 260.158 191.967 258.764 192.299C258.461 192.371 258.615 192.833 258.916 192.761Z" fill="#5B5B69"/>
    <path d="M256.872 205.967C254.172 204.345 252.18 201.758 251.291 198.722C251.203 198.421 250.744 198.574 250.831 198.874C251.762 202.032 253.842 204.72 256.655 206.402C256.923 206.562 257.139 206.127 256.872 205.967Z" fill="#5B5B69"/>
    <path d="M254.19 179.402C253.64 179.664 253.035 179.785 252.428 179.754C251.821 179.723 251.231 179.541 250.711 179.224C250.445 179.061 250.229 179.496 250.493 179.659C251.069 180.006 251.721 180.207 252.392 180.243C253.063 180.278 253.732 180.148 254.341 179.864C254.401 179.842 254.45 179.798 254.479 179.741C254.507 179.684 254.513 179.618 254.495 179.556C254.475 179.495 254.431 179.445 254.374 179.416C254.317 179.387 254.25 179.382 254.19 179.402Z" fill="#5B5B69"/>
    <path opacity="0.4" d="M216.738 190.596C216.902 190.703 217.065 190.81 217.228 190.921C219.416 192.369 221.483 193.993 223.409 195.778C223.56 195.914 223.711 196.054 223.858 196.193C228.454 200.543 232.206 205.714 234.926 211.443C236.006 213.724 236.913 216.084 237.637 218.503C238.637 221.844 239.458 225.547 241.438 228.28C241.642 228.567 241.862 228.841 242.1 229.101H259.994C260.034 229.081 260.075 229.064 260.116 229.044L260.83 229.077C260.802 228.949 260.769 228.818 260.741 228.69C260.724 228.616 260.704 228.542 260.688 228.469C260.675 228.419 260.663 228.37 260.655 228.325C260.651 228.308 260.647 228.292 260.643 228.28C260.635 228.234 260.622 228.193 260.614 228.152C260.434 227.417 260.249 226.681 260.059 225.945C260.059 225.941 260.059 225.941 260.055 225.937C258.589 220.336 256.646 214.809 253.931 209.754C253.849 209.602 253.768 209.446 253.678 209.294C252.441 207.023 251.023 204.857 249.436 202.818C248.563 201.704 247.635 200.636 246.656 199.616C244.119 196.988 241.187 194.778 237.968 193.066C231.55 189.655 224.12 188.349 217.261 190.432C217.085 190.485 216.914 190.539 216.738 190.596Z" fill="#04E474" fillOpacity="0.5"/>
    <path d="M216.782 190.825C225.693 192.607 233.819 197.169 240.007 203.864C241.365 205.281 242.492 206.905 243.347 208.676C244.125 210.428 244.422 212.357 244.208 214.264C244.044 216.046 243.672 217.85 243.941 219.641C244.092 220.556 244.434 221.428 244.944 222.2C245.454 222.973 246.12 223.628 246.899 224.123C248.808 225.408 251.062 225.925 253.283 226.354C255.75 226.83 258.319 227.285 260.378 228.836C260.627 229.024 260.902 228.623 260.653 228.436C257.072 225.738 252.272 226.304 248.354 224.399C246.526 223.51 244.952 222.062 244.5 220.002C244.103 218.202 244.486 216.342 244.668 214.539C244.903 212.682 244.684 210.795 244.028 209.043C243.265 207.234 242.202 205.569 240.884 204.119C237.969 200.807 234.555 197.978 230.767 195.734C226.457 193.148 221.74 191.324 216.819 190.34C216.515 190.279 216.48 190.765 216.782 190.825Z" fill="#5B5B69"/>
    <path d="M238.143 201.59C239.118 200.392 239.638 198.885 239.611 197.337C239.584 195.789 239.011 194.301 237.994 193.139C237.788 192.904 237.416 193.216 237.623 193.451C238.572 194.531 239.105 195.917 239.128 197.359C239.15 198.801 238.66 200.203 237.745 201.312C237.547 201.554 237.946 201.83 238.143 201.59Z" fill="#5B5B69"/>
    <path d="M244.412 213.372C241.286 213.712 238.147 212.854 235.622 210.969C235.372 210.782 235.097 211.182 235.346 211.369C237.978 213.326 241.246 214.212 244.499 213.851C244.809 213.816 244.721 213.337 244.412 213.372Z" fill="#5B5B69"/>
    <path d="M226.376 193.788C226.095 194.331 225.684 194.795 225.18 195.138C224.677 195.481 224.097 195.693 223.492 195.755C223.182 195.785 223.27 196.264 223.579 196.234C224.246 196.162 224.887 195.927 225.444 195.55C226.001 195.172 226.457 194.662 226.774 194.066C226.808 194.012 226.821 193.947 226.81 193.884C226.798 193.821 226.763 193.765 226.712 193.727C226.66 193.691 226.595 193.676 226.532 193.688C226.469 193.7 226.413 193.736 226.376 193.788Z" fill="#5B5B69"/>
    <path d="M100.862 0H0V33.6207H100.862V0Z" fill="#F0BE6C"/>
    <path d="M11.4806 5.33008H6.56055V10.2502H11.4806V5.33008Z" fill="#E6E6E6"/>
    <path d="M95.1217 5.33008H15.5801V10.2502H95.1217V5.33008Z" fill="#E6E6E6"/>
    <path d="M11.4806 14.3501H6.56055V19.2702H11.4806V14.3501Z" fill="#E6E6E6"/>
    <path d="M95.1217 14.3501H15.5801V19.2702H95.1217V14.3501Z" fill="#E6E6E6"/>
    <path d="M11.4806 23.3706H6.56055V28.2907H11.4806V23.3706Z" fill="#E6E6E6"/>
    <path d="M95.1217 22.9604H15.5801V27.8805H95.1217V22.9604Z" fill="#E6E6E6"/>
    <path d="M100.862 53.3008H0V86.9215H100.862V53.3008Z" fill="#F0BE6C"/>
    <path d="M11.4806 58.6309H6.56055V63.551H11.4806V58.6309Z" fill="#E6E6E6"/>
    <path d="M95.1217 58.6309H15.5801V63.551H95.1217V58.6309Z" fill="#E6E6E6"/>
    <path d="M11.4806 67.6509H6.56055V72.571H11.4806V67.6509Z" fill="#E6E6E6"/>
    <path d="M95.1217 67.6509H15.5801V72.571H95.1217V67.6509Z" fill="#E6E6E6"/>
    <path d="M11.4806 76.6714H6.56055V81.5915H11.4806V76.6714Z" fill="#E6E6E6"/>
    <path d="M95.1217 76.2612H15.5801V81.1813H95.1217V76.2612Z" fill="#E6E6E6"/>
    <path d="M100.862 106.602H0V140.223H100.862V106.602Z" fill="#F0BE6C"/>
    <path d="M11.4806 111.932H6.56055V116.852H11.4806V111.932Z" fill="#E6E6E6"/>
    <path d="M95.1217 111.932H15.5801V116.852H95.1217V111.932Z" fill="#E6E6E6"/>
    <path d="M11.4806 120.952H6.56055V125.872H11.4806V120.952Z" fill="#E6E6E6"/>
    <path d="M95.1217 120.952H15.5801V125.872H95.1217V120.952Z" fill="#E6E6E6"/>
    <path d="M11.4806 129.973H6.56055V134.893H11.4806V129.973Z" fill="#E6E6E6"/>
    <path d="M95.1217 129.562H15.5801V134.483H95.1217V129.562Z" fill="#E6E6E6"/>
    <path d="M100.862 159.903H0V193.524H100.862V159.903Z" fill="#F0BE6C"/>
    <path d="M11.4806 165.233H6.56055V170.153H11.4806V165.233Z" fill="#E6E6E6"/>
    <path d="M95.1217 165.233H15.5801V170.153H95.1217V165.233Z" fill="#E6E6E6"/>
    <path d="M11.4806 174.253H6.56055V179.174H11.4806V174.253Z" fill="#E6E6E6"/>
    <path d="M95.1217 174.253H15.5801V179.174H95.1217V174.253Z" fill="#E6E6E6"/>
    <path d="M11.4806 183.274H6.56055V188.194H11.4806V183.274Z" fill="#E6E6E6"/>
    <path d="M95.1217 182.864H15.5801V187.784H95.1217V182.864Z" fill="#E6E6E6"/>
    <path d="M212.686 103.638C212.482 103.469 212.316 103.258 212.2 103.02C212.084 102.781 212.021 102.52 212.014 102.254L211.786 92.9756C211.555 91.6362 211.861 90.2593 212.637 89.1465C213.413 88.0338 214.595 87.2761 215.925 87.0394C217.255 86.8027 218.624 87.1064 219.732 87.884C220.839 88.6615 221.596 89.8494 221.835 91.1874L224.737 100.029C224.82 100.281 224.848 100.548 224.819 100.812C224.79 101.076 224.704 101.331 224.569 101.559C224.433 101.787 224.25 101.983 224.032 102.133C223.815 102.284 223.567 102.385 223.307 102.431L214.165 104.03C213.905 104.075 213.638 104.064 213.383 103.996C213.128 103.929 212.89 103.806 212.686 103.638Z" fill="#E4E4E4"/>
    <path d="M211.58 224.048L206.583 224.325L203.143 205.054L210.519 204.646L211.58 224.048Z" fill="#FF3838" fillOpacity="0.4"/>
    <path d="M213.125 228.854L197.011 229.747L197 229.542C196.908 227.867 197.481 226.225 198.593 224.976C199.704 223.726 201.263 222.973 202.926 222.88L212.769 222.335L213.125 228.854Z" fill="#5B5B69"/>
    <path d="M106.803 146.541L106.156 141.545L124.993 136.657L125.947 144.03L106.803 146.541Z" fill="#FF3838" fillOpacity="0.4"/>
    <path d="M102.158 148.446L100.072 132.338L100.275 132.311C101.927 132.095 103.597 132.547 104.917 133.57C106.237 134.592 107.1 136.101 107.316 137.764L108.589 147.603L102.158 148.446Z" fill="#5B5B69"/>
    <path d="M169.983 114.967C170.201 115.026 170.414 115.102 170.621 115.195L187.749 104.327L187.566 99.3796L194.948 98.1255L196.117 106.852C196.212 107.557 196.077 108.274 195.732 108.895C195.387 109.516 194.852 110.008 194.206 110.297L173.152 119.703C173.039 120.572 172.665 121.385 172.081 122.035C171.498 122.685 170.731 123.14 169.884 123.341C169.037 123.541 168.149 123.478 167.339 123.158C166.529 122.838 165.834 122.278 165.348 121.552C164.862 120.825 164.607 119.967 164.617 119.091C164.628 118.215 164.903 117.363 165.406 116.648C165.909 115.933 166.616 115.39 167.434 115.089C168.251 114.789 169.14 114.746 169.983 114.967Z" fill="#FF3838" fillOpacity="0.4"/>
    <path d="M201.207 77.995C208.072 77.995 213.638 72.3928 213.638 65.4821C213.638 58.5714 208.072 52.9692 201.207 52.9692C194.341 52.9692 188.775 58.5714 188.775 65.4821C188.775 72.3928 194.341 77.995 201.207 77.995Z" fill="#5B5B69"/>
    <path d="M205.556 57.4903C208.397 57.4903 210.7 55.1721 210.7 52.3125C210.7 49.4529 208.397 47.1348 205.556 47.1348C202.715 47.1348 200.412 49.4529 200.412 52.3125C200.412 55.1721 202.715 57.4903 205.556 57.4903Z" fill="#5B5B69"/>
    <path d="M212.415 49.5078C212.415 48.228 211.944 46.9935 211.093 46.0425C210.242 45.0916 209.071 44.4915 207.807 44.3581C207.985 44.3395 208.164 44.3301 208.342 44.3301C209.707 44.3301 211.015 44.8756 211.98 45.8466C212.945 46.8176 213.486 48.1346 213.486 49.5078C213.486 50.8811 212.945 52.198 211.98 53.169C211.015 54.1401 209.707 54.6856 208.342 54.6856C208.164 54.6855 207.985 54.6762 207.807 54.6576C209.071 54.5241 210.242 53.9241 211.093 52.9731C211.944 52.0221 212.415 50.7877 212.415 49.5078Z" fill="#5B5B69"/>
    <path d="M201.202 79.0871C205.544 79.0871 209.063 75.5447 209.063 71.1749C209.063 66.8051 205.544 63.2627 201.202 63.2627C196.861 63.2627 193.342 66.8051 193.342 71.1749C193.342 75.5447 196.861 79.0871 201.202 79.0871Z" fill="#FFB8B8"/>
    <path d="M214.288 125.773C214.288 125.773 213.913 135.192 212.416 140.09C210.919 144.988 213.539 214.315 212.229 216.01C210.919 217.706 204.743 217.14 204.743 217.14L199.013 181.022C199.013 181.022 198.005 142.728 184.155 141.786C170.306 140.844 116.217 146.119 116.217 146.119L115.094 138.395L144.103 131.99C144.103 131.99 170.68 122.759 185.278 125.208C199.877 127.657 214.288 125.773 214.288 125.773Z" fill="#5B5B69"/>
    <path d="M212.602 80.1835C214.1 79.0532 217.843 80.5603 217.843 80.5603L221.96 92.8054C221.96 92.8054 219.902 103.355 218.03 109.195C216.158 115.035 212.553 140.852 213.302 141.983C214.05 143.113 201.186 133.874 193.512 131.048C185.839 128.222 184.154 125.02 184.154 125.02C184.154 125.02 192.576 112.963 189.769 107.311C186.962 101.66 189.208 95.2545 189.208 95.2545L188.085 88.8493L194.448 85.27C194.448 85.27 211.105 81.3139 212.602 80.1835Z" fill="#D9D9D9"/>
    <path d="M199.759 68.0069C204.494 68.0069 208.332 65.6887 208.332 62.8291C208.332 59.9695 204.494 57.6514 199.759 57.6514C195.024 57.6514 191.186 59.9695 191.186 62.8291C191.186 65.6887 195.024 68.0069 199.759 68.0069Z" fill="#5B5B69"/>
    <path d="M249.029 83.4784C248.936 83.6856 248.86 83.8998 248.8 84.1191L229.594 90.5693L225.907 87.2914L220.266 92.2446L226.231 98.6858C226.713 99.2062 227.35 99.5552 228.046 99.6803C228.741 99.8055 229.459 99.7001 230.09 99.38L250.661 88.9474C251.4 89.4095 252.262 89.6342 253.131 89.5914C254 89.5487 254.836 89.2406 255.527 88.7081C256.218 88.1756 256.732 87.444 257 86.6105C257.267 85.7771 257.277 84.8813 257.027 84.0423C256.776 83.2033 256.278 82.4609 255.598 81.9139C254.919 81.3668 254.09 81.041 253.222 80.9798C252.353 80.9186 251.487 81.1248 250.738 81.5712C249.99 82.0175 249.394 82.6827 249.029 83.4784Z" fill="#FF3838" fillOpacity="0.4"/>
    <path d="M228.921 90.9242L221.899 97.0291C221.699 97.2028 221.464 97.3311 221.211 97.4053C220.957 97.4795 220.691 97.4978 220.43 97.459C220.169 97.4203 219.919 97.3253 219.697 97.1805C219.476 97.0358 219.288 96.8447 219.147 96.6203L214.191 88.7577C213.314 87.7238 212.88 86.3818 212.984 85.0261C213.088 83.6704 213.722 82.4116 214.747 81.5258C215.772 80.6401 217.104 80.1996 218.451 80.3009C219.798 80.4023 221.051 81.0373 221.933 82.0666L228.92 88.124C229.12 88.2975 229.28 88.5124 229.39 88.7539C229.5 88.9955 229.557 89.2581 229.557 89.5238C229.557 89.7895 229.501 90.0522 229.391 90.2938C229.281 90.5355 229.121 90.7505 228.921 90.9242Z" fill="#D9D9D9"/>
    <path d="M269.778 230H100.611C100.552 229.999 100.495 229.946 100.454 229.853C100.412 229.759 100.389 229.632 100.389 229.5C100.389 229.367 100.412 229.24 100.454 229.146C100.495 229.053 100.552 229 100.611 229H269.778C269.837 229 269.894 229.052 269.936 229.146C269.977 229.24 270.001 229.367 270.001 229.5C270.001 229.632 269.977 229.759 269.936 229.853C269.894 229.947 269.837 230 269.778 230Z" fill="#5B5B69"/>
    </g>
  </svg>
);
export const Funnel = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.0001 3C14.7548 3 17.4552 3.23205 20.0831 3.67767C20.6159 3.76803 21 4.23355 21 4.77402V5.81802C21 6.41476 20.7629 6.98705 20.341 7.40901L14.909 12.841C14.4871 13.2629 14.25 13.8352 14.25 14.432V17.3594C14.25 18.2117 13.7685 18.9908 13.0062 19.3719L9.75 21V14.432C9.75 13.8352 9.51295 13.2629 9.09099 12.841L3.65901 7.40901C3.23705 6.98705 3 6.41476 3 5.81802V4.77404C3 4.23357 3.38408 3.76805 3.91694 3.67769C6.54479 3.23206 9.24533 3 12.0001 3Z" stroke="#0F172A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
export const FalseInCircle = () => (
  <svg width="140" height="140" viewBox="0 0 140 140" fill="#F0BE6C" xmlns="http://www.w3.org/2000/svg">
    <path d="M126 70C126 100.928 100.928 126 70 126C39.0721 126 14 100.928 14 70C14 39.0721 39.0721 14 70 14C100.928 14 126 39.0721 126 70ZM22.4 70C22.4 96.2888 43.7112 117.6 70 117.6C96.2888 117.6 117.6 96.2888 117.6 70C117.6 43.7112 96.2888 22.4 70 22.4C43.7112 22.4 22.4 43.7112 22.4 70Z" />
    <path d="M63.5312 52.1875L69.9688 63.4062L76.5312 52.1875H84.8125L74.5625 68.7812L85.2188 86H76.9375L70.0625 74.3125L63.1875 86H54.875L65.5 68.7812L55.2812 52.1875H63.5312Z" />
  </svg>
);
export const OkInCircle = () => (
  <svg width="138" height="138" viewBox="0 0 138 138" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M51.75 73.3125L64.6875 86.25L86.25 56.0625M120.75 69C120.75 97.5807 97.5807 120.75 69 120.75C40.4193 120.75 17.25 97.5807 17.25 69C17.25 40.4193 40.4193 17.25 69 17.25C97.5807 17.25 120.75 40.4193 120.75 69Z" stroke="#F0BE6C" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
export const Bell = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.8092 22.7756C22.3353 22.476 24.7712 21.8821 27.0816 21.0292C25.1659 18.9027 23.9998 16.0875 23.9998 13V12.0656C24 12.0437 24.0001 12.0219 24.0001 12C24.0001 7.58172 20.4184 4 16.0001 4C11.5818 4 8.0001 7.58172 8.0001 12L7.99984 13C7.99984 16.0875 6.8338 18.9027 4.91807 21.0292C7.22864 21.8821 9.66468 22.4761 12.1909 22.7757M19.8092 22.7756C18.5601 22.9238 17.2889 23 15.9998 23C14.711 23 13.4399 22.9238 12.1909 22.7757M19.8092 22.7756C19.9332 23.1615 20.0001 23.5729 20.0001 24C20.0001 26.2091 18.2092 28 16.0001 28C13.791 28 12.0001 26.2091 12.0001 24C12.0001 23.573 12.067 23.1615 12.1909 22.7757M4.16602 10C4.54906 7.71685 5.57681 5.65232 7.05567 4M24.9445 4C26.4234 5.65232 27.4511 7.71685 27.8342 10" stroke="#5B5B69" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
export const BellSmall = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.0238 10.9618C11.1732 10.7224 12.2692 10.3514 13.2972 9.8663C12.3308 8.96566 11.6815 7.71821 11.5573 6.29865L11.5197 5.86903C11.5189 5.85898 11.5181 5.84893 11.5172 5.83887C11.3395 3.80745 9.5486 2.30474 7.51719 2.48247C5.48577 2.66019 3.98306 4.45106 4.16079 6.48247L4.20089 6.94225C4.32509 8.36182 3.90221 9.70307 3.10695 10.7578C4.2036 11.0571 5.34752 11.2321 6.52109 11.2683M10.0238 10.9618C9.45541 11.0802 8.874 11.1664 8.28134 11.2182C7.68876 11.27 7.1013 11.2861 6.52109 11.2683M10.0238 10.9618C10.0963 11.1342 10.1436 11.3207 10.1608 11.5171C10.2497 12.5328 9.4983 13.4282 8.48259 13.5171C7.46688 13.6059 6.57145 12.8546 6.48259 11.8389C6.46541 11.6425 6.47963 11.4507 6.52109 11.2683M2.31752 5.71715C2.40179 4.652 2.79128 3.66144 3.40476 2.84226M11.6296 2.12268C12.376 2.82289 12.9316 3.73076 13.1996 4.76509" stroke="#5B5B69" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)
export const ArrowBack = ({ white }: {white?: boolean}) => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill={ white ? "#FFFDF4" : "#040C0C" } xmlns="http://www.w3.org/2000/svg">
    <path d="M18.4396 25.3334C18.2404 25.3341 18.0436 25.2901 17.8636 25.2047C17.6836 25.1193 17.5251 24.9947 17.3996 24.84L10.9596 16.84C10.7635 16.6015 10.6562 16.3022 10.6562 15.9934C10.6562 15.6845 10.7635 15.3853 10.9596 15.1467L17.6262 7.14671C17.8526 6.87442 18.1778 6.70319 18.5303 6.67068C18.8829 6.63817 19.2339 6.74706 19.5062 6.97338C19.7785 7.19969 19.9498 7.52491 19.9823 7.87748C20.0148 8.23005 19.9059 8.58109 19.6796 8.85338L13.7196 16L19.4796 23.1467C19.6426 23.3424 19.7462 23.5807 19.778 23.8335C19.8099 24.0862 19.7686 24.3428 19.6592 24.5728C19.5498 24.8028 19.3768 24.9967 19.1607 25.1315C18.9445 25.2663 18.6943 25.3364 18.4396 25.3334Z" />
  </svg>
);
export const ArrowForward = ({ white }: {white?: boolean}) => (
  <svg width="10" height="19" viewBox="0 0 10 19" fill={ white ? "#FFFDF4" : "#040C0C" } xmlns="http://www.w3.org/2000/svg">
    <path d="M2.21668 0.331663C2.41588 0.330986 2.61269 0.374949 2.79266 0.46032C2.97263 0.545692 3.13119 0.670303 3.25668 0.824997L9.69668 8.825C9.89279 9.06357 10 9.36283 10 9.67166C10 9.9805 9.89279 10.2798 9.69668 10.5183L3.03002 18.5183C2.8037 18.7906 2.47848 18.9619 2.12592 18.9944C1.77335 19.0269 1.42231 18.918 1.15002 18.6917C0.877728 18.4653 0.706496 18.1401 0.673989 17.7876C0.641483 17.435 0.750365 17.084 0.976684 16.8117L6.93668 9.665L1.17668 2.51833C1.01364 2.32262 0.91007 2.0843 0.878231 1.83156C0.846392 1.57883 0.887614 1.32227 0.997022 1.09223C1.10643 0.862192 1.27944 0.668312 1.49559 0.533524C1.71174 0.398737 1.96197 0.328688 2.21668 0.331663Z" />
  </svg>
);
export const Star = ({ fill }: {fill?: boolean}) => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill={ fill ? "#040C0C" : "none" } xmlns="http://www.w3.org/2000/svg">
    <path d="M6.65447 1.33255C6.78257 1.02457 7.21887 1.02457 7.34696 1.33255L8.76428 4.74019C8.81828 4.87003 8.94039 4.95874 9.08056 4.96998L12.7594 5.26491C13.0919 5.29156 13.2267 5.7065 12.9734 5.92351L10.1705 8.32447C10.0637 8.41595 10.0171 8.5595 10.0497 8.69628L10.906 12.2862C10.9834 12.6107 10.6304 12.8671 10.3458 12.6932L7.19619 10.7695C7.07618 10.6962 6.92525 10.6962 6.80525 10.7695L3.65566 12.6932C3.37099 12.8671 3.01802 12.6107 3.09542 12.2862L3.95175 8.69628C3.98437 8.5595 3.93773 8.41595 3.83094 8.32447L1.02806 5.92351C0.77473 5.7065 0.909552 5.29156 1.24205 5.26491L4.92088 4.96998C5.06105 4.95874 5.18315 4.87003 5.23716 4.74019L6.65447 1.33255Z" stroke="#040C0C" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
export const Question = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11 18H13V16H11V18ZM12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C5.85752 19.9997 6.95991 20.7362 8.17317 21.2388C9.38642 21.7413 10.6868 22 12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12 6C10.9391 6 9.92172 6.42143 9.17157 7.17157C8.42143 7.92172 8 8.93913 8 10H10C10 9.46957 10.2107 8.96086 10.5858 8.58579C10.9609 8.21071 11.4696 8 12 8C12.5304 8 13.0391 8.21071 13.4142 8.58579C13.7893 8.96086 14 9.46957 14 10C14 12 11 11.75 11 15H13C13 12.75 16 12.5 16 10C16 8.93913 15.5786 7.92172 14.8284 7.17157C14.0783 6.42143 13.0609 6 12 6Z" fill="black"/>
  </svg>
);
export const Clock = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="#5B5B69" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.66732 8.11683L10.1673 9.61683C10.2895 9.73905 10.3506 9.89194 10.3506 10.0755C10.3506 10.2586 10.2895 10.4168 10.1673 10.5502C10.034 10.6835 9.87576 10.7502 9.69265 10.7502C9.5091 10.7502 9.35065 10.6835 9.21732 10.5502L7.80065 9.1335C7.64509 8.97794 7.52843 8.80572 7.45065 8.61683C7.37287 8.42794 7.33398 8.22238 7.33398 8.00016V6.00016C7.33398 5.81127 7.39798 5.65283 7.52598 5.52483C7.65354 5.39727 7.81176 5.3335 8.00065 5.3335C8.18954 5.3335 8.34798 5.39727 8.47598 5.52483C8.60354 5.65283 8.66732 5.81127 8.66732 6.00016V8.11683ZM8.00065 2.66683C8.18954 2.66683 8.34798 2.73061 8.47598 2.85816C8.60354 2.98616 8.66732 3.14461 8.66732 3.3335C8.66732 3.52238 8.60354 3.68083 8.47598 3.80883C8.34798 3.93638 8.18954 4.00016 8.00065 4.00016C7.81176 4.00016 7.65354 3.93638 7.52598 3.80883C7.39798 3.68083 7.33398 3.52238 7.33398 3.3335C7.33398 3.14461 7.39798 2.98616 7.52598 2.85816C7.65354 2.73061 7.81176 2.66683 8.00065 2.66683ZM13.334 8.00016C13.334 8.18905 13.27 8.34727 13.142 8.47483C13.0144 8.60283 12.8562 8.66683 12.6673 8.66683C12.4784 8.66683 12.3202 8.60283 12.1927 8.47483C12.0647 8.34727 12.0007 8.18905 12.0007 8.00016C12.0007 7.81127 12.0647 7.65283 12.1927 7.52483C12.3202 7.39727 12.4784 7.3335 12.6673 7.3335C12.8562 7.3335 13.0144 7.39727 13.142 7.52483C13.27 7.65283 13.334 7.81127 13.334 8.00016ZM8.00065 12.0002C8.18954 12.0002 8.34798 12.0642 8.47598 12.1922C8.60354 12.3197 8.66732 12.4779 8.66732 12.6668C8.66732 12.8557 8.60354 13.0139 8.47598 13.1415C8.34798 13.2695 8.18954 13.3335 8.00065 13.3335C7.81176 13.3335 7.65354 13.2695 7.52598 13.1415C7.39798 13.0139 7.33398 12.8557 7.33398 12.6668C7.33398 12.4779 7.39798 12.3197 7.52598 12.1922C7.65354 12.0642 7.81176 12.0002 8.00065 12.0002ZM4.00065 8.00016C4.00065 8.18905 3.93687 8.34727 3.80932 8.47483C3.68132 8.60283 3.52287 8.66683 3.33398 8.66683C3.1451 8.66683 2.98665 8.60283 2.85865 8.47483C2.7311 8.34727 2.66732 8.18905 2.66732 8.00016C2.66732 7.81127 2.7311 7.65283 2.85865 7.52483C2.98665 7.39727 3.1451 7.3335 3.33398 7.3335C3.52287 7.3335 3.68132 7.39727 3.80932 7.52483C3.93687 7.65283 4.00065 7.81127 4.00065 8.00016ZM8.00065 14.6668C7.07843 14.6668 6.21176 14.4917 5.40065 14.1415C4.58954 13.7917 3.88398 13.3168 3.28398 12.7168C2.68398 12.1168 2.2091 11.4113 1.85932 10.6002C1.5091 9.78905 1.33398 8.92238 1.33398 8.00016C1.33398 7.07794 1.5091 6.21127 1.85932 5.40016C2.2091 4.58905 2.68398 3.8835 3.28398 3.2835C3.88398 2.6835 4.58954 2.20838 5.40065 1.85816C6.21176 1.50838 7.07843 1.3335 8.00065 1.3335C8.92287 1.3335 9.78954 1.50838 10.6006 1.85816C11.4118 2.20838 12.1173 2.6835 12.7173 3.2835C13.3173 3.8835 13.7922 4.58905 14.142 5.40016C14.4922 6.21127 14.6673 7.07794 14.6673 8.00016C14.6673 8.92238 14.4922 9.78905 14.142 10.6002C13.7922 11.4113 13.3173 12.1168 12.7173 12.7168C12.1173 13.3168 11.4118 13.7917 10.6006 14.1415C9.78954 14.4917 8.92287 14.6668 8.00065 14.6668ZM8.00065 13.3335C9.48954 13.3335 10.7507 12.8168 11.784 11.7835C12.8173 10.7502 13.334 9.48905 13.334 8.00016C13.334 6.51127 12.8173 5.25016 11.784 4.21683C10.7507 3.1835 9.48954 2.66683 8.00065 2.66683C6.51176 2.66683 5.25065 3.1835 4.21732 4.21683C3.18398 5.25016 2.66732 6.51127 2.66732 8.00016C2.66732 9.48905 3.18398 10.7502 4.21732 11.7835C5.25065 12.8168 6.51176 13.3335 8.00065 13.3335Z" />
  </svg>
);
export const MenuHome = ({active}: {active?: boolean}) => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 15.9998L14.9393 4.06043C15.5251 3.47465 16.4749 3.47465 17.0607 4.06043L29 15.9998M6 12.9998V26.4998C6 27.3282 6.67157 27.9998 7.5 27.9998H13V21.4998C13 20.6713 13.6716 19.9998 14.5 19.9998H17.5C18.3284 19.9998 19 20.6713 19 21.4998V27.9998H24.5C25.3284 27.9998 26 27.3282 26 26.4998V12.9998M11 27.9998H22" stroke={active ? "#ffffff" : "#5B5B69"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
export const MenuTask = ({active}: {active?: boolean}) => (
  <svg width="32" height="32" viewBox="0 0 32 32" stroke={ active ? "white" : "#5B5B69" } fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.666 26H27.9993"  />
    <path d="M14.666 16.6665H27.9993" />
    <path d="M14.666 7.3335H27.9993" />
    <path d="M4 7.33317L5.33333 8.6665L9.33333 4.6665" />
    <path d="M4 16.6667L5.33333 18L9.33333 14" />
    <path d="M4 26.0002L5.33333 27.3335L9.33333 23.3335" />
  </svg>
);
export const MenuCalendar = ({active}: {active?: boolean}) => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke={ active ? "white" : "#5B5B69" } xmlns="http://www.w3.org/2000/svg">
    <path d="M9 4V7M23 4V7M4 25V10C4 8.34315 5.34315 7 7 7H25C26.6569 7 28 8.34315 28 10V25M4 25C4 26.6569 5.34315 28 7 28H25C26.6569 28 28 26.6569 28 25M4 25V15C4 13.3431 5.34315 12 7 12H25C26.6569 12 28 13.3431 28 15V25M16 17H16.01V17.01H16V17ZM16 20H16.01V20.01H16V20ZM16 23H16.01V23.01H16V23ZM13 20H13.01V20.01H13V20ZM13 23H13.01V23.01H13V23ZM10 20H10.01V20.01H10V20ZM10 23H10.01V23.01H10V23ZM19 17H19.01V17.01H19V17ZM19 20H19.01V20.01H19V20ZM19 23H19.01V23.01H19V23ZM22 17H22.01V17.01H22V17ZM22 20H22.01V20.01H22V20Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
export const MenuSettings = ({active}: {active?: boolean}) => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke={ active ? "white" : "#5B5B69" } strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.7923 5.2534C12.9129 4.53012 13.5387 4 14.2719 4H17.7306C18.4638 4 19.0896 4.53012 19.2101 5.2534L19.4948 6.96147C19.5779 7.46019 19.9112 7.87562 20.3536 8.12048C20.4525 8.17522 20.5503 8.23178 20.6468 8.2901C21.0802 8.55179 21.6073 8.63315 22.0814 8.45554L23.7039 7.8477C24.3906 7.59046 25.1625 7.86734 25.5292 8.50236L27.2585 11.4976C27.6251 12.1326 27.4789 12.9396 26.9128 13.4057L25.5737 14.5081C25.1837 14.8292 24.9903 15.325 24.9997 15.83C25.0007 15.8866 25.0012 15.9432 25.0012 16C25.0012 16.0568 25.0007 16.1134 24.9997 16.1699C24.9903 16.675 25.1837 17.1708 25.5737 17.4919L26.9128 18.5943C27.4789 19.0603 27.6251 19.8673 27.2585 20.5024L25.5292 23.4976C25.1625 24.1326 24.3906 24.4095 23.7039 24.1523L22.0814 23.5444C21.6073 23.3668 21.0802 23.4482 20.6469 23.7099C20.5503 23.7682 20.4525 23.8248 20.3536 23.8795C19.9112 24.1244 19.5779 24.5398 19.4948 25.0385L19.2101 26.7466C19.0896 27.4699 18.4638 28 17.7306 28H14.2719C13.5387 28 12.9129 27.4699 12.7923 26.7466L12.5077 25.0385C12.4245 24.5398 12.0913 24.1244 11.6489 23.8795C11.55 23.8248 11.4522 23.7682 11.3557 23.7099C10.9223 23.4482 10.3952 23.3668 9.92109 23.5445L8.2986 24.1523C7.61194 24.4095 6.83995 24.1327 6.47332 23.4976L4.74401 20.5024C4.37738 19.8674 4.52359 19.0604 5.0897 18.5943L6.42883 17.4919C6.81884 17.1708 7.01217 16.675 7.00282 16.17C7.00177 16.1134 7.00125 16.0568 7.00125 16C7.00125 15.9432 7.00177 15.8866 7.00282 15.8301C7.01217 15.325 6.81884 14.8292 6.42883 14.5081L5.0897 13.4057C4.52359 12.9397 4.37738 12.1327 4.74401 11.4976L6.47332 8.50238C6.83995 7.86736 7.61194 7.59048 8.2986 7.84772L9.92107 8.45556C10.3952 8.63316 10.9223 8.5518 11.3556 8.29011C11.4522 8.23178 11.55 8.17523 11.6489 8.12048C12.0913 7.87562 12.4245 7.46019 12.5077 6.96147L12.7923 5.2534Z" />
    <path d="M20.0009 15.9999C20.0009 18.209 18.2101 19.9999 16.0009 19.9999C13.7918 19.9999 12.0009 18.209 12.0009 15.9999C12.0009 13.7908 13.7918 11.9999 16.0009 11.9999C18.2101 11.9999 20.0009 13.7908 20.0009 15.9999Z" />
  </svg>
);
export const Plus = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 12.998H13V18.998H11V12.998H5V10.998H11V4.99805H13V10.998H19V12.998Z" />
  </svg>
)
