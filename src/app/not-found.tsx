import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[84vh] flex flex-col items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-indigo-950 dark:text-white">404</h1>
        <h2 className="text-2xl font-semibold mt-4 text-indigo-950 dark:text-white">Page Not Found</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          The page you are looking for does not exist...
        </p>
        <div className="mt-4">
          <Button asChild className="text-white bg-indigo-900 hover:bg-indigo-950 dark:bg-gray-950 dark:hover:bg-black">
            <Link href="/">Go back home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}