import * as vscode from 'vscode';
import * as pugBeautify from './pug-beautify';

const fillTabOptions = {
	default: "default",
	yes: "yes",
	no: "no"
};

export function activate(context: vscode.ExtensionContext) {
	vscode.languages.registerDocumentFormattingEditProvider('jade', {
		provideDocumentFormattingEdits(document: vscode.TextDocument): vscode.TextEdit[] {

			const text = document.getText();
			const options = getBeautifyOptions();

			let result = '';
			try {
				result = pugBeautify.default(text, options);
			} catch (err) {
				vscode.window.showErrorMessage(err);
			}

			const lastLine = document.lineAt(document.lineCount - 1);
			const start = new vscode.Position(0, 0);
			const end = new vscode.Position(document.lineCount - 1, lastLine.text.length);
			const range = new vscode.Range(start, end);

			return [vscode.TextEdit.replace(range, result)];
		}
	});
}

function getBeautifyOptions() {
	const editorConfig = <any>vscode.workspace.getConfiguration('pugFormatter');

	let defaultSettings = {
		tabSize: 2,
		fillTab: false
	};

	const editor = vscode.window.activeTextEditor;
	if (editor) {
		defaultSettings.tabSize = editor.options.tabSize as number;
		defaultSettings.fillTab = !(editor.options.insertSpaces as boolean);
	}

	return {
		fill_tab: editorConfig.fillTab === fillTabOptions.default ? defaultSettings.fillTab : (editorConfig.fillTab === fillTabOptions.yes),
		remove_div: editorConfig.removeDiv,
		tab_size: editorConfig.tabSize || defaultSettings.tabSize,
		separator_space: editorConfig.separatorSpace,
		allow_empty_lines: editorConfig.allowEmptyLines
	};
}

export function deactivate() { }
