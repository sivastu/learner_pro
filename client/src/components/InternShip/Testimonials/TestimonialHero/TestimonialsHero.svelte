<script>
	import Button from '$lib/components/ui/button/button.svelte';
	import Card from '$lib/components/ui/card/card.svelte';
	import stars from '../../../../img/Internship/stars.svg';
	import student1 from '../../../../img/Internship/student1.png';
</script>

<main
	class=" testimonialhero flex min-h-[90vh] w-full items-center overflow-x-hidden text-white opacity-95"
>
	<div class="container mx-auto mt-20">
		<div class="grid grid-cols-2">
			<div class="">
				<div class="">
					<h1 data-aos="fade-up" class="font-publicaz text-herodesc text-nowrap text-6xl">
						Internship Testimonials
					</h1>
				</div>
				<div class=" pt-5">
					<Button
						style="background: linear-gradient(82.96deg, #FFFFFF -29.79%, #FF3434 -29.77%, #00B4DB -9.84%, #E9E9E9 108.39%, #212443 161.74%);"
						class="font-publicaz rounded-full px-12 py-8 text-[30px] text-[#000000]"
						>Events and achievements</Button
					>
				</div>
			</div>
			<div class="grid grid-cols-2 gap-10">
				<Card
					style="
                    border: 0px solid;
                    border-image-source: linear-gradient(132.43deg, rgba(255, 255, 255, 0.24) 0%, rgba(255, 255, 255, 0) 61.87%);
                    background-color: rgba(0, 0, 0, 0.8);
                    "
					class="rounded-xl border-0 border-opacity-25 shadow-2xl"
				>
					<div class="px-4 py-4">
						<div class="flex items-center gap-3">
							<div>
								<img
									src={student1}
									style="border-radius: 50%; object-fit: contain"
									class="h-[140px] w-[140px]"
									alt="student1"
								/>
							</div>
							<div>
								<h1 class="font-publicamedium text-xl text-[#FFFFFF]">Kingshiya K S</h1>
								<div
									class="font-publicalight mt-2 text-nowrap"
									style="color: rgba(255, 255, 255, 0.69);"
								>
									<h1>3rd year CSE DEPT, SMCE.</h1>
								</div>
								<div class="mt-1">
									<img src={stars} alt="stars" />
								</div>
							</div>
						</div>
						<div class="font-publicalight pt-3 text-center text-[18px] text-[#D8D8D8]">
							<p>
								My experience as a software development intern at XYZ Tech was nothing short of
								transformative. From day one, I was immersed in real-world projects that challenged
								and expanded my coding skills.
							</p>
						</div>
					</div>
				</Card>
				<Card
					style="
                border: 0px solid;
                border-image-source: linear-gradient(132.43deg, rgba(255, 255, 255, 0.24) 0%, rgba(255, 255, 255, 0) 61.87%);
                background-color: rgba(0, 0, 0, 0.8);
                "
					class="rounded-xl border-0 border-opacity-25 shadow-2xl"
				>
					<div class="px-4 py-4">
						<div class="flex items-center gap-3">
							<div>
								<img
									src={student1}
									style="border-radius: 50%; object-fit: contain"
									class="h-[140px] w-[140px]"
									alt="student1"
								/>
							</div>
							<div>
								<h1 class="font-publicamedium text-xl text-[#FFFFFF]">Kingshiya K S</h1>
								<div
									class="font-publicalight mt-2 text-nowrap"
									style="color: rgba(255, 255, 255, 0.69);"
								>
									<h1>3rd year CSE DEPT, SMCE.</h1>
								</div>
								<div class="mt-1">
									<img src={stars} alt="stars" />
								</div>
							</div>
						</div>
						<div class="font-publicalight pt-3 text-center text-[18px] text-[#D8D8D8]">
							<p>
								My experience as a software development intern at XYZ Tech was nothing short of
								transformative. From day one, I was immersed in real-world projects that challenged
								and expanded my coding skills.
							</p>
						</div>
					</div>
				</Card>
			</div>
		</div>
		<div class="mt-4 grid grid-cols-4 gap-10">
			<Card
				style="
                border: 0px solid;
                border-image-source: linear-gradient(132.43deg, rgba(255, 255, 255, 0.24) 0%, rgba(255, 255, 255, 0) 61.87%);
                background-color: rgba(0, 0, 0, 0.8);
                "
				class="rounded-xl border-0 border-opacity-25 shadow-2xl"
			>
				<div class="px-4 py-4">
					<div class="flex items-center gap-3">
						<div>
							<img
								src={student1}
								style="border-radius: 50%; object-fit: contain"
								class="h-[140px] w-[140px]"
								alt="student1"
							/>
						</div>
						<div>
							<h1 class="font-publicamedium text-xl text-[#FFFFFF]">Kingshiya K S</h1>
							<div
								class="font-publicalight mt-2 text-nowrap"
								style="color: rgba(255, 255, 255, 0.69);"
							>
								<h1>3rd year CSE DEPT, SMCE.</h1>
							</div>
							<div class="mt-1">
								<img src={stars} alt="stars" />
							</div>
						</div>
					</div>
					<div class="font-publicalight pt-3 text-center text-[18px] text-[#D8D8D8]">
						<p>
							My experience as a software development intern at XYZ Tech was nothing short of
							transformative. From day one, I was immersed in real-world projects that challenged
							and expanded my coding skills.
						</p>
					</div>
				</div>
			</Card>
			<Card
				style="
            border: 0px solid;
            border-image-source: linear-gradient(132.43deg, rgba(255, 255, 255, 0.24) 0%, rgba(255, 255, 255, 0) 61.87%);
            background-color: rgba(0, 0, 0, 0.8);
            "
				class="rounded-xl border-0 border-opacity-25 shadow-2xl"
			>
				<div class="px-4 py-4">
					<div class="flex items-center gap-3">
						<div>
							<img
								src={student1}
								style="border-radius: 50%; object-fit: contain"
								class="h-[140px] w-[140px]"
								alt="student1"
							/>
						</div>
						<div>
							<h1 class="font-publicamedium text-xl text-[#FFFFFF]">Kingshiya K S</h1>
							<div
								class="font-publicalight mt-2 text-nowrap"
								style="color: rgba(255, 255, 255, 0.69);"
							>
								<h1>3rd year CSE DEPT, SMCE.</h1>
							</div>
							<div class="mt-1">
								<img src={stars} alt="stars" />
							</div>
						</div>
					</div>
					<div class="font-publicalight pt-3 text-center text-[18px] text-[#D8D8D8]">
						<p>
							My experience as a software development intern at XYZ Tech was nothing short of
							transformative. From day one, I was immersed in real-world projects that challenged
							and expanded my coding skills.
						</p>
					</div>
				</div>
			</Card>
			<Card
				style="
            border: 0px solid;
            border-image-source: linear-gradient(132.43deg, rgba(255, 255, 255, 0.24) 0%, rgba(255, 255, 255, 0) 61.87%);
            background-color: rgba(0, 0, 0, 0.8);
            "
				class="rounded-xl border-0 border-opacity-25 shadow-2xl"
			>
				<div class="px-4 py-4">
					<div class="flex items-center gap-3">
						<div>
							<img
								src={student1}
								style="border-radius: 50%; object-fit: contain"
								class="h-[140px] w-[140px]"
								alt="student1"
							/>
						</div>
						<div>
							<h1 class="font-publicamedium text-xl text-[#FFFFFF]">Kingshiya K S</h1>
							<div
								class="font-publicalight mt-2 text-nowrap"
								style="color: rgba(255, 255, 255, 0.69);"
							>
								<h1>3rd year CSE DEPT, SMCE.</h1>
							</div>
							<div class="mt-1">
								<img src={stars} alt="stars" />
							</div>
						</div>
					</div>
					<div class="font-publicalight pt-3 text-center text-[18px] text-[#D8D8D8]">
						<p>
							My experience as a software development intern at XYZ Tech was nothing short of
							transformative. From day one, I was immersed in real-world projects that challenged
							and expanded my coding skills.
						</p>
					</div>
				</div>
			</Card>
			<Card
				style="
            border: 0px solid;
            border-image-source: linear-gradient(132.43deg, rgba(255, 255, 255, 0.24) 0%, rgba(255, 255, 255, 0) 61.87%);
            background-color: rgba(0, 0, 0, 0.8);
            "
				class="rounded-xl border-0 border-opacity-25 shadow-2xl"
			>
				<div class="px-4 py-4">
					<div class="flex items-center gap-3">
						<div>
							<img
								src={student1}
								style="border-radius: 50%; object-fit: contain"
								class="h-[140px] w-[140px]"
								alt="student1"
							/>
						</div>
						<div>
							<h1 class="font-publicamedium text-xl text-[#FFFFFF]">Kingshiya K S</h1>
							<div
								class="font-publicalight mt-2 text-nowrap"
								style="color: rgba(255, 255, 255, 0.69);"
							>
								<h1>3rd year CSE DEPT, SMCE.</h1>
							</div>
							<div class="mt-1">
								<img src={stars} alt="stars" />
							</div>
						</div>
					</div>
					<div class="font-publicalight pt-3 text-center text-[18px] text-[#D8D8D8]">
						<p>
							My experience as a software development intern at XYZ Tech was nothing short of
							transformative. From day one, I was immersed in real-world projects that challenged
							and expanded my coding skills.
						</p>
					</div>
				</div>
			</Card>
		</div>
	</div>
</main>

<style>
	.testimonialhero {
		background-image: url(../../../../img/Internship/testimonial.png);
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
	}
</style>
