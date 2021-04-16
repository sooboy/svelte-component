<script lang="ts">
	import type { Itemer } from "./interface";

	export let items: Itemer[] = [];
</script>

<div class="out">
	<div class="selected" />
	<div class="inner">
		{#each items as item}
			<div class="item">{item.name}</div>
		{/each}
	</div>
</div>
