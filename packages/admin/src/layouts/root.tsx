import {
  Box,
  CircleUser,
  Grid2X2Icon,
  Home,
  LineChart,
  Menu,
  Package,
  Package2,
  Search,
  ShoppingCart,
  User,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Input } from "@/components/ui/input";

import { HamburgerMenuIcon } from "@radix-ui/react-icons";

export function RootLayout() {
  return (
    <div className="relative isolate flex min-h-svh w-full lg:bg-muted/80 max-lg:flex-col">
      <div className="fixed inset-y-0 left-0 w-[220px] lg:w-[280px] max-lg:hidden overflow-y-auto">
        <div className="flex h-full min-h-0 flex-col">
          <div className="flex h-14 flex-shrink-0 items-center px-4 lg:h-[60px] sticky top-0 bg-muted lg:px-6">
            <a
              href="/"
              className="flex items-center gap-2 font-semibold"
            >
              <Package2 className="h-6 w-6 text-primary" />
              <span className="">Mailkiwi</span>
            </a>
          </div>

          <div className="flex flex-1 flex-col overflow-y-auto p-4 lg:px-6 pb-12">
            <nav className="grid items-start text-sm font-medium">
              <div className="pb-6">
                <p className="gap-3 text-muted-foreground flex items-center">
                  <Grid2X2Icon className="h-5 w-5" />
                  <span>Dashboards</span>
                </p>
                <div className="flex flex-col pl-4 pt-3">
                  <Link
                    to="/resources/users"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                  >
                    <User className="h-4 w-4" />
                    Users{" "}
                  </Link>
                  <Link
                    to="/resources/products"
                    className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                  >
                    <Package className="h-4 w-4" />
                    Products{" "}
                  </Link>

                  <Link
                    to="/resources/analytics"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                  >
                    <LineChart className="h-4 w-4" />
                    Analytics
                  </Link>
                </div>
              </div>

              <div className="pb-2">
                <p className="gap-3 text-primary flex items-center">
                  <Box className="h-5 w-5" />
                  <span className="text-primary">
                    Resources
                  </span>
                </p>
                <div className="flex flex-col pl-4 pt-3">
                  <a
                    href="#"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                  >
                    <User className="h-4 w-4" />
                    Users{" "}
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
                  >
                    <Package className="h-4 w-4" />
                    Products{" "}
                  </a>

                  <a
                    href="#"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                  >
                    <LineChart className="h-4 w-4" />
                    Analytics
                  </a>
                </div>
              </div>
            </nav>
          </div>

          <div className="max-lg:hidden flex w-full flex-col h-14 "></div>
        </div>
      </div>
      <header className="flex items-center px-4 lg:hidden sticky top-0 bg-background z-10 border-b">
        <div className="py-2.5">
          <span className="relative">
            <Sheet>
              <SheetTrigger asChild>
                <button className="cursor-default relative flex min-w-0 items-center gap-3 rounded-lg p-2 text-left text-base/6 font-medium">
                  <HamburgerMenuIcon />
                </button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="border-0 bg-transparent p-2 w-5/6"
              >
                <div className="bg-background w-full h-full rounded-lg p-6 pt-10">
                  <SheetHeader>
                    <SheetTitle>
                      Are you absolutely sure?
                    </SheetTitle>
                    <SheetDescription>
                      This action cannot be undone. This
                      will permanently delete your account
                      and remove your data from our servers.
                    </SheetDescription>
                  </SheetHeader>
                </div>
              </SheetContent>
            </Sheet>
          </span>
        </div>

        <div className="min-w-0 flex-1">
          <nav className="flex flex-1 items-center gap-4 py-2.5"></nav>
        </div>
      </header>
      <main className="flex flex-1 flex-col lg:pb-2 lg:min-w-0 pl-0 md:pl-[220px] lg:pl-[280px] lg:pr-2 lg:pt-2">
        <div className="grow p-6 lg:rounded-lg lg:bg-white lg:p-10 lg:shadow-sm border-t-0 border-b-0 lg:border-t lg:border-b border">
          <div className="max-w-6xl mx-auto">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );

  return (
    <div className="relative h-screen w-full flex">
      <div className="h-screen fixed w-[220px] lg:w-[280px] overflow-y-auto">
        <div className="flex h-14 flex-shrink-0 items-center px-4 lg:h-[60px] sticky top-0 bg-muted lg:px-6">
          <a
            href="/"
            className="flex items-center gap-2 font-semibold"
          >
            <Package2 className="h-6 w-6 text-primary" />
            <span className="">Mailkiwi</span>
          </a>
        </div>

        <div className="flex-1">
          <nav className="grid items-start px-4 text-sm font-medium lg:px-6">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((x) => (
              <div className="py-6" key={x}>
                <p className="gap-3 text-primary flex items-center">
                  <Box className="h-5 w-5" />
                  <span className="text-primary">
                    Resources
                  </span>
                </p>
                <div className="flex flex-col pl-4 pt-3">
                  <a
                    href="#"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                  >
                    <User className="h-4 w-4" />
                    Users{" "}
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
                  >
                    <Package className="h-4 w-4" />
                    Products{" "}
                  </a>

                  <a
                    href="#"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                  >
                    <LineChart className="h-4 w-4" />
                    Analytics
                  </a>
                </div>
              </div>
            ))}
          </nav>
        </div>
      </div>

      <main className="w-full pl-[220px] lg:pl-[280px] bg-muted/80 flex flex-1 flex-col pb-2 lg:min-w-0 lg:pr-2 lg:pt-2">
        <div className="w-full flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 lg:rounded-xl bg-background border">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((x) => (
            <div className="py-24 text-6xl text-white flex items-center justify-center font-bold">
              {x}
            </div>
          ))}
          <Outlet />
        </div>
      </main>
    </div>
  );

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden bg-muted/40 md:block">
        <div className="flex h-full max-h-screen overflow-y-auto flex-col gap-2">
          <div className="flex h-14 flex-shrink-0 items-center border-b bg-muted/40 px-4 lg:h-[60px] sticky top-0 lg:px-6">
            <a
              href="/"
              className="flex items-center gap-2 font-semibold"
            >
              <Package2 className="h-6 w-6 text-primary" />
              <span className="">Mailkiwi</span>
            </a>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-4 text-sm font-medium lg:px-6">
              {[1].map((x) => (
                <div className="py-6" key={x}>
                  <p className="gap-3 text-primary flex items-center">
                    <Box className="h-5 w-5" />
                    <span className="text-primary">
                      Resources
                    </span>
                  </p>
                  <div className="flex flex-col pl-4 pt-3">
                    <a
                      href="#"
                      className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                    >
                      <User className="h-4 w-4" />
                      Users{" "}
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
                    >
                      <Package className="h-4 w-4" />
                      Products{" "}
                    </a>

                    <a
                      href="#"
                      className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                    >
                      <LineChart className="h-4 w-4" />
                      Analytics
                    </a>
                  </div>
                </div>
              ))}
            </nav>
          </div>
          <div className="mt-auto p-4"></div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center bg-muted/40 gap-4 border-b px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">
                  Toggle navigation menu
                </span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="flex flex-col"
            >
              <nav className="grid gap-2 text-lg font-medium">
                <a
                  href="#"
                  className="flex items-center gap-2 text-lg font-semibold"
                >
                  <Package2 className="h-6 w-6" />
                  <span className="sr-only">Acme Inc</span>
                </a>
                <a
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <Home className="h-5 w-5" />
                  Dashboard
                </a>
                <a
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground"
                >
                  <ShoppingCart className="h-5 w-5" />
                  Orders
                  <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                    6
                  </Badge>
                </a>
                <a
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <Package className="h-5 w-5" />
                  Products
                </a>
                <a
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <Users className="h-5 w-5" />
                  Customers
                </a>
                <a
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <LineChart className="h-5 w-5" />
                  Analytics
                </a>
              </nav>
              <div className="mt-auto">
                <Card>
                  <CardHeader>
                    <CardTitle>Upgrade to Pro</CardTitle>
                    <CardDescription>
                      Unlock all features and get unlimited
                      access to our support team.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button size="sm" className="w-full">
                      Upgrade
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </SheetContent>
          </Sheet>
          <div className="w-full flex-1">
            <form>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                />
              </div>
            </form>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="secondary"
                size="icon"
                className="rounded-full"
              >
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">
                  Toggle user menu
                </span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>
                My Account
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 bg-background">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
