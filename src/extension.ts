import * as vscode from 'vscode';
import Weather from './weather';

/**
 * activate plugins
 * @param context 
 */
export function activate(context: vscode.ExtensionContext) {
	// query weather
	Weather(context);
	// set clock
}

// this method is called when your extension is deactivated
export function deactivate() { }
