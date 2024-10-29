export function Header({ className }) {
  const header = document.createElement("header");
  header.className = `header ${className}`;
  header.innerHTML = `

        <svg class="header__logo" width="125" height="25" viewBox="0 0 125 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_8370_2047)">
            <path d="M70.8108 0.390625H64.2891V24.0625H70.8108V0.390625Z" fill="#B1B1B1"/>
            <path d="M80.2011 6.95312H73.6016V24.1406H80.2011V6.95312Z" fill="#B1B1B1"/>
            <path d="M80.2011 0.390625H73.6016V4.92187H80.2011V0.390625Z" fill="#B1B1B1"/>
            <path d="M0 19.375L6.52174 18.75C6.75466 19.5312 7.14286 20.0781 7.6087 20.3906C8.07453 20.7031 9.70497 21.0156 10.559 21.0156C11.413 21.0156 11.1025 20.7031 11.5683 20.3906C11.9565 20.0781 12.1118 19.7656 12.1118 19.375C12.1118 18.9062 11.8789 18.5156 11.3354 18.2812C10.9472 18.125 10.0155 17.8906 8.54037 17.5781C6.28882 17.1875 4.65839 16.7969 3.80435 16.4844C2.95031 16.1719 2.17391 15.5469 1.5528 14.7656C0.931677 13.9844 0.621118 13.0469 0.621118 12.0312C0.621118 10.8594 0.931677 9.92187 1.63043 9.14062C2.25155 8.35937 3.18323 7.73438 4.34783 7.26563C5.51242 6.875 7.06522 6.64062 8.92857 6.64062C10.9472 6.64062 12.5 6.79688 13.4317 7.10938C14.441 7.42188 15.2174 7.89062 15.8385 8.51562C16.4596 9.14062 17.0031 10.0781 17.4689 11.1719L11.2578 11.7969C11.1025 11.25 10.8696 10.8594 10.4814 10.5469C9.93789 10.2344 9.39441 10 8.61801 10C7.91926 10 7.37578 10.1562 6.98758 10.3906C6.67702 10.625 6.52174 10.9375 6.52174 11.3281C6.52174 11.7187 6.75466 12.0312 7.14286 12.2656C7.53106 12.5 8.54037 12.6562 9.93789 12.8906C12.1118 13.125 13.7422 13.5156 14.7516 13.9062C15.8385 14.375 16.6149 15 17.1584 15.7812C17.7019 16.5625 18.0124 17.5 18.0124 18.5156C18.0124 19.5312 17.7019 20.4687 17.1584 21.4062C16.5373 22.3437 15.6056 23.125 14.3634 23.6719C13.1211 24.2187 11.3354 24.5312 9.16149 24.5312C6.0559 24.5312 3.80435 24.0625 2.48447 23.2031C1.24224 22.2656 0.388199 21.0156 0 19.375Z" fill="#B01736"/>
            <path d="M21.8947 22.4219C23.6027 23.8281 25.7766 24.5312 28.5717 24.5312C31.6773 24.5312 34.0841 23.6719 35.7922 22.0312C37.5002 20.3125 38.4319 18.2031 38.4319 15.5469C38.4319 13.2031 37.7332 11.25 36.3356 9.60938C34.6276 7.57813 31.9878 6.64062 28.5717 6.64062C25.5437 6.64062 23.2145 7.5 21.4288 9.21875C19.6431 10.9375 18.7891 13.0469 18.7891 15.7031C18.7891 18.3594 19.876 20.625 21.8947 22.4219ZM26.3201 12.1094C26.9412 11.3281 27.7176 11.0156 28.7269 11.0156C29.6586 11.0156 30.3574 11.4062 30.9785 12.1094C31.5996 12.8125 31.9102 13.9844 31.9102 15.4687C31.9102 17.1094 31.5996 18.2812 30.9785 18.9844C30.3574 19.6875 29.581 20.0781 28.6493 20.0781C27.7176 20.0781 26.9412 19.6875 26.3201 18.9844C25.699 18.2031 25.3884 17.1094 25.3884 15.5469C25.3884 13.9844 25.699 12.8125 26.3201 12.1094Z" fill="#B01736"/>
            <path d="M47.2088 6.95312H50.3144V11.7969H47.2088V24.1406H40.6095V11.7969H38.125V6.95312H40.6095V6.17187C40.6095 5.46875 40.6871 4.6875 40.8424 3.82812C40.9977 2.96875 41.3082 2.26562 41.6964 1.79687C42.1623 1.25 42.7834 0.78125 43.4821 0.46875C44.2585 0.15625 45.3455 0 46.743 0C47.9076 0 49.538 0.15625 51.7896 0.390625L51.0132 4.375C50.2368 4.21875 49.6157 4.21875 49.0722 4.21875C48.4511 4.21875 48.0629 4.29688 47.83 4.53125C47.5971 4.6875 47.4418 5 47.3641 5.39062C47.2865 5.625 47.2088 6.17187 47.2088 6.95312Z" fill="#B01736"/>
            <path d="M59.0067 11.7969V17.8906C59.0067 18.5938 59.0843 19.1406 59.2396 19.375C59.4725 19.7656 59.8607 19.9219 60.3266 19.9219C60.7924 19.9219 61.4912 19.7656 62.3452 19.5312L62.811 24.0625C61.1806 24.4531 59.7055 24.6094 58.3079 24.6094C56.6775 24.6094 55.5129 24.375 54.7365 23.9844C53.9601 23.5938 53.4166 22.8906 53.0284 22.0312C52.6402 21.1719 52.485 19.7656 52.485 17.8906V11.875H50.0781V6.95312H52.485V3.82812L59.0067 0.390625V6.95312V11.7969Z" fill="#B01736"/>
            <path d="M82.687 6.95312H88.8206V9.76562C89.7522 8.59375 90.6839 7.8125 91.6156 7.34375C92.5473 6.875 93.7119 6.64062 95.0317 6.64062C96.8175 6.64062 98.2926 7.1875 99.3019 8.28125C100.311 9.375 100.855 11.0156 100.855 13.2812V24.2188H94.2553V14.6875C94.2553 13.5937 94.0224 12.8125 93.6342 12.4219C93.246 11.9531 92.7025 11.7188 91.9261 11.7188C91.1497 11.7188 90.5286 12.0313 89.9852 12.6563C89.5193 13.2813 89.2088 14.375 89.2088 15.9375V24.2188H82.6094V6.95312H82.687Z" fill="#B1B1B1"/>
            <path d="M121.97 16.4062C121.97 14.1406 121.582 12.2656 120.884 10.8594C120.107 9.45312 119.098 8.35937 117.623 7.57812C116.225 6.79687 114.284 6.48438 111.877 6.48438C108.849 6.48438 106.52 7.34375 104.812 8.98437C103.104 10.625 102.25 12.8125 102.25 15.4688C102.25 17.3438 102.638 18.9844 103.492 20.3906C104.346 21.7969 105.433 22.8125 106.675 23.4375C107.995 24.0625 109.781 24.375 112.033 24.375C114.595 24.375 116.613 23.9844 118.011 23.2812C119.408 22.5 120.573 21.3281 121.582 19.6094L115.138 18.9844C114.75 19.5312 114.362 19.8438 113.974 20.0781C113.43 20.3906 112.809 20.5469 112.188 20.5469C111.179 20.5469 110.402 20.1562 109.703 19.4531C109.238 18.9062 109.005 18.125 108.849 17.1094H121.893V16.4062H121.97ZM108.927 14.0625C109.005 13.0469 109.315 12.2656 109.703 11.7187C110.325 10.8594 111.179 10.4688 112.188 10.4688C113.12 10.4688 113.818 10.7812 114.362 11.3281C114.905 11.875 115.216 12.8125 115.371 14.0625H108.927Z" fill="#B1B1B1"/>
            <path d="M30.0475 2.65557C37.5009 3.43682 40.5288 4.13995 47.5164 6.01495C53.3394 7.57745 62.5785 6.87432 62.5785 6.87432V11.7181C58.9295 12.1868 51.0878 12.0306 44.5661 9.60868C32.8425 5.38995 27.563 4.53057 21.3518 4.06182C12.8114 3.43682 2.71826 4.76495 2.71826 4.76495L2.64062 3.90557C2.64062 3.90557 17.2369 1.32745 30.0475 2.65557Z" fill="#B1B1B1"/>
            <path d="M121.741 3.59375H122.052C122.518 3.59375 122.595 3.35937 122.595 3.20312C122.595 2.89062 122.13 2.89062 122.052 2.89062H121.741V3.59375ZM122.285 2.34375C122.984 2.34375 123.294 2.73438 123.294 3.125C123.294 3.51562 122.984 3.75 122.673 3.82812C122.828 3.90625 122.984 4.0625 122.984 4.14062L123.449 5.3125H122.673L122.285 4.375C122.285 4.29687 122.13 4.14062 121.897 4.14062H121.741V5.3125H120.965V2.34375H122.285ZM122.052 6.09375C123.294 6.09375 124.303 5.07812 124.303 3.82812C124.303 2.57813 123.294 1.5625 122.052 1.5625C120.81 1.5625 119.8 2.57813 119.8 3.82812C119.8 5.07812 120.81 6.09375 122.052 6.09375ZM122.052 0.859375C123.682 0.859375 125.002 2.1875 125.002 3.82812C125.002 5.46875 123.682 6.79687 122.052 6.79687C120.421 6.79687 119.102 5.46875 119.102 3.82812C119.179 2.1875 120.421 0.859375 122.052 0.859375Z" fill="#B1B1B1"/>
            </g>
            <defs>
            <clipPath id="clip0_8370_2047">
            <rect width="125" height="25" fill="white"/>
            </clipPath>
            </defs>
          </svg>
          <nav class="header__nav">
            <a class="header__nav-link" href="#" class="">Облачные решения</a>
            <a class="header__nav-link" href="#">Кибербезопасность</a>
            <a class="header__nav-link" href="#">Импортозамещение</a>
            <a class="header__nav-link" href="#">Цифровая трансформация</a>
          </nav>
     
    `;
  return header;
}
