import * as vscode from 'vscode';

/**
 * A union of `vscode.TextDocument` and `vscode.NotebookDocument`
 * to support both types in command execution and event handling.
 */
export type Document = vscode.TextDocument | vscode.NotebookDocument;

export interface IMessageConfig {
  message?: string;
  messageAfter?: string;
  showElapsed: boolean;
}

export interface ICommand extends IMessageConfig {
  match?: string;
  notMatch?: string;
  cmd?: string;
  isAsync: boolean;
  autoShowOutputPanel?: "always" | "error" | "never";
}

export interface IConfig extends IMessageConfig {
  shell: string;
  autoClearConsole: boolean;
  commands: Array<ICommand>;
}

export interface IExecResult {
  statusCode: number,
  elapsedMs: number,
}
