<script>
	import imageUrl from '../../img/login.png';
	export let gradientColor1 = '#424242';
	export let gradientColor2 = '#0E0E0E';
 
	import { onMount } from 'svelte';
 
function otpless(otplessUser) {
  alert(JSON.stringify(otplessUser)); 
}
 
let otplessUser = {
  username: 'example_user',
  email: 'example@example.com' 
};
 
onMount(() => {
  otpless(otplessUser);
});
</script>

<div style="overflow-x: hidden;">
	<div>
		<div class="row" style="height: 100%">
			<div class="col-8" style="height: 100%">
				<div
					style="background: radial-gradient(circle, {gradientColor1}, {gradientColor2});
					 width: 100%; height: 100vh; justify-content: center; align-items: center; display: flex;"
				>
					<div style="width: 680px; height: 450px">
						<img style="width: 100%; height: auto;" src={imageUrl} alt="Description of the image" />
					</div>
				</div>
			</div>

			<div class="col-4">
				<div
					style="width: 100%; height: 100vh; justify-content: center; align-items: center; display: flex;"
				>
					<div id="otpless-login-page"></div>
				</div>
			</div>
		</div>
	</div>
</div>
<!-- <h1>Welcome to Login</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p> -->
