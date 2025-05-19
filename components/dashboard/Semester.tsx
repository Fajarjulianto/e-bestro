"use client";

import React, { JSX, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Image from "next/image";
function Semester(): JSX.Element {
  type SemesterData = {
    semester: number;
    task: string;
    status: number;
    date: string;
  }[];

  // 1 = verified
  // 2 = waiting approval
  // 3 = draft
  // 4 = decline

  const semesterData: SemesterData = [
    {
      semester: 1,
      task: "Check Requirements",
      status: 4,
      date: "2025-01-10",
    },
    {
      semester: 1,
      task: "Completed Report",
      status: 1,
      date: "2025-01-15",
    },

    {
      semester: 2,
      task: "Proceed with Submission",
      status: 3,
      date: "2025-05-10",
    },
    {
      semester: 2,
      task: "Verification Process",
      status: 2,
      date: "2025-05-20",
    },

    {
      semester: 3,
      task: "Check Requirements",
      status: 4,
      date: "2025-09-08",
    },
    {
      semester: 3,
      task: "Completed Report",
      status: 1,
      date: "2025-09-15",
    },

    {
      semester: 4,
      task: "Proceed with Submission",
      status: 4,
      date: "2026-01-12",
    },
    {
      semester: 4,
      task: "Verification Process",
      status: 2,
      date: "2026-01-22",
    },

    {
      semester: 5,
      task: "Check Requirements",
      status: 3,
      date: "2026-05-09",
    },
    {
      semester: 5,
      task: "Completed Report",
      status: 3,
      date: "2026-05-19",
    },

    {
      semester: 6,
      task: "Proceed with Submission",
      status: 1,
      date: "2026-09-10",
    },
    {
      semester: 6,
      task: "Verification Process",
      status: 2,
      date: "2026-09-20",
    },

    // {
    //   semester: 7,
    //   task: "Check Requirements",
    //   status: 4,
    //   date: "2027-01-11",
    // },
    // {
    //   semester: 7,
    //   task: "Completed Report",
    //   status: 2,
    //   date: "2027-01-21",
    // },

    // {
    //   semester: 8,
    //   task: "Proceed with Submission",
    //   status: 1,
    //   date: "2027-05-12",
    // },
    // {
    //   semester: 8,
    //   task: "Verification Process",
    //   status: 2,
    //   date: "2027-05-22",
    // },
  ];

  const [filteredData, setFilteredData] = useState([
    {
      semester: 1,
      task: "Check Requirements",
      status: 4,
      date: "2025-01-10",
    },
    {
      semester: 1,
      task: "Completed Report",
      status: 1,
      date: "2025-01-15",
    },

    {
      semester: 2,
      task: "Proceed with Submission",
      status: 3,
      date: "2025-05-10",
    },
    {
      semester: 2,
      task: "Verification Process",
      status: 2,
      date: "2025-05-20",
    },
  ]);

  function getStatusText(statusCode: number): string {
    switch (statusCode) {
      case 1:
        return "Verified";
      case 2:
        return "Waiting Approval";
      case 3:
        return "Draft";
      case 4:
        return "Decline";
      default:
        return "";
    }
  }

  function filterSemesterData(semesterLow: number, semesterHigh: number) {
    const filter = semesterData.filter((data) => {
      return data.semester >= semesterLow && data.semester <= semesterHigh;
    });

    setFilteredData(filter);
  }

  return (
    <div className="bg-primary w-full h-72 rounded-2xl mt-2 flex items-center">
      <div className="h-54 w-full  bg-white rounded-lg font-ubuntu">
        <div className="bg-[#F7F9FC] rounded-t-lg text-[#45474B] font-bold">
          <div className="h-7 border-2 rounded-t-lg border-[#6F7175] text-[#C4DEE9]font-bold text-sm flex justify-start">
            <div className="flex w-[10%] justify-center items-center">
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <span className="flex items-center justify-center w-full h-full">
                    <Image
                      src={"/tag.png"}
                      height={10}
                      width={10}
                      alt="tag image"
                    />
                    <Image
                      src={"/column-sorting.png"}
                      height={10}
                      width={10}
                      alt="column sorting image"
                    />
                  </span>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>Semester</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => filterSemesterData(1, 2)}>
                    1-2
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => filterSemesterData(3, 4)}>
                    3-4
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => filterSemesterData(5, 6)}>
                    5-6
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => filterSemesterData(7, 8)}>
                    7-8
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="text-center w-[20%] opacity-50 border-x-2">
              Semester
            </div>
            <div className="text-center w-[30%] opacity-50 border-r-2">
              Requirement
            </div>
            <div className="text-center w-[20%] opacity-50 border-r-2">
              Date
            </div>
            <div className="text-center w-[22%] opacity-50 border-r-2">
              Status
            </div>
          </div>
        </div>
        <div className="w-full overflow-y-auto bg-white h-52 border-x-2 border-b-2 border-[#6F7175] rounded-b-lg">
          {filteredData.map((data, index) => (
            <div
              key={index}
              className="h-14 text-[#45474B] font-bold text-sm flex justify-start"
            >
              <span className="flex border-1 border-solid w-[10%] justify-center items-center border-y-1">
                {index + 1}
              </span>
              <span className="flex border-1 border-solid justify-center text-center items-center w-[20%] border-y-1">
                Semester {data.semester}
              </span>
              <span className="flex border-1 border-solid justify-center items-center w-[30%] border-y-1">
                {data.task}
              </span>
              <span className="flex border-1 border-solid justify-center items-center w-[20%] border-y-1">
                {data.date}
              </span>
              <span
                className={`flex justify-center items-center w-[20%] border-y-1 `}
              >
                <span
                  className={`text-center sm:px-4 px-1 py-1 sm:py-2 rounded-2xl text-xs font-light sm:font-bold ${
                    data.status === 1 ? "bg-greenBg" : ""
                  }
                  ${data.status === 4 ? "bg-redBg" : ""}
                  ${data.status === 3 ? "bg-purpleBg" : ""}
                  ${data.status === 2 ? "bg-yellowBg" : ""}`}
                >
                  <span
                    className={`rounded-full inline-block h-2 w-2 sm:mr-2 mr-1 ${
                      data.status === 1 ? "bg-greenDot" : ""
                    } ${data.status === 4 ? "bg-redDot" : ""}
                    ${data.status === 3 ? "bg-purpleDot" : ""}
                    ${data.status === 2 ? "bg-yellowDot" : ""}`}
                  ></span>
                  {getStatusText(data.status)}
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Semester;
