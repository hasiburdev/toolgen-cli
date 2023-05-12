import { readFile, writeFile } from "fs/promises";
import { join } from "path";

export const writeConfigFile = async () => {
  const eslintConfigFile = await readFile(
    join(__dirname, "../template/.eslintrc.cjs"),
    "utf-8",
  );
  const prettierConfigFile = await readFile(
    join(__dirname, "../template/prettier.config.cjs"),
    "utf-8",
  );

  await writeFile(join(process.cwd(), ".eslintrc.cjs"), eslintConfigFile);
  await writeFile(
    join(process.cwd(), "prettier.config.cjs"),
    prettierConfigFile,
  );
};
