
# vscode-pug-formatter

> [pug-formatter](https://github.com/ducfilan/pug-formatter) plugin for VS Code.

## Install

  * Press `F1` and select `Extensions: Install Extensions`.
  * Search for and select `pug-formatter`.

See the [extension installation guide](https://code.visualstudio.com/docs/editor/extension-gallery) for details.

## Usage

Press `Alt+Shift+F` to format the openning pug file or;
Right click and select "Format Document".

## Supported languages

  * Jade
  * Pug

## Supported settings

**pugFormatter.fillTab**

  * Type: `Boolean|null`
  * Default: Obtained from the current document (`null`)

Indent with Tabs, if false, with spaces.

**pugFormatter.omitDiv**

  * Type: `Boolean`
  * Default: `false`

Omit div tag when it has id or class.

**pugFormatter.fillTab**

  * Type: `Boolean|null`
  * Default: Obtained from the current document (`null`)

When `fillTab` is false, fill `tabSize` spaces.

## License
This software is released under the terms of the MIT license.
