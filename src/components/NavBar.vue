<template lang="pug">
	.header
		.d-flex.align-items-center.bg-dark.text-light-gray
			.logo.p-3.mr-2
				i.fa.fa-sun.text-light
			router-link(to='/')
				.p-2.mr-2 Home
			router-link(to='daily' v-show='chk')
				.p-2.mr-2 Daily Weather
			router-link(to='weekly' v-show='chk')
				.p-2.mr-2 weekly Weather
</template>



<script>
export default {
	name: 'NavBar',
	computed: {
		chk() {
			return this.$store.state.daily
		}
	},
}
</script>

<style scoped lang="less">
	a {
		text-decoration: none;
		&:link {color:#fff1e0; text-decoration: none;}
		&:visited {color:#fff1e0;text-decoration: none;}
		&:active {color:#fff1e0; text-decoration: none;}
		&:hover {color:#ebc492; text-decoration: none;}
	}
</style>