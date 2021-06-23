'use strict';
const faker = require("faker");

module.exports = {
  up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Reviews', [
			{
				userId: faker.datatype.number({ "min": 1, "max": 11 }),
				productId: faker.datatype.number({ "min": 1, "max": 25 }),
				review: 'This product works excessively well. It speedily improves my baseball by a lot. I use it occasionally when i\'m in my outhouse. heard about this on song radio, decided to give it a try.',
				createdAt: faker.date.past(),
				updatedAt: faker.date.recent()
			},
			{
				userId: faker.datatype.number({ "min": 1, "max": 11 }),
				productId: faker.datatype.number({ "min": 1, "max": 25 }),
				review: 'this product is snowy. The box this comes in is 4 kilometer by 5 mile and weights 17 gram. My neighbor Fannie has one of these. She works as a teacher and she says it looks spiky.',
				createdAt: faker.date.past(),
				updatedAt: faker.date.recent()
			},
			{
				userId: faker.datatype.number({ "min": 1, "max": 11 }),
				productId: faker.datatype.number({ "min": 1, "max": 25 }),
				review: 'My co-worker Cato has one of these. He says it looks sopping. this product is perplexed. My co-worker Matthew has one of these. He says it looks gigantic.',
				createdAt: faker.date.past(),
				updatedAt: faker.date.recent()
			},
			{
				userId: faker.datatype.number({ "min": 1, "max": 11 }),
				productId: faker.datatype.number({ "min": 1, "max": 25 }),
				review: 'My neighbor Isabela has one of these. She works as a taxidermist and she says it looks monochromatic. i use it barely when i\'m in my store. My neighbor Germaine has one of these. She works as a salesman an',
				createdAt: faker.date.past(),
				updatedAt: faker.date.recent()
			},
			{
				userId: faker.datatype.number({ "min": 1, "max": 11 }),
				productId: faker.datatype.number({ "min": 1, "max": 25 }),
				review: 'this product is revolting. I saw one of these in French Southern and Antarctic Lands and I bought one. The box this comes in is 4 mile by 5 inch and weights 19 megaton!',
				createdAt: faker.date.past(),
				updatedAt: faker.date.recent()
			},
			{
				userId: faker.datatype.number({ "min": 1, "max": 11 }),
				productId: faker.datatype.number({ "min": 1, "max": 25 }),
				review: 'I tried to attack it but got meatball all over it. My neighbor Montserrat has one of these. She works as a circus performer and she says it looks shriveled. The box this comes in is 4 meter by 5 foot and weights 18 kilogram.',
				createdAt: faker.date.past(),
				updatedAt: faker.date.recent()
			},
			{
				userId: faker.datatype.number({ "min": 1, "max": 11 }),
				productId: faker.datatype.number({ "min": 1, "max": 25 }),
				review: 'i use it every Tuesday when i\'m in my store. The box this comes in is 5 inch by 6 mile and weights 15 ton!! I saw one of these in Barbados and I bought one.',
				createdAt: faker.date.past(),
				updatedAt: faker.date.recent()
			},
			{
				userId: faker.datatype.number({ "min": 1, "max": 11 }),
				productId: faker.datatype.number({ "min": 1, "max": 25 }),
				review: 'heard about this on melodic death metal radio, decided to give it a try. this product is brown. I saw one of these in Comoros and I bought one.',
				createdAt: faker.date.past(),
				updatedAt: faker.date.recent()
			},
			{
				userId: faker.datatype.number({ "min": 1, "max": 11 }),
				productId: faker.datatype.number({ "min": 1, "max": 25 }),
				review: 'talk about sadness!! The box this comes in is 5 yard by 6 centimeter and weights 18 gram!! It only works when I\'m Azerbaijan.',
				createdAt: faker.date.past(),
				updatedAt: faker.date.recent()
			},
			{
				userId: faker.datatype.number({ "min": 1, "max": 11 }),
				productId: faker.datatype.number({ "min": 1, "max": 25 }),
				review: 'My co-worker Archer has one of these. He says it looks crooked. I saw one of these in Algeria and I bought one. this product is gracious.',
				createdAt: faker.date.past(),
				updatedAt: faker.date.recent()
			},
			{
				userId: faker.datatype.number({ "min": 1, "max": 11 }),
				productId: faker.datatype.number({ "min": 1, "max": 25 }),
				review: 'The box this comes in is 4 yard by 5 kilometer and weights 11 pound! This product works certainly well. It excitedly improves my football by a lot. I tried to slay it but got truffle all over it.',
				createdAt: faker.date.past(),
				updatedAt: faker.date.recent()
			},
			{
				userId: faker.datatype.number({ "min": 1, "max": 11 }),
				productId: faker.datatype.number({ "min": 1, "max": 25 }),
				review: 'This product works certainly well. It accidentally improves my baseball by a lot. this product is honest. heard about this on smooth jazz radio, decided to give it a try. I saw one of these in Nauru and I bought one.',
				createdAt: faker.date.past(),
				updatedAt: faker.date.recent()
			},
			{
				userId: faker.datatype.number({ "min": 1, "max": 11 }),
				productId: faker.datatype.number({ "min": 1, "max": 25 }),
				review: 'SoCal cockroaches are unwelcome, crafty, and tenacious. This product keeps them away. It only works when I\'m New Caledonia. I tried to nab it but got salad all over it.',
				createdAt: faker.date.past(),
				updatedAt: faker.date.recent()
			},
			{
				userId: faker.datatype.number({ "min": 1, "max": 11 }),
				productId: faker.datatype.number({ "min": 1, "max": 25 }),
				review: 'My penguin loves to play with it. I saw one of these in Grenada and I bought one. one of my hobbies is web-browsing. and when i\'m browsing the web this works great.',
				createdAt: faker.date.past(),
				updatedAt: faker.date.recent()
			},
			{
				userId: faker.datatype.number({ "min": 1, "max": 11 }),
				productId: faker.datatype.number({ "min": 1, "max": 25 }),
				review: 'My co-worker Reed has one of these. He says it looks microscopic. I tried to nab it but got biscuit all over it. I tried to vomit it but got bonbon all over it.',
				createdAt: faker.date.past(),
				updatedAt: faker.date.recent()
			},
			{
				userId: faker.datatype.number({ "min": 1, "max": 11 }),
				productId: faker.datatype.number({ "min": 1, "max": 25 }),
				review: 'My neighbor Georgie has one of these. She works as a busboy and she says it looks brown. I tried to nab it but got salad all over it. The box this comes in is 5 yard by 6 centimeter and weights 12 kilogram. My velociraptor loves to play with it.',
				createdAt: faker.date.past(),
				updatedAt: faker.date.recent()
			},
			{
				userId: faker.datatype.number({ "min": 1, "max": 11 }),
				productId: faker.datatype.number({ "min": 1, "max": 25 }),
				review: 'I tried to belly-flop it but got Turkish Delight all over it. i use it for 10 weeks when i\'m in my sauna. This product works too well. It buoyantly improves my football by a lot. this product is nifty.',
				createdAt: faker.date.past(),
				updatedAt: faker.date.recent()
			},
			{
				userId: faker.datatype.number({ "min": 1, "max": 11 }),
				productId: faker.datatype.number({ "min": 1, "max": 25 }),
				review: 'This item works so well. It delightedly improves my football by a lot. I saw one of these in Kazakhstan and I bought one. I saw one of these in South Korea and I bought one.',
				createdAt: faker.date.past(),
				updatedAt: faker.date.recent()
			},
			{
				userId: faker.datatype.number({ "min": 1, "max": 11 }),
				productId: faker.datatype.number({ "min": 1, "max": 25 }),
				review: 'My co-worker Skylar has one of these. He says it looks sweaty. My neighbor Germaine has one of these. She works as a salesman and she says it looks red. this item is awesome.',
				createdAt: faker.date.past(),
				updatedAt: faker.date.recent()
			},
			{
				userId: faker.datatype.number({ "min": 1, "max": 11 }),
				productId: faker.datatype.number({ "min": 1, "max": 25 }),
				review: 'My peacock loves to play with it. i use it hardly when i\'m in my prison. It only works when I\'m Bahrain.',
				createdAt: faker.date.past(),
				updatedAt: faker.date.recent()
			},
			{
				userId: faker.datatype.number({ "min": 1, "max": 11 }),
				productId: faker.datatype.number({ "min": 1, "max": 25 }),
				review: 'This item works very well. It harmonically improves my tennis by a lot. i use it never when i\'m in my hotel. The box this comes in is 3 kilometer by 5 foot and weights 16 megaton!!! It only works when I\'m Kuwait.',
				createdAt: faker.date.past(),
				updatedAt: faker.date.recent()
			},
			{
				userId: faker.datatype.number({ "min": 1, "max": 11 }),
				productId: faker.datatype.number({ "min": 1, "max": 25 }),
				review: 'Applies professional experience and/or knowledge of people expertly to forecast outcomes with at least 90% accuracy. Others trust her judgement because the choices have usually been good. this pays great attention to detail. She always presented work properly checked and completely free of error. this is willing to face physical risks and danger, and appears to do so without fear. Sets an example of bravery that inspires others.',
				createdAt: faker.date.past(),
				updatedAt: faker.date.recent()
			},
			{
				userId: faker.datatype.number({ "min": 1, "max": 11 }),
				productId: faker.datatype.number({ "min": 1, "max": 25 }),
				review: 'Product is willing to face physical risks and danger, and appears to do so without fear. Sets an example of bravery that inspires others. Product pays great attention to detail. She always presented work properly checked and completely free of error. Applies professional experience and/or knowledge of people expertly to forecast outcomes with at least 90% accuracy. Others trust her judgement because the choices have usually been good.',
				createdAt: faker.date.past(),
				updatedAt: faker.date.recent()
			},
			{
				userId: faker.datatype.number({ "min": 1, "max": 11 }),
				productId: faker.datatype.number({ "min": 1, "max": 25 }),
				review: 'When ideas are challenged by others, Product listens to their view politely, but is able to maintain a position firmly and persuasively without aggression. Product has outstanding artistic or craft skills, bringing creativity and originality to the task. Applies professional experience and/or knowledge of people expertly to forecast outcomes with at least 90% accuracy. Others trust her judgement because the choices have usually been good. No absences without valid reason in 6 months.',
				createdAt: faker.date.past(),
				updatedAt: faker.date.recent()
			},
			{
				userId: faker.datatype.number({ "min": 1, "max": 11 }),
				productId: faker.datatype.number({ "min": 1, "max": 25 }),
				review: 'Responds to setbacks or adversity with redoubled vigour and enthusiasm. Will never accept that defeat is a foregone conclusion, and inspires others to stay positive and fight on. Reaches a decision rapidly after taking account of all likely outcomes and estimating the route most likely to bring success. The decisions almost always turn out to be good ones. Reacts quickly and decisively in an emergency, keeping a cool head and effectively leading others. Product is willing to face physical risks and danger, and appears to do so without fear. Sets an example of bravery that inspires others.',
				createdAt: faker.date.past(),
				updatedAt: faker.date.recent()
			},
			{
				userId: faker.datatype.number({ "min": 1, "max": 11 }),
				productId: faker.datatype.number({ "min": 1, "max": 25 }),
				review: 'This product works excessively well. It speedily improves my baseball by a lot. I use it occasionally when i\'m in my outhouse. heard about this on song radio, decided to give it a try.',
				createdAt: faker.date.past(),
				updatedAt: faker.date.recent()
			},
			{
				userId: faker.datatype.number({ "min": 1, "max": 11 }),
				productId: faker.datatype.number({ "min": 1, "max": 25 }),
				review: 'this product is snowy. The box this comes in is 4 kilometer by 5 mile and weights 17 gram. My neighbor Fannie has one of these. She works as a teacher and she says it looks spiky.',
				createdAt: faker.date.past(),
				updatedAt: faker.date.recent()
			},
			{
				userId: faker.datatype.number({ "min": 1, "max": 11 }),
				productId: faker.datatype.number({ "min": 1, "max": 25 }),
				review: 'My co-worker Cato has one of these. He says it looks sopping. this product is perplexed. My co-worker Matthew has one of these. He says it looks gigantic.',
				createdAt: faker.date.past(),
				updatedAt: faker.date.recent()
			},
			{
				userId: faker.datatype.number({ "min": 1, "max": 11 }),
				productId: faker.datatype.number({ "min": 1, "max": 25 }),
				review: 'My neighbor Isabela has one of these. She works as a taxidermist and she says it looks monochromatic. i use it barely when i\'m in my store. My neighbor Germaine has one of these. She works as a salesman an',
				createdAt: faker.date.past(),
				updatedAt: faker.date.recent()
			},
			{
				userId: faker.datatype.number({ "min": 1, "max": 11 }),
				productId: faker.datatype.number({ "min": 1, "max": 25 }),
				review: 'this product is revolting. I saw one of these in French Southern and Antarctic Lands and I bought one. The box this comes in is 4 mile by 5 inch and weights 19 megaton!',
				createdAt: faker.date.past(),
				updatedAt: faker.date.recent()
			},
			{
				userId: faker.datatype.number({ "min": 1, "max": 11 }),
				productId: faker.datatype.number({ "min": 1, "max": 25 }),
				review: 'I tried to attack it but got meatball all over it. My neighbor Montserrat has one of these. She works as a circus performer and she says it looks shriveled. The box this comes in is 4 meter by 5 foot and weights 18 kilogram.',
				createdAt: faker.date.past(),
				updatedAt: faker.date.recent()
			},
			{
				userId: faker.datatype.number({ "min": 1, "max": 11 }),
				productId: faker.datatype.number({ "min": 1, "max": 25 }),
				review: 'i use it every Tuesday when i\'m in my store. The box this comes in is 5 inch by 6 mile and weights 15 ton!! I saw one of these in Barbados and I bought one.',
				createdAt: faker.date.past(),
				updatedAt: faker.date.recent()
			},
			{
				userId: faker.datatype.number({ "min": 1, "max": 11 }),
				productId: faker.datatype.number({ "min": 1, "max": 25 }),
				review: 'heard about this on melodic death metal radio, decided to give it a try. this product is brown. I saw one of these in Comoros and I bought one.',
				createdAt: faker.date.past(),
				updatedAt: faker.date.recent()
			},
			{
				userId: faker.datatype.number({ "min": 1, "max": 11 }),
				productId: faker.datatype.number({ "min": 1, "max": 25 }),
				review: 'talk about sadness!! The box this comes in is 5 yard by 6 centimeter and weights 18 gram!! It only works when I\'m Azerbaijan.',
				createdAt: faker.date.past(),
				updatedAt: faker.date.recent()
			},
			{
				userId: faker.datatype.number({ "min": 1, "max": 11 }),
				productId: faker.datatype.number({ "min": 1, "max": 25 }),
				review: 'My co-worker Archer has one of these. He says it looks crooked. I saw one of these in Algeria and I bought one. this product is gracious.',
				createdAt: faker.date.past(),
				updatedAt: faker.date.recent()
			},
			{
				userId: faker.datatype.number({ "min": 1, "max": 11 }),
				productId: faker.datatype.number({ "min": 1, "max": 25 }),
				review: 'The box this comes in is 4 yard by 5 kilometer and weights 11 pound! This product works certainly well. It excitedly improves my football by a lot. I tried to slay it but got truffle all over it.',
				createdAt: faker.date.past(),
				updatedAt: faker.date.recent()
			},
			{
				userId: faker.datatype.number({ "min": 1, "max": 11 }),
				productId: faker.datatype.number({ "min": 1, "max": 25 }),
				review: 'This product works certainly well. It accidentally improves my baseball by a lot. this product is honest. heard about this on smooth jazz radio, decided to give it a try. I saw one of these in Nauru and I bought one.',
				createdAt: faker.date.past(),
				updatedAt: faker.date.recent()
			},
			{
				userId: faker.datatype.number({ "min": 1, "max": 11 }),
				productId: faker.datatype.number({ "min": 1, "max": 25 }),
				review: 'SoCal cockroaches are unwelcome, crafty, and tenacious. This product keeps them away. It only works when I\'m New Caledonia. I tried to nab it but got salad all over it.',
				createdAt: faker.date.past(),
				updatedAt: faker.date.recent()
			},
			{
				userId: faker.datatype.number({ "min": 1, "max": 11 }),
				productId: faker.datatype.number({ "min": 1, "max": 25 }),
				review: 'My penguin loves to play with it. I saw one of these in Grenada and I bought one. one of my hobbies is web-browsing. and when i\'m browsing the web this works great.',
				createdAt: faker.date.past(),
				updatedAt: faker.date.recent()
			},
			{
				userId: faker.datatype.number({ "min": 1, "max": 11 }),
				productId: faker.datatype.number({ "min": 1, "max": 25 }),
				review: 'My co-worker Reed has one of these. He says it looks microscopic. I tried to nab it but got biscuit all over it. I tried to vomit it but got bonbon all over it.',
				createdAt: faker.date.past(),
				updatedAt: faker.date.recent()
			},
			{
				userId: faker.datatype.number({ "min": 1, "max": 11 }),
				productId: faker.datatype.number({ "min": 1, "max": 25 }),
				review: 'My neighbor Georgie has one of these. She works as a busboy and she says it looks brown. I tried to nab it but got salad all over it. The box this comes in is 5 yard by 6 centimeter and weights 12 kilogram. My velociraptor loves to play with it.',
				createdAt: faker.date.past(),
				updatedAt: faker.date.recent()
			},
			{
				userId: faker.datatype.number({ "min": 1, "max": 11 }),
				productId: faker.datatype.number({ "min": 1, "max": 25 }),
				review: 'I tried to belly-flop it but got Turkish Delight all over it. i use it for 10 weeks when i\'m in my sauna. This product works too well. It buoyantly improves my football by a lot. this product is nifty.',
				createdAt: faker.date.past(),
				updatedAt: faker.date.recent()
			},
			{
				userId: faker.datatype.number({ "min": 1, "max": 11 }),
				productId: faker.datatype.number({ "min": 1, "max": 25 }),
				review: 'This item works so well. It delightedly improves my football by a lot. I saw one of these in Kazakhstan and I bought one. I saw one of these in South Korea and I bought one.',
				createdAt: faker.date.past(),
				updatedAt: faker.date.recent()
			},
			{
				userId: faker.datatype.number({ "min": 1, "max": 11 }),
				productId: faker.datatype.number({ "min": 1, "max": 25 }),
				review: 'My co-worker Skylar has one of these. He says it looks sweaty. My neighbor Germaine has one of these. She works as a salesman and she says it looks red. this item is awesome.',
				createdAt: faker.date.past(),
				updatedAt: faker.date.recent()
			},
			{
				userId: faker.datatype.number({ "min": 1, "max": 11 }),
				productId: faker.datatype.number({ "min": 1, "max": 25 }),
				review: 'My peacock loves to play with it. i use it hardly when i\'m in my prison. It only works when I\'m Bahrain.',
				createdAt: faker.date.past(),
				updatedAt: faker.date.recent()
			},
			{
				userId: faker.datatype.number({ "min": 1, "max": 11 }),
				productId: faker.datatype.number({ "min": 1, "max": 25 }),
				review: 'This item works very well. It harmonically improves my tennis by a lot. i use it never when i\'m in my hotel. The box this comes in is 3 kilometer by 5 foot and weights 16 megaton!!! It only works when I\'m Kuwait.',
				createdAt: faker.date.past(),
				updatedAt: faker.date.recent()
			},
			{
				userId: faker.datatype.number({ "min": 1, "max": 11 }),
				productId: faker.datatype.number({ "min": 1, "max": 25 }),
				review: 'Applies professional experience and/or knowledge of people expertly to forecast outcomes with at least 90% accuracy. Others trust her judgement because the choices have usually been good. this pays great attention to detail. She always presented work properly checked and completely free of error. this is willing to face physical risks and danger, and appears to do so without fear. Sets an example of bravery that inspires others.',
				createdAt: faker.date.past(),
				updatedAt: faker.date.recent()
			},
			{
				userId: faker.datatype.number({ "min": 1, "max": 11 }),
				productId: faker.datatype.number({ "min": 1, "max": 25 }),
				review: 'Product is willing to face physical risks and danger, and appears to do so without fear. Sets an example of bravery that inspires others. Product pays great attention to detail. She always presented work properly checked and completely free of error. Applies professional experience and/or knowledge of people expertly to forecast outcomes with at least 90% accuracy. Others trust her judgement because the choices have usually been good.',
				createdAt: faker.date.past(),
				updatedAt: faker.date.recent()
			},
			{
				userId: faker.datatype.number({ "min": 1, "max": 11 }),
				productId: faker.datatype.number({ "min": 1, "max": 25 }),
				review: 'When ideas are challenged by others, Product listens to their view politely, but is able to maintain a position firmly and persuasively without aggression. Product has outstanding artistic or craft skills, bringing creativity and originality to the task. Applies professional experience and/or knowledge of people expertly to forecast outcomes with at least 90% accuracy. Others trust her judgement because the choices have usually been good. No absences without valid reason in 6 months.',
				createdAt: faker.date.past(),
				updatedAt: faker.date.recent()
			},
			{
				userId: faker.datatype.number({ "min": 1, "max": 11 }),
				productId: faker.datatype.number({ "min": 1, "max": 25 }),
				review: 'Responds to setbacks or adversity with redoubled vigour and enthusiasm. Will never accept that defeat is a foregone conclusion, and inspires others to stay positive and fight on. Reaches a decision rapidly after taking account of all likely outcomes and estimating the route most likely to bring success. The decisions almost always turn out to be good ones. Reacts quickly and decisively in an emergency, keeping a cool head and effectively leading others. Product is willing to face physical risks and danger, and appears to do so without fear. Sets an example of bravery that inspires others.',
				createdAt: faker.date.past(),
				updatedAt: faker.date.recent()
			},
			{
				userId: faker.datatype.number({ "min": 1, "max": 11 }),
				productId: faker.datatype.number({ "min": 1, "max": 25 }),
				review: 'This product works excessively well. It speedily improves my baseball by a lot. I use it occasionally when i\'m in my outhouse. heard about this on song radio, decided to give it a try.',
				createdAt: faker.date.past(),
				updatedAt: faker.date.recent()
			},
			{
				userId: faker.datatype.number({ "min": 1, "max": 11 }),
				productId: faker.datatype.number({ "min": 1, "max": 25 }),
				review: 'this product is snowy. The box this comes in is 4 kilometer by 5 mile and weights 17 gram. My neighbor Fannie has one of these. She works as a teacher and she says it looks spiky.',
				createdAt: faker.date.past(),
				updatedAt: faker.date.recent()
			},
			{
				userId: faker.datatype.number({ "min": 1, "max": 11 }),
				productId: faker.datatype.number({ "min": 1, "max": 25 }),
				review: 'My co-worker Cato has one of these. He says it looks sopping. this product is perplexed. My co-worker Matthew has one of these. He says it looks gigantic.',
				createdAt: faker.date.past(),
				updatedAt: faker.date.recent()
			},
			{
				userId: faker.datatype.number({ "min": 1, "max": 11 }),
				productId: faker.datatype.number({ "min": 1, "max": 25 }),
				review: 'My neighbor Isabela has one of these. She works as a taxidermist and she says it looks monochromatic. i use it barely when i\'m in my store. My neighbor Germaine has one of these. She works as a salesman an',
				createdAt: faker.date.past(),
				updatedAt: faker.date.recent()
			},
			{
				userId: faker.datatype.number({ "min": 1, "max": 11 }),
				productId: faker.datatype.number({ "min": 1, "max": 25 }),
				review: 'this product is revolting. I saw one of these in French Southern and Antarctic Lands and I bought one. The box this comes in is 4 mile by 5 inch and weights 19 megaton!',
				createdAt: faker.date.past(),
				updatedAt: faker.date.recent()
			},
			{
				userId: faker.datatype.number({ "min": 1, "max": 11 }),
				productId: faker.datatype.number({ "min": 1, "max": 25 }),
				review: 'I tried to attack it but got meatball all over it. My neighbor Montserrat has one of these. She works as a circus performer and she says it looks shriveled. The box this comes in is 4 meter by 5 foot and weights 18 kilogram.',
				createdAt: faker.date.past(),
				updatedAt: faker.date.recent()
			},
			{
				userId: faker.datatype.number({ "min": 1, "max": 11 }),
				productId: faker.datatype.number({ "min": 1, "max": 25 }),
				review: 'i use it every Tuesday when i\'m in my store. The box this comes in is 5 inch by 6 mile and weights 15 ton!! I saw one of these in Barbados and I bought one.',
				createdAt: faker.date.past(),
				updatedAt: faker.date.recent()
			},
			{
				userId: faker.datatype.number({ "min": 1, "max": 11 }),
				productId: faker.datatype.number({ "min": 1, "max": 25 }),
				review: 'heard about this on melodic death metal radio, decided to give it a try. this product is brown. I saw one of these in Comoros and I bought one.',
				createdAt: faker.date.past(),
				updatedAt: faker.date.recent()
			},
			{
				userId: faker.datatype.number({ "min": 1, "max": 11 }),
				productId: faker.datatype.number({ "min": 1, "max": 25 }),
				review: 'talk about sadness!! The box this comes in is 5 yard by 6 centimeter and weights 18 gram!! It only works when I\'m Azerbaijan.',
				createdAt: faker.date.past(),
				updatedAt: faker.date.recent()
			},
			{
				userId: faker.datatype.number({ "min": 1, "max": 11 }),
				productId: faker.datatype.number({ "min": 1, "max": 25 }),
				review: 'My co-worker Archer has one of these. He says it looks crooked. I saw one of these in Algeria and I bought one. this product is gracious.',
				createdAt: faker.date.past(),
				updatedAt: faker.date.recent()
			},
			{
				userId: faker.datatype.number({ "min": 1, "max": 11 }),
				productId: faker.datatype.number({ "min": 1, "max": 25 }),
				review: 'The box this comes in is 4 yard by 5 kilometer and weights 11 pound! This product works certainly well. It excitedly improves my football by a lot. I tried to slay it but got truffle all over it.',
				createdAt: faker.date.past(),
				updatedAt: faker.date.recent()
			},
			{
				userId: faker.datatype.number({ "min": 1, "max": 11 }),
				productId: faker.datatype.number({ "min": 1, "max": 25 }),
				review: 'This product works certainly well. It accidentally improves my baseball by a lot. this product is honest. heard about this on smooth jazz radio, decided to give it a try. I saw one of these in Nauru and I bought one.',
				createdAt: faker.date.past(),
				updatedAt: faker.date.recent()
			},
			{
				userId: faker.datatype.number({ "min": 1, "max": 11 }),
				productId: faker.datatype.number({ "min": 1, "max": 25 }),
				review: 'SoCal cockroaches are unwelcome, crafty, and tenacious. This product keeps them away. It only works when I\'m New Caledonia. I tried to nab it but got salad all over it.',
				createdAt: faker.date.past(),
				updatedAt: faker.date.recent()
			},
			{
				userId: faker.datatype.number({ "min": 1, "max": 11 }),
				productId: faker.datatype.number({ "min": 1, "max": 25 }),
				review: 'My penguin loves to play with it. I saw one of these in Grenada and I bought one. one of my hobbies is web-browsing. and when i\'m browsing the web this works great.',
				createdAt: faker.date.past(),
				updatedAt: faker.date.recent()
			},
			{
				userId: faker.datatype.number({ "min": 1, "max": 11 }),
				productId: faker.datatype.number({ "min": 1, "max": 25 }),
				review: 'My co-worker Reed has one of these. He says it looks microscopic. I tried to nab it but got biscuit all over it. I tried to vomit it but got bonbon all over it.',
				createdAt: faker.date.past(),
				updatedAt: faker.date.recent()
			},
			{
				userId: faker.datatype.number({ "min": 1, "max": 11 }),
				productId: faker.datatype.number({ "min": 1, "max": 25 }),
				review: 'My neighbor Georgie has one of these. She works as a busboy and she says it looks brown. I tried to nab it but got salad all over it. The box this comes in is 5 yard by 6 centimeter and weights 12 kilogram. My velociraptor loves to play with it.',
				createdAt: faker.date.past(),
				updatedAt: faker.date.recent()
			},
			{
				userId: faker.datatype.number({ "min": 1, "max": 11 }),
				productId: faker.datatype.number({ "min": 1, "max": 25 }),
				review: 'I tried to belly-flop it but got Turkish Delight all over it. i use it for 10 weeks when i\'m in my sauna. This product works too well. It buoyantly improves my football by a lot. this product is nifty.',
				createdAt: faker.date.past(),
				updatedAt: faker.date.recent()
			},
			{
				userId: faker.datatype.number({ "min": 1, "max": 11 }),
				productId: faker.datatype.number({ "min": 1, "max": 25 }),
				review: 'This item works so well. It delightedly improves my football by a lot. I saw one of these in Kazakhstan and I bought one. I saw one of these in South Korea and I bought one.',
				createdAt: faker.date.past(),
				updatedAt: faker.date.recent()
			},
			{
				userId: faker.datatype.number({ "min": 1, "max": 11 }),
				productId: faker.datatype.number({ "min": 1, "max": 25 }),
				review: 'My co-worker Skylar has one of these. He says it looks sweaty. My neighbor Germaine has one of these. She works as a salesman and she says it looks red. this item is awesome.',
				createdAt: faker.date.past(),
				updatedAt: faker.date.recent()
			},
			{
				userId: faker.datatype.number({ "min": 1, "max": 11 }),
				productId: faker.datatype.number({ "min": 1, "max": 25 }),
				review: 'My peacock loves to play with it. i use it hardly when i\'m in my prison. It only works when I\'m Bahrain.',
				createdAt: faker.date.past(),
				updatedAt: faker.date.recent()
			},
			{
				userId: faker.datatype.number({ "min": 1, "max": 11 }),
				productId: faker.datatype.number({ "min": 1, "max": 25 }),
				review: 'This item works very well. It harmonically improves my tennis by a lot. i use it never when i\'m in my hotel. The box this comes in is 3 kilometer by 5 foot and weights 16 megaton!!! It only works when I\'m Kuwait.',
				createdAt: faker.date.past(),
				updatedAt: faker.date.recent()
			},
			{
				userId: faker.datatype.number({ "min": 1, "max": 11 }),
				productId: faker.datatype.number({ "min": 1, "max": 25 }),
				review: 'Applies professional experience and/or knowledge of people expertly to forecast outcomes with at least 90% accuracy. Others trust her judgement because the choices have usually been good. this pays great attention to detail. She always presented work properly checked and completely free of error. this is willing to face physical risks and danger, and appears to do so without fear. Sets an example of bravery that inspires others.',
				createdAt: faker.date.past(),
				updatedAt: faker.date.recent()
			},
			{
				userId: faker.datatype.number({ "min": 1, "max": 11 }),
				productId: faker.datatype.number({ "min": 1, "max": 25 }),
				review: 'Product is willing to face physical risks and danger, and appears to do so without fear. Sets an example of bravery that inspires others. Product pays great attention to detail. She always presented work properly checked and completely free of error. Applies professional experience and/or knowledge of people expertly to forecast outcomes with at least 90% accuracy. Others trust her judgement because the choices have usually been good.',
				createdAt: faker.date.past(),
				updatedAt: faker.date.recent()
			},
			{
				userId: faker.datatype.number({ "min": 1, "max": 11 }),
				productId: faker.datatype.number({ "min": 1, "max": 25 }),
				review: 'When ideas are challenged by others, Product listens to their view politely, but is able to maintain a position firmly and persuasively without aggression. Product has outstanding artistic or craft skills, bringing creativity and originality to the task. Applies professional experience and/or knowledge of people expertly to forecast outcomes with at least 90% accuracy. Others trust her judgement because the choices have usually been good. No absences without valid reason in 6 months.',
				createdAt: faker.date.past(),
				updatedAt: faker.date.recent()
			},
			{
				userId: faker.datatype.number({ "min": 1, "max": 11 }),
				productId: faker.datatype.number({ "min": 1, "max": 25 }),
				review: 'Responds to setbacks or adversity with redoubled vigour and enthusiasm. Will never accept that defeat is a foregone conclusion, and inspires others to stay positive and fight on. Reaches a decision rapidly after taking account of all likely outcomes and estimating the route most likely to bring success. The decisions almost always turn out to be good ones. Reacts quickly and decisively in an emergency, keeping a cool head and effectively leading others. Product is willing to face physical risks and danger, and appears to do so without fear. Sets an example of bravery that inspires others.',
				createdAt: faker.date.past(),
				updatedAt: faker.date.recent()
			},
      ], {});
  },

  down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Reviews', null, {});
  }
};
