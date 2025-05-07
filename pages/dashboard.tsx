import React, { JSX } from "react";
import Banner from "@/components/dashboard/Banner";
import PerformanceChart from "@/components/dashboard/PerformanceChart";
import Card from "@/components/dashboard/Card";
import Semester from "@/components/dashboard/Semester";
import EventCalendar from "@/components/dashboard/EventCalendar";

function Dashboard(): JSX.Element {
  return (
    <div className="w-full pb-4 bg-mainBG">
      <Banner />
      <div className="grid h-full lg:grid-cols-2 m-4">
        <div className="w-full grid grid-cols-1">
          <PerformanceChart />
          <Semester />
        </div>
        <div className="w-full px-4 pt-2">
          <Card />
          <EventCalendar />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
