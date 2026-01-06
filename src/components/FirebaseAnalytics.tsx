"use client";

import { initAnalytics } from "@/lib/firebase";
import { useEffect } from "react";

export default function FirebaseAnalytics() {
  useEffect(() => {
    initAnalytics();
  }, []);

  return null;
}
