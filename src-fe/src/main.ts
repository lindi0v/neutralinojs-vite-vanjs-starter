import { filesystem, os, events, app, init } from "@neutralinojs/lib";
import v from 'vanjs-core';
import { App } from './App';

const onReady = async () => {
  const key = window.NL_OS == "Windows" ? "USERNAME" : "USER";

  // Works fine
  app.writeProcessOutput("\n***********START***********\n\n");

  try {
    const data = await filesystem.readDirectory("./");
    const userName = await os.getEnv(key);

    console.log("Current dir data:", data);
    console.log('userName: ', userName);
  } catch (err) {
    console.log(err);
  }
};

init();

events.on("ready", onReady);

events.on("windowClose", () => {
  // Doesn't work
  app.writeProcessOutput("\n***********EXIT***********\n");
  app.exit();
});

v.add(document.body, App());
