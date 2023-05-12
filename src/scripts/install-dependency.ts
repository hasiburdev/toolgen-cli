import { spawn } from "child_process";

export const installDependencies = async () => {
  const childProcess = spawn(
    "pnpm",
    ["add", "-D", "eslint", "prettier", "eslint-config-prettier"],
    {
      stdio: "inherit",
    },
  );

  childProcess.stdout?.on("data", (data) => {
    console.log(`stdout: ${data.toString()}`);
  });

  childProcess.stderr?.on("data", (data) => {
    console.log(`stderr: ${data.toString()}`);
  });

  childProcess.on("error", (error) => {
    console.log(`error: ${error.message}`);
  });

  childProcess.on("close", (code) => {
    console.log(`child process exited with code ${code}`);
  });
};
