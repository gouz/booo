#!/usr/bin/env bun
import { Clipse } from "clipse";
import packagejson from "../package.json";
import checkVersion from "./utils/checkVersion";
import setupCmd from "./commands/setup";

const { log } = console;

log(`👻 Booo v${packagejson.version}`);

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
  .addSubcommands([setupCmd])
  .action(() => {
    log("use a command");
  })
  .ready();
