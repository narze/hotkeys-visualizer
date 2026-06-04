import type { HotkeyPreset } from './demo';

export const vscodePreset: HotkeyPreset = {
	id: 'vscode',
	name: 'VS Code',
	description: 'Visual Studio Code keyboard shortcuts',
	hotkeys: [
		// Editing
		{ key: 'KC_A', action: 'Select All', modifier: 'Ctrl', category: 'editing' },
		{ key: 'KC_C', action: 'Copy', modifier: 'Ctrl', category: 'editing' },
		{ key: 'KC_V', action: 'Paste', modifier: 'Ctrl', category: 'editing' },
		{ key: 'KC_X', action: 'Cut', modifier: 'Ctrl', category: 'editing' },
		{ key: 'KC_Z', action: 'Undo', modifier: 'Ctrl', category: 'editing' },
		{ key: 'KC_Y', action: 'Redo', modifier: 'Ctrl', category: 'editing' },
		{ key: 'KC_D', action: 'Select Word', modifier: 'Ctrl', category: 'editing' },
		{ key: 'KC_L', action: 'Select Line', modifier: 'Ctrl', category: 'editing' },
		{ key: 'KC_U', action: 'Undo Cursor', modifier: 'Ctrl', category: 'editing' },
		{ key: 'KC_SLSH', action: 'Toggle Comment', modifier: 'Ctrl', category: 'editing' },
		{ key: 'KC_LBRC', action: 'Outdent', modifier: 'Ctrl', category: 'editing' },
		{ key: 'KC_RBRC', action: 'Indent', modifier: 'Ctrl', category: 'editing' },
		// Navigation
		{ key: 'KC_P', action: 'Quick Open', modifier: 'Ctrl', category: 'navigation' },
		{ key: 'KC_F', action: 'Find', modifier: 'Ctrl', category: 'navigation' },
		{ key: 'KC_H', action: 'Replace', modifier: 'Ctrl', category: 'navigation' },
		{ key: 'KC_G', action: 'Go to Line', modifier: 'Ctrl', category: 'navigation' },
		{ key: 'KC_T', action: 'Go to Symbol', modifier: 'Ctrl', category: 'navigation' },
		{ key: 'KC_R', action: 'Recent Folder', modifier: 'Ctrl', category: 'navigation' },
		{ key: 'KC_N', action: 'New File', modifier: 'Ctrl', category: 'navigation' },
		{ key: 'KC_O', action: 'Open File', modifier: 'Ctrl', category: 'navigation' },
		{ key: 'KC_S', action: 'Save', modifier: 'Ctrl', category: 'navigation' },
		{ key: 'KC_W', action: 'Close Tab', modifier: 'Ctrl', category: 'navigation' },
		{ key: 'KC_TAB', action: 'Switch Tab', modifier: 'Ctrl', category: 'navigation' },
		{ key: 'KC_1', action: 'Editor 1', modifier: 'Ctrl', category: 'navigation' },
		{ key: 'KC_2', action: 'Editor 2', modifier: 'Ctrl', category: 'navigation' },
		{ key: 'KC_3', action: 'Editor 3', modifier: 'Ctrl', category: 'navigation' },
		// System / panels
		{ key: 'KC_SCLN', action: 'Command Palette', modifier: 'Ctrl+Shift+P→', category: 'system' },
		{ key: 'KC_B', action: 'Sidebar', modifier: 'Ctrl', category: 'system' },
		{ key: 'KC_J', action: 'Panel', modifier: 'Ctrl', category: 'system' },
		{ key: 'KC_QUOT', action: 'Terminal', modifier: 'Ctrl+`→', category: 'system' },
		{ key: 'KC_K', action: 'Keybindings', modifier: 'Ctrl+K→', category: 'system' },
		{ key: 'KC_ESC', action: 'Dismiss', category: 'system' },
		{ key: 'KC_ENT', action: 'Confirm', category: 'system' },
		{ key: 'KC_BSPC', action: 'Delete', category: 'editing' },
		// Modifiers
		{ key: 'KC_LSFT', action: 'Shift', category: 'modifier' },
		{ key: 'KC_RSFT', action: 'Shift', category: 'modifier' },
		{ key: 'KC_LCTL', action: 'Ctrl', category: 'modifier' },
		{ key: 'KC_RCTL', action: 'Ctrl', category: 'modifier' },
		{ key: 'KC_LALT', action: 'Alt', category: 'modifier' },
		{ key: 'KC_LGUI', action: 'Win', category: 'modifier' },
		{ key: 'KC_FN', action: 'Fn', category: 'modifier' }
	]
};
