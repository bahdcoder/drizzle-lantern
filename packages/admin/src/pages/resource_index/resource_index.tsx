import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { DataTable } from "./components/table/resource_table";
import { columns } from "./components/table/columns";
import { payments, tasks } from "./components/table/data";

export function ResourceIndex() {
  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold md:text-2xl">
          Users
        </h1>

        <Button>Create User</Button>
      </div>

      <div className="mt-6">
        <DataTable columns={columns} data={tasks} />
      </div>

      {/* <div
        className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm"
        x-chunk="dashboard-02-chunk-1"
      >
        <div className="flex flex-col items-center gap-1 text-center">
          <h3 className="text-2xl font-bold tracking-tight">
            You have no products
          </h3>
          <p className="text-sm text-muted-foreground">
            You can start selling as soon as you add a
            product.
          </p>
          <Button className="mt-4">Add Product</Button>
        </div>
      </div> */}
    </>
  );
}
