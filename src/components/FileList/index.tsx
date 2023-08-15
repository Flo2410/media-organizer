"use client";

import { nanoid } from "nanoid";
import { useEffect, useState } from "react";

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
    <div className="flex flex-col">
      {files.map((file) => (
        <div key={nanoid()}>{file}</div>
      ))}
    </div>
  );
};
