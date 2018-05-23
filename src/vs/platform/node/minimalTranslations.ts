/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import * as path from 'path';
import uri from 'vs/base/common/uri';
import { localize } from 'vs/nls';

// @ts-ignore This const is only here to enable the localization of given string
const choiceNever = localize('neverShowAgain', "Don't Show Again");

// @ts-ignore This const is only here to enable the localization of given string
const searchMarketplace = localize('searchMarketplace', "Search Marketplace");

// @ts-ignore This const is only here to enable the localization of given string
const searchForLanguagePacks = localize('searchForLanguagePacks', "The Marketplace has extensions that can localize VS Code using the {0} language.", "Placeholder language");

// @ts-ignore This const is only here to enable the localization of given string
const install = localize('install', "Install");

const rootPath = path.dirname(uri.parse(require.toUrl('')).fsPath);
const minimalTranslationsJsonPath = path.join(rootPath, 'minimalTranslations.json');
export default require.__$__nodeRequire(minimalTranslationsJsonPath) as JSON;

