<script>
	import brain from '../../../img/Home/brain.png';
	import brainman from '../../../img/Home/brainman.png';
	import check from '../../../img/Home/checkmark.svg';
</script>

<main
	class="min-h-screen w-full overflow-x-hidden bg-gradient-to-r from-[#000000] via-[#000000] to-[#33FEFD]"
>
	<div class="container mx-auto">
		<div class="grid items-center justify-between lg:grid-cols-2">
			<div class="font-publicaz pt-40">
				<h1 class="text-herotext text-nowrap text-[50px] xl:text-[70px]">Making Students</h1>
				<div
					class="text-herotext flex items-center gap-2 text-nowrap text-[50px] leading-tight xl:text-[70px]"
				>
					Creative <div class="rounded-full bg-[#13D9E4]">
						<img class="-mt-8 h-[110px] w-[180px]" src={brainman} alt="" />
					</div>
					Future
				</div>
				<div class="mt-36">
					<div class="font-publicaz text-herotext mb-4 flex items-center gap-12">
						<div><img src={check} alt="checkMark" /></div>
						<div class="text-[45px]">Creativity</div>
					</div>
					<div class="font-publicaz text-herotext mb-4 flex items-center gap-12">
						<div><img src={check} alt="checkMark" /></div>
						<div class="text-[45px]">Digital Litercy</div>
					</div>
					<div class="font-publicaz text-herotext mb-4 flex items-center gap-12">
						<div><img src={check} alt="checkMark" /></div>
						<div class="text-[45px]">Communication</div>
					</div>
				</div>
			</div>
			<div>
				<img alt="LearnerPro Illustration" class="h-auto max-w-full" src={brain} />
			</div>
		</div>
	</div>
</main>
