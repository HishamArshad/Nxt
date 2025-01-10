"use client"
import { clientStates } from "@/state/clientState";
export default function LoadingOverlay() {
  const isLoading = clientStates.isLoad.get()
  if (!isLoading) return null; // Only render when loading

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 transition-all">
      <div className="relative w-full h-1 bg-gray-300 overflow-hidden">
        <div className="absolute h-full w-1/4 bg-blue-500 animate-slide"></div>
      </div>
    </div>
  );
}
