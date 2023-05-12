#! /usr/bin/env node

import {
  installDependencies,
  writeConfigFile,
  updatePackageJson,
} from "./scripts";

const main = async () => {
  console.log(
    "Welcome to Toolgen! It is a tool to generate config files for your project.",
  );
  console.log(process.cwd());
  await writeConfigFile();
  await updatePackageJson();
  installDependencies();
};

main();
