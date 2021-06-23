'use strict';

const faker = require("faker");

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Products', [
			{
				ownerId: faker.datatype.number({ "min": 1, "max": 11 }),
				title: '1PC Secret Jelly Lipstick Color Changing Long Lasting Lip Gloss Random Color',
				imageUrl: 'https://m.media-amazon.com/images/I/61bXyMM5rFL._AC_UL320_.jpg',
				productUrl: 'https://www.amazon.com/Weixinbuy-Secret-Lipstick-Changing-Lasting/dp/B019DWCJDG',
				description: '#310,811 in Beauty & Personal Care',
				createdAt: faker.date.past(),
				updatedAt: faker.date.recent(),
			},
			{
				ownerId: faker.datatype.number({ "min": 1, "max": 11 }),
				title: 'Chubby Blob Seal Pillow Plush Animal Toy Stuffed Seal Plushie Cotton Cute Pillow Gray 13.0',
				imageUrl: 'https://m.media-amazon.com/images/I/71-anQQmcrL._AC_UL320_.jpg',
				productUrl: 'https://www.amazon.com/Rainlin-Chubby-Pillow-Stuffed-Cotton/dp/B07ZMCDNCD',
				description: 'The cute seal pillow makes you comfortable on the sofa, watching TV, and it is a great gift for a child, family or friend!',
				createdAt: faker.date.past(),
				updatedAt: faker.date.recent(),
			},
			{
				ownerId: faker.datatype.number({ "min": 1, "max": 11 }),
				title: 'Yodelling Pickle Multi-colored, 8\"',
				imageUrl: 'https://m.media-amazon.com/images/I/51LzzDvGDoL._AC_UL320_.jpg',
				productUrl: 'https://www.amazon.com/Accoutrements-11761-Yodelling-Pickle/dp/B0010VS078',
				description: 'Great gift for the person who has everything except a yodeling pickle. Hours of mindless entertainment!',
				createdAt: faker.date.past(),
				updatedAt: faker.date.recent(),
			},
			{
				ownerId: faker.datatype.number({ "min": 1, "max": 11 }),
				title: 'The Official BS Button',
				imageUrl: 'https://m.media-amazon.com/images/I/51NG5BmETqL._AC_UL320_.jpg',
				productUrl: 'https://www.amazon.com/Gemmy-32651-The-Official-Button/dp/B000L70MQO',
				description: 'Giant red button makes a hilarious statement or two. Perfect for calling out BS without having to say a word yourself. The button will call it like you see it',
				createdAt: faker.date.past(),
				updatedAt: faker.date.recent(),
			},
			{
				ownerId: faker.datatype.number({ "min": 1, "max": 11 }),
				title: 'Swiss Army Knife Giant',
				imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71FHJU17djL._AC_SX466_.jpg',
				productUrl: 'https://www.amazon.com/dp/B001DZTJRQ',
				description: '87 implements. 141 functions. Perfect for the collector.',
				createdAt: faker.date.past(),
				updatedAt: faker.date.recent(),
			},
			{
				ownerId: faker.datatype.number({ "min": 1, "max": 11 }),
				title: 'A Million Random Digits with 100,000 Normal Deviates 0th Edition',
				imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41XwwSaAtXL._SX384_BO1,204,203,200_.jpg',
				productUrl: 'https://www.amazon.com/dp/0833030477',
				description: 'This book, A Million Random Digits with 100,000 Normal Deviates, was written by the RAND Corporation in the 1950s to provide "high quality" random numbers for research workers to use.',
				createdAt: faker.date.past(),
				updatedAt: faker.date.recent(),
			},
			{
				ownerId: faker.datatype.number({ "min": 1, "max": 11 }),
				title: 'Custom Nicolas Cage Pillowcase Standard Size 20"X30" Design Pillow Case Cover',
				imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51CMRAWkAhL._AC_.jpg',
				productUrl: 'https://www.amazon.com/Custom-Nicolas-Pillowcase-Standard-Design/dp/B00JF0HRLG',
				description: 'The installation removal of simple. To protect your phone from damage. Convenient access to any port of the phone. Fashion classic design',
				createdAt: faker.date.past(),
				updatedAt: faker.date.recent(),
			},
			{
				ownerId: faker.datatype.number({ "min": 1, "max": 11 }),
				title: 'DEATH WISH Death Cups [10 Count] Single Serve Coffee Pods, World’s Strongest Coffee, Dark Roast, Capsule Cup, USDA Certified Organic, Fair Trade, Arabica and Robusta Beans',
				imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81T6Z8qib8L._SX679_.jpg',
				productUrl: 'https://www.amazon.com/Death-Wish-Coffee-Capsules-Brewers/dp/B00FJYTGBG/',
				description: 'WORLD’S STRONGEST COFFEE: Death Cups are packed with our signature dark-roasted Death Wish Coffee that will instantly transform your basic cup of joe into a delicious, bold, and intense beverage that will revolutionize your morning. Get ready to wake up, feel focused, and be good to go.',
				createdAt: faker.date.past(),
				updatedAt: faker.date.recent(),
			},
			{
				ownerId: faker.datatype.number({ "min": 1, "max": 11 }),
				title: 'Burritos Tortilla Blanket 2.0 Double Sided 60 inches for Adult and Kids, 285 GSM Funny Soft Flannel Taco Blanket, Novelty Giant Food Blanket for Everyone, Yellow Blanket Double Sided',
				imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/610baw8NSdL._AC_SL1200_.jpg',
				productUrl: 'https://www.amazon.com/Jorbest-Burritos-Tortilla-Wearable-Everyone/dp/B07R1XFBDS',
				description: 'This Double Sided Burritos Blanket 2.0 is 60 Inches in Diameter With a Cozy Single-layer Design. Flannel Fabric With Realistic Burritos Pattern Uses Eco-friendly Dyes That Provides Fade Resistance.',
				createdAt: faker.date.past(),
				updatedAt: faker.date.recent(),
			},
			{
				ownerId: faker.datatype.number({ "min": 1, "max": 11 }),
				title: 'The Original Double Bird Garden Gnome Statue, 8.45" Tall - Indoor/Outdoor Funny Lawn Gnome Decoration',
				imageUrl: 'https://m.media-amazon.com/images/I/616s3VQniRL._AC_UL320_.jpg',
				productUrl: 'https://www.amazon.com/Gnometastic-Original-Double-Garden-Statue/dp/B084YVV8HX',
				description: 'Angry Dude: He\'s not just mad, this little guy is giving both middle fingers to just about everything that pisses him off - the cat next door, irritating neighbors, pesky garden fairies, small yapping dogs and the stupid squirrels!',
				createdAt: faker.date.past(),
				updatedAt: faker.date.recent(),
			},
			{
				ownerId: faker.datatype.number({ "min": 1, "max": 11 }),
				title: 'I Don\'t Have Road Rage You\'re Just an Idiot Funny Trucker T-Shirt',
				imageUrl: 'https://m.media-amazon.com/images/I/71S8jd8QQcL._AC_UL320_.jpg',
				productUrl: 'https://www.amazon.com/Youre-Idiot-Funny-Trucker-T-Shirt/dp/B0827DG711',
				description: 'Check out this awesome Truck Driver design! Perfect for anyone that loves the smell of diesel when they wake up in the morning. Perfect for when you drive your Hauler on the open road. Fill out your log book, or don\'t, while rocking this design.',
				createdAt: faker.date.past(),
				updatedAt: faker.date.recent(),
			},
			{
				ownerId: faker.datatype.number({ "min": 1, "max": 11 }),
				title: 'Handerpants Underpants for Your Hands',
				imageUrl: 'https://m.media-amazon.com/images/I/61uNoeDAztL._AC_UL320_.jpg',
				productUrl: 'https://www.amazon.com/Archie-McPhee-Handerpants-Underpants-Hands/dp/B002Q0L6UK',
				description: 'Stylish for any occasion. Fits most adult hands. Hundreds of uses. Wonderful gift.',
				createdAt: faker.date.past(),
				updatedAt: faker.date.recent(),
			},
			{
				ownerId: faker.datatype.number({ "min": 1, "max": 11 }),
				title: 'Pimple Popping Toy Funny Silicone Pimple Popping Decompression Relax Toy - Practical Jokes Toy',
				imageUrl: 'https://m.media-amazon.com/images/I/713jO3Qlw7L._AC_UL320_.jpg',
				productUrl: 'https://www.amazon.com/KYW-Pimple-Popping-Silicone-Decompression/dp/B07NYSHWJ9',
				description: '【Relieve stress and relax】:Awesome Squeeze Pimple Stress Relief Toy, it simulates the feel and popping of a huge pimple and it can help us relax ourselves and throw the pressure away.',
				createdAt: faker.date.past(),
				updatedAt: faker.date.recent(),
			},
			{
				ownerId: faker.datatype.number({ "min": 1, "max": 11 }),
				title: 'Potty Putter Toilet Time Golf Game',
				imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81n5cbPP3mL._AC_SX679_.jpg',
				productUrl: 'https://www.amazon.com/Potty-Putter-Toilet-Time-Golf/dp/B000LC65QA',
				description: 'PUTT-Y TRAINING - Help even the crappiest golfer improve their putting game while pulling double duty and answering nature\'s call.',
				createdAt: faker.date.past(),
				updatedAt: faker.date.recent(),
			},
			{
				ownerId: faker.datatype.number({ "min": 1, "max": 11 }),
				title: 'Useless Box with Surprises Wooden Useless Box Fully Assembled Toy for Adults and Children',
				imageUrl: 'https://m.media-amazon.com/images/I/61rDEBAJBTL._AC_UL320_.jpg',
				productUrl: 'https://www.amazon.com/HRLORKC-Useless-Surprises-Assembled-Children/dp/B07TC1NRK4',
				description: 'Size: Useless box size is 6.1"X3.7"X2.8", requires 2AAA batteries (not included).',
				createdAt: faker.date.past(),
				updatedAt: faker.date.recent(),
			},
			{
				ownerId: faker.datatype.number({ "min": 1, "max": 11 }),
				title: 'MODS 40 Foot Tiny Home',
				imageUrl: 'https://i0.wp.com/bestlifeonline.com/wp-content/uploads/2018/08/tiny-home.jpg',
				productUrl: 'https://www.amazon.com/gp/product/B073FZ8PP9',
				description: 'Includes bedroom, shower, toilet, sink, kitchenette, living area. Double patio doors within secure container doors. Fully insulated. Bottom sewer connection, easy side water and electrical connection.',
				createdAt: faker.date.past(),
				updatedAt: faker.date.recent(),
			},
			{
				ownerId: faker.datatype.number({ "min": 1, "max": 11 }),
				title: 'Bacon Scented Mustache',
				imageUrl: 'https://i0.wp.com/bestlifeonline.com/wp-content/uploads/2018/08/51EsgLnGpNL.jpg',
				productUrl: 'https://www.amazon.com/Archie-McPhee-Accoutrements-Scented-Mustache/dp/B00FHNI3X6/ref=as_li_ss_tl?ie=UTF8&qid=1545321610&sr=8-12&keywords=weird+products&linkCode=sl1&tag=bestlife0c1-20&linkId=348d7428b52bcfe14c16a30898a53b8a&language=en_US',
				description: 'Includes one faux moustache. Bacon scented',
				createdAt: faker.date.past(),
				updatedAt: faker.date.recent(),
			},
			{
				ownerId: faker.datatype.number({ "min": 1, "max": 11 }),
				title: 'Mini USB Desktop Fridge Cooler Refrigerator',
				imageUrl: 'https://i0.wp.com/bestlifeonline.com/wp-content/uploads/2018/08/510g-cwJNBL.jpg',
				productUrl: 'https://www.amazon.com/Mini-Desktop-Fridge-Cooler-Refrigerator/dp/B00KE7FM3O/ref=as_li_ss_tl?ie=UTF8&qid=1545322138&sr=8-43&keywords=weird+products&linkCode=sl1&tag=bestlife0c1-20&linkId=d3e2d3f1cde2768f242d1ff5462a2137&language=en_US',
				description: 'No driver needed. Will work with any PC or Macintosh',
				createdAt: faker.date.past(),
				updatedAt: faker.date.recent(),
			},
			{
				ownerId: faker.datatype.number({ "min": 1, "max": 11 }),
				title: 'Dill Pickle Lip Balm – Pickle Gifts – Funny Gifts for Men – Flavored Lip Balm – Weird Stocking Stuffers – Funny Pickle Gifts – Dill Pickles – Unusual Gag Gifts – Unisex Gifts',
				imageUrl: 'https://i2.wp.com/bestlifeonline.com/wp-content/uploads/2018/08/dill-pickle-lip-balm.jpg',
				productUrl: 'https://www.amazon.com/gp/product/B06XFBRJJW',
				description: 'IT’S DILL-ICIOUS – Sweet pickles are okay and all, but everyone knows that the dill is the real hero in the pickle world. Enjoy that delicious dill pickle flavor anytime, anywhere!',
				createdAt: faker.date.past(),
				updatedAt: faker.date.recent(),
			},
			{
				ownerId: faker.datatype.number({ "min": 1, "max": 11 }),
				title: 'Nicolas Cage Sequin Pillow, Sequin Pillowcase, Two Color Pillow, Gift for her, Gift for him, Magic Pillow, Mermaid Pillow, Scales Pillow Cover, Funny Pillow (Cover Only)',
				imageUrl: 'https://i2.wp.com/bestlifeonline.com/wp-content/uploads/2018/08/nicolas-cage-pillow.jpg',
				productUrl: 'https://www.amazon.com/gp/product/B07FCG1HPG',
				description: 'Looking for a perfect Sequin Pillow Case? This one might be just for you! Exclusive vibrant Pillow Cover design, created by our in-house art designers',
				createdAt: faker.date.past(),
				updatedAt: faker.date.recent(),
			},
			{
				ownerId: faker.datatype.number({ "min": 1, "max": 11 }),
				title: 'Two Front Teeth (Red Lips) Baby Pacifier',
				imageUrl: 'https://m.media-amazon.com/images/I/41YjFan5ueL._AC_UL320_.jpg',
				productUrl: 'https://www.amazon.com/Front-Teeth-Pacifier-Discontinued-Manufacturer/dp/B000AKB4IM',
				description: 'Made with a silicone, orthodontic nipple that is 100-percent safe, BPA free, and Phthalate free',
				createdAt: faker.date.past(),
				updatedAt: faker.date.recent(),
			},
			{
				ownerId: faker.datatype.number({ "min": 1, "max": 11 }),
				title: 'Boyfriend Pillow The Original Boyfriend Body Pillow Blue',
				imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71J9%2Bx79wJL._AC_SX679_.jpg',
				productUrl: 'https://www.amazon.com/dp/B0046GK1AI',
				description: 'HUGS ARE HEALTHY: The ultimate arm pillow boyfriend is far more than just cute and comfy; it\'s healthful and beneficial as well. This cotton fiber feather-free pillow does not trigger or aggravate allergies. In addition, its ultra soft cover, which takes the form of a striking light azure T-shirt, won’t itch or irritate your skin.',
				createdAt: faker.date.past(),
				updatedAt: faker.date.recent(),
			},
			{
				ownerId: faker.datatype.number({ "min": 1, "max": 11 }),
				title: 'The Bobcat Mullet',
				imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51u9Z-Ao%2B4L._AC_SY879_.jpg',
				productUrl: 'https://www.amazon.com/dp/B00BC1GCOO',
				description: 'Includes 1x Mullet On The Wig',
				createdAt: faker.date.past(),
				updatedAt: faker.date.recent(),
			},
			{
				ownerId: faker.datatype.number({ "min": 1, "max": 11 }),
				title: 'Pickle Gourmet Flavored Cotton Candy – Unique Idea for Holidays, Birthdays, Gag Gifts, Party Favors',
				imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71ITmo2P9zL._SX679_.jpg',
				productUrl: 'https://www.amazon.com/Pickle-Gourmet-Flavored-Cotton-Candy/dp/B07YZVNWND',
				description: 'Only 140 calories per tub. The original pickle cotton candy. Flavored with all natural ingredients. A unique twist on cotton candy',
				createdAt: faker.date.past(),
				updatedAt: faker.date.recent(),
			},
			{
				ownerId: faker.datatype.number({ "min": 1, "max": 11 }),
				title: 'Bacon Soap in Tin',
				imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61QWuQ8HIAL._AC_SX679_.jpg',
				productUrl: 'https://www.amazon.com/Accoutrements-Bacon-Soap-in-Tin/dp/B007A3ECWM',
				description: 'Comes in classy tin. Great way to carry that bacon smell with you all day. Be the envy of your friends.',
				createdAt: faker.date.past(),
				updatedAt: faker.date.recent(),
			},
		], {});
	},

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});
  }
};
