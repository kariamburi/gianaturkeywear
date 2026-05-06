"use client";

import { useTransition } from "react";
import { usePathname } from "next/navigation";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
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

import { deleteProduct } from "@/lib/actions/ad.product";

type deleteProps = {
  adId: string;
  imageUrls: string[];
  onDeleted?: () => void;
};

export const DeleteConfirmation = ({ adId, imageUrls, onDeleted }: deleteProps) => {
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button type="button" className="cursor-pointer hover:text-red-400">
          <DeleteOutlineOutlinedIcon />
        </button>
      </AlertDialogTrigger>

      <AlertDialogContent className="bg-white">
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure you want to delete?</AlertDialogTitle>
          <AlertDialogDescription className="p-regular-16 text-grey-600">
            This will permanently delete this product.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>

          <AlertDialogAction
            disabled={isPending}
            onClick={() =>
              startTransition(async () => {
                const deleted = await deleteProduct({
                  adId,
                  deleteImages: imageUrls || [],
                  path: pathname,
                });

                if (deleted) {
                  onDeleted?.();
                }
              })
            }
          >
            {isPending ? "Deleting..." : "Delete"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};