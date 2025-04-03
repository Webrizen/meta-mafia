"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import { Trash, Edit } from "lucide-react";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";

export default function ManageMetadata() {
  const { userId } = useAuth();
  const [metadata, setMetadata] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userId) return;
    fetch(`/api/get-all-metadata?clerkId=${userId}`)
      .then((res) => res.json())
      .then((data) => {
        setMetadata(data.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [userId]);

  console.log("Metadata Response:", metadata);

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this metadata?")) return;
    try {
      await fetch(`/api/delete-metadata?id=${id}`, { method: "DELETE" });
      setMetadata(metadata.filter((item) => item._id !== id));
    } catch (error) {
      alert("Failed to delete metadata.");
    }
  };

  return (
    <div className="w-full py-6">
      <h2 className="text-2xl font-semibold mb-4">
        Manage Your Generated Metadata
      </h2>
      {loading ? (
        <p>Loading...</p>
      ) : metadata.length === 0 ? (
        <p>No metadata found.</p>
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Website</TableHead>
              <TableHead>Generated At</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {metadata.map((item) => (
              <TableRow key={item._id}>
                <TableCell>{item.url}</TableCell>
                <TableCell>
                  {new Date(item.createdAt).toLocaleString()}
                </TableCell>
                <TableCell className="flex gap-2 items-center">
                  <Button variant="secondary" size="sm" asChild>
                    <Link href={`/dashboard/manage-metadata/${item._id}`}>
                      View
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="cursor-pointer"
                    onClick={() => handleDelete(item._id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
}
