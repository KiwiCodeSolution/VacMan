export function Rubber() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14.2277 15.2279L9.9847 10.9849L4.3277 16.6419L6.4497 18.7629C7.01228 19.3254 7.77521 19.6413 8.5707 19.6413C9.36619 19.6413 10.1291 19.3254 10.6917 18.7629L14.2277 15.2279ZM12.7837 19.4999H15.4997C15.7649 19.4999 16.0193 19.6053 16.2068 19.7928C16.3943 19.9804 16.4997 20.2347 16.4997 20.4999C16.4997 20.7652 16.3943 21.0195 16.2068 21.2071C16.0193 21.3946 15.7649 21.4999 15.4997 21.4999H4.4997C4.24617 21.4997 4.00218 21.4032 3.81711 21.2299C3.63203 21.0567 3.51968 20.8196 3.50278 20.5666C3.48588 20.3136 3.5657 20.0637 3.72609 19.8673C3.88647 19.671 4.11545 19.5429 4.3667 19.5089L2.9137 18.0559C2.53876 17.6809 2.32812 17.1723 2.32812 16.6419C2.32812 16.1116 2.53876 15.603 2.9137 15.2279L14.2277 3.91394C14.6028 3.539 15.1114 3.32837 15.6417 3.32837C16.172 3.32837 16.6806 3.539 17.0557 3.91394L21.2997 8.15694C21.6746 8.532 21.8853 9.04061 21.8853 9.57094C21.8853 10.1013 21.6746 10.6099 21.2997 10.9849L12.7837 19.4999Z"
        fill="#5B5B69"
      />
    </svg>
  );
}
export function Eye(props: { fill?: string; cross?: boolean }) {
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
}
export function SuitMan() {
  return (
    <svg fill="orange" xmlns="http://www.w3.org/2000/svg" width="48px" height="48px" viewBox="0 0 48 48" version="1.1">
      <path d="M 24 18.945312 C 29.222656 18.945312 33.472656 14.695312 33.472656 9.472656 C 33.472656 4.25 29.222656 0 24 0 C 18.777344 0 14.53125 4.25 14.53125 9.472656 C 14.53125 14.695312 18.777344 18.945312 24 18.945312 Z M 24 18.945312 "/>
      <path d="M 36.710938 23.535156 C 36.707031 23.53125 36.699219 23.53125 36.695312 23.527344 C 35.460938 23.226562 31.6875 22.699219 31.6875 22.699219 C 31.257812 22.566406 30.804688 22.792969 30.652344 23.214844 L 24.964844 38.8125 C 24.636719 39.710938 23.367188 39.710938 23.039062 38.8125 L 17.351562 23.214844 C 17.230469 22.875 16.910156 22.660156 16.566406 22.660156 C 16.484375 22.660156 12.601562 23.207031 11.308594 23.527344 C 7.773438 24.40625 5.546875 27.878906 5.546875 31.5 L 5.546875 44.476562 C 5.546875 46.421875 7.125 48 9.066406 48 L 38.933594 48 C 40.875 48 42.453125 46.421875 42.453125 44.476562 L 42.453125 31.457031 C 42.453125 27.851562 40.136719 24.652344 36.710938 23.535156 Z M 36.710938 23.535156 "/>
      <path d="M 26.144531 22.402344 C 25.917969 22.15625 25.585938 22.03125 25.25 22.03125 L 22.75 22.03125 C 22.414062 22.03125 22.082031 22.15625 21.855469 22.402344 C 21.503906 22.785156 21.453125 23.335938 21.703125 23.769531 L 23.039062 25.785156 L 22.414062 31.070312 L 23.648438 34.351562 C 23.765625 34.679688 24.234375 34.679688 24.355469 34.351562 L 25.585938 31.070312 L 24.960938 25.785156 L 26.296875 23.769531 C 26.546875 23.335938 26.496094 22.785156 26.144531 22.402344 Z M 26.144531 22.402344 "/>
    </svg>
  );
}
