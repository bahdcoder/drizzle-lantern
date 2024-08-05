import { Button } from "@/components/ui/button";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export function ResourceDetail() {
  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold md:text-2xl">
          User details: Frantz Kati
        </h1>

        <div className="flex items-center space-x-4">
          <Button variant="outline">Edit</Button>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="destructive">Delete</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>
                  Are you absolutely sure?
                </AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will
                  permanently delete your account and remove
                  your data from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>
                  Cancel
                </AlertDialogCancel>
                <AlertDialogAction>
                  Continue
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
      <dl className="grid grid-cols-1 mt-12 text-base/6 sm:grid-cols-[min(50%,theme(spacing.80))_auto] sm:text-sm/6">
        <dt className="col-start-1 border-t first:border-none sm:border-t sm:py-3 text-muted-foreground">
          Customer
        </dt>
        <dd className="pb-3 pt-1 sm:border-t sm:py-3 sm:[&:nth-child(2)]:border-none text-foreground">
          Michael Foster
        </dd>
        <dt className="col-start-1 border-t first:border-none sm:border-t sm:py-3 text-muted-foreground">
          Customer
        </dt>
        <dd className="pb-3 pt-1 sm:border-t sm:py-3 sm:[&:nth-child(2)]:border-none text-foreground">
          Michael Foster
        </dd>
        <dt className="col-start-1 border-t first:border-none sm:border-t sm:py-3 text-muted-foreground">
          Customer
        </dt>
        <dd className="pb-3 pt-1 sm:border-t sm:py-3 sm:[&:nth-child(2)]:border-none text-foreground">
          Michael Foster
        </dd>
      </dl>
    </>
  );
}
