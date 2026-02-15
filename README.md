- `git clone https://github.com/lindi0v/neutralinojs-vite-vanjs-starter.git`
- `cd src-fe`
- `npm i`
- `cd .. && neu update && neu run`

Questions:

1. In `main.ts`, the `onReady` callback works as expected. But `windowClose` doesn’t seem to fire at all. I also tried running the Neutralino app without the Vite dev server (i.e., I ran `vite build` manually and pointed Neutralino to the Vite-built `dist` folder). The problem was the same.

2. `modes.window.openInspectorOnStartup` doesn’t work.

3. What’s the best way to automatically stop the Vite dev server when the app is closed?

I'm using macOS 26.2