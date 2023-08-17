import { Separator } from "@components/ui/separator";
import clsx from "clsx";
import { HTMLAttributes, forwardRef } from "react";

export interface FileListItemProps
  extends Omit<HTMLAttributes<HTMLLIElement>, "children"> {
  file_path: string;
}

const FileListItem = forwardRef<HTMLLIElement, FileListItemProps>(
  ({ className, file_path, ...props }) => {
    return (
      <>
        <li
          className={clsx("cursor-default", className)}
          title={file_path}
          {...props}
        >
          <span>{file_path.split("/").pop()}</span>
        </li>

        <Separator className="my-2 last:hidden" />
      </>
    );
  },
);

FileListItem.displayName = "FileListItem";

export { FileListItem };
