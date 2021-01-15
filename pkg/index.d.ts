/* tslint:disable */
/* eslint-disable */
/**
*/
export function main(): void;
/**
* The code to exit an action
*/
export enum ExitCode {
/**
* A code indicating that the action was successful.
*/
  Success,
/**
* A code indicating that the action was a failure.
*/
  Failure,
}
/**
* Interface for cp options.
*/
export class CopyOptions {
  free(): void;
/**
* Whether to overwrite existing files in the destination. Defaults to true.
* @returns {boolean | undefined}
*/
  force?: boolean;
/**
* Whether to recursively copy all subdirectories. Defaults to false.
* @returns {boolean | undefined}
*/
  recursive?: boolean;
}
/**
* Interface for getInput options
*/
export class InputOptions {
  free(): void;
/**
* Whether the input is required. If required and not present, will throw. Defaults
* to false.
* @returns {boolean | undefined}
*/
  required?: boolean;
}
/**
* Interface for mv options.
*/
export class MoveOptions {
  free(): void;
/**
* Whether to overwrite existing files in the destination. Defaults to true.
* @returns {boolean | undefined}
*/
  force?: boolean;
}
