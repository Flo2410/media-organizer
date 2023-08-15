"use client";

import { MouseEvent, useState } from "react";
import { videoDir } from "@tauri-apps/api/path";
import { open } from "@tauri-apps/api/dialog";
import { invoke } from "@tauri-apps/api/tauri";

export const FileSelect = () => {
  const [file_path, setFilePath] = useState<string>();

  const handleFileInput = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    openFolder();
  };

  const openFolder = async () => {
    // Open a selection dialog for directories
    const selected = await open({
      directory: true,
      multiple: false,
      defaultPath: await videoDir(),
    });

    if (Array.isArray(selected)) {
      // user selected multiple directories
      // This is disabled
    } else if (selected === null) {
      // user cancelled the selection
      console.log("none");
    } else {
      // user selected a single directory
      setFilePath(selected);

      await invoke<string>("select_folder", { path: selected }).catch(
        console.error
      );
    }
  };

  return (
    <div className="flex flex-col">
      <button onClick={handleFileInput}>
        <div className="flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300">
          <span className="px-1">Choose Folder</span>
          <span className="px-1">{file_path ?? "No folder selected"}</span>
        </div>
      </button>
    </div>
  );
};
