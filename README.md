
# vscode-pug-formatter

> [vscode-pug-formatter](https://github.com/ducfilan/vscode-pug-formatter) plugin for VS Code.

## Install

  * Press `F1` and select `Extensions: Install Extensions`.
  * Search for and select `pug-formatter`.

See the [extension installation guide](https://code.visualstudio.com/docs/editor/extension-gallery) for details.

## Usage

  * Press `Alt+Shift+F` to format the openning pug file or;
  * Right click and select "Format Document".

## Supported languages

  * Jade
  * Pug

## Options
  * `fill_tab` - `enum` (`default`, `yes`, `no`), fill whether tab or space, default `default` (current document default setting).
  * `omit_div` - `boolean`, whether omit 'div' tag, default `false`.
  * `tab_size` - `number`, when 'fill_tab' is `false`, fill 'tab_size' spaces, default `4`.
  * `separator_space` - `boolean`, When 'separator_space' is `true`, the attribute separator is comma, default `true`.
  * `omit_empty_lines` - When 'separator_space' is `false`, delete line blank, default `true`.

## License
This software is released under the terms of the MIT license.
