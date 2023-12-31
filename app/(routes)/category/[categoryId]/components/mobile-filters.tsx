"use client";

import Button from "@/app/components/ui/Button";
import IconButton from "@/app/components/ui/icon-button";
import { Color, Size } from "@/types";
import { Dialog } from "@headlessui/react";
import { Plus, X } from "lucide-react";
import React, { useState } from "react";
import Fillter from "./filter";

interface MobilFiltersProps {
    sizes: Size[];
    colors: Color[];
}
const MobilFilters: React.FC<MobilFiltersProps> = ({ sizes, colors }) => {
    const [open, setOpen] = useState(false);
    const onOpen = () => setOpen(true);
    const onClose = () => setOpen(false);
    return (
        <div className="lg:hidden">
            <Button onClick={onOpen} className="flex items-center gap-x-2 ">
                Filters
                <Plus size={20} />
            </Button>
            <Dialog
                open={open}
                as="div"
                className="relative z-40 lg:hidden"
                onClose={onClose}
            >
                <div className="fixed inset-0 bg-black bg-opacity-25" />
                <div className="fixed inset-0 z-40 flex">
                    <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pg-6 shadow-xl">
                        <div className="flex items-center justify-end px-4 ">
                            <IconButton icon={<X size={15} />} onClick={onClose} />
                        </div>
                        {/* render filter */}
                        <div className="p-4">
                            <Fillter valueKey="sizeId" name="Sizes" data={sizes} />
                            <Fillter valueKey="colorId" name="Colors" data={colors} />
                        </div>
                    </Dialog.Panel>
                </div>
            </Dialog>
        </div>
    );
};

export default MobilFilters;
