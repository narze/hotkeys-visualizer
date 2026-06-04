export interface KeyDef {
	id: string;
	label: string;
	x: number;
	y: number;
	w?: number;
	h?: number;
}

// Standard ANSI 60% layout.
// Coordinates are in key units (1u = 1 key width).
// Total width: 15u. Total height: 5u.
export const ansi60: KeyDef[] = [
	// Row 0 — number row
	{ id: 'KC_ESC', label: 'Esc', x: 0, y: 0 },
	{ id: 'KC_1', label: '1', x: 1, y: 0 },
	{ id: 'KC_2', label: '2', x: 2, y: 0 },
	{ id: 'KC_3', label: '3', x: 3, y: 0 },
	{ id: 'KC_4', label: '4', x: 4, y: 0 },
	{ id: 'KC_5', label: '5', x: 5, y: 0 },
	{ id: 'KC_6', label: '6', x: 6, y: 0 },
	{ id: 'KC_7', label: '7', x: 7, y: 0 },
	{ id: 'KC_8', label: '8', x: 8, y: 0 },
	{ id: 'KC_9', label: '9', x: 9, y: 0 },
	{ id: 'KC_0', label: '0', x: 10, y: 0 },
	{ id: 'KC_MINS', label: '-', x: 11, y: 0 },
	{ id: 'KC_EQL', label: '=', x: 12, y: 0 },
	{ id: 'KC_BSPC', label: 'Bksp', x: 13, y: 0, w: 2 },

	// Row 1 — QWERTY
	{ id: 'KC_TAB', label: 'Tab', x: 0, y: 1, w: 1.5 },
	{ id: 'KC_Q', label: 'Q', x: 1.5, y: 1 },
	{ id: 'KC_W', label: 'W', x: 2.5, y: 1 },
	{ id: 'KC_E', label: 'E', x: 3.5, y: 1 },
	{ id: 'KC_R', label: 'R', x: 4.5, y: 1 },
	{ id: 'KC_T', label: 'T', x: 5.5, y: 1 },
	{ id: 'KC_Y', label: 'Y', x: 6.5, y: 1 },
	{ id: 'KC_U', label: 'U', x: 7.5, y: 1 },
	{ id: 'KC_I', label: 'I', x: 8.5, y: 1 },
	{ id: 'KC_O', label: 'O', x: 9.5, y: 1 },
	{ id: 'KC_P', label: 'P', x: 10.5, y: 1 },
	{ id: 'KC_LBRC', label: '[', x: 11.5, y: 1 },
	{ id: 'KC_RBRC', label: ']', x: 12.5, y: 1 },
	{ id: 'KC_BSLS', label: '\\', x: 13.5, y: 1, w: 1.5 },

	// Row 2 — home row
	{ id: 'KC_CAPS', label: 'Caps', x: 0, y: 2, w: 1.75 },
	{ id: 'KC_A', label: 'A', x: 1.75, y: 2 },
	{ id: 'KC_S', label: 'S', x: 2.75, y: 2 },
	{ id: 'KC_D', label: 'D', x: 3.75, y: 2 },
	{ id: 'KC_F', label: 'F', x: 4.75, y: 2 },
	{ id: 'KC_G', label: 'G', x: 5.75, y: 2 },
	{ id: 'KC_H', label: 'H', x: 6.75, y: 2 },
	{ id: 'KC_J', label: 'J', x: 7.75, y: 2 },
	{ id: 'KC_K', label: 'K', x: 8.75, y: 2 },
	{ id: 'KC_L', label: 'L', x: 9.75, y: 2 },
	{ id: 'KC_SCLN', label: ';', x: 10.75, y: 2 },
	{ id: 'KC_QUOT', label: "'", x: 11.75, y: 2 },
	{ id: 'KC_ENT', label: 'Enter', x: 12.75, y: 2, w: 2.25 },

	// Row 3 — bottom alpha
	{ id: 'KC_LSFT', label: 'Shift', x: 0, y: 3, w: 2.25 },
	{ id: 'KC_Z', label: 'Z', x: 2.25, y: 3 },
	{ id: 'KC_X', label: 'X', x: 3.25, y: 3 },
	{ id: 'KC_C', label: 'C', x: 4.25, y: 3 },
	{ id: 'KC_V', label: 'V', x: 5.25, y: 3 },
	{ id: 'KC_B', label: 'B', x: 6.25, y: 3 },
	{ id: 'KC_N', label: 'N', x: 7.25, y: 3 },
	{ id: 'KC_M', label: 'M', x: 8.25, y: 3 },
	{ id: 'KC_COMM', label: ',', x: 9.25, y: 3 },
	{ id: 'KC_DOT', label: '.', x: 10.25, y: 3 },
	{ id: 'KC_SLSH', label: '/', x: 11.25, y: 3 },
	{ id: 'KC_RSFT', label: 'Shift', x: 12.25, y: 3, w: 2.75 },

	// Row 4 — modifiers / spacebar
	{ id: 'KC_LCTL', label: 'Ctrl', x: 0, y: 4, w: 1.25 },
	{ id: 'KC_LGUI', label: 'Win', x: 1.25, y: 4, w: 1.25 },
	{ id: 'KC_LALT', label: 'Alt', x: 2.5, y: 4, w: 1.25 },
	{ id: 'KC_SPC', label: '', x: 3.75, y: 4, w: 6.25 },
	{ id: 'KC_RALT', label: 'Alt', x: 10, y: 4, w: 1.25 },
	{ id: 'KC_FN', label: 'Fn', x: 11.25, y: 4, w: 1.25 },
	{ id: 'KC_APP', label: 'Menu', x: 12.5, y: 4, w: 1.25 },
	{ id: 'KC_RCTL', label: 'Ctrl', x: 13.75, y: 4, w: 1.25 }
];
