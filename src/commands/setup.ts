import { confirm, intro, log, outro, spinner } from "@clack/prompts";
import { Clipse } from "clipse";
import devcontainerRule from "../templates/rules/devcontainer.md";
import obsidianRule from "../templates/rules/obsidian.md";

const setupCmd = new Clipse("setup", "configure your projec");
setupCmd.action(async () => {
  const s = spinner();
  intro(`booo your project`);
  s.start("Initialize Openspec");
  const proc = Bun.spawn(["openspec", "init", "--tools", "opencode"]);
  await proc.exited;
  s.stop("Openspec initialized");
  const useDevContainer = await confirm({
    message: "Do you want to use devContainer?",
    initialValue: false,
  });
  if (useDevContainer) {
    await Bun.write(
      `${process.cwd()}/.opencode/rules/devcontainer.md`,
      devcontainerRule,
    );
  }
  log.message("Install Obsidian rule");
  await Bun.write(`${process.cwd()}/.opencode/rules/obsidian.md`, obsidianRule);
  outro(`You're all set!`);
});

export default setupCmd;
