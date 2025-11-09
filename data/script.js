// svg icons
const ICONS = {
  EXIT: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.9908 7.82251C16.2897 7.5357 16.7644 7.54547 17.0512 7.84433L20.541 11.4807C20.8195 11.7709 20.8195 12.2291 20.541 12.5193L17.0512 16.1557C16.7644 16.4545 16.2897 16.4643 15.9908 16.1775C15.692 15.8907 15.6822 15.4159 15.969 15.1171L18.2404 12.7502L11.2727 12.7502C10.8585 12.7502 10.5227 12.4144 10.5227 12.0002C10.5227 11.586 10.8585 11.2502 11.2727 11.2502L18.2408 11.2502L15.969 8.88295C15.6822 8.58409 15.692 8.10932 15.9908 7.82251Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.25 4C3.25 3.58579 3.58579 3.25 4 3.25H13.4545C13.8688 3.25 14.2045 3.58579 14.2045 4V7C14.2045 7.41421 13.8688 7.75 13.4545 7.75C13.0403 7.75 12.7045 7.41421 12.7045 7V4.75H4.75V19.25H12.7045V17C12.7045 16.5858 13.0403 16.25 13.4545 16.25C13.8688 16.25 14.2045 16.5858 14.2045 17V20C14.2045 20.4142 13.8688 20.75 13.4545 20.75H4C3.58579 20.75 3.25 20.4142 3.25 20V4Z" fill="currentColor"/>
</svg>`,
  MENU: `<svg viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
<path d="M19 3.32001H16C14.8954 3.32001 14 4.21544 14 5.32001V8.32001C14 9.42458 14.8954 10.32 16 10.32H19C20.1046 10.32 21 9.42458 21 8.32001V5.32001C21 4.21544 20.1046 3.32001 19 3.32001Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 3.32001H5C3.89543 3.32001 3 4.21544 3 5.32001V8.32001C3 9.42458 3.89543 10.32 5 10.32H8C9.10457 10.32 10 9.42458 10 8.32001V5.32001C10 4.21544 9.10457 3.32001 8 3.32001Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19 14.32H16C14.8954 14.32 14 15.2154 14 16.32V19.32C14 20.4246 14.8954 21.32 16 21.32H19C20.1046 21.32 21 20.4246 21 19.32V16.32C21 15.2154 20.1046 14.32 19 14.32Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 14.32H5C3.89543 14.32 3 15.2154 3 16.32V19.32C3 20.4246 3.89543 21.32 5 21.32H8C9.10457 21.32 10 20.4246 10 19.32V16.32C10 15.2154 9.10457 14.32 8 14.32Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
  NEXT: `<svg fill="currentColor" version="1.1" id="XMLID_287_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
  viewBox="0 0 24 24" xml:space="preserve" width="100%" height="100%">
<g id="next"><g><polygon points="6.8,23.7 5.4,22.3 15.7,12 5.4,1.7 6.8,0.3 18.5,12"/></g></g>
</svg>`,
  PREVIOUS: `<svg fill="currentColor" version="1.1" id="XMLID_54_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
  viewBox="0 0 24 24" xml:space="preserve" width="100%" height="100%">
<g id="previous"><g><polygon points="17.2,23.7 5.4,12 17.2,0.3 18.5,1.7 8.4,12 18.5,22.3"/></g></g>
</svg>`,
  POWER: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
<path d="M8 7.52771C6.7725 8.62635 6 10.2229 6 11.9999C6 15.3136 8.68629 17.9999 12 17.9999C15.3137 17.9999 18 15.3136 18 11.9999C18 10.2229 17.2275 8.62635 16 7.52771" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
<path d="M12 6V13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
  VOLUME_DOWN: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
<path d="M16 12.0001H22M4.6 9.00009H5.5012C6.05213 9.00009 6.32759 9.00009 6.58285 8.93141C6.80903 8.87056 7.02275 8.77046 7.21429 8.63566C7.43047 8.48353 7.60681 8.27191 7.95951 7.84868L10.5854 4.69758C11.0211 4.17476 11.2389 3.91335 11.4292 3.88614C11.594 3.86258 11.7597 3.92258 11.8712 4.04617C12 4.18889 12 4.52917 12 5.20973V18.7904C12 19.471 12 19.8113 11.8712 19.954C11.7597 20.0776 11.594 20.1376 11.4292 20.114C11.239 20.0868 11.0211 19.8254 10.5854 19.3026L7.95951 16.1515C7.60681 15.7283 7.43047 15.5166 7.21429 15.3645C7.02275 15.2297 6.80903 15.1296 6.58285 15.0688C6.32759 15.0001 6.05213 15.0001 5.5012 15.0001H4.6C4.03995 15.0001 3.75992 15.0001 3.54601 14.8911C3.35785 14.7952 3.20487 14.6422 3.10899 14.4541C3 14.2402 3 13.9601 3 13.4001V10.6001C3 10.04 3 9.76001 3.10899 9.54609C3.20487 9.35793 3.35785 9.20495 3.54601 9.10908C3.75992 9.00009 4.03995 9.00009 4.6 9.00009Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
  VOLUME_UP: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
<path d="M16 12.0001H22M19 9.00009V15.0001M4.6 9.00009H5.5012C6.05213 9.00009 6.32759 9.00009 6.58285 8.93141C6.80903 8.87056 7.02275 8.77046 7.21429 8.63566C7.43047 8.48353 7.60681 8.27191 7.95951 7.84868L10.5854 4.69758C11.0211 4.17476 11.2389 3.91335 11.4292 3.88614C11.594 3.86258 11.7597 3.92258 11.8712 4.04617C12 4.18889 12 4.52917 12 5.20973V18.7904C12 19.471 12 19.8113 11.8712 19.954C11.7597 20.0776 11.594 20.1376 11.4292 20.114C11.239 20.0868 11.0211 19.8254 10.5854 19.3026L7.95951 16.1515C7.60681 15.7283 7.43047 15.5166 7.21429 15.3645C7.02275 15.2297 6.80903 15.1296 6.58285 15.0688C6.32759 15.0001 6.05213 15.0001 5.5012 15.0001H4.6C4.03995 15.0001 3.75992 15.0001 3.54601 14.8911C3.35785 14.7952 3.20487 14.6422 3.10899 14.4541C3 14.2402 3 13.9601 3 13.4001V10.6001C3 10.04 3 9.76001 3.10899 9.54609C3.20487 9.35793 3.35785 9.20495 3.54601 9.10908C3.75992 9.00009 4.03995 9.00009 4.6 9.00009Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
  FAN: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor">
  <path d="M12,11a1,1,0,1,0,1,1,1,1,0,0,0-1-1m.5-9C17,2,17.1,5.57,14.73,6.75a3.36,3.36,0,0,0-1.62,2.47,3.17,3.17,0,0,1,1.23.91C18,8.13,22,8.92,22,12.5c0,4.5-3.58,4.6-4.75,2.23a3.44,3.44,0,0,0-2.5-1.62,3.24,3.24,0,0,1-.91,1.23c2,3.69,1.2,7.66-2.38,7.66C7,22,6.89,18.42,9.26,17.24a3.46,3.46,0,0,0,1.62-2.45,3,3,0,0,1-1.25-.92C5.94,15.85,2,15.07,2,11.5,2,7,5.54,6.89,6.72,9.26A3.39,3.39,0,0,0,9.2,10.87a2.91,2.91,0,0,1,.92-1.22C8.13,6,8.92,2,12.48,2Z"/>
</svg>`,
  SNOW: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
<path d="M14.4865 6.58803C14.8113 6.33092 14.8661 5.85922 14.609 5.53447C14.3519 5.20971 13.8802 5.15486 13.5555 5.41197L14.4865 6.58803ZM11.5345 7.01197C11.2097 7.26908 11.1549 7.74078 11.412 8.06553C11.6691 8.39029 12.1408 8.44514 12.4655 8.18803L11.5345 7.01197ZM11.5345 8.18803C11.8592 8.44514 12.3309 8.39029 12.588 8.06553C12.8451 7.74078 12.7903 7.26908 12.4655 7.01197L11.5345 8.18803ZM10.4445 5.41197C10.1198 5.15486 9.64808 5.20971 9.39097 5.53447C9.13386 5.85922 9.18871 6.33092 9.51347 6.58803L10.4445 5.41197ZM11.25 7.6C11.25 8.01421 11.5858 8.35 12 8.35C12.4142 8.35 12.75 8.01421 12.75 7.6H11.25ZM12.75 4C12.75 3.58579 12.4142 3.25 12 3.25C11.5858 3.25 11.25 3.58579 11.25 4H12.75ZM12.75 7.6C12.75 7.18579 12.4142 6.85 12 6.85C11.5858 6.85 11.25 7.18579 11.25 7.6H12.75ZM11.25 16.4C11.25 16.8142 11.5858 17.15 12 17.15C12.4142 17.15 12.75 16.8142 12.75 16.4H11.25ZM9.51347 17.412C9.18871 17.6691 9.13386 18.1408 9.39097 18.4655C9.64808 18.7903 10.1198 18.8451 10.4445 18.588L9.51347 17.412ZM12.4655 16.988C12.7903 16.7309 12.8451 16.2592 12.588 15.9345C12.3309 15.6097 11.8592 15.5549 11.5345 15.812L12.4655 16.988ZM12.4655 15.812C12.1408 15.5549 11.6691 15.6097 11.412 15.9345C11.1549 16.2592 11.2097 16.7309 11.5345 16.988L12.4655 15.812ZM13.5555 18.588C13.8802 18.8451 14.3519 18.7903 14.609 18.4655C14.8661 18.1408 14.8113 17.6691 14.4865 17.412L13.5555 18.588ZM12.75 16.4C12.75 15.9858 12.4142 15.65 12 15.65C11.5858 15.65 11.25 15.9858 11.25 16.4H12.75ZM11.25 20C11.25 20.4142 11.5858 20.75 12 20.75C12.4142 20.75 12.75 20.4142 12.75 20H11.25ZM6.01052 12.5685C5.62419 12.4191 5.18989 12.6112 5.04049 12.9975C4.89108 13.3838 5.08315 13.8181 5.46948 13.9675L6.01052 12.5685ZM7.87948 14.8995C8.26581 15.0489 8.70011 14.8568 8.84951 14.4705C8.99892 14.0842 8.80685 13.6499 8.42052 13.5005L7.87948 14.8995ZM8.89126 14.3142C8.95432 13.9048 8.67356 13.5218 8.26417 13.4587C7.85479 13.3957 7.4718 13.6764 7.40874 14.0858L8.89126 14.3142ZM7.01874 16.6178C6.95568 17.0272 7.23644 17.4102 7.64583 17.4733C8.05521 17.5363 8.4382 17.2556 8.50126 16.8462L7.01874 16.6178ZM8.5221 14.8512C8.88174 14.6457 9.00669 14.1875 8.80118 13.8279C8.59567 13.4683 8.13753 13.3433 7.7779 13.5488L8.5221 14.8512ZM4.6279 15.3488C4.26826 15.5543 4.14331 16.0125 4.34882 16.3721C4.55433 16.7317 5.01247 16.8567 5.3721 16.6512L4.6279 15.3488ZM7.7779 13.5488C7.41826 13.7543 7.29331 14.2125 7.49882 14.5721C7.70433 14.9317 8.16247 15.0567 8.5221 14.8512L7.7779 13.5488ZM16.2221 10.4512C16.5817 10.2457 16.7067 9.78753 16.5012 9.4279C16.2957 9.06826 15.8375 8.94331 15.4779 9.14882L16.2221 10.4512ZM17.9895 11.4315C18.3758 11.5809 18.8101 11.3888 18.9595 11.0025C19.1089 10.6162 18.9168 10.1819 18.5305 10.0325L17.9895 11.4315ZM16.1205 9.10049C15.7342 8.95108 15.2999 9.14315 15.1505 9.52948C15.0011 9.91581 15.1932 10.3501 15.5795 10.4995L16.1205 9.10049ZM15.1087 9.68582C15.0457 10.0952 15.3264 10.4782 15.7358 10.5413C16.1452 10.6043 16.5282 10.3236 16.5913 9.91418L15.1087 9.68582ZM16.9813 7.38217C17.0443 6.97279 16.7636 6.5898 16.3542 6.52674C15.9448 6.46368 15.5618 6.74444 15.4987 7.15383L16.9813 7.38217ZM15.4779 9.14882C15.1183 9.35432 14.9933 9.81247 15.1988 10.1721C15.4043 10.5317 15.8625 10.6567 16.2221 10.4512L15.4779 9.14882ZM19.3721 8.65118C19.7317 8.44567 19.8567 7.98753 19.6512 7.6279C19.4457 7.26826 18.9875 7.14331 18.6279 7.34882L19.3721 8.65118ZM5.46948 10.0325C5.08315 10.1819 4.89108 10.6162 5.04049 11.0025C5.18989 11.3888 5.62419 11.5809 6.01052 11.4315L5.46948 10.0325ZM8.42052 10.4995C8.80685 10.3501 8.99892 9.91581 8.84951 9.52948C8.70011 9.14315 8.26581 8.95108 7.87948 9.10049L8.42052 10.4995ZM7.40874 9.91418C7.4718 10.3236 7.85479 10.6043 8.26417 10.5413C8.67356 10.4782 8.95432 10.0952 8.89126 9.68582L7.40874 9.91418ZM8.50126 7.15383C8.4382 6.74444 8.05521 6.46368 7.64583 6.52674C7.23644 6.5898 6.95568 6.97279 7.01874 7.38217L8.50126 7.15383ZM7.7779 10.4512C8.13753 10.6567 8.59567 10.5317 8.80118 10.1721C9.00669 9.81247 8.88174 9.35432 8.5221 9.14882L7.7779 10.4512ZM5.3721 7.34882C5.01247 7.14331 4.55433 7.26826 4.34882 7.6279C4.14331 7.98753 4.26826 8.44567 4.6279 8.65118L5.3721 7.34882ZM8.5221 9.14882C8.16247 8.94331 7.70433 9.06826 7.49882 9.4279C7.29331 9.78753 7.41826 10.2457 7.7779 10.4512L8.5221 9.14882ZM15.4779 14.8512C15.8375 15.0567 16.2957 14.9317 16.5012 14.5721C16.7067 14.2125 16.5817 13.7543 16.2221 13.5488L15.4779 14.8512ZM18.5305 13.9675C18.9168 13.8181 19.1089 13.3838 18.9595 12.9975C18.8101 12.6112 18.3758 12.4191 17.9895 12.5685L18.5305 13.9675ZM15.5795 13.5005C15.1932 13.6499 15.0011 14.0842 15.1505 14.4705C15.2999 14.8568 15.7342 15.0489 16.1205 14.8995L15.5795 13.5005ZM16.5913 14.0858C16.5282 13.6764 16.1452 13.3957 15.7358 13.4587C15.3264 13.5218 15.0457 13.9048 15.1087 14.3142L16.5913 14.0858ZM15.4987 16.8462C15.5618 17.2556 15.9448 17.5363 16.3542 17.4733C16.7636 17.4102 17.0443 17.0272 16.9813 16.6178L15.4987 16.8462ZM16.2221 13.5488C15.8625 13.3433 15.4043 13.4683 15.1988 13.8279C14.9933 14.1875 15.1183 14.6457 15.4779 14.8512L16.2221 13.5488ZM18.6279 16.6512C18.9875 16.8567 19.4457 16.7317 19.6512 16.3721C19.8567 16.0125 19.7317 15.5543 19.3721 15.3488L18.6279 16.6512ZM13.5555 5.41197L11.5345 7.01197L12.4655 8.18803L14.4865 6.58803L13.5555 5.41197ZM12.4655 7.01197L10.4445 5.41197L9.51347 6.58803L11.5345 8.18803L12.4655 7.01197ZM12.75 7.6V4H11.25V7.6H12.75ZM11.25 7.6V16.4H12.75V7.6H11.25ZM10.4445 18.588L12.4655 16.988L11.5345 15.812L9.51347 17.412L10.4445 18.588ZM11.5345 16.988L13.5555 18.588L14.4865 17.412L12.4655 15.812L11.5345 16.988ZM11.25 16.4V20H12.75V16.4H11.25ZM5.46948 13.9675L7.87948 14.8995L8.42052 13.5005L6.01052 12.5685L5.46948 13.9675ZM7.40874 14.0858L7.01874 16.6178L8.50126 16.8462L8.89126 14.3142L7.40874 14.0858ZM7.7779 13.5488L4.6279 15.3488L5.3721 16.6512L8.5221 14.8512L7.7779 13.5488ZM8.5221 14.8512L16.2221 10.4512L15.4779 9.14882L7.7779 13.5488L8.5221 14.8512ZM18.5305 10.0325L16.1205 9.10049L15.5795 10.4995L17.9895 11.4315L18.5305 10.0325ZM16.5913 9.91418L16.9813 7.38217L15.4987 7.15383L15.1087 9.68582L16.5913 9.91418ZM16.2221 10.4512L19.3721 8.65118L18.6279 7.34882L15.4779 9.14882L16.2221 10.4512ZM6.01052 11.4315L8.42052 10.4995L7.87948 9.10049L5.46948 10.0325L6.01052 11.4315ZM8.89126 9.68582L8.50126 7.15383L7.01874 7.38217L7.40874 9.91418L8.89126 9.68582ZM8.5221 9.14882L5.3721 7.34882L4.6279 8.65118L7.7779 10.4512L8.5221 9.14882ZM7.7779 10.4512L15.4779 14.8512L16.2221 13.5488L8.5221 9.14882L7.7779 10.4512ZM17.9895 12.5685L15.5795 13.5005L16.1205 14.8995L18.5305 13.9675L17.9895 12.5685ZM15.1087 14.3142L15.4987 16.8462L16.9813 16.6178L16.5913 14.0858L15.1087 14.3142ZM15.4779 14.8512L18.6279 16.6512L19.3721 15.3488L16.2221 13.5488L15.4779 14.8512Z" fill="currentColor"/>
</svg>`,
  MINUS: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
<path d="M6 12L18 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
  PLUS: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
<path d="M6 12H18M12 6V18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
SETTINGS: `<svg width="80%" height="80%" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 8.00002C9.79085 8.00002 7.99999 9.79088 7.99999 12C7.99999 14.2092 9.79085 16 12 16C14.2091 16 16 14.2092 16 12C16 9.79088 14.2091 8.00002 12 8.00002ZM9.99999 12C9.99999 10.8955 10.8954 10 12 10C13.1046 10 14 10.8955 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 9.99999 13.1046 9.99999 12Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 8.00002C9.79085 8.00002 7.99999 9.79088 7.99999 12C7.99999 14.2092 9.79085 16 12 16C14.2091 16 16 14.2092 16 12C16 9.79088 14.2091 8.00002 12 8.00002ZM9.99999 12C9.99999 10.8955 10.8954 10 12 10C13.1046 10 14 10.8955 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 9.99999 13.1046 9.99999 12Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.7673 1.01709C10.9925 0.999829 11.2454 0.99993 11.4516 1.00001L12.5484 1.00001C12.7546 0.99993 13.0075 0.999829 13.2327 1.01709C13.4989 1.03749 13.8678 1.08936 14.2634 1.26937C14.7635 1.49689 15.1915 1.85736 15.5007 2.31147C15.7454 2.67075 15.8592 3.0255 15.9246 3.2843C15.9799 3.50334 16.0228 3.75249 16.0577 3.9557L16.1993 4.77635L16.2021 4.77788C16.2369 4.79712 16.2715 4.81659 16.306 4.8363L16.3086 4.83774L17.2455 4.49865C17.4356 4.42978 17.6693 4.34509 17.8835 4.28543C18.1371 4.2148 18.4954 4.13889 18.9216 4.17026C19.4614 4.20998 19.9803 4.39497 20.4235 4.70563C20.7734 4.95095 21.0029 5.23636 21.1546 5.4515C21.2829 5.63326 21.4103 5.84671 21.514 6.02029L22.0158 6.86003C22.1256 7.04345 22.2594 7.26713 22.3627 7.47527C22.4843 7.7203 22.6328 8.07474 22.6777 8.52067C22.7341 9.08222 22.6311 9.64831 22.3803 10.1539C22.1811 10.5554 21.9171 10.8347 21.7169 11.0212C21.5469 11.1795 21.3428 11.3417 21.1755 11.4746L20.5 12L21.1755 12.5254C21.3428 12.6584 21.5469 12.8205 21.7169 12.9789C21.9171 13.1653 22.1811 13.4446 22.3802 13.8461C22.631 14.3517 22.7341 14.9178 22.6776 15.4794C22.6328 15.9253 22.4842 16.2797 22.3626 16.5248C22.2593 16.7329 22.1255 16.9566 22.0158 17.14L21.5138 17.9799C21.4102 18.1535 21.2828 18.3668 21.1546 18.5485C21.0028 18.7637 20.7734 19.0491 20.4234 19.2944C19.9803 19.6051 19.4613 19.7901 18.9216 19.8298C18.4954 19.8612 18.1371 19.7852 17.8835 19.7146C17.6692 19.6549 17.4355 19.5703 17.2454 19.5014L16.3085 19.1623L16.306 19.1638C16.2715 19.1835 16.2369 19.2029 16.2021 19.2222L16.1993 19.2237L16.0577 20.0443C16.0228 20.2475 15.9799 20.4967 15.9246 20.7157C15.8592 20.9745 15.7454 21.3293 15.5007 21.6886C15.1915 22.1427 14.7635 22.5032 14.2634 22.7307C13.8678 22.9107 13.4989 22.9626 13.2327 22.983C13.0074 23.0002 12.7546 23.0001 12.5484 23H11.4516C11.2454 23.0001 10.9925 23.0002 10.7673 22.983C10.5011 22.9626 10.1322 22.9107 9.73655 22.7307C9.23648 22.5032 8.80849 22.1427 8.49926 21.6886C8.25461 21.3293 8.14077 20.9745 8.07542 20.7157C8.02011 20.4967 7.97723 20.2475 7.94225 20.0443L7.80068 19.2237L7.79791 19.2222C7.7631 19.2029 7.72845 19.1835 7.69396 19.1637L7.69142 19.1623L6.75458 19.5014C6.5645 19.5702 6.33078 19.6549 6.11651 19.7146C5.86288 19.7852 5.50463 19.8611 5.07841 19.8298C4.53866 19.7901 4.01971 19.6051 3.57654 19.2944C3.2266 19.0491 2.99714 18.7637 2.84539 18.5485C2.71718 18.3668 2.58974 18.1534 2.4861 17.9798L1.98418 17.14C1.87447 16.9566 1.74067 16.7329 1.63737 16.5248C1.51575 16.2797 1.36719 15.9253 1.32235 15.4794C1.26588 14.9178 1.36897 14.3517 1.61976 13.8461C1.81892 13.4446 2.08289 13.1653 2.28308 12.9789C2.45312 12.8205 2.65717 12.6584 2.82449 12.5254L3.47844 12.0054V11.9947L2.82445 11.4746C2.65712 11.3417 2.45308 11.1795 2.28304 11.0212C2.08285 10.8347 1.81888 10.5554 1.61972 10.1539C1.36893 9.64832 1.26584 9.08224 1.3223 8.52069C1.36714 8.07476 1.51571 7.72032 1.63732 7.47528C1.74062 7.26715 1.87443 7.04347 1.98414 6.86005L2.48605 6.02026C2.58969 5.84669 2.71714 5.63326 2.84534 5.45151C2.9971 5.23637 3.22655 4.95096 3.5765 4.70565C4.01966 4.39498 4.53862 4.20999 5.07837 4.17027C5.50458 4.1389 5.86284 4.21481 6.11646 4.28544C6.33072 4.34511 6.56444 4.4298 6.75451 4.49867L7.69141 4.83775L7.69394 4.8363C7.72844 4.8166 7.7631 4.79712 7.79791 4.77788L7.80068 4.77635L7.94225 3.95571C7.97723 3.7525 8.02011 3.50334 8.07542 3.2843C8.14077 3.0255 8.25461 2.67075 8.49926 2.31147C8.80849 1.85736 9.23648 1.49689 9.73655 1.26937C10.1322 1.08936 10.5011 1.03749 10.7673 1.01709ZM14.0938 4.3363C14.011 3.85634 13.9696 3.61637 13.8476 3.43717C13.7445 3.2858 13.6019 3.16564 13.4352 3.0898C13.2378 3.00002 12.9943 3.00002 12.5073 3.00002H11.4927C11.0057 3.00002 10.7621 3.00002 10.5648 3.0898C10.3981 3.16564 10.2555 3.2858 10.1524 3.43717C10.0304 3.61637 9.98895 3.85634 9.90615 4.3363L9.75012 5.24064C9.69445 5.56333 9.66662 5.72467 9.60765 5.84869C9.54975 5.97047 9.50241 6.03703 9.40636 6.13166C9.30853 6.22804 9.12753 6.3281 8.76554 6.52822C8.73884 6.54298 8.71227 6.55791 8.68582 6.57302C8.33956 6.77078 8.16643 6.86966 8.03785 6.90314C7.91158 6.93602 7.83293 6.94279 7.70289 6.93196C7.57049 6.92094 7.42216 6.86726 7.12551 6.7599L6.11194 6.39308C5.66271 6.2305 5.43809 6.14921 5.22515 6.16488C5.04524 6.17811 4.87225 6.23978 4.72453 6.34333C4.5497 6.46589 4.42715 6.67094 4.18206 7.08103L3.72269 7.84965C3.46394 8.2826 3.33456 8.49907 3.31227 8.72078C3.29345 8.90796 3.32781 9.09665 3.41141 9.26519C3.51042 9.4648 3.7078 9.62177 4.10256 9.9357L4.82745 10.5122C5.07927 10.7124 5.20518 10.8126 5.28411 10.9199C5.36944 11.036 5.40583 11.1114 5.44354 11.2504C5.47844 11.379 5.47844 11.586 5.47844 12C5.47844 12.414 5.47844 12.621 5.44354 12.7497C5.40582 12.8887 5.36944 12.9641 5.28413 13.0801C5.20518 13.1875 5.07927 13.2876 4.82743 13.4879L4.10261 14.0643C3.70785 14.3783 3.51047 14.5352 3.41145 14.7349C3.32785 14.9034 3.29349 15.0921 3.31231 15.2793C3.33461 15.501 3.46398 15.7174 3.72273 16.1504L4.1821 16.919C4.4272 17.3291 4.54974 17.5342 4.72457 17.6567C4.8723 17.7603 5.04528 17.8219 5.2252 17.8352C5.43813 17.8508 5.66275 17.7695 6.11199 17.607L7.12553 17.2402C7.42216 17.1328 7.5705 17.0791 7.7029 17.0681C7.83294 17.0573 7.91159 17.064 8.03786 17.0969C8.16644 17.1304 8.33956 17.2293 8.68582 17.427C8.71228 17.4421 8.73885 17.4571 8.76554 17.4718C9.12753 17.6719 9.30853 17.772 9.40635 17.8684C9.50241 17.963 9.54975 18.0296 9.60765 18.1514C9.66662 18.2754 9.69445 18.4367 9.75012 18.7594L9.90615 19.6637C9.98895 20.1437 10.0304 20.3837 10.1524 20.5629C10.2555 20.7142 10.3981 20.8344 10.5648 20.9102C10.7621 21 11.0057 21 11.4927 21H12.5073C12.9943 21 13.2378 21 13.4352 20.9102C13.6019 20.8344 13.7445 20.7142 13.8476 20.5629C13.9696 20.3837 14.011 20.1437 14.0938 19.6637L14.2499 18.7594C14.3055 18.4367 14.3334 18.2754 14.3923 18.1514C14.4502 18.0296 14.4976 17.963 14.5936 17.8684C14.6915 17.772 14.8725 17.6719 15.2344 17.4718C15.2611 17.4571 15.2877 17.4421 15.3141 17.427C15.6604 17.2293 15.8335 17.1304 15.9621 17.0969C16.0884 17.064 16.167 17.0573 16.2971 17.0681C16.4295 17.0791 16.5778 17.1328 16.8744 17.2402L17.888 17.607C18.3372 17.7696 18.5619 17.8509 18.7748 17.8352C18.9547 17.8219 19.1277 17.7603 19.2754 17.6567C19.4502 17.5342 19.5728 17.3291 19.8179 16.919L20.2773 16.1504C20.536 15.7175 20.6654 15.501 20.6877 15.2793C20.7065 15.0921 20.6721 14.9034 20.5885 14.7349C20.4895 14.5353 20.2921 14.3783 19.8974 14.0643L19.1726 13.4879C18.9207 13.2876 18.7948 13.1875 18.7159 13.0801C18.6306 12.9641 18.5942 12.8887 18.5564 12.7497C18.5215 12.6211 18.5215 12.414 18.5215 12C18.5215 11.586 18.5215 11.379 18.5564 11.2504C18.5942 11.1114 18.6306 11.036 18.7159 10.9199C18.7948 10.8126 18.9207 10.7124 19.1725 10.5122L19.8974 9.9357C20.2922 9.62176 20.4896 9.46479 20.5886 9.26517C20.6722 9.09664 20.7065 8.90795 20.6877 8.72076C20.6654 8.49906 20.5361 8.28259 20.2773 7.84964L19.8179 7.08102C19.5728 6.67093 19.4503 6.46588 19.2755 6.34332C19.1277 6.23977 18.9548 6.1781 18.7748 6.16486C18.5619 6.14919 18.3373 6.23048 17.888 6.39307L16.8745 6.75989C16.5778 6.86725 16.4295 6.92093 16.2971 6.93195C16.167 6.94278 16.0884 6.93601 15.9621 6.90313C15.8335 6.86965 15.6604 6.77077 15.3142 6.57302C15.2877 6.55791 15.2611 6.54298 15.2345 6.52822C14.8725 6.3281 14.6915 6.22804 14.5936 6.13166C14.4976 6.03703 14.4502 5.97047 14.3923 5.84869C14.3334 5.72467 14.3055 5.56332 14.2499 5.24064L14.0938 4.3363Z" fill="currentColor"/>
</svg>`,
};

const TEMPLATES = {
  'TV': [
    'Power', 'Volume Up', 'Volume Down',
    'Next', 'Previous', 'Menu',
    '1', '2', '3',
    '4', '5', '6',
    '7', '8', '9',
    'Exit', '0'
  ],
  'AC': [
    'Power', 'Temp Up', 'Temp Down', 'Fan', 'Snow'
  ],
  'PROYEKTOR': ['Power', 'Source', 'Menu', 'Exit'],
};

// map tombol ke ikon
const BUTTON_TO_ICON_MAP = {
  'Power': ICONS.POWER,
  'Volume Up': ICONS.VOLUME_UP,
  'Volume Down': ICONS.VOLUME_DOWN,
  'Next': ICONS.NEXT,
  'Previous': ICONS.PREVIOUS,
  'Menu': ICONS.MENU,
  'Exit': ICONS.EXIT,
  'On': ICONS.POWER,
  'Off': ICONS.POWER,
  'Temp Up': ICONS.PLUS,
  'Temp Down': ICONS.MINUS,
  'Fan': ICONS.FAN,
  'Snow': ICONS.SNOW,
};

let currentDevice = null;
let currentButtons = [];
let selectedButtons = [];

// startup
window.addEventListener('load', () => {
  const settingsPlaceholder = document.getElementById('settings-button-placeholder');
  if (settingsPlaceholder) {
    settingsPlaceholder.innerHTML = `
      <button onclick="showWifiModal()" class="p-2 text-gray-600 hover:text-gray-900 cursor-pointer" title="Network Settings">
      <div class="w-8 h-8 flex items-center justify-center">${ICONS.SETTINGS}</div>
      </button>
    `;
  }

  navigate('home');
});

function goToLearningMode(deviceName, buttons) {
  currentDevice = deviceName;
  currentButtons = buttons;
  navigate('learning');
}

// navigasi halaman
function navigate(page) {
  const app = document.getElementById('app');
  app.innerHTML = '';
  if (page === 'home') app.innerHTML = pageHome();
  else if (page === 'learning') app.innerHTML = pageLearningMode();
  else if (page === 'remote') app.innerHTML = pageRemote();
}

// halaman utama
function pageHome() {
  const devices = JSON.parse(localStorage.getItem('devices') || '[]');

  return `

    <div class="mb-6">
      <h2 class="text-center text-xl font-semibold text-[#1A434E]">
        Daftar Perangkat
      </h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 justify-items-center">
      ${devices.map((d, i) => `
        <div onclick="showDeviceModal(${i})"
          class="bg-purple-100 text-center text-base font-medium text-[#1A434E] rounded-xl px-4 py-6 w-full h-32 shadow-sm cursor-pointer hover:scale-[1.02] transition flex items-center justify-center">
          ${d.name.length > 20 ? d.name.substring(0, 20) + '...' : d.name}
        </div>
      `).join('')}

      <button onclick="showAddModal()"
        class="border-2 border-dashed border-gray-500 hover:border-gray-300 rounded-xl w-full h-32 flex flex-col items-center justify-center text-gray-600 text-sm font-medium hover:bg-gray-50 transition cursor-pointer">
        <span class="text-2xl font-bold mb-1">+</span>
        Tambahkan Perangkat
      </button>
    </div>

    ${modalAddDevice()}
    ${modalDeviceDetail()}
    ${modalConfirmDelete()}
    ${modalButtonForm()}
    ${modalLearningGuide()}
    ${modalWifiSettings()}
  `;
}

function modalWifiSettings() {
  return `
    <div id="modalWifi" class="hidden fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div class="bg-white rounded-3xl p-6 w-80 shadow-lg relative text-[#1A434E]">
        <button onclick="hideWifiModal()" class="absolute right-4 top-3 text-2xl text-gray-500 hover:text-gray-700 cursor-pointer">×</button>
        <h3 class="text-lg font-semibold text-center mb-4">Pengaturan Jaringan</h3>

        <label class="block text-sm text-[#1A434E] mb-1">SSID (Nama Jaringan)</label>
        <input id="wifiSSID" type="text" placeholder="Masukkan SSID baru"
          class="w-full border rounded-lg px-3 py-2 mb-4" />

        <label class="block text-sm text-[#1A434E] mb-1">Password (min. 8 chars)</label>
        <input id="wifiPass" type="password" placeholder="Masukkan password baru"
          class="w-full border rounded-lg px-3 py-2 mb-4" />

        <button onclick="handleSaveWifi()" class="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition">
          Simpan dan Reboot
        </button>
      </div>
    </div>
  `;
}


// Tampilkan modal Wi-Fi dan isi dengan data saat ini
function showWifiModal() {
  document.getElementById('modalWifi').classList.remove('hidden');

  // Ambil data saat ini dari ESP32
  fetch('/get-wifi')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      document.getElementById('wifiSSID').value = data.ssid || '';
      document.getElementById('wifiPass').value = data.pass || '';
    })
    .catch(err => {
      console.error("Failed to fetch Wi-Fi settings:", err);
      alert('Tidak bisa memuat pengaturan jaringan saat ini.');
    });
}

// Sembunyikan modal Wi-Fi
function hideWifiModal() {
  document.getElementById('modalWifi').classList.add('hidden');
}

// Kirim data Wi-Fi baru ke ESP32
function handleSaveWifi() {
  const ssid = document.getElementById('wifiSSID').value;
  const pass = document.getElementById('wifiPass').value;

  if (!ssid || ssid.length < 1) {
    alert('SSID tidak bisa kosong.');
    return;
  }
  if (pass.length > 0 && pass.length < 8) {
    alert('Password harus minimal 8 karakter.');
    return;
  }

  const formData = new URLSearchParams();
  formData.append('ssid', ssid);
  formData.append('pass', pass);

  alert(`Pengaturan berhasil disimpan! Silahkan hubungkan ke jaringan baru: "${ssid}"`);
  hideWifiModal();

  fetch('/update-wifi', {
    method: 'POST',
    body: formData
  })
  .catch(err => {
    console.warn('Fetch failed (expected behavior during reboot):', err);
  });
}

// modal tambah device
function modalAddDevice() {
  const templates = ['KUSTOM', 'TV', 'AC', 'PROYEKTOR'];
  return `
    <div id="modalAdd" class="hidden fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div class="bg-white rounded-3xl p-6 w-80 shadow-lg relative">
        <button onclick="hideAddModal()" class="absolute right-4 top-3 text-2xl text-gray-500 hover:text-gray-700 cursor-pointer">×</button>
        <h3 class="text-lg font-semibold text-center text-[#1A434E] mb-4">Perangkat Baru</h3>

        <label class="block text-sm text-[#1A434E] mb-1">Gunakan Template</label>
        <select id="templateSelect" class="w-full border rounded-lg px-3 py-2 mb-4">
          ${templates.map(t => `<option value="${t}">${t}</option>`).join('')}
        </select>

        <label class="block text-sm text-[#1A434E] mb-1">Nama Perangkat</label>
        <input id="deviceNameInput" type="text" placeholder="Masukkan Nama Perangkat"
          class="w-full border rounded-lg px-3 py-2 mb-4" />

        <button onclick="showButtonForm()" class="w-full bg-[#1A434E] text-white py-2 rounded-lg font-medium hover:bg-[#14333c] transition">
          LANJUT
        </button>
      </div>
    </div>
  `;
}

function showAddModal() {
  document.getElementById('modalAdd').classList.remove('hidden');
}

function hideAddModal() {
  document.getElementById('modalAdd').classList.add('hidden');
}

// modal form tombol remote (multi-select)
function modalButtonForm() {
  return `
    <div id="modalButtons" class="hidden fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div class="bg-white rounded-3xl p-6 w-96 shadow-lg relative text-[#1A434E]">
        <button onclick="hideButtonForm()" class="absolute right-4 top-3 text-2xl text-gray-500 hover:text-gray-700 cursor-pointer">×</button>
        <h3 class="text-lg font-semibold text-center mb-4">Pilih Tombol Remote</h3>

        <div class="flex flex-wrap gap-2 mb-4" id="buttonList"></div>

        <div class="flex">
          <input id="newButtonInput" type="text" placeholder="Tambah tombol..."
            class="flex-grow border rounded-lg px-3 py-2 text-sm" />
          <button onclick="addNewButton()" class="ml-2 px-4 py-2 bg-[#1A434E] text-white rounded-lg hover:bg-[#14333c]">Tambah</button>
        </div>

        <div class="flex justify-end mt-6">
          <button onclick="goToLearningWithButtons()" class="px-4 py-2 rounded-lg bg-[#1A434E] text-white hover:bg-[#14333c]">
            LANJUT
          </button>
        </div>
      </div>
    </div>
  `;
}

function showButtonForm() {
  const name = document.getElementById('deviceNameInput').value.trim();
  if (!name) return alert('Masukkan nama device terlebih dahulu!');

  const devices = JSON.parse(localStorage.getItem('devices') || '[]');

  const isDuplicate = devices.some(d => d.name.toLowerCase() === name.toLowerCase());
  if (isDuplicate) {
    alert('Nama device sudah digunakan. Gunakan nama lain!');
    return;
  }

  const templateName = document.getElementById('templateSelect').value;
  if (templateName === 'KUSTOM') {
    selectedButtons = [...TEMPLATES['TV']];
  } else if (TEMPLATES[templateName]) {
    selectedButtons = [...TEMPLATES[templateName]];
  } else {
    selectedButtons = [];
  }

  hideAddModal();
  renderButtonList();
  document.getElementById('modalButtons').classList.remove('hidden');
  window.tempDeviceName = name;
}

function hideButtonForm() {
  document.getElementById('modalButtons').classList.add('hidden');
}

function renderButtonList() {
  const container = document.getElementById('buttonList');
  if (!container) return;
  container.innerHTML = selectedButtons.map((b, i) => `
    <span class="bg-gray-100 border rounded-full px-3 py-1 text-sm flex items-center gap-2">
      ${b}
      <button onclick="removeButton(${i})" class="text-red-500 hover:text-red-700 font-bold cursor-pointer">×</button>
    </span>
  `).join('');
}

function addNewButton() {
  const input = document.getElementById('newButtonInput');
  const val = input.value.trim();
  if (!val) return;
  selectedButtons.push(val);
  input.value = '';
  renderButtonList();
}

function removeButton(index) {
  selectedButtons.splice(index, 1);
  renderButtonList();
}

function goToLearningWithButtons() {
  const name = window.tempDeviceName;
  const devices = JSON.parse(localStorage.getItem('devices') || '[]');
  const isAC = selectedButtons.includes('Temp Up');

  const deviceData = {
    name,
    buttons: selectedButtons,
    powerState: 'off',
  };

  if (isAC) {
    deviceData.currentTemp = 23;
    deviceData.acMode = 'snow';
  }

  devices.push(deviceData);
  localStorage.setItem('devices', JSON.stringify(devices));

  window.currentDeviceIndex = devices.length - 1;

  hideButtonForm();

  window.tempLearningData = {
    name,
    buttons: selectedButtons
  };
  showLearningGuide();
}

function togglePower() {
  const devices = JSON.parse(localStorage.getItem('devices') || '[]');
  const index = window.currentDeviceIndex;

  if (devices[index] === undefined) return;

  const oldState = devices[index].powerState || 'off';
  const newState = (oldState === 'on') ? 'off' : 'on';
  devices[index].powerState = newState;

  if (newState === 'on' && devices[index].currentTemp === undefined) {
    devices[index].currentTemp = 23;
  }

  localStorage.setItem('devices', JSON.stringify(devices));

  navigate('remote');
}

function changeTemperature(direction) {
  const devices = JSON.parse(localStorage.getItem('devices') || '[]');
  const index = window.currentDeviceIndex;
  if (devices[index] === undefined) return;

  let temp = devices[index].currentTemp || 23;
  const powerState = devices[index].powerState || 'off';

  if (powerState === 'off') {
    alert('Nyalakan AC terlebih dahulu!');
    return;
  }

  if (direction === 'up' && temp < 29) {
    temp++;
  } else if (direction === 'down' && temp > 17) {
    temp--;
  }

  devices[index].currentTemp = temp;
  localStorage.setItem('devices', JSON.stringify(devices));

  navigate('remote');
}

// modal panduan sebelum learning
function modalLearningGuide() {
  return `
    <div id="modalGuide" class="hidden fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div class="bg-white rounded-3xl p-6 w-96 shadow-xl text-[#1A434E] text-center relative animate-fade-in">
        <button onclick="hideLearningGuide()" class="absolute right-4 top-3 text-2xl text-gray-500 hover:text-gray-700 cursor-pointer">×</button>

        <h3 class="text-xl font-semibold mb-2">Siap untuk Mode Pengenalan?</h3>
        <p class="text-sm text-gray-600 mb-5 leading-relaxed">
          Sebelum memulai, pastikan:
        </p>

        <ul class="text-sm text-left text-gray-700 mb-5 space-y-2 list-disc list-inside">
          <li>Remote asli sudah disiapkan dan berfungsi.</li>
          <li>Posisikan remote menghadap Modul Satu Remote.</li>
          <li>Tekan tombol sesuai instruksi di layar nanti.</li>
        </ul>

        <div class="flex justify-center gap-3 mt-2">
          <button onclick="hideLearningGuide()" class="px-4 py-2 rounded-lg border hover:bg-gray-50">
            Batal
          </button>
          <button onclick="startLearning()" class="px-4 py-2 rounded-lg bg-[#1A434E] text-white hover:bg-[#14333c]">
            Mulai Pengenalan
          </button>
        </div>
      </div>
    </div>
  `;
}

function showLearningGuide() {
  document.getElementById('modalGuide').classList.remove('hidden');
}

function hideLearningGuide() {
  document.getElementById('modalGuide').classList.add('hidden');
}

function startLearning() {
  const {
    name,
    buttons
  } = window.tempLearningData;
  hideLearningGuide();
  goToLearningMode(name, buttons);
}

// halaman mode learning
function pageLearningMode() {
  const list = currentButtons.map((btn, i) => `
    <li class="flex items-center gap-2">
      <span class="w-3 h-3 rounded-full ${i < 3 ? 'bg-green-500' : 'bg-black'}"></span>
      Tekan tombol ${btn} di Remote Asli
    </li>
  `).join('');

  return `
    <div class="text-[#1A434E] text-center px-6">
      <h3 class="text-lg font-semibold mb-2">Mode Pengenalan</h3>
      <p class="text-sm text-gray-600 mb-4">${currentDevice}</p>
      <ul class="text-left inline-block mb-6 space-y-2">${list}</ul>

      <div class="flex justify-center gap-4">
        <button class="px-4 py-2 border rounded-lg hover:bg-gray-50">Lewati Proses</button>
        <button onclick="navigate('remote')" class="px-4 py-2 bg-[#1A434E] text-white rounded-lg hover:bg-[#14333c]">Lanjut</button>
      </div>
    </div>
  `;
}

// halaman remote
function pageRemote() {
  const devices = JSON.parse(localStorage.getItem('devices') || '[]');
  const device = devices[window.currentDeviceIndex];

  if (!device) {
    navigate('home');
    return;
  }

  const currentPowerState = device.powerState || 'off';
  const isAC = currentButtons.includes('Temp Up');
  let remoteLayout = '';

  if (isAC) {

    const currentTemp = device.currentTemp || 23;
    const currentAcMode = device.acMode || 'snow';

    const powerColor = (currentPowerState === 'on') ? 'text-red-600' : 'text-gray-700';
    const displayTemp = (currentPowerState === 'on') ? `${currentTemp}°C` : 'OFF';
    const displayColor = (currentPowerState === 'on') ? 'text-blue-500' : 'text-gray-500';

    const fanColor = (currentAcMode === 'fan') ? 'text-blue-500' : 'text-gray-700';
    const snowColor = (currentAcMode === 'snow') ? 'text-blue-500' : 'text-gray-700';

    const acButton = (onclick, icon, color = 'text-gray-700') => `
      <div onclick="${onclick}"
        class="bg-gray-100 rounded-full p-3 flex items-center justify-center text-[#1A434E] font-medium text-sm shadow-sm cursor-pointer hover:bg-gray-200 transition aspect-square">
        <div class="w-8 h-8 ${color}">
          ${icon}
        </div>
      </div>
    `;

    remoteLayout = `
      <div class="bg-gray-100 rounded-lg w-full max-w-xs mx-auto p-4 mb-8 shadow-inner text-center">
        <span class="text-5xl font-bold ${displayColor}">${displayTemp}</span>
      </div>
      <div class="max-w-xs mx-auto">
        <div class="grid grid-cols-3 gap-4 mb-4">
          ${acButton('changeTemperature(\'up\')', ICONS.PLUS)}
          ${acButton('togglePower()', ICONS.POWER, powerColor)}
          ${acButton('changeTemperature(\'down\')', ICONS.MINUS)}
        </div>

        <div class="grid grid-cols-2 gap-4 max-w-[13rem] mx-auto">
          ${acButton('setAcMode(\'fan\')', ICONS.FAN, fanColor)}
          ${acButton('setAcMode(\'snow\')', ICONS.SNOW, snowColor)}
        </div>
      </div>
    `;
  } else {

    const buttons = currentButtons.map(b => {
      const iconSvg = BUTTON_TO_ICON_MAP[b];
      if (iconSvg) {
        let iconColorClass = 'text-gray-700';
        if (b === 'Power') {
          iconColorClass = (currentPowerState === 'on') ? 'text-red-600' : 'text-gray-700';
        }
        return `
          <div onclick="${b === 'Power' ? 'togglePower()' : `alert('Tombol ${b} ditekan!')`}"
            class="bg-gray-100 rounded-full p-3 flex items-center justify-center text-[#1A434E] font-medium text-sm shadow-sm cursor-pointer hover:bg-gray-200 transition aspect-square">
            <div class="w-8 h-8 ${iconColorClass}">
              ${iconSvg}
            </div>
          </div>
        `;
      } else {
        return `
          <div onclick="alert('Tombol ${b} ditekan!')"
            class="bg-gray-100 rounded-xl py-3 px-2 flex items-center justify-center text-[#1A434E] font-medium text-sm shadow-sm cursor-pointer hover:bg-gray-200 transition">
            ${b}
          </div>
        `;
      }
    }).join('');

    remoteLayout = `
      <div class="max-w-xs mx-auto">
        <div class="grid grid-cols-3 gap-4 mb-6">${buttons}</div>
      </div>
    `;
  }

  return `
    <div class="text-center text-[#1A434E] px-6">
      <div class="flex items-center justify-center gap-2 mb-4">
        <h3 class="text-xl font-semibold">${currentDevice}</h3>
        <button onclick="showEditModal()" class="text-gray-500 hover:text-gray-700 text-sm" title="Edit Device">
          <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" viewBox="0 0 528.899 528.899" class="h-4 w-4">
            <g>
              <path d="M328.883,89.125l107.59,107.589l-272.34,272.34L56.604,361.465L328.883,89.125z M518.113,63.177l-47.981-47.981     c-18.543-18.543-48.653-18.543-67.259,0l-45.961,45.961l107.59,107.59l53.611-53.611     C532.495,100.753,532.495,77.559,518.113,63.177z M0.3,512.69c-1.958,8.812,5.998,16.708,14.811,14.565l119.891-29.069     L27.473,390.597L0.3,512.69z"/>
            </g>
          </svg>
        </button>
      </div>

      ${remoteLayout}

      <div class="mt-4">
        <button onclick="navigate('home')" class="px-4 py-2 bg-[#1A434E] text-white rounded-lg hover:bg-[#14333c] select-none">Kembali</button>
        <button onclick="showRelearnConfirm()" class="px-4 py-2 ml-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 select-none">Kenalkan Ulang</button>
      </div>

      ${modalDeviceDetail()}
      ${modalConfirmDelete()}
      ${modalConfirmRelearn()}
    </div>
  `;
}

function setAcMode(mode) {
  const devices = JSON.parse(localStorage.getItem('devices') || '[]');
  const index = window.currentDeviceIndex;
  if (devices[index] === undefined) return;

  devices[index].acMode = mode;
  localStorage.setItem('devices', JSON.stringify(devices));

  navigate('remote');
}

// modal konfirmasi pengenalan remote ulang
function modalConfirmRelearn() {
  return `
    <div id="modalRelearn" class="hidden fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div class="bg-white rounded-3xl p-6 w-80 shadow-lg text-center text-[#1A434E]">
        <p class="mb-4 text-sm">Apakah Anda yakin ingin memulai ulang proses pengenalan tombol untuk remote ini?</p>
        <div class="flex justify-center gap-3">
          <button onclick="hideRelearnConfirm()" class="px-4 py-2 rounded-lg border hover:bg-gray-50">Batal</button>
          <button onclick="confirmRelearn()" class="px-4 py-2 rounded-lg bg-[#1A434E] text-white hover:bg-[#14333c]">
            Ya, mulai ulang
          </button>
        </div>
      </div>
    </div>
  `;
}

function showRelearnConfirm() {
  document.getElementById('modalRelearn').classList.remove('hidden');
}

function hideRelearnConfirm() {
  document.getElementById('modalRelearn').classList.add('hidden');
}

function confirmRelearn() {
  hideRelearnConfirm();
  goToLearningMode(currentDevice, currentButtons);
}

// modal edit, hapus device
function modalDeviceDetail() {
  return `
    <div id="modalDetail" class="hidden fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div class="bg-white rounded-3xl p-6 w-80 shadow-lg relative">
        <button onclick="hideDeviceModal()" class="absolute right-4 top-3 text-2xl text-gray-500 hover:text-gray-700 cursor-pointer">×</button>
        <h3 class="text-lg font-semibold text-center text-[#1A434E] mb-4">Edit Device</h3>
        <input id="editDeviceName" type="text"
          class="w-full border rounded-lg px-3 py-2 mb-4 text-[#1A434E]"
          placeholder="Nama device" />
        <div class="flex justify-between">
          <button onclick="saveDeviceEdit()" class="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700">Simpan</button>
          <button onclick="showConfirmDelete()" class="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700">Hapus</button>
        </div>
      </div>
    </div>
  `;
}

function showDeviceModal(index) {
  const devices = JSON.parse(localStorage.getItem('devices') || '[]');
  const device = devices[index];
  currentDevice = device.name;
  currentButtons = device.buttons;
  window.currentDeviceIndex = index;
  navigate('remote');
}

function saveDeviceEdit() {
  const name = document.getElementById('editDeviceName').value.trim();
  if (!name) return alert('Nama device tidak boleh kosong.');
  const devices = JSON.parse(localStorage.getItem('devices') || '[]');
  const index = window.currentDeviceIndex ?? devices.findIndex(d => d.name === currentDevice);

  if (index === -1) return alert('Device tidak ditemukan.');

  devices[index].name = name;
  localStorage.setItem('devices', JSON.stringify(devices));

  currentDevice = name;

  hideDeviceModal();
  navigate('remote');
}


function showEditModal() {
  const devices = JSON.parse(localStorage.getItem('devices') || '[]');
  const device = devices[window.currentDeviceIndex];
  document.getElementById('modalDetail').classList.remove('hidden');
  document.getElementById('editDeviceName').value = device.name;
}

function hideDeviceModal() {
  document.getElementById('modalDetail').classList.add('hidden');
}

// modal konfirmasi hapus
function modalConfirmDelete() {
  return `
    <div id="modalConfirm" class="hidden fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div class="bg-white rounded-3xl p-6 w-72 shadow-lg text-center">
        <p class="text-[#1A434E] mb-4 text-sm">Yakin ingin menghapus device ini?</p>
        <div class="flex justify-center gap-3">
          <button onclick="hideConfirmDelete()" class="px-4 py-2 rounded-lg border text-[#1A434E] hover:bg-gray-50">Batal</button>
          <button onclick="deleteDevice()" class="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700">Hapus</button>
        </div>
      </div>
    </div>
  `;
}

function showConfirmDelete() {
  hideDeviceModal();
  document.getElementById('modalConfirm').classList.remove('hidden');
}

function hideConfirmDelete() {
  document.getElementById('modalConfirm').classList.add('hidden');
}

function deleteDevice() {
  const devices = JSON.parse(localStorage.getItem('devices') || '[]');
  devices.splice(window.currentDeviceIndex, 1);
  localStorage.setItem('devices', JSON.stringify(devices));
  hideConfirmDelete();
  navigate('home');
}