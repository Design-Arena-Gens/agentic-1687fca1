"use client";

import { useEffect, useState } from "react";

export default function ClientReady({
  children
}: {
  children: React.ReactNode;
}) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const id = window.setTimeout(() => setReady(true), 50);
    return () => window.clearTimeout(id);
  }, []);

  return <div data-ready={ready}>{children}</div>;
}
