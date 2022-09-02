/*
 * Copyright 2022 The Yorkie Authors. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';

export function Footer() {
  return (
    <footer className="flex justify-center items-center h-12 border-t border-solid border-gray-200">
      <svg width="60" height="16" viewBox="0 0 60 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M22.1172 4.21149L24.8819 9.13403V11.8145H26.2041V9.12388L28.9688 4.21149H27.5865L25.7534 7.59071L25.533 8.03746L25.3126 7.59071L23.4995 4.21149H22.1172Z"
          fill="#514C49"
        />
        <path
          d="M31.8816 5.97632C30.2688 5.97632 29.0768 7.18458 29.0768 8.97158C29.0768 10.7586 30.2688 11.9668 31.8816 11.9668C33.4743 11.9668 34.6863 10.7586 34.6863 8.97158C34.6863 7.18458 33.4743 5.97632 31.8816 5.97632ZM31.8816 10.8703C31.0402 10.8703 30.359 10.0986 30.359 8.97158C30.359 7.84455 31.0402 7.07289 31.8816 7.07289C32.723 7.07289 33.4042 7.84455 33.4042 8.97158C33.4042 10.0986 32.723 10.8703 31.8816 10.8703Z"
          fill="#514C49"
        />
        <path
          d="M39.5434 5.98648C38.8923 5.98648 38.2412 6.15908 37.7704 6.60583V6.12862H36.4882V11.8145H37.7704V9.46909C37.7704 8.91066 37.8105 8.55529 37.8606 8.34207C38.0309 7.60087 38.702 7.0932 39.5434 7.13381V5.98648Z"
          fill="#514C49"
        />
        <path
          d="M44.9337 11.8145H46.4764L43.9521 8.79897L46.2259 6.12862H44.6833L42.6799 8.56544V4.24567H41.3977V11.8145H42.6799V9.07311L44.9337 11.8145Z"
          fill="#514C49"
        />
        <path
          d="M49.0453 6.12862H47.7632V11.8145H49.0453V6.12862ZM47.7031 5.49911H49.1054V4.07764H47.7031V5.49911Z"
          fill="#514C49"
        />
        <path
          d="M55.1602 9.82446C54.8397 10.4337 54.2387 10.8703 53.5575 10.8703C52.7862 10.8703 52.2152 10.2306 52.105 9.45894H56.1719V8.83958C56.1719 7.17443 55.04 5.97632 53.4673 5.97632C51.9648 5.97632 50.7628 7.18458 50.7628 8.97158C50.7628 10.7586 51.8947 11.9668 53.5575 11.9668C54.5993 11.9668 55.5309 11.4084 56.0918 10.5454L55.1602 9.82446ZM52.095 8.38268C52.2553 7.57041 52.7862 7.07289 53.4673 7.07289C54.1986 7.07289 54.6994 7.62117 54.8497 8.38268H52.095Z"
          fill="#514C49"
        />
        <path
          d="M8.62881 5.17633L11.3986 9.19881C11.5737 9.45318 11.9196 9.51579 12.1711 9.3387C12.2251 9.30071 12.2719 9.25335 12.3095 9.19881L15.0792 5.17633C15.4295 4.66759 15.3056 3.96805 14.8026 3.61388C14.6165 3.48287 14.3952 3.4126 14.1684 3.4126H9.53964C8.92663 3.4126 8.42969 3.91513 8.42969 4.53504C8.42977 4.76432 8.49925 4.98811 8.62881 5.17633Z"
          fill="#514C49"
        />
        <path
          d="M12.9835 12.4401C13.1805 12.5537 13.4072 12.6035 13.6331 12.583L18.6993 12.1207C19.1063 12.0836 19.4065 11.7198 19.3698 11.3082C19.3679 11.2865 19.365 11.2649 19.3611 11.2434C19.2089 10.3847 18.9094 9.55956 18.476 8.80524C18.0427 8.05093 17.4823 7.37898 16.8201 6.8199C16.5064 6.55504 16.0398 6.59747 15.7779 6.91477C15.7641 6.93147 15.751 6.94882 15.7387 6.96673L12.8319 11.1882C12.7023 11.3764 12.6328 11.6002 12.6328 11.8295V11.8156C12.6328 11.9439 12.6654 12.0702 12.7277 12.1821C12.793 12.2921 12.8852 12.3834 12.9956 12.4469"
          fill="#C2BDBA"
        />
        <path
          d="M10.9997 12.126C10.9344 12.2608 10.8307 12.3725 10.7018 12.4468L10.7175 12.4378C10.5206 12.5514 10.2938 12.6012 10.068 12.5806L5.00171 12.1184C4.98025 12.1164 4.95887 12.1135 4.93765 12.1097C4.5354 12.0367 4.26774 11.6479 4.33986 11.2411C4.49208 10.3823 4.79165 9.55725 5.22493 8.80285C5.65821 8.04845 6.21865 7.37667 6.88089 6.8175C6.89741 6.80355 6.91456 6.79032 6.93227 6.77781C7.26766 6.54167 7.72878 6.62517 7.96237 6.96433L10.8692 11.1858C10.9987 11.3741 11.0682 11.5979 11.0682 11.8272V11.8089C11.0682 11.9589 11.0236 12.1055 10.9403 12.2295"
          fill="#C2BDBA"
        />
      </svg>
    </footer>
  );
}