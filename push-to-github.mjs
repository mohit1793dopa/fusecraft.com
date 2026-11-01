import git from "/tmp/git-test/node_modules/isomorphic-git/index.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dir = __dirname;
const token = process.argv[2] || process.env.GITHUB_TOKEN;

if (!token) {
  console.error("\x1b[31mError: No GitHub Personal Access Token provided.\x1b[0m");
  console.log("\nUsage:");
  console.log("  node push-to-github.mjs <YOUR_GITHUB_TOKEN>");
  console.log("  or: GITHUB_TOKEN=<YOUR_GITHUB_TOKEN> node push-to-github.mjs\n");
  console.log("Create a token at: https://github.com/settings/tokens (select 'repo' scope)");
  process.exit(1);
}

// High-performance streaming HTTP client using native Node fetch
const customHttp = {
  async request({ url, method = "GET", headers = {}, body }) {
    let reqBody = undefined;
    if (body) {
      const chunks = [];
      let total = 0;
      for await (const chunk of body) {
        chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
        total += chunk.length;
      }
      reqBody = Buffer.concat(chunks, total);
      headers["content-length"] = reqBody.length.toString();
    }

    const res = await fetch(url, {
      method,
      headers,
      body: reqBody,
      duplex: reqBody ? "half" : undefined,
    });

    const ab = await res.arrayBuffer();
    const resBuf = Buffer.from(ab);

    const resHeaders = {};
    for (const [k, v] of res.headers.entries()) {
      resHeaders[k.toLowerCase()] = v;
    }

    return {
      url: res.url,
      method,
      statusCode: res.status,
      statusMessage: res.statusText,
      headers: resHeaders,
      body: (async function* () {
        yield resBuf;
      })(),
    };
  },
};

async function runPush() {
  console.log("Pushing main branch to https://github.com/mohit1793dopa/fusecraft.com.git ...");
  try {
    const res = await git.push({
      fs,
      http: customHttp,
      dir,
      url: "https://github.com/mohit1793dopa/fusecraft.com.git",
      ref: "main",
      remoteRef: "refs/heads/main",
      force: false,
      onAuth: () => ({
        username: token,
      }),
    });
    console.log("\x1b[32mSuccessfully pushed to GitHub!\x1b[0m");
    console.log("Result:", JSON.stringify(res, null, 2));
  } catch (err) {
    console.error("\x1b[31mPush failed:\x1b[0m", err.message);
    if (err.data) console.error(err.data);
    process.exit(1);
  }
}

runPush();
