/** @type {import('next-sitemap').IConfig} */

module.exports = {
	siteUrl: process.env.SITE_URL,
	generateRobotsTxt: true,
	robotsTxtOptions: {
		policies: [
			{ userAgent: '*', disallow: '/admin/' },
			{ userAgent: '*', disallow: '/connexion/' },
			{ userAgent: '*', allow: '/' },
		],
	},
	exclude: ['/admin*', '/connexion*'],
}
