import React from "react";

export const Loooding = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-slate-50">
      <div class="relative flex justify-center items-center">
        <div class="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-500"></div>
        <img
          src="https://www.svgrepo.com/show/509001/avatar-thinking-9.svg"
          class="rounded-full h-28 w-28"
        />
      </div>
    </div>
  );
};
