wit_bindgen::generate!({
    world: "window",
    with: { "wasi:io/poll@0.2.0": wasi::io::poll, }
});

use crate::something::browser::global;

struct MyComponent;

impl Guest for MyComponent {
    fn start() {
        let document = global::get_window().document().unwrap();
        let button = document.query_selector("button").unwrap();
        wasi::io::poll::poll(&vec![&button.onclick_subscribe()]);
        button.set_text_content("Clicked!");
    }
}

export!(MyComponent);
