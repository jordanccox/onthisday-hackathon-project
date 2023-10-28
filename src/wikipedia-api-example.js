// THIS PAGE IS JUST FOR GETTING THE WIKIPEDIA API WORKING
import wikipedia from 'wikipedia';

const wiki = wikipedia;

export const wikiApiFunction = async () => {
  try {
		const page = await wiki.page('Roman_consul');
		console.log(page);
		//Response of type @Page object
		const summary = await page.summary();
		console.log(summary);
		//Response of type @wikiSummary - contains the intro and the main image
	} catch (error) {
		console.log(error);
		//=> Typeof wikiError
	}
};