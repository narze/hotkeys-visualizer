import type { HotkeyPreset } from './demo';

// Hyper key layer: Caps Lock remapped to Hyper (Ctrl+Shift+Alt+Cmd).
// Common Karabiner-Elements setup for power users.
export const hyperPreset: HotkeyPreset = {
	id: 'hyper',
	name: 'Hyper Layer',
	description: 'Caps Lock as Hyper key — custom actions on every letter',
	hotkeys: [
		// Vim-style arrow navigation
		{ key: 'KC_H', action: '← Left', modifier: 'Hyper', category: 'navigation' },
		{ key: 'KC_J', action: '↓ Down', modifier: 'Hyper', category: 'navigation' },
		{ key: 'KC_K', action: '↑ Up', modifier: 'Hyper', category: 'navigation' },
		{ key: 'KC_L', action: '→ Right', modifier: 'Hyper', category: 'navigation' },
		// Word / line jumps
		{ key: 'KC_U', action: 'Line Start', modifier: 'Hyper', category: 'navigation' },
		{ key: 'KC_O', action: 'Line End', modifier: 'Hyper', category: 'navigation' },
		{ key: 'KC_B', action: 'Word ←', modifier: 'Hyper', category: 'navigation' },
		{ key: 'KC_W', action: 'Word →', modifier: 'Hyper', category: 'navigation' },
		// App launchers
		{ key: 'KC_T', action: 'Terminal', modifier: 'Hyper', category: 'system' },
		{ key: 'KC_E', action: 'Editor', modifier: 'Hyper', category: 'system' },
		{ key: 'KC_F', action: 'Finder', modifier: 'Hyper', category: 'system' },
		{ key: 'KC_S', action: 'Slack', modifier: 'Hyper', category: 'system' },
		{ key: 'KC_M', action: 'Mail', modifier: 'Hyper', category: 'system' },
		{ key: 'KC_C', action: 'Calendar', modifier: 'Hyper', category: 'system' },
		{ key: 'KC_N', action: 'Notes', modifier: 'Hyper', category: 'system' },
		{ key: 'KC_G', action: 'Browser', modifier: 'Hyper', category: 'system' },
		// Window management
		{ key: 'KC_A', action: 'Left Half', modifier: 'Hyper', category: 'navigation' },
		{ key: 'KC_D', action: 'Right Half', modifier: 'Hyper', category: 'navigation' },
		{ key: 'KC_Q', action: 'Fullscreen', modifier: 'Hyper', category: 'navigation' },
		{ key: 'KC_R', action: 'Center Win', modifier: 'Hyper', category: 'navigation' },
		// Misc
		{ key: 'KC_P', action: 'Screenshot', modifier: 'Hyper', category: 'system' },
		{ key: 'KC_V', action: 'Clipboard', modifier: 'Hyper', category: 'editing' },
		{ key: 'KC_Z', action: 'Sleep', modifier: 'Hyper', category: 'system' },
		{ key: 'KC_X', action: 'Lock', modifier: 'Hyper', category: 'system' },
		{ key: 'KC_SPC', action: 'Spotlight', modifier: 'Hyper', category: 'system' },
		{ key: 'KC_ESC', action: 'Cancel', category: 'system' },
		// The Hyper key itself
		{ key: 'KC_CAPS', action: 'Hyper ★', category: 'modifier' },
		{ key: 'KC_LSFT', action: 'Shift', category: 'modifier' },
		{ key: 'KC_RSFT', action: 'Shift', category: 'modifier' },
		{ key: 'KC_LCTL', action: 'Ctrl', category: 'modifier' },
		{ key: 'KC_LALT', action: 'Alt', category: 'modifier' },
		{ key: 'KC_LGUI', action: '⌘', category: 'modifier' }
	]
};
