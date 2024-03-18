<script>
	import Icon from '@iconify/svelte';
	import coding from '../../../img/Home/coding.png';
	import coding1 from '../../../img/Home/coding1.png';
	import { Card } from '$lib/components/ui/card';
</script>

<main class="bg-codingballs min-h-screen w-full overflow-x-hidden text-white">
	<div class="px-10 pb-20 lg:container lg:mx-auto">
		<div class="  grid pt-32 lg:grid-cols-2 lg:gap-10">
			<div class="flex justify-center">
				<Card
					style="background: linear-gradient(120deg, #000807, #00A3FF);"
					class=" font-publicbold  border-0 px-5 py-5 "
				>
					<div class="text-codingtext text-4xl">
						<h1>Enter Coding Practice World</h1>
					</div>
					<div class="font-publicaz mt-3">
						<h1 class="text-codingtext flex items-center gap-2">
							<span class="text-lg">Start Practising Question</span>
							<Icon icon="cil:arrow-right" class="text-3xl" />
						</h1>
					</div>
					<div class="mt-10">
						<img class="" style="object-fit: contain;" src={coding} alt="" />
					</div>
				</Card>
			</div>
			<div class="flex justify-center">
				<Card
					style="background: linear-gradient(120deg, #000807, #00A3FF);"
					class="font-publicbold border-0 bg-[#A1A4A3] px-5 py-5"
				>
					<div class="text-codingtext text-4xl">
						<h1>You Cleared Your Aptitude Questions</h1>
					</div>
					<div class="font-publicaz mt-3">
						<h1 class="text-codingtext flex items-center gap-2">
							<span class="text-lg">Learn More</span>
							<Icon icon="cil:arrow-right" class="text-3xl" />
						</h1>
					</div>
					<div class="mt-10">
						<img class="" style="object-fit: contain;" src={coding1} alt="" />
					</div>
				</Card>
			</div>
		</div>
		<div class="font-publicaz mt-16 flex justify-center text-[20px]">
			<div>Over 17,000+ Users all over the world</div>
		</div>
	</div>
</main>
