use actions_toolkit_sys::*;
use js_sys::JsString;
use std::error::Error;
use wasm_bindgen::prelude::*;

#[wasm_bindgen(start)]
pub fn main() -> Result<(), JsValue> {
    // Perhaps we need a hook that calls core::set_failed() on panic.
    // This would make sure the action outputs an error command for
    // the runner and returns exit code 1.
    set_panic_hook();

    // Unhandled errors raised by the action call set_failed to output
    // an error command for the runner and return exit code 1.
    if let Err(e) = run() {
        let msg = format!("{}", e);
        unsafe {
            core::set_failed(&JsString::from(msg));
        }
    }
    Ok(())
}

fn run() -> Result<(), Box<dyn Error>> {
    // Get the action input.
    let actor = unsafe { core::get_input(&"actor".into(), None) }
        .as_string()
        .unwrap_or_default();

    // Greet the workflow actor.
    let greeting = format!("Hello {}!", &actor);
    unsafe {
        core::info(&greeting.into());
    }

    // Set the action output.
    unsafe {
        core::set_output(&"result".into(), &"success".into());
    }

    Ok(())
}

pub fn set_panic_hook() {
    // When the `console_error_panic_hook` feature is enabled, we can call the
    // `set_panic_hook` function at least once during initialization, and then
    // we will get better error messages if our code ever panics.
    //
    // For more details see
    // https://github.com/rustwasm/console_error_panic_hook#readme
    #[cfg(feature = "console_error_panic_hook")]
    console_error_panic_hook::set_once();
}
