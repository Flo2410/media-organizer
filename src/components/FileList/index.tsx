"use client";

import { useEffect } from "react";

export const FileList = () => {
  useEffect(() => {
    const load = async () => {
      const { appWindow } = await import("@tauri-apps/api/window");

      appWindow.listen("filelist_update", (e) => {
        console.log(e.payload);
      });
    };

    load();
  }, []);

  return <div>FileList</div>;
};
