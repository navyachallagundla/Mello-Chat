"use client";

import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";
import Github from "./logos/GitHub";
import pkg from "@/package.json";
import { useTheme } from "next-themes";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";
import { LogOut, LogIn } from "lucide-react";

export const Nav = () => {
  const { theme, setTheme } = useTheme();
  const { user, loading, signInWithGoogle, logout } = useAuth();

  const handleSignIn = async () => {
    try {
      await signInWithGoogle();
      toast.success("Signed in successfully!");
    } catch (error: any) {
      toast.error(error.message || "Failed to sign in");
    }
  };

  const handleSignOut = async () => {
    try {
      await logout();
      toast.success("Signed out successfully!");
    } catch (error: any) {
      toast.error(error.message || "Failed to sign out");
    }
  };

  return (
    <div
      className={"fixed top-0 right-0 px-4 py-2 flex items-center h-14 z-200"}
    >
      <div className={"ml-auto flex items-center gap-1"}>
        <Button
          onClick={() => {
            window.open("/how-to-use", "_blank", "noopener noreferrer");
          }}
          variant={"ghost"}
          className={"ml-auto flex items-center gap-1.5 rounded-full"}
        >
          <span>How to use</span>
        </Button>
        <Button
          onClick={() => {
            window.open("/about-us", "_blank", "noopener noreferrer");
          }}
          variant={"ghost"}
          className={"ml-auto flex items-center gap-1.5 rounded-full"}
        >
          <span>About us</span>
        </Button>
        {!loading && (
          <>
            {user ? (
              <div className="flex items-center gap-2">
                <span className="text-sm text-neutral-600 hidden sm:inline">
                  {user.displayName || user.email}
                </span>
                <Button
                  onClick={handleSignOut}
                  variant={"ghost"}
                  size={"sm"}
                  className={"flex items-center gap-1.5 rounded-full"}
                >
                  <span className="hidden sm:inline">Sign out</span>
                </Button>
              </div>
            ) : (
              <Button
                onClick={handleSignIn}
                variant={"default"}
                size={"sm"}
                className={"flex items-center gap-1.5 p-5 rounded-full"}
              >
                <span>Sign in with Google</span>
              </Button>
            )}
          </>
        )}
      </div>
    </div>
  );
};