import 'zx/globals'

const main = async () => {
  if (!(await fs.pathExists('../public'))) {
    echo`../public is not found.`
    return
  }

  try {
    await $`git add -A`
    await $`git stash save -m 'stash by deploy.ts'`

    await $`touch ../public/.nojekyll`
    echo`tar zcvf /tmp/aiya000.github.io.tar.gz ../public`
    await $`tar zcvf /tmp/aiya000.github.io.tar.gz ../public`.quiet()
    cd('..')
    await $`git switch public`

    const codePaths = (await $`ls`)
      .toString()
      .split('\n')
      .filter((x) => x !== '.git' && x !== '')
    for (path of codePaths) {
      await $`rm -rf ${path}`
    }
    echo`tar zxvf /tmp/aiya000.github.io.tar.gz`
    await $`tar zxvf /tmp/aiya000.github.io.tar.gz`.quiet()
    await $`rm /tmp/aiya000.github.io.tar.gz`

    await $`git add -A`
    const date = await $`date`
    await $`git commit -m "${date}"`

    await $`git push -u origin public`
    echo`Success!`
  } finally {
    await $`git switch main`
  }
}

main()
