### compile a Rust example
```shell
cargo build --release --target wasm32-unknown-unknown
wasm-tools component new ./target/wasm32-unknown-unknown/release/basic_pollable.wasm -o ./target/component.wasm
jco transpile ./target/component.wasm -o . --map 'something:browser/global=./imports.js#global' --map 'wasi:io/poll=./poll.js#poll'
```

### Server the example
E.g. the python http server:
```shell
python -m http.server
```
