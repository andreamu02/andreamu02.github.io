// Pulls the writeups (which live in a SEPARATE repo) into src/content/writeups
// so the content collection can read them. Runs automatically before dev/build
// via the predev/prebuild npm hooks, and mirrors what CI does.
//
// Change WRITEUPS_REPO if you rename the repo. If you ever make it private,
// switch the URL to an authenticated form and provide a token in CI.
import { execSync } from 'node:child_process';
import { existsSync } from 'node:fs';

const WRITEUPS_REPO = 'https://github.com/andreamu02/writeups.git';
const DEST = 'src/content/writeups';

function run(cmd) {
  execSync(cmd, { stdio: 'inherit' });
}

try {
  if (existsSync(`${DEST}/.git`)) {
    // In CI the repo was just cloned by the workflow step; skip the extra pull.
    if (!process.env.CI) {
      run(`git -C ${DEST} pull --ff-only`);
    }
  } else {
    run(`git clone --depth 1 ${WRITEUPS_REPO} ${DEST}`);
  }
} catch (err) {
  console.warn(`[fetch-writeups] could not fetch writeups: ${err.message}`);
  console.warn('[fetch-writeups] building without external writeups.');
}

