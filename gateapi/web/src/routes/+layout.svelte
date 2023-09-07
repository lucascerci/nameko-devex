<script lang="ts">
	import '../app.css';
	import Navbar from '../components/+navbar.svelte'
</script>

<svelte:head>
	<title>Nameko</title>
</svelte:head>

<main>
	<Navbar />
	<div class="container">
		<slot />
	</div>	
</main>
