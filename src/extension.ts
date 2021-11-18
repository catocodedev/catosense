import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	const consolecom = vscode.languages.registerCompletionItemProvider('cato', {

		provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext) {

			// a simple completion item which inserts `%` for comments
			const simpleCompletion = new vscode.CompletionItem('%');
			simpleCompletion.insertText = new vscode.SnippetString('%');
			simpleCompletion.documentation = new vscode.MarkdownString("comment line");

			// a completion item that inserts its text as snippet,
			// the `insertText`-property is a `SnippetString` which will be
			// honored by the editor.
			const snippetCompletion = new vscode.CompletionItem('console.send |""|');
			snippetCompletion.insertText = new vscode.SnippetString('console.send |"meow"|');
			snippetCompletion.documentation = new vscode.MarkdownString("meow send whatever is inside the quotes");

			// a completion item that can be accepted by a commit character,
			// the `commitCharacters`-property is set which means that the completion will
			// be inserted and then the character will be typed.
			const commitCharacterCompletion = new vscode.CompletionItem('console.');
			commitCharacterCompletion.commitCharacters = ['.'];
			commitCharacterCompletion.documentation = new vscode.MarkdownString('Press `.` to get `console.`');

			// 
			

			// a completion item that retriggers IntelliSense when being accepted,
			// the `command`-property is set which the editor will execute after 
			// completion has been inserted. Also, the `insertText` is set so that 
			// a space is inserted after `new`
			const commandCompletion = new vscode.CompletionItem('%');
			commandCompletion.kind = vscode.CompletionItemKind.Keyword;
			commandCompletion.insertText = '% ';
			commandCompletion.command = { command: 'editor.action.triggerSuggest', title: 'Re-trigger completions...' };

			// return all completion items as array
			return [
				simpleCompletion,
				snippetCompletion,
				commitCharacterCompletion,
				commandCompletion
			];
		}
	});
	const debugcom = vscode.languages.registerCompletionItemProvider('plaintext', {

		provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext) {


			// a completion item that inserts its text as snippet,
			// the `insertText`-property is a `SnippetString` which will be
			// honored by the editor.
			const snippetCompletion = new vscode.CompletionItem('debug.throw |""|');
			snippetCompletion.insertText = new vscode.SnippetString('debug.throw |"meow"|');
			snippetCompletion.documentation = new vscode.MarkdownString("Throw your own error!");

			// a completion item that can be accepted by a commit character,
			// the `commitCharacters`-property is set which means that the completion will
			// be inserted and then the character will be typed.
			const commitCharacterCompletion = new vscode.CompletionItem('debug.');
			commitCharacterCompletion.commitCharacters = ['.'];
			commitCharacterCompletion.documentation = new vscode.MarkdownString('Press `.` to get `debug.`');

			// 
			
			// return all completion items as array
			return [
				snippetCompletion,
				commitCharacterCompletion
			];
		}
	});
	const console2com = vscode.languages.registerCompletionItemProvider('plaintext', {

		provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext) {


			// a completion item that inserts its text as snippet,
			// the `insertText`-property is a `SnippetString` which will be
			// honored by the editor.
			const snippetCompletion = new vscode.CompletionItem('console.send |""|');
			snippetCompletion.insertText = new vscode.SnippetString('console.send |"meow"|');
			snippetCompletion.documentation = new vscode.MarkdownString("Send a msg to the console");

			// a completion item that can be accepted by a commit character,
			// the `commitCharacters`-property is set which means that the completion will
			// be inserted and then the character will be typed.
			const commitCharacterCompletion = new vscode.CompletionItem('debug.');
			commitCharacterCompletion.commitCharacters = ['.'];
			commitCharacterCompletion.documentation = new vscode.MarkdownString('Press `.` to get `debug.`');

			// 
			
			// return all completion items as array
			return [
				snippetCompletion,
				commitCharacterCompletion
			];
		}
	});
	const randomcom = vscode.languages.registerCompletionItemProvider('plaintext', {

		provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext) {


			// a completion item that inserts its text as snippet,
			// the `insertText`-property is a `SnippetString` which will be
			// honored by the editor.
			const snippetCompletion = new vscode.CompletionItem('random.num |min~max|');
			snippetCompletion.insertText = new vscode.SnippetString('random.num |1~10|');
			snippetCompletion.documentation = new vscode.MarkdownString("Generate a random number");

			// a completion item that can be accepted by a commit character,
			// the `commitCharacters`-property is set which means that the completion will
			// be inserted and then the character will be typed.
			const commitCharacterCompletion = new vscode.CompletionItem('random.');
			commitCharacterCompletion.commitCharacters = ['.'];
			commitCharacterCompletion.documentation = new vscode.MarkdownString('Press `.` to get `random.`');

			// 
			
			// return all completion items as array
			return [
				snippetCompletion,
				commitCharacterCompletion
			];
		}
	});
	const scriptpausecom = vscode.languages.registerCompletionItemProvider('plaintext', {

		provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext) {


			// a completion item that inserts its text as snippet,
			// the `insertText`-property is a `SnippetString` which will be
			// honored by the editor.
			const snippetCompletion = new vscode.CompletionItem('script.pause');
			snippetCompletion.insertText = new vscode.SnippetString('script.pause');
			snippetCompletion.documentation = new vscode.MarkdownString("Script Pause function");

			// a completion item that can be accepted by a commit character,
			// the `commitCharacters`-property is set which means that the completion will
			// be inserted and then the character will be typed.
			const commitCharacterCompletion = new vscode.CompletionItem('script.');
			commitCharacterCompletion.commitCharacters = ['.'];
			commitCharacterCompletion.documentation = new vscode.MarkdownString('Press `.` to get `script.pause`');

			// 
			
			// return all completion items as array
			return [
				snippetCompletion,
				commitCharacterCompletion
			];
		}
	});
	const getcom = vscode.languages.registerCompletionItemProvider('plaintext', {

		provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext) {


			// a completion item that inserts its text as snippet,
			// the `insertText`-property is a `SnippetString` which will be
			// honored by the editor.
			const snippetCompletion = new vscode.CompletionItem('get OS');
			snippetCompletion.insertText = new vscode.SnippetString('get.OS');
			snippetCompletion.documentation = new vscode.MarkdownString("get OS");

			// a completion item that can be accepted by a commit character,
			// the `commitCharacters`-property is set which means that the completion will
			// be inserted and then the character will be typed.
			const commitCharacterCompletion = new vscode.CompletionItem('get.');
			commitCharacterCompletion.commitCharacters = ['.'];
			commitCharacterCompletion.documentation = new vscode.MarkdownString('Press `.` to get `get.`');

			// 
			
			// return all completion items as array
			return [
				snippetCompletion,
				commitCharacterCompletion
			];
		}
	});
	const consolesettings = vscode.languages.registerCompletionItemProvider(
		'plaintext',
		{
			provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {

				// get all text until the `position` and check if it reads `console.`
				// and if so then complete if `send`, `send.kit`
				const linePrefix = document.lineAt(position).text.substr(0, position.character);
				if (!linePrefix.endsWith('console.')) {
					return undefined;
				}

				return [
					new vscode.CompletionItem('send', vscode.CompletionItemKind.Method),
					new vscode.CompletionItem('send.kit', vscode.CompletionItemKind.Method),
				];
			}
		},
		'.' // triggered whenever a '.' is being typed
	);
	const debugsettings = vscode.languages.registerCompletionItemProvider(
		'plaintext',
		{
			provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {

				const linePrefix = document.lineAt(position).text.substr(0, position.character);
				if (!linePrefix.endsWith('debug.')) {
					return undefined;
				}

				return [
					new vscode.CompletionItem('throw', vscode.CompletionItemKind.Method),
				];
			}
		},
		'.' // triggered whenever a '.' is being typed
	);
	const randomsettings = vscode.languages.registerCompletionItemProvider(
		'plaintext',
		{
			provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {

				const linePrefix = document.lineAt(position).text.substr(0, position.character);
				if (!linePrefix.endsWith('random.')) {
					return undefined;
				}

				return [
					new vscode.CompletionItem('num', vscode.CompletionItemKind.Method),
				];
			}
		},
		'.' // triggered whenever a '.' is being typed
	);
	const scriptsettings = vscode.languages.registerCompletionItemProvider(
		'plaintext',
		{
			provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {

				// get all text until the `position` and check if it reads `console.`
				// and if so then complete if `send`, `send.kit`
				const linePrefix = document.lineAt(position).text.substr(0, position.character);
				if (!linePrefix.endsWith('script.')) {
					return undefined;
				}

				return [
					new vscode.CompletionItem('pause.time', vscode.CompletionItemKind.Method),
					new vscode.CompletionItem('pause.keywait#', vscode.CompletionItemKind.Method),
					new vscode.CompletionItem('quit#', vscode.CompletionItemKind.Method),
				];
			}
		},
		'.' // triggered whenever a '.' is being typed
	);
	const scriptpausesettings = vscode.languages.registerCompletionItemProvider(
		'plaintext',
		{
			provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {

				// get all text until the `position` and check if it reads `console.`
				// and if so then complete if `send`, `send.kit`
				const linePrefix = document.lineAt(position).text.substr(0, position.character);
				if (!linePrefix.endsWith('script.pause.')) {
					return undefined;
				}

				return [
					new vscode.CompletionItem('time', vscode.CompletionItemKind.Method),
					new vscode.CompletionItem('keywait#', vscode.CompletionItemKind.Method),
				];
			}
		},
		'.' // triggered whenever a '.' is being typed
	);
	const getsettings = vscode.languages.registerCompletionItemProvider(
		'plaintext',
		{
			provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {

				// get all text until the `position` and check if it reads `console.`
				// and if so then complete if `send`, `send.kit`
				const linePrefix = document.lineAt(position).text.substr(0, position.character);
				if (!linePrefix.endsWith('get.')) {
					return undefined;
				}

				return [
					new vscode.CompletionItem('OS', vscode.CompletionItemKind.Method),
				];
			}
		},
		'.' // triggered whenever a '.' is being typed
	);
	const atsettings = vscode.languages.registerCompletionItemProvider(
		'plaintext',
		{
			provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {

				// get all text until the `position` and check if it reads `console.`
				// and if so then complete if `send`, `send.kit`
				const linePrefix = document.lineAt(position).text.substr(0, position.character);
				if (!linePrefix.endsWith('@')) {
					return undefined;
				}

				return [
					new vscode.CompletionItem('kit', vscode.CompletionItemKind.Method),
				];
			}
		},
		'@' // triggered whenever a '@' is being typed
	);
	const fillbrackets = vscode.languages.registerCompletionItemProvider(
		'plaintext',
		{
			provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {

				const linePrefix = document.lineAt(position).text.substr(0, position.character);
				if (!linePrefix.endsWith('send ') || !linePrefix.endsWith('throw ') || !linePrefix.endsWith('num ') || !linePrefix.endsWith('send.kit ')) {
					return undefined;
				}

				return [
					new vscode.CompletionItem(' |""|', vscode.CompletionItemKind.Method),
				];
			}
		},
		'|' // triggered whenever a '|' is being typed
	);
	const fillkit = vscode.languages.registerCompletionItemProvider(
		'plaintext',
		{
			provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {

				const linePrefix = document.lineAt(position).text.substr(0, position.character);
				if (!linePrefix.endsWith('@kit ')) {
					return undefined;
				}

				return [
					new vscode.CompletionItem(' {"name","value"}', vscode.CompletionItemKind.Method),
				];
			}
		},
		'{' // triggered whenever a '|' is being typed
	);
	context.subscriptions.push(consolecom, console2com, consolesettings, debugcom, debugsettings, randomcom, randomsettings, scriptpausecom, scriptsettings, scriptpausesettings, getcom, getsettings, atsettings, fillbrackets, fillkit);
}
