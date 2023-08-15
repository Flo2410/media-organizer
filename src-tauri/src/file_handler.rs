#[tauri::command]
pub fn select_folder(path: &str) {
  println!("path: {path}");
}
