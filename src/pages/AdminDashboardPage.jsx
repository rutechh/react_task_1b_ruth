import { DashboardTable } from "Components/DashboardTable";
import { Nav } from "Components/Nav";
import {PageHeader} from "Components/PageHeader";
import React from "react";

const AdminDashboardPage = () => {
  return (
    <>
      <div className="w-full flex justify-center items-start text-7xl px-[112px] h-fit min-h-screen  bg-black pb-10">
      <div className=" w-full h-full">
            <Nav />
            <PageHeader />
            <DashboardTable />
        </div>
      </div>
    </>
  );
};

export default AdminDashboardPage;
