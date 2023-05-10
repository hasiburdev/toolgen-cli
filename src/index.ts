#! /usr/bin/env node

import { readFile, writeFile } from "fs/promises";
import { join } from "path";

const main = async () => {
  console.log(
    "Welcome to Toolgen! It is a tool to generate config files for your project."
  );
  console.log(process.cwd());
  const eslintConfigFile = await readFile(
    join(__dirname, "./template/eslint.config.json"),
    "utf-8"
  );
  const prettierConfigFile = await readFile(
    join(__dirname, "./template/prettier.config.js"),
    "utf-8"
  );

  await writeFile(join(process.cwd(), ".eslintrc.json"), eslintConfigFile);
  await writeFile(join(process.cwd(), ".prettierrc.json"), prettierConfigFile);
};

main();
