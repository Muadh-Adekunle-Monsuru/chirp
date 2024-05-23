export const generateProfile = () => {
	const randNum = Math.floor(Math.random() * 7) + 1;
	const randSeed = Math.floor(Math.random() * 20) + 1;
	let styles;
	switch (randNum) {
		case 1:
			styles = 'adventurer-neutral';
			break;
		case 2:
			styles = 'big-ears-neutral';
			break;
		case 3:
			styles = 'bottts';
			break;
		case 4:
			styles = 'bottts-neutral';
			break;
		case 5:
			styles = 'fun-emoji';
			break;
		case 6:
			styles = 'pixel-art-neutral';
			break;
		case 7:
			styles = 'notionists-neutral';
			break;
	}
	return `https://api.dicebear.com/8.x/${styles}/svg?seed=${randSeed}`;
};
