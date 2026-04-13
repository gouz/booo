import { Clipse } from "clipse";

const checkCmd = new Clipse("check", "verify required tools are installed");

async function isInstalled(command: string): Promise<boolean> {
  const proc = Bun.spawn(["which", command]);
  await proc.exited;
  return proc.exitCode === 0;
}

checkCmd.action(async () => {
  const tools = [
    { name: "opencode", version: ["opencode", "--version"] },
    { name: "obsidian", version: ["obsidian", "--version"] },
    { name: "openspec", version: ["openspec", "--version"] },
  ];

  const results = await Promise.all(
    tools.map(async (tool) => {
      const installed = await isInstalled(tool.name);
      let version = "";
      if (installed) {
        const proc = Bun.spawn(tool.version);
        const output = await new Response(proc.stdout).text();
        version = output.trim().split("\n")[0] || "";
      }
      return { name: tool.name, installed, version };
    }),
  );

  const allInstalled = results.every((r) => r.installed);

  if (allInstalled) {
    console.log(
      "All required tools are installed:\n" +
        results.map((r) => `  - ${r.name}: ${r.version}`).join("\n"),
    );
  } else {
    console.log(
      "Missing required tools:\n" +
        results
          .filter((r) => !r.installed)
          .map((r) => `  - ${r.name}`)
          .join("\n"),
    );
    process.exit(1);
  }
});

export default checkCmd;
