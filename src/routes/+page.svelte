<script lang="ts">
	import { onMount } from 'svelte';
	import Keyboard from '$lib/components/Keyboard.svelte';
	import { presets } from '$lib/data/hotkeys/demo';

	const LEGEND = [
		{ label: 'Editing',    light: 'bg-blue-50    border-blue-200    text-blue-700',    dark: 'dark:bg-blue-950    dark:border-blue-800    dark:text-blue-400'    },
		{ label: 'Navigation', light: 'bg-emerald-50 border-emerald-200 text-emerald-700', dark: 'dark:bg-emerald-950 dark:border-emerald-800 dark:text-emerald-400' },
		{ label: 'System',     light: 'bg-amber-50   border-amber-200   text-amber-700',   dark: 'dark:bg-amber-950   dark:border-amber-800   dark:text-amber-400'   },
		{ label: 'Modifier',   light: 'bg-violet-50  border-violet-200  text-violet-700',  dark: 'dark:bg-violet-950  dark:border-violet-800  dark:text-violet-400'  }
	];

	let activeId = $state(presets[0].id);
	const activePreset = $derived(presets.find((p) => p.id === activeId) ?? presets[0]);

	let isDark = $state(false);

	onMount(() => {
		isDark = document.documentElement.classList.contains('dark');
	});

	function toggleTheme() {
		isDark = !isDark;
		document.documentElement.classList.toggle('dark', isDark);
		localStorage.setItem('theme', isDark ? 'dark' : 'light');
	}
</script>

<div class="min-h-screen bg-zinc-100 dark:bg-zinc-950 px-4 py-12 transition-colors duration-200">
	<div class="mx-auto max-w-5xl">
		<!-- Header -->
		<header class="mb-8 flex items-start justify-between">
			<div class="flex-1"></div>
			<div class="text-center flex-1">
				<h1 class="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">Hotkeys Visualizer</h1>
				<p class="mt-2 text-sm text-zinc-500 dark:text-zinc-400">Visualize keyboard shortcuts on any layout</p>
			</div>
			<div class="flex-1 flex justify-end">
				<button
					onclick={toggleTheme}
					class="rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 px-3 py-1.5 text-sm text-zinc-600 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors"
					title="Toggle dark mode"
				>
					{isDark ? '☀ Light' : '☾ Dark'}
				</button>
			</div>
		</header>

		<!-- Tab bar -->
		<div class="mb-6 flex justify-center">
			<div class="flex gap-1 rounded-xl bg-zinc-200 dark:bg-zinc-800 p-1">
				{#each presets as preset (preset.id)}
					<button
						onclick={() => (activeId = preset.id)}
						class="rounded-lg px-4 py-1.5 text-sm font-medium transition-all duration-150
							{activeId === preset.id
							? 'bg-white dark:bg-zinc-700 text-zinc-900 dark:text-zinc-100 shadow-sm'
							: 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200'}"
					>
						{preset.name}
					</button>
				{/each}
			</div>
		</div>

		<!-- Active preset description -->
		<p class="mb-6 text-center text-xs text-zinc-400 dark:text-zinc-500">{activePreset.description}</p>

		<!-- Keyboard -->
		<section class="flex justify-center">
			<Keyboard preset={activePreset} />
		</section>

		<!-- Legend -->
		<section class="mt-8 flex flex-wrap justify-center gap-3">
			{#each LEGEND as item}
				<div class="flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-xs font-medium {item.light} {item.dark}">
					<span class="h-2 w-2 rounded-sm border {item.light} {item.dark}"></span>
					{item.label}
				</div>
			{/each}
		</section>

		<!-- Shortcut count -->
		<p class="mt-6 text-center text-xs text-zinc-400 dark:text-zinc-500">
			{activePreset.hotkeys.length} shortcuts mapped · {activePreset.name}
		</p>
	</div>
</div>
