"use client";

import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { FileListItem } from "./FileListItem";
import { ScrollArea } from "@components/ui/scroll-area";

export const FileList = () => {
  const [files, setFiles] = useState<string[]>([]);

  useEffect(() => {
    const load = async () => {
      const { appWindow } = await import("@tauri-apps/api/window");

      appWindow.listen("filelist_update", (e) => {
        const files = e.payload as string[];
        setFiles(files);
      });
    };

    load();
  }, []);

  return (
    <ScrollArea className="rounded-md border">
      <ol className="p-4">
        {files.map((file) => (
          <FileListItem key={nanoid()} file_path={file} />
        ))}
      </ol>
    </ScrollArea>
  );
};
