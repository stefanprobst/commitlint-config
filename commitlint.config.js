/** @type {import("@commitlint/types").UserConfig} */
const config = {
	extends: ["@commitlint/config-conventional"],
	rules: {
		"subject-case": [0],
		"type-enum": [
			2,
			"always",
			[
				"build",
				"chore",
				"ci",
				"content",
				"data",
				"docs",
				"feat",
				"fix",
				"perf",
				"refactor",
				"revert",
				"style",
				"test",
			],
		],
	},
};

export default config;
