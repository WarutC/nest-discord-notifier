import * as fs from 'fs';

export function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const isInDocker = (): boolean => {
  try {
    // Check for Docker-specific files
    const isInDocker =
      fs.existsSync('/.dockerenv') ||
      fs.readFileSync('/proc/1/cgroup', 'utf8').includes('docker');
    console.log('Is run in docker: ', isInDocker);

    return isInDocker;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (_err) {
    return false;
  }
};
