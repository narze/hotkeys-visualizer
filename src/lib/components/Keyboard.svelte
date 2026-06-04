<script lang="ts">
	import { ansi60 } from '$lib/data/layouts/ansi60';
	import type { HotkeyPreset } from '$lib/data/hotkeys/demo';
	import Key from './Key.svelte';

	const KEY_UNIT = 64;
	const KEYBOARD_COLS = 15;
	const KEYBOARD_ROWS = 5;

	let { preset }: { preset: HotkeyPreset } = $props();

	const hotkeyMap = $derived(
		Object.fromEntries(preset.hotkeys.map((h) => [h.key, h]))
	);

	const boardWidth = KEYBOARD_COLS * KEY_UNIT;
	const boardHeight = KEYBOARD_ROWS * KEY_UNIT;
</script>

<div class="overflow-x-auto pb-2">
	<div
		class="relative mx-auto rounded-xl bg-zinc-200 p-3 shadow-inner"
		style="width:{boardWidth + 24}px;height:{boardHeight + 24}px;"
	>
		<div class="relative" style="width:{boardWidth}px;height:{boardHeight}px;">
			{#each ansi60 as keyDef (keyDef.id)}
				<Key {keyDef} hotkey={hotkeyMap[keyDef.id]} />
			{/each}
		</div>
	</div>
</div>
