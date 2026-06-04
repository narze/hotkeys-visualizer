# Add Shortcut

Add a new hotkey shortcut entry to the Hotkeys Visualizer project.

User request: $ARGUMENTS

## What to do

1. If `$ARGUMENTS` is empty or vague, ask the user these questions (all at once using AskUserQuestion):
   - Which preset to add to: Generic / macOS / VS Code / Hyper Layer / new preset
   - Which key (physical key label, e.g. "C", "Space", "F5")
   - Action name to display on the key (e.g. "Copy", "Toggle Terminal")
   - Modifier label for the tooltip (e.g. "Ctrl", "⌘", "Hyper") — optional
   - Category: editing (blue) / navigation (emerald) / system (amber) / modifier (violet)

   If `$ARGUMENTS` already contains enough info (e.g. "add Ctrl+C Copy to VS Code"), parse it and skip straight to the edit.

2. Map the physical key label to the correct `id` from the layout. Common mappings:

   | Physical | Key ID     | Physical | Key ID     |
   |----------|-----------|----------|-----------|
   | Esc      | KC_ESC    | A–Z      | KC_A … KC_Z |
   | Tab      | KC_TAB    | 1–0      | KC_1 … KC_0 |
   | Caps     | KC_CAPS   | -        | KC_MINS    |
   | Enter    | KC_ENT    | =        | KC_EQL     |
   | Backspace| KC_BSPC   | [        | KC_LBRC    |
   | Space    | KC_SPC    | ]        | KC_RBRC    |
   | L Shift  | KC_LSFT   | \\       | KC_BSLS    |
   | R Shift  | KC_RSFT   | ;        | KC_SCLN    |
   | L Ctrl   | KC_LCTL   | '        | KC_QUOT    |
   | R Ctrl   | KC_RCTL   | ,        | KC_COMM    |
   | L Alt    | KC_LALT   | .        | KC_DOT     |
   | R Alt    | KC_RALT   | /        | KC_SLSH    |
   | Win/Opt  | KC_LGUI   | Fn       | KC_FN      |
   | Menu     | KC_APP    |          |            |

3. Edit the correct preset file in `src/lib/data/hotkeys/`:
   - Generic → `demo.ts` (the `demoPreset` object)
   - macOS → `macos.ts`
   - VS Code → `vscode.ts`
   - Hyper Layer → `hyper.ts`
   - New preset → create a new `.ts` file, then import and append it to the `presets` array in `demo.ts`

   Add the entry in the right category group, keeping the file tidy. Entry format:
   ```ts
   { key: 'KC_X', action: 'Action Name', modifier: 'Ctrl', category: 'editing' },
   ```
   Omit `modifier` if there is none.

4. Run `npm run check` to confirm no TypeScript errors.

5. Report back: which file was edited, the exact line added, and remind the user to `npm run dev` to see the result.
