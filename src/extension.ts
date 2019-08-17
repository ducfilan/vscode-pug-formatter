import * as vscode from 'vscode';
import * as pugBeautify from 'pug-beautify';

export function activate(context: vscode.ExtensionContext) {
	vscode.languages.registerDocumentFormattingEditProvider('jade', {
		provideDocumentFormattingEdits(document: vscode.TextDocument): vscode.TextEdit[] {
			let tabSize = 2;
			let insertSpaces = true;
			const editor = vscode.window.activeTextEditor;
			if (editor) {
				tabSize = editor.options.tabSize as number;
				insertSpaces = editor.options.insertSpaces as boolean;
			}

			const editorConfig = <any>vscode.workspace.getConfiguration('pugFormatter');

			const text = document.getText();
			const options = {
				fill_tab: editorConfig.fillTab || insertSpaces,
				omit_div: editorConfig.omitDiv,
				tab_size: editorConfig.tabSize || tabSize
			};

			let result = '';
			try {
				result = pugBeautify(text, options);
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

export function deactivate() { }
