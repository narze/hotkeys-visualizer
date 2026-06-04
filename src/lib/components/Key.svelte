<script lang="ts">
	import type { KeyDef } from '$lib/data/layouts/ansi60';
	import type { HotkeyDef } from '$lib/data/hotkeys/demo';

	const KEY_UNIT = 64; // px per 1u
	const KEY_GAP = 5;

	const CATEGORY_STYLES: Record<string, string> = {
		editing: 'bg-blue-50 border-blue-200 hover:bg-blue-100',
		navigation: 'bg-emerald-50 border-emerald-200 hover:bg-emerald-100',
		system: 'bg-amber-50 border-amber-200 hover:bg-amber-100',
		modifier: 'bg-violet-50 border-violet-200 hover:bg-violet-100',
		none: 'bg-zinc-50 border-zinc-200 hover:bg-zinc-100'
	};

	const ACTION_COLORS: Record<string, string> = {
		editing: 'text-blue-600',
		navigation: 'text-emerald-600',
		system: 'text-amber-600',
		modifier: 'text-violet-600',
		none: 'text-zinc-400'
	};

	let {
		keyDef,
		hotkey
	}: {
		keyDef: KeyDef;
		hotkey: HotkeyDef | undefined;
	} = $props();

	const w = $derived(keyDef.w ?? 1);
	const h = $derived(keyDef.h ?? 1);
	const style = $derived(
		`left:${keyDef.x * KEY_UNIT}px;top:${keyDef.y * KEY_UNIT}px;` +
			`width:${w * KEY_UNIT - KEY_GAP}px;height:${h * KEY_UNIT - KEY_GAP}px;`
	);

	const category = $derived(hotkey?.category ?? 'none');
	const bgClass = $derived(CATEGORY_STYLES[category]);
	const actionColor = $derived(ACTION_COLORS[category]);
</script>

<button
	class="absolute flex flex-col justify-between rounded-md border px-1.5 py-1 shadow-sm transition-all duration-100 select-none cursor-default focus:outline-none focus:ring-2 focus:ring-zinc-400 {bgClass}"
	{style}
	title={hotkey ? `${hotkey.modifier ? hotkey.modifier + '+' : ''}${keyDef.label} — ${hotkey.action}` : keyDef.label}
>
	<span class="text-[10px] font-medium leading-none text-zinc-500 self-start">{keyDef.label}</span>

	{#if hotkey}
		<span class="text-[9px] font-semibold leading-tight text-center w-full {actionColor} truncate">
			{hotkey.action}
		</span>
	{/if}
</button>
