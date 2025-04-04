"use client";
import { useEffect, useState } from "react";
import { TrendingDownIcon, TrendingUpIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function page() {
  const [stats, setStats] = useState(null);


  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch("/api/metrics");
        const data = await res.json();
        setStats(data);
      } catch (error) {
        alert("Error")
        console.error("Failed to load dashboard stats", error);
      }
    };

    fetchStats();
  }, []);

  if (!stats) return <div className="mt-8 text-center text-muted-foreground">Loading...</div>;

  return (
    <div className="*:data-[slot=card]:shadow-xs md:grid-cols-4 grid grid-cols-1 gap-4 mt-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card">
      {/* Card 1: Total Sites Crawled */}
      <Card className="@container/card">
        <CardHeader className="relative">
          <CardDescription>Total Sites Crawled</CardDescription>
          <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
            {stats.totalUrls} Sites
          </CardTitle>
          <div className="absolute right-4 top-4">
            <Badge variant="outline" className="flex gap-1 rounded-lg text-xs">
              <TrendingUpIcon className="size-3" />
              +9.2%
            </Badge>
          </div>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1 text-sm">
          <div className="flex gap-2 font-medium">
            Based on your metadata submissions
          </div>
          <div className="text-muted-foreground">Unique domains processed</div>
        </CardFooter>
      </Card>

      {/* Card 2: Metadata Files */}
      <Card className="@container/card">
        <CardHeader className="relative">
          <CardDescription>Metadata Files</CardDescription>
          <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
            {stats.totalEntries} Files
          </CardTitle>
          <div className="absolute right-4 top-4">
            <Badge variant="outline" className="flex gap-1 rounded-lg text-xs">
              <TrendingUpIcon className="size-3" />
              +14.8%
            </Badge>
          </div>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1 text-sm">
          <div className="flex gap-2 font-medium">
            Includes sitemap, robots.txt, manifest.json
          </div>
          <div className="text-muted-foreground">Generated via AI pipeline</div>
        </CardFooter>
      </Card>

      {/* Card 3: Credits Used */}
      <Card className="@container/card">
        <CardHeader className="relative">
          <CardDescription>Credits Used</CardDescription>
          <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
            {stats.creditsUsed}
          </CardTitle>
          <div className="absolute right-4 top-4">
            <Badge variant="outline" className="flex gap-1 rounded-lg text-xs">
              <TrendingUpIcon className="size-3" />
              +5.1%
            </Badge>
          </div>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1 text-sm">
          <div className="flex gap-2 font-medium">You’ve consumed these this month</div>
          <div className="text-muted-foreground">Usage-based billing</div>
        </CardFooter>
      </Card>

      {/* Card 4: API Errors */}
      <Card className="@container/card">
        <CardHeader className="relative">
          <CardDescription>API Failures</CardDescription>
          <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums text-red-500">
            {stats.errors} Errors
          </CardTitle>
          <div className="absolute right-4 top-4">
            <Badge variant="destructive" className="flex gap-1 rounded-lg text-xs">
              <TrendingDownIcon className="size-3" />
              +3.7%
            </Badge>
          </div>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1 text-sm">
          <div className="flex gap-2 font-medium">Issues during generation</div>
          <div className="text-muted-foreground">Needs your attention</div>
        </CardFooter>
      </Card>
    </div>
  );
}
