"use client";
import React, { useState } from "react";
import TopBar from "../components/topbar";
import Content from "../components/content";

import Sidebar from "../components/sidebar";
export default function Home() {
  const [content, setContent] = useState("Dashboard");
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar setContent={setContent} />
      <div className="flex flex-col flex-grow">
        <TopBar />
        <div className="flex-grow p-4">
          <Content content={content} />
        </div>
      </div>
    </div>
  );
}
