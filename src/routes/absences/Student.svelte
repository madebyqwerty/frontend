<script lang="ts">
	interface Student {
		name: string;
		id: string;
	}
	import { ChevronRight } from 'lucide-svelte';

	export let student: Student;
	let open = false;

	function switchState() {
		open = !open;
	}

	async function getAbsences() {
		/* 		const res = await fetch(`http://localhost:5000/api/absences/${student.id}`);

		const data = await res.json();

		console.log(data);

		if (!res.ok) throw new Error(data); */

		return [
			{
				name: 'John Doe',
				userId: '7d6fd0c4-6b3d-46d9-9840-5e8874c9c646',
				id: 'f7cabd53-49e1-4c93-b59e-6035811b134d',
				lesson: 2,
				date: '2023-05-14'
			}
		];
	}
</script>

<div class="bg-white p-2 flex flex-col h-max duration-300 transition-all">
	<button class="flex text-base-800 items-center gap-1" on:click={switchState}>
		<ChevronRight size={18} />
		<p class="font-semibold text-base-950">{student.name}</p>
	</button>
	{#if open}
		{#await getAbsences()}
			<p>Loading...</p>
		{:then absences}
			{#each absences as absence}
				<div class="flex flex-col gap-1">
					<p class="text-base-800">{absence.date}</p>
					<p class="text-base-800">{absence.lesson}</p>
				</div>
			{/each}
		{:catch error}
			<p class="text-base-800">{JSON.stringify(error.message)}</p>
		{/await}
	{/if}
</div>
