#[tauri::command]
pub async fn select_folder(window: tauri::Window, path: &str) -> Result<(), tauri::Error> {
  println!("path: {path}");

  let files = vec![path];

  window.emit("filelist_update", files)
}
