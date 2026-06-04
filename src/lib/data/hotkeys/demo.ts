export interface HotkeyDef {
	key: string;
	action: string;
	modifier?: string;
	// Color category for visual grouping
	category: 'editing' | 'navigation' | 'system' | 'modifier';
}

export interface HotkeyPreset {
	id: string;
	name: string;
	description: string;
	hotkeys: HotkeyDef[];
}

export const demoPreset: HotkeyPreset = {
	id: 'demo',
	name: 'Common Shortcuts',
	description: 'Generic keyboard shortcuts demo',
	hotkeys: [
		// Editing (Ctrl + letter)
		{ key: 'KC_A', action: 'Select All', modifier: 'Ctrl', category: 'editing' },
		{ key: 'KC_B', action: 'Bold', modifier: 'Ctrl', category: 'editing' },
		{ key: 'KC_C', action: 'Copy', modifier: 'Ctrl', category: 'editing' },
		{ key: 'KC_D', action: 'Duplicate', modifier: 'Ctrl', category: 'editing' },
		{ key: 'KC_E', action: 'Center', modifier: 'Ctrl', category: 'editing' },
		{ key: 'KC_F', action: 'Find', modifier: 'Ctrl', category: 'editing' },
		{ key: 'KC_G', action: 'Find Next', modifier: 'Ctrl', category: 'editing' },
		{ key: 'KC_H', action: 'Replace', modifier: 'Ctrl', category: 'editing' },
		{ key: 'KC_I', action: 'Italic', modifier: 'Ctrl', category: 'editing' },
		{ key: 'KC_J', action: 'Justify', modifier: 'Ctrl', category: 'editing' },
		{ key: 'KC_K', action: 'Link', modifier: 'Ctrl', category: 'editing' },
		{ key: 'KC_L', action: 'Align Left', modifier: 'Ctrl', category: 'editing' },
		{ key: 'KC_U', action: 'Underline', modifier: 'Ctrl', category: 'editing' },
		{ key: 'KC_V', action: 'Paste', modifier: 'Ctrl', category: 'editing' },
		{ key: 'KC_X', action: 'Cut', modifier: 'Ctrl', category: 'editing' },
		{ key: 'KC_Y', action: 'Redo', modifier: 'Ctrl', category: 'editing' },
		{ key: 'KC_Z', action: 'Undo', modifier: 'Ctrl', category: 'editing' },

		// Navigation / app control
		{ key: 'KC_N', action: 'New', modifier: 'Ctrl', category: 'navigation' },
		{ key: 'KC_O', action: 'Open', modifier: 'Ctrl', category: 'navigation' },
		{ key: 'KC_P', action: 'Print', modifier: 'Ctrl', category: 'navigation' },
		{ key: 'KC_Q', action: 'Quit', modifier: 'Ctrl', category: 'navigation' },
		{ key: 'KC_R', action: 'Reload', modifier: 'Ctrl', category: 'navigation' },
		{ key: 'KC_S', action: 'Save', modifier: 'Ctrl', category: 'navigation' },
		{ key: 'KC_T', action: 'New Tab', modifier: 'Ctrl', category: 'navigation' },
		{ key: 'KC_W', action: 'Close', modifier: 'Ctrl', category: 'navigation' },
		{ key: 'KC_M', action: 'Minimize', modifier: 'Ctrl', category: 'navigation' },

		// System / special keys
		{ key: 'KC_ESC', action: 'Cancel', category: 'system' },
		{ key: 'KC_TAB', action: 'Switch', category: 'system' },
		{ key: 'KC_CAPS', action: 'Caps', category: 'system' },
		{ key: 'KC_ENT', action: 'Confirm', category: 'system' },
		{ key: 'KC_BSPC', action: 'Delete', category: 'system' },
		{ key: 'KC_SPC', action: 'Play / Pause', category: 'system' },

		// Modifier keys
		{ key: 'KC_LSFT', action: 'Shift', category: 'modifier' },
		{ key: 'KC_RSFT', action: 'Shift', category: 'modifier' },
		{ key: 'KC_LCTL', action: 'Ctrl', category: 'modifier' },
		{ key: 'KC_RCTL', action: 'Ctrl', category: 'modifier' },
		{ key: 'KC_LALT', action: 'Alt', category: 'modifier' },
		{ key: 'KC_RALT', action: 'AltGr', category: 'modifier' },
		{ key: 'KC_LGUI', action: '⌘ / Win', category: 'modifier' },
		{ key: 'KC_FN', action: 'Fn', category: 'modifier' }
	]
};

export { macosPreset } from './macos';
export { vscodePreset } from './vscode';
export { hyperPreset } from './hyper';

import { macosPreset } from './macos';
import { vscodePreset } from './vscode';
import { hyperPreset } from './hyper';

export const presets: HotkeyPreset[] = [demoPreset, macosPreset, vscodePreset, hyperPreset];
