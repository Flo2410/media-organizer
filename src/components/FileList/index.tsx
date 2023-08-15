"use client";

import { appWindow } from "@tauri-apps/api/window";

export const FileList = () => {
  appWindow.listen("filelist_update", (e) => {
    console.log(e.payload);
  });

  return <div>FileList</div>;
};
