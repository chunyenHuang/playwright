/**
 * Copyright (c) Microsoft Corporation.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const {helper} = require('./lib/helper');
const api = require('./lib/api');
const packageJson = require('./package.json');
const { DeviceDescriptors } = require('./lib/deviceDescriptors');

for (const className in api) {
  if (typeof api[className] === 'function')
    helper.installApiHooks(className, api[className]);
}

module.exports = {
  chromium: new api.ChromiumPlaywright(__dirname, packageJson.playwright.chromium_revision),
  firefox: new api.FirefoxPlaywright(__dirname, packageJson.playwright.firefox_revision),
  webkit: new api.WebKitPlaywright(__dirname, packageJson.playwright.webkit_revision),
  devices: DeviceDescriptors
};
