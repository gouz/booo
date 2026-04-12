import { confirm, intro, log, outro, spinner } from "@clack/prompts";
import { Clipse } from "clipse";
import agentsMD from "../templates/AGENTS.md" with { type: "text" };
import sorcSkill from "../templates/skills/obsidian-cli/references/command-reference.md" with { type: "text" };
import sosSkill from "../templates/skills/obsidian-cli/SKILL.md" with { type: "text" };
import conventionalCommitsRule from "../templates/rules/conventional-commits.md" with { type: "text" };
import devcontainerRule from "../templates/rules/devcontainer.md" with { type: "text" };
import devPracticesRule from "../templates/rules/dev-practices.md" with { type: "text" };
import obsidianRule from "../templates/rules/obsidian.md" with { type: "text" };
import testingRule from "../templates/rules/testing.md" with { type: "text" };

type files = {
  question?: string;
  file: string;
  content: string;
};

const rules: files[] = [
  {
    question: "Do you want to use devContainer?",
    file: "devcontainer",
    content: devcontainerRule,
  },
  {
    question: "Do you want to use conventional commits?",
    file: "conventional-commits",
    content: conventionalCommitsRule,
  },
];

const skills: files[] = [
  {
    file: "obsidian-skills/skills/obsidian-cli/references/command-reference.md",
    content: sorcSkill,
  },
  {
    file: "obsidian-skills/skills/obsidian-cli/SKILL.md",
    content: sosSkill,
  },
];

const setupCmd = new Clipse("setup", "configure your projec");
setupCmd.action(async () => {
  const s = spinner();
  intro(`booo your project`);
  s.start("Initialize Openspec");
  const proc = Bun.spawn(["openspec", "init", "--tools", "opencode"]);
  await proc.exited;
  s.stop("Openspec initialized");
  s.start("Write rules");
  for await (const r of rules) {
    if (r.question) {
      const use = await confirm({
        message: r.question,
        initialValue: false,
      });
      if (use) {
        await Bun.write(
          `${process.cwd()}/.opencode/rules/${r.file}.md`,
          r.content,
        );
      }
    }
  }
  log.message("Install Obsidian rule");
  await Bun.write(`${process.cwd()}/.opencode/rules/obsidian.md`, obsidianRule);
  log.message("Install Testing rule");
  await Bun.write(`${process.cwd()}/.opencode/rules/testing.md`, testingRule);
  log.message("Install Dev Practices");
  await Bun.write(
    `${process.cwd()}/.opencode/rules/dev-practices.md`,
    devPracticesRule,
  );
  s.stop("Rules written");
  log.message("Add AGENTS.md");
  await Bun.write(`${process.cwd()}/AGENTS.md`, agentsMD);
  s.start("Obsidian skills installation");
  const proc_obs = Bun.spawn([
    "git",
    "clone",
    "https://github.com/kepano/obsidian-skills.git",
    "./.opencode/skills/obsidian-skills",
  ]);
  await proc_obs.exited;
  s.stop("Obsidian skills installed");
  s.start("Write skills");
  for await (const s of skills) {
    await Bun.write(
      `${process.cwd()}/.opencode/skills/${s.file}.md`,
      s.content,
    );
  }
  s.stop("Skills written");
  outro(`You're all set!`);
});

export default setupCmd;
