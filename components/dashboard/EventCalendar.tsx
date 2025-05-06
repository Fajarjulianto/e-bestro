"use client";

import React, { JSX } from "react";
import Image from "next/image";
// import Link from "next/link";

function EventCalendar(): JSX.Element {
  return (
    <div className="bg-secondary w-full h-full lg:h-[648px] rounded-lg p-4 mt-3">
      <div className="flex justify-between">
        <span className="text-white font-bold font-poppins text-2xl">
          Kalender Event
        </span>
        <div>
          <button>
            <Image
              src={"/arrowButtonLeft.png"}
              height={20}
              width={20}
              alt="Arrow Left"
            />
          </button>
          <button>
            <Image
              src={"/arrowButtonRight.png"}
              height={20}
              width={20}
              alt="Arrow Right"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default EventCalendar;
