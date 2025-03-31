// app/subscribe/page.js
import { Suspense } from "react";
import Subscribe from "@/components/system/subscribe";

export default function page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Subscribe />
    </Suspense>
  );
}
