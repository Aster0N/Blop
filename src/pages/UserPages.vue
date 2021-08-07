<template>
	<div id="pages-container">
		<registered-user-page v-if="fakeData"></registered-user-page>
		<un-registered-user-page v-else></un-registered-user-page>
	</div>
</template>

<script>
import RegisteredUserPage from "../components/RegisteredUserPage";
import UnRegisteredUserPage from "../components/UnRegisteredUserPage";
// ! fake data
// TODO import fake data file here and include the value of 'isRegistered: true/false' into the data function
// TODO welcome page cursor
export default {
	name: "user-pages",
	components: {
		RegisteredUserPage,
		UnRegisteredUserPage,
	},
	data() {
		return {
			fakeData: false,
		};
	},
};
</script>

<style>
</style>