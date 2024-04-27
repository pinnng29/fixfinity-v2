"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { useMobileSidebar } from "@/hooks/use-mobile-sidebar";
import { NavigationBar } from "./navigation-menu";

export default function MobileSidebar() {
  const onOpen = useMobileSidebar(state => state.onOpen);
  const onClose = useMobileSidebar(state => state.onClose);
  const isOpen = useMobileSidebar(state => state.isOpen);

  return (
    <>
      <Button
        onClick={onOpen}
        className="block md:hidden"
        variant={"ghost"}
        size={"sm"}
      >
        <Menu className="h-4 w-4" />
      </Button>
      <Sheet
        open={isOpen}
        onOpenChange={onClose}
      >
        <SheetContent
          side={"right"}
          className="p-2 pt-10"
        >
          <NavigationBar />
        </SheetContent>
      </Sheet>
    </>
  );
}
