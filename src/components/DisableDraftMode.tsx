"use client";
import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { disableDraftMode } from "@/app/actions";

export function DisableDraftMode() {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  // Only show in embedded preview contexts
  if (window !== window.parent || !!window.opener) {
    return null;
  }
  const handleDisable = () => startTransition(async () => {
    await disableDraftMode();
    router.refresh();
  });
  return (
    <div className="fixed bottom-4 right-4 z-50">
      {pending ? (
        "Disabling draft mode..."
      ) : (
        <button onClick={handleDisable} className="px-4 py-2 bg-white border rounded shadow">
          Disable draft mode
        </button>
      )}
    </div>
  );
}