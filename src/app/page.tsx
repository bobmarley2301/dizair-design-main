'use client';
import React, { useState } from "react";
import ProfilePage from "./ProfilePage";
import DetailsPage from "./DetailsPage";

export default function Home() {
  const [detailsOpen, setDetailsOpen] = useState(false);

  return detailsOpen ? (
    <DetailsPage onBack={() => setDetailsOpen(false)} />
  ) : (
    <ProfilePage onPostClick={() => setDetailsOpen(true)} />
  );
} 