<script lang="ts">
	import SignIn from 'clerk-sveltekit/client/SignIn.svelte'
</script>

<div class="flex flex-col items-center justify-center absolute top-0 bottom-0 left-0 right-0">
	<SignIn redirectUrl="/" />
</div>