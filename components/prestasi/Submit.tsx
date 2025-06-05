" use client";

import React, { JSX } from "react";

function Submit(): JSX.Element {
  return (
    <div className="flex justify-center gap-2">
      <button className="bg-primary text-white hover:text-secondary border rounded-lg border-primary py-2 px-11">
        Batal
      </button>
      <button className="bg-secondary text-white hover:text-primary border rounded-lg border-secondary py-2 px-11">
        Submit
      </button>
    </div>
  );
}

export default Submit;
