<script>
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';

	const {data} = $props()

	console.log(data.users)
</script>

<ThemeToggle />

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
