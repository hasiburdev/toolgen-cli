import { readFile, writeFile } from "fs/promises";
import { join } from "path";

import { FORMAT_COMMAND, LINT_COMMAND, LINT_FIX_COMMAND } from "../commands";

export const updatePackageJson = async () => {
  const file = await readFile(join(process.cwd(), "./package.json"), "utf-8");

  let packageFile;
  try {
    packageFile = JSON.parse(file);
  } catch (error) {
    console.log(`
    Couldn't write command to package.json!\n
    Add them manually!\n\n
    \t"lint": ${LINT_COMMAND},\n
    \t"lint:fix": ${LINT_FIX_COMMAND},\n
    \t"format": ${FORMAT_COMMAND}\n\n
    `);
  }

  if (!packageFile?.scripts.lint) {
    packageFile.scripts.lint = LINT_COMMAND;
  }

  if (!packageFile?.scripts["lint:fix"]) {
    packageFile.scripts["lint:fix"] = LINT_FIX_COMMAND;
  }
  if (!packageFile?.scripts.format) {
    packageFile.scripts.format = FORMAT_COMMAND;
  }

  await writeFile(
    join(process.cwd(), "package.json"),
    JSON.stringify(packageFile),
  );
};
