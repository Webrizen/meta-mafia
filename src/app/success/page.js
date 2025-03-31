// app/subscribe/page.js
import { Suspense } from "react";
import Success from "@/components/system/success";

export default function page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Success />
    </Suspense>
  );
}
