import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	// Open This Folder command
	const openThisFolderCommand = vscode.commands.registerCommand('open-this-folder.openThisFolder', async (uri: vscode.Uri) => {
		if (uri && uri.fsPath) {
			const folderUri = vscode.Uri.file(uri.fsPath);

			const success = await vscode.commands.executeCommand('vscode.openFolder', folderUri, false); // false = open in current window

			if (!success) {
				vscode.window.showErrorMessage('Could not open folder in current window.');
			}
		} else {
			vscode.window.showErrorMessage('No folder clicked.');
		}
	});

	context.subscriptions.push(openThisFolderCommand);
}

export function deactivate() {}
