import git from "/Users/jeena/.local/share/git-tools/node_modules/isomorphic-git/index.js";
import http from "/Users/jeena/.local/share/git-tools/node_modules/isomorphic-git/http/node/index.cjs";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dir = __dirname;
const token = process.argv[2] || process.env.GITHUB_TOKEN;

async function runPull() {
  console.log("Checking and pulling latest changes from https://github.com/mohit1793dopa/fusecraft.com.git ...");
  try {
    const currentOid = await git.resolveRef({ fs, dir, ref: "main" });
    console.log("Current local commit SHA:", currentOid);

    await git.pull({
      fs,
      http,
      dir,
      ref: "main",
      singleBranch: true,
      author: {
        name: "Mohit",
        email: "mohit@fusecrafts.com",
      },
      onAuth: token ? () => ({ username: token }) : undefined,
    });

    const newOid = await git.resolveRef({ fs, dir, ref: "main" });
    console.log("Pull complete! Current commit SHA:", newOid);
    if (currentOid === newOid) {
      console.log("Already up to date. Local and remote are completely in sync.");
    } else {
      console.log("Updated to latest commit successfully!");
    }
  } catch (err) {
    console.error("Pull failed:", err.message);
    process.exit(1);
  }
}

runPull();
