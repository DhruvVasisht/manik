import React from 'react';

export default function DLetter(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      id="logo"
      {...props}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="30.3388mm"
      height="30.3388mm"
      version="1.1"
      viewBox="0 0 3034 3034"
    >
      <path
        strokeWidth="50"
        d="M217 17l2600 0c110,0 200,90 200,200l0 2600c0,110 -90,200 -200,200l-2600 0c-110,0 -200,-90 -200,-200l0 -2600c0,-110 90,-200 200,-200z"
      />
      <path
        strokeWidth="30"
        d="M917 931h450c380 0 650 270 650 586s-270 586-650 586H917V931zm450 942c250 0 420-160 420-356s-170-356-420-356h-220v712h220z"
      />
    </svg>
  );
}