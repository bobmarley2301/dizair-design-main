'use client';
import React, { useState, useCallback } from "react";
import ProfilePage from "./profile/ProfilePage";
import dynamic from "next/dynamic";

const DetailsPage = dynamic(() => import("./details/DetailsPage"), { ssr: false });

export default function Home() {
  const [detailsOpen, setDetailsOpen] = useState(false);

  const handlePostClick = useCallback(() => setDetailsOpen(true), []);
  const handleBack = useCallback(() => setDetailsOpen(false), []);

  return detailsOpen ? (
    <DetailsPage onBack={handleBack} />
  ) : (
    <ProfilePage onPostClick={handlePostClick} />
  );
} 