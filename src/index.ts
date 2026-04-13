#!/usr/bin/env bun
import { Clipse } from "clipse";
import packagejson from "../package.json";
import checkVersion from "./utils/checkVersion";
import setupCmd from "./commands/setup";
import checkCmd from "./commands/check";

const { log } = console;

log(`
  ▄▄▄▄·      ▄█▀▄
  ▐█ ▀█▄▄█▀▄▐█▌.▐▄█▀▄
  ▐█▀▀█▐█▌.▐▪▀█▄▀█▌.▐
  ██▄▪▐ ▀█▄▀     ▀█▄▀
  ·▀▀▀▀  v${packagejson.version}`);

await checkVersion(packagejson.version);

const booo = new Clipse(
  "booo",
  `
  Booo means Bun, OpenCode, OpenSpec and Obsidian.
  It setups your project with skills, rules, ...
`,
  packagejson.version,
);
booo
  .addSubcommands([setupCmd, checkCmd])
  .action(() => {
    log("use a command");
  })
  .ready();
