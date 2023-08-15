use std::{
  fs::{self},
  path::PathBuf,
};

#[tauri::command]
pub async fn select_folder(window: tauri::Window, path: &str) -> Result<(), tauri::Error> {
  let file_paths = fs::read_dir(path)?;

  let files: Vec<PathBuf> = file_paths
    .filter_map(|entry| {
      let dir_entry = entry.ok()?;
      let path = dir_entry.path();

      if path.is_file() {
        Some(path)
      } else {
        None
      }
    })
    .collect();

  window.emit("filelist_update", files)
}
