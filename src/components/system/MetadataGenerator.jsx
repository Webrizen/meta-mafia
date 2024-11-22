"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MetadataForm from "./MetadataForm";
import LoadingState from "./LoadingState";
import MetadataResult from "./MetadataResult";
import ManifestResult from "./ManifestResult";
import RobotsResult from "./RobotsResult";
import SitemapResult from "./SitemapResult";

export default function MetadataGenerator() {
  const [formData, setFormData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (data) => {
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setFormData(data);
    setIsLoading(false);
  };

  return (
    <div className="w-full container grid md:grid-cols-[.3fr_1fr_.3fr] gap-6 mx-auto ">
      <div className="w-full rounded-xl md:block hidden">
        <img
          src="https://placehold.co/600x1500?text=Advertisement"
          alt="Ads"
          className="rounded-xl bg-slate-100 border-2 border-slate-200"
        />
      </div>
      <AnimatePresence mode="wait">
        {!formData && (
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <MetadataForm onSubmit={handleSubmit} />
          </motion.div>
        )}
        {isLoading && (
          <motion.div
            key="loading"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
          >
            <LoadingState />
          </motion.div>
        )}
        {formData && !isLoading && (
          <motion.div
            key="results"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <Tabs defaultValue="metadata" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="metadata">Metadata</TabsTrigger>
                <TabsTrigger value="manifest">Manifest</TabsTrigger>
                <TabsTrigger value="robots">Robots</TabsTrigger>
                <TabsTrigger value="sitemap">Sitemap</TabsTrigger>
              </TabsList>
              <TabsContent value="metadata">
                <MetadataResult data={formData} />
              </TabsContent>
              <TabsContent value="manifest">
                <ManifestResult data={formData} />
              </TabsContent>
              <TabsContent value="robots">
                <RobotsResult data={formData} />
              </TabsContent>
              <TabsContent value="sitemap">
                <SitemapResult data={formData} />
              </TabsContent>
            </Tabs>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="w-full rounded-xl">
        <img
          src="https://placehold.co/600x1500?text=Advertisement"
          alt="Ads"
          className="rounded-xl bg-slate-100 border-2 border-slate-200"
        />
      </div>
    </div>
  );
}
