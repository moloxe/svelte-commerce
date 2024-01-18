<script lang="ts">
	export let photos: string[];
	let pickedPhoto = 0;

	const scrollToFirstPhoto = () =>
		document.getElementsByClassName('photo-gallery')[0]?.scrollIntoView({ behavior: 'smooth' });

	function pickPhoto(index: number) {
		pickedPhoto = index;
		setTimeout(() => {
			scrollToFirstPhoto();
		}, 100);
	}
</script>

<div
	class={`photo-gallery relative grid overflow-hidden ${
		photos.length > 1 ? 'grid-rows-[1fr,auto]' : ''
	}`}
>
	{#if photos.length > 1}
		<div class="z-10 flex overflow-x-auto bg-[#000a]">
			<div class="flex">
				{#each photos as photo, index}
					<button
						class={`
							flex overflow-hidden w-40 h-40
							${pickedPhoto === index ? 'border-2 border-white' : ''}
						`}
						on:click={() => pickPhoto(index)}
					>
						<img
							class={`
								flex h-full w-full object-cover
								transition duration-300 ease-in-out hover:scale-110 focus:scale-110
							`}
							draggable="false"
							src={photo}
							alt={photo + ' option to select'}
						/>
					</button>
				{/each}
			</div>
		</div>
	{/if}
	<img
		class="absolute z-0 top-0 flex h-full w-full aspect-[4/3] object-cover blur-lg"
		src={photos[pickedPhoto]}
		alt="blured cover"
	/>
	<div class="z-10 overflow-hidden">
		<img
			class="flex h-auto w-full aspect-[4/3] object-contain transition duration-300 ease-in-out hover:scale-110 focus:scale-110"
			src={photos[pickedPhoto]}
			alt="product"
		/>
	</div>
</div>
