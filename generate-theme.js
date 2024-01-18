import fs from 'fs';

const color = process.argv[2] ?? 'neutral';

const lightColors = {
	blue: 'rgb(0,0,20)',
	green: 'rgb(0,20,0)',
	teal: 'rgb(0,20,20)',
	red: 'rgb(20,0,0)',
	purple: 'rgb(20,0,20)',
	yellow: 'rgb(20,20,0)',
	neutral: 'rgb(0,0,0)'
};

const darkColors = {
	neutral: 'neutral',
	red: 'red',
	yellow: 'yellow',
	green: 'green',
	teal: 'teal',
	blue: 'blue',
	purple: 'purple'
};

const themeFile = `@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
	body {
		@apply text-[${lightColors[color]}] bg-${darkColors[color]}-100
		 dark:text-${darkColors[color]}-100 dark:bg-[${lightColors[color]}];
	}
	*,
	::after,
	::before {
		@apply border-[${lightColors[color]}] dark:border-${darkColors[color]}-100;
	}
}

@layer components {
	.bg-primary {
		@apply bg-${darkColors[color]}-100 dark:bg-[${lightColors[color]}];
	}
	.bg-contrast {
		@apply bg-[${lightColors[color]}] dark:bg-${darkColors[color]}-100;
	}
	.text-primary {
		@apply text-${darkColors[color]}-100 dark:text-[${lightColors[color]}];
	}
	.text-contrast {
		@apply text-[${lightColors[color]}] dark:text-${darkColors[color]}-100;
	}
	.text-disabled {
		@apply text-gray-500;
	}
}
`;

fs.writeFileSync('src/theme.css', themeFile, {
	encoding: 'utf-8'
});
