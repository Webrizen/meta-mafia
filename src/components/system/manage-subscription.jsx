"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

export default function ManageSubscription() {
  const [subscription, setSubscription] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchSubscription() {
      const res = await fetch("/api/subscription");
      const data = await res.json();
      if (res.ok) setSubscription(data);
    }
    fetchSubscription();
  }, []);

  const handleCancel = async () => {
    setLoading(true);
    const res = await fetch("/api/subscription", { method: "DELETE" });
    if (res.ok) {
      toast({ title: "Subscription canceled." });
      setSubscription(null);
    } else {
      toast({ title: "Error canceling subscription.", variant: "destructive" });
    }
    setLoading(false);
  };

  return (
    <div className="w-full mt-4">
      <Card className="!shadow-none border border-slate-300">
        <CardHeader>
          <CardTitle>Manage Subscription</CardTitle>
        </CardHeader>
        <CardContent>
          {subscription ? (
            <div className="space-y-4">
              <p>Current Plan: <strong>{subscription.plan}</strong></p>
              <p>Status: <strong>{subscription.status}</strong></p>
              <Button onClick={handleCancel} disabled={loading} variant="outline">
                {loading ? "Canceling..." : "Cancel Subscription"}
              </Button>
            </div>
          ) : (
            <p>You have no active subscription.</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}