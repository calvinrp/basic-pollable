wit_bindgen::generate!({
    world: "window",
    generate_all,
});

use crate::something::browser::global;

struct MyComponent;

impl Guest for MyComponent {
    fn start() {
        let document = global::get_window().document().unwrap();
        let button = document.query_selector("button").unwrap();
        wasi::io::poll::poll(&[&button.onclick_subscribe()]);
        button.set_text_content("Clicked!");
    }
}

export!(MyComponent);
