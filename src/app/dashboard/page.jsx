// "use client";
// import { useSession } from "next-auth/react";
// import { redirect } from "next/navigation";

// export default function Dashboard() {
//   const { data: session, status } = useSession();

//   if (status === "loading") return <p>Loading...</p>;
//   if (!session) redirect("/");

//   return (
//     <div className="flex min-h-screen items-center justify-center">
//       <h1 className="text-2xl">Welcome to Dashboard, {session.user.name}!</h1>
//     </div>
//   );
// }

import React from 'react'

export default function page() {
  return (
    <div>
      hmm
    </div>
  )
}
