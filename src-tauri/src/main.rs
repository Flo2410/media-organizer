// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

// use tauri::Manager;

fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![greet])
    // Open DevTools on startup
    // .setup(|app| {
    //   #[cfg(debug_assertions)] // only include this code on debug builds
    //   {
    //     let window = app.get_window("main").unwrap();
    //     window.open_devtools();
    //   }
    //   Ok(())
    // })
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}

#[tauri::command]
fn greet(name: &str) -> String {
  format!("Hello, {}!", name)
}
