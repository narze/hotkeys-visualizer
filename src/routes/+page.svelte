<script lang="ts">
	import Keyboard from '$lib/components/Keyboard.svelte';
	import { presets } from '$lib/data/hotkeys/demo';

	const LEGEND = [
		{ label: 'Editing', class: 'bg-blue-50 border-blue-200 text-blue-700' },
		{ label: 'Navigation', class: 'bg-emerald-50 border-emerald-200 text-emerald-700' },
		{ label: 'System', class: 'bg-amber-50 border-amber-200 text-amber-700' },
		{ label: 'Modifier', class: 'bg-violet-50 border-violet-200 text-violet-700' }
	];

	let activeId = $state(presets[0].id);
	const activePreset = $derived(presets.find((p) => p.id === activeId) ?? presets[0]);
</script>

<div class="min-h-screen bg-zinc-100 px-4 py-12">
	<div class="mx-auto max-w-5xl">
		<!-- Header -->
		<header class="mb-8 text-center">
			<h1 class="text-3xl font-bold tracking-tight text-zinc-900">Hotkeys Visualizer</h1>
			<p class="mt-2 text-sm text-zinc-500">Visualize keyboard shortcuts on any layout</p>
		</header>

		<!-- Tab bar -->
		<div class="mb-6 flex justify-center">
			<div class="flex gap-1 rounded-xl bg-zinc-200 p-1">
				{#each presets as preset (preset.id)}
					<button
						onclick={() => (activeId = preset.id)}
						class="rounded-lg px-4 py-1.5 text-sm font-medium transition-all duration-150
							{activeId === preset.id
							? 'bg-white text-zinc-900 shadow-sm'
							: 'text-zinc-500 hover:text-zinc-700'}"
					>
						{preset.name}
					</button>
				{/each}
			</div>
		</div>

		<!-- Active preset description -->
		<p class="mb-6 text-center text-xs text-zinc-400">{activePreset.description}</p>

		<!-- Keyboard -->
		<section class="flex justify-center">
			<Keyboard preset={activePreset} />
		</section>

		<!-- Legend -->
		<section class="mt-8 flex flex-wrap justify-center gap-3">
			{#each LEGEND as item}
				<div
					class="flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-xs font-medium {item.class}"
				>
					<span class="h-2 w-2 rounded-sm border {item.class}"></span>
					{item.label}
				</div>
			{/each}
		</section>

		<!-- Shortcut count -->
		<p class="mt-6 text-center text-xs text-zinc-400">
			{activePreset.hotkeys.length} shortcuts mapped · {activePreset.name}
		</p>
	</div>
</div>
