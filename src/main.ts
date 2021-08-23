import * as core from '@actions/core'
import * as exec from '@actions/exec'

async function run(): Promise<void> {
  try {
    // Qt installer assumes basic requirements that are not installed by
    // default on Ubuntu.
    if (process.platform === 'linux') {
      await exec.exec('sudo apt-get update')
      await exec.exec(
        'sudo apt-get install -y libdbus-1-3 libxkbcommon-x11-0 libxcb-icccm4 libxcb-image0 libxcb-keysyms1 libxcb-randr0 libxcb-render-util0 libxcb-xinerama0 libxcb-xinput0 libxcb-xfixes0'
      )
    }
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
