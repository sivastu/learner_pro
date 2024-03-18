<script>
	import Button from '$lib/components/ui/button/button.svelte';
	import internai from '../../../../img/Internship/internai.png';
	import inrenbg from '../.././../../img/Internship/internherobg.png';
</script>

<div class=" container mt-10 flex min-h-[95vh] sm:mt-0">
	<div class="grid grid-cols-1 items-center gap-6 sm:grid-cols-2">
		<div class=" space-y-5 xl:pr-40">
			<h1
				data-aos="fade-up"
				class="font-publicaz text-herodesc flex justify-center text-nowrap text-5xl xl:text-7xl"
			>
				About Internship
			</h1>
			<p
				data-aos="fade-up"
				class=" font-publicaz pb-3 pt-5 text-center text-[19px]"
				data-aos-delay="300"
				style="color:rgba(255, 255, 255, 0.74);"
			>
				Internships provide invaluable hands-on experience, bridging the gap between academic
				learning and real-world application, fostering professional growth.
			</p>
			<div class="flex justify-center pt-5">
				<Button
					style="background: linear-gradient(82.96deg, #FFFFFF -29.79%, #FF3434 -29.77%, #00B4DB -9.84%, #E9E9E9 108.39%, #212443 161.74%);"
					class="font-publicbold rounded-full px-12 py-6 text-[20px] text-[#000000]"
					>CHECK TESTIMONIALS</Button
				>
			</div>
		</div>

		<div class="hero-bg hero relative">
			<img src={internai} alt="" class=" w-full" />
			<img src={inrenbg} alt="" class="absolute left-0 top-0 z-10 animate-pulse" />
			<div data-aos="slide-right" class=""></div>
		</div>
	</div>
</div>

<style>
	.hero {
		background-image: url(../../../../img/Internship/internherobg.png);
	}
</style>
