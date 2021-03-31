// /* eslint no-undef: 0  */
// import { takeScreenshot } from '../src/utils/screenshot';
// describe('screenshot', () => {
//   beforeEach(async () => {
//     await device.reloadReactNative();
//   });
//   it('should take screenshots', async () => {
//     takeScreenshot('Home');
//     await expect(element(by.id('SETTINGS_BUTTON'))).toBeVisible();
//     await element(by.id('SETTINGS_BUTTON')).tap();
//     takeScreenshot('Settings');
//   });
// });

/* eslint no-undef: 0  */
const { execSync } = require('child_process');

const OPTIONS = {
  timeout: 10000,
  killSignal: 'SIGKILL',
};

describe('screenshot', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });
  it('should take screenshots', async () => {
    const fileName = 'abc.png';
    execSync(
      `xcrun simctl io booted screenshot $(pwd)/fastlane/screenshots/${fileName}`,
      OPTIONS,
    );
  });
});

// export const takeScreenshot = (name) => {
//   const fileName = `${name}.png`;
//   if (device.getPlatform() === 'android') {
//     execSync(`adb shell screencap /sdcard/${fileName}`, OPTIONS);
//     execSync(
//       `adb pull /sdcard/${fileName} $(pwd)/fastlane/screenshots/`,
//       OPTIONS,
//     );
//   } else {
//     execSync(
//       `xcrun simctl io booted screenshot $(pwd)/fastlane/screenshots/${fileName}`,
//       OPTIONS,
//     );
//   }
// };
