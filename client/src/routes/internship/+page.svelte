<script>
	import Internshipcards from './../../components/InternShip/internShipImportant/Internshipcards.svelte';
	import InternShipHero from '../../components/InternShip/HeroSection/InternShipHero.svelte';
	import Aboutinternhero from '../../components/InternShip/AboutIntenship/AboutInternHero/Aboutinternhero.svelte';
	import Aboutintercards from '../../components/InternShip/AboutIntenship/Aboutinterncards/Aboutintercards.svelte';
	import Elitestudents from '../../components/InternShip/Testimonials/Elitestudents/Elitestudents.svelte';
	import Frequentquestion from '../../components/InternShip/Testimonials/FrequentQuestions/Frequentquestion.svelte';
	import TestimonialsHero from '../../components/InternShip/Testimonials/TestimonialHero/TestimonialsHero.svelte';
	import Footer from '../../components/Footer/Footer.svelte';
</script>

<div>
	<!-- Internship Home -->
	<div class="bg-internherobg">
		<InternShipHero />
	</div>
	<Internshipcards />
	<!-- Internship About -->
	<div class="bg-internherobg">
		<Aboutinternhero />
		<Aboutintercards />
	</div>
	<!-- Internship Testimonials -->

	<div class="herobg-back min-h-[90vh]">
		<TestimonialsHero />
	</div>
	<Elitestudents />
	<Frequentquestion />
	<Footer />
</div>

<style>
</style>
