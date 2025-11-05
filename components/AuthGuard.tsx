"use client";

import { useAuth } from "@/contexts/AuthContext";
import { Button } from "./ui/button";
import { LogIn } from "lucide-react";
import { toast } from "sonner";

export function AuthGuard({ children }: { children: React.ReactNode }) {
  const { user, loading, signInWithGoogle } = useAuth();

  const handleSignIn = async () => {
    try {
      await signInWithGoogle();
      toast.success("Signed in successfully!");
    } catch (error: any) {
      toast.error(error.message || "Failed to sign in");
    }
  };

  if (loading) {
    return (
      <div className="flex grow items-center justify-center">
        <div className="text-center">
          <div className="mb-4 h-8 w-8 animate-spin rounded-full border-4 border-neutral-200 border-t-orange-600 mx-auto"></div>
          <p className="text-neutral-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex grow items-center justify-center">
        <div className="text-center max-w-md px-6">
          <h2 className="text-2xl font-semibold mb-2">Sign in required</h2>
          <p className="text-neutral-600 mb-6">
            Please sign in with Google to access Mello Chat.
          </p>
          <Button onClick={handleSignIn} size="lg" className="rounded-2xl">
            <LogIn className="h-4 w-4 mr-2" />
            Sign in with Google
          </Button>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}

