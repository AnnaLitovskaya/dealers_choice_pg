const pg = require('pg');

const client = new pg.Client('postgres://localhost/world_map');

const syncAndSeed = async () => {
  const SQL = `
    DROP TABLE IF EXISTS data;
    DROP TABLE IF EXISTS country;
    DROP TABLE IF EXISTS continent;
    CREATE TABLE continent(
      id INTEGER PRIMARY KEY,
      name VARCHAR(30) NOT NULL
    );
    CREATE TABLE country(
      id SERIAL PRIMARY KEY ,
      name VARCHAR(50) NOT NULL,
      continent_id INTEGER REFERENCES continent(id)
    );
    CREATE TABLE data(
      id SERIAL PRIMARY KEY,
      fact TEXT NOT NULL,
      continent_id INTEGER REFERENCES continent(id)
    );
    INSERT INTO continent(id, name) VALUES(1, 'North America');
    INSERT INTO continent(id, name) VALUES(2, 'South America');
    INSERT INTO continent(id, name) VALUES(3, 'Africa');
    INSERT INTO continent(id, name) VALUES(4, 'Europe');
    INSERT INTO continent(id, name) VALUES(5, 'Australia and Oceania');
    INSERT INTO continent(id, name) VALUES(6, 'Asia');
    INSERT INTO continent(id, name) VALUES(7, 'Antarctica');
    INSERT INTO country(name, continent_id) VALUES ('Antigua and Barbuda', 1);
    INSERT INTO country(name, continent_id) VALUES ('The Bahamas', 1);
    INSERT INTO country(name, continent_id) VALUES ('Barbados', 1);
    INSERT INTO country(name, continent_id) VALUES ('Belize', 1);
    INSERT INTO country(name, continent_id) VALUES ('Canada', 1);
    INSERT INTO country(name, continent_id) VALUES ('Costa Rica', 1);
    INSERT INTO country(name, continent_id) VALUES ('Cuba', 1);
    INSERT INTO country(name, continent_id) VALUES ('Dominica', 1);
    INSERT INTO country(name, continent_id) VALUES ('Dominican Republic', 1);
    INSERT INTO country(name, continent_id) VALUES ('El Salvador', 1);
    INSERT INTO country(name, continent_id) VALUES ('Grenada', 1);
    INSERT INTO country(name, continent_id) VALUES ('Guatemala', 1);
    INSERT INTO country(name, continent_id) VALUES ('Haiti', 1);
    INSERT INTO country(name, continent_id) VALUES ('Honduras', 1);
    INSERT INTO country(name, continent_id) VALUES ('Jamaica', 1);
    INSERT INTO country(name, continent_id) VALUES ('Mexico', 1);
    INSERT INTO country(name, continent_id) VALUES ('Nicaragua', 1);
    INSERT INTO country(name, continent_id) VALUES ('Panama', 1);
    INSERT INTO country(name, continent_id) VALUES ('Saint Kitts and Nevis', 1);
    INSERT INTO country(name, continent_id) VALUES ('Saint Lucia', 1);
    INSERT INTO country(name, continent_id) VALUES ('Saint Vincent and the Grenadines', 1);
    INSERT INTO country(name, continent_id) VALUES ('Trinidad and Tobago', 1);
    INSERT INTO country(name, continent_id) VALUES ('United States', 1);
    INSERT INTO country(name, continent_id) VALUES ('Argentina', 2);
    INSERT INTO country(name, continent_id) VALUES ('Bolivia', 2);
    INSERT INTO country(name, continent_id) VALUES ('Brazil', 2);
    INSERT INTO country(name, continent_id) VALUES ('Chile', 2);
    INSERT INTO country(name, continent_id) VALUES ('Colombia', 2);
    INSERT INTO country(name, continent_id) VALUES ('Ecuador', 2);
    INSERT INTO country(name, continent_id) VALUES ('French Guiana', 2);
    INSERT INTO country(name, continent_id) VALUES ('Guyana', 2);
    INSERT INTO country(name, continent_id) VALUES ('Paraguay', 2);
    INSERT INTO country(name, continent_id) VALUES ('Peru', 2);
    INSERT INTO country(name, continent_id) VALUES ('Suriname', 2);
    INSERT INTO country(name, continent_id) VALUES ('Uruguay', 2);
    INSERT INTO country(name, continent_id) VALUES ('Venezuela', 2);
    INSERT INTO country(name, continent_id) VALUES ('Algeria', 3);
    INSERT INTO country(name, continent_id) VALUES ('Angola', 3);
    INSERT INTO country(name, continent_id) VALUES ('Benin', 3);
    INSERT INTO country(name, continent_id) VALUES ('Botswana', 3);
    INSERT INTO country(name, continent_id) VALUES ('Burkina Faso', 3);
    INSERT INTO country(name, continent_id) VALUES ('Burundi', 3);
    INSERT INTO country(name, continent_id) VALUES ('Cabo Verde', 3);
    INSERT INTO country(name, continent_id) VALUES ('Cameroon', 3);
    INSERT INTO country(name, continent_id) VALUES ('Central African Republic (CAR)', 3);
    INSERT INTO country(name, continent_id) VALUES ('Chad', 3);
    INSERT INTO country(name, continent_id) VALUES ('Comoros', 3);
    INSERT INTO country(name, continent_id) VALUES ('Congo, Democratic Republic of the', 3);
    INSERT INTO country(name, continent_id) VALUES ('Congo, Republic of the', 3);
    INSERT INTO country(name, continent_id) VALUES ('Cote dIvoire', 3);
    INSERT INTO country(name, continent_id) VALUES ('Djibouti', 3);
    INSERT INTO country(name, continent_id) VALUES ('Egypt', 3);
    INSERT INTO country(name, continent_id) VALUES ('Equatorial Guinea', 3);
    INSERT INTO country(name, continent_id) VALUES ('Eritrea', 3);
    INSERT INTO country(name, continent_id) VALUES ('Eswatini (formerly Swaziland)', 3);
    INSERT INTO country(name, continent_id) VALUES ('Ethiopia', 3);
    INSERT INTO country(name, continent_id) VALUES ('Gabon', 3);
    INSERT INTO country(name, continent_id) VALUES ('Gambia', 3);
    INSERT INTO country(name, continent_id) VALUES ('Ghana', 3);
    INSERT INTO country(name, continent_id) VALUES ('Guinea', 3);
    INSERT INTO country(name, continent_id) VALUES ('Guinea-Bissau', 3);
    INSERT INTO country(name, continent_id) VALUES ('Kenya', 3);
    INSERT INTO country(name, continent_id) VALUES ('Lesotho', 3);
    INSERT INTO country(name, continent_id) VALUES ('Liberia', 3);
    INSERT INTO country(name, continent_id) VALUES ('Libya', 3);
    INSERT INTO country(name, continent_id) VALUES ('Madagascar', 3);
    INSERT INTO country(name, continent_id) VALUES ('Malawi', 3);
    INSERT INTO country(name, continent_id) VALUES ('Mali', 3);
    INSERT INTO country(name, continent_id) VALUES ('Mauritania', 3);
    INSERT INTO country(name, continent_id) VALUES ('Mauritius', 3);
    INSERT INTO country(name, continent_id) VALUES ('Morocco', 3);
    INSERT INTO country(name, continent_id) VALUES ('Mozambique', 3);
    INSERT INTO country(name, continent_id) VALUES ('Namibia', 3);
    INSERT INTO country(name, continent_id) VALUES ('Niger', 3);
    INSERT INTO country(name, continent_id) VALUES ('Nigeria', 3);
    INSERT INTO country(name, continent_id) VALUES ('Rwanda', 3);
    INSERT INTO country(name, continent_id) VALUES ('Sao Tome and Principe', 3);
    INSERT INTO country(name, continent_id) VALUES ('Senegal', 3);
    INSERT INTO country(name, continent_id) VALUES ('Seychelles', 3);
    INSERT INTO country(name, continent_id) VALUES ('Sierra Leone', 3);
    INSERT INTO country(name, continent_id) VALUES ('Somalia', 3);
    INSERT INTO country(name, continent_id) VALUES ('South Africa', 3);
    INSERT INTO country(name, continent_id) VALUES ('South Sudan', 3);
    INSERT INTO country(name, continent_id) VALUES ('Sudan', 3);
    INSERT INTO country(name, continent_id) VALUES ('Tanzania', 3);
    INSERT INTO country(name, continent_id) VALUES ('Togo', 3);
    INSERT INTO country(name, continent_id) VALUES ('Tunisia', 3);
    INSERT INTO country(name, continent_id) VALUES ('Uganda', 3);
    INSERT INTO country(name, continent_id) VALUES ('Zambia', 3);
    INSERT INTO country(name, continent_id) VALUES ('Zimbabwe', 3);
    INSERT INTO country(name, continent_id) VALUES ('Albania', 4);
    INSERT INTO country(name, continent_id) VALUES ('Andorra', 4);
    INSERT INTO country(name, continent_id) VALUES ('Armenia', 4);
    INSERT INTO country(name, continent_id) VALUES ('Austria', 4);
    INSERT INTO country(name, continent_id) VALUES ('Azerbaijan', 4);
    INSERT INTO country(name, continent_id) VALUES ('Belarus', 4);
    INSERT INTO country(name, continent_id) VALUES ('Belgium', 4);
    INSERT INTO country(name, continent_id) VALUES ('Bosnia and Herzegovina', 4);
    INSERT INTO country(name, continent_id) VALUES ('Bulgaria', 4);
    INSERT INTO country(name, continent_id) VALUES ('Croatia', 4);
    INSERT INTO country(name, continent_id) VALUES ('Cyprus', 4);
    INSERT INTO country(name, continent_id) VALUES ('Czech Republic', 4);
    INSERT INTO country(name, continent_id) VALUES ('Denmark', 4);
    INSERT INTO country(name, continent_id) VALUES ('Estonia', 4);
    INSERT INTO country(name, continent_id) VALUES ('Finland', 4);
    INSERT INTO country(name, continent_id) VALUES ('France', 4);
    INSERT INTO country(name, continent_id) VALUES ('Georgia', 4);
    INSERT INTO country(name, continent_id) VALUES ('Germany', 4);
    INSERT INTO country(name, continent_id) VALUES ('Greece', 4);
    INSERT INTO country(name, continent_id) VALUES ('Hungary', 4);
    INSERT INTO country(name, continent_id) VALUES ('Iceland', 4);
    INSERT INTO country(name, continent_id) VALUES ('Ireland', 4);
    INSERT INTO country(name, continent_id) VALUES ('Italy', 4);
    INSERT INTO country(name, continent_id) VALUES ('Kazakhstan', 4);
    INSERT INTO country(name, continent_id) VALUES ('Latvia', 4);
    INSERT INTO country(name, continent_id) VALUES ('Liechtenstein', 4);
    INSERT INTO country(name, continent_id) VALUES ('Lithuania', 4);
    INSERT INTO country(name, continent_id) VALUES ('Luxembourg', 4);
    INSERT INTO country(name, continent_id) VALUES ('Macedonia', 4);
    INSERT INTO country(name, continent_id) VALUES ('Malta', 4);
    INSERT INTO country(name, continent_id) VALUES ('Moldova', 4);
    INSERT INTO country(name, continent_id) VALUES ('Monaco', 4);
    INSERT INTO country(name, continent_id) VALUES ('Montenegro', 4);
    INSERT INTO country(name, continent_id) VALUES ('Netherlands', 4);
    INSERT INTO country(name, continent_id) VALUES ('Norway', 4);
    INSERT INTO country(name, continent_id) VALUES ('Poland', 4);
    INSERT INTO country(name, continent_id) VALUES ('Portugal', 4);
    INSERT INTO country(name, continent_id) VALUES ('Romania', 4);
    INSERT INTO country(name, continent_id) VALUES ('Russia', 4);
    INSERT INTO country(name, continent_id) VALUES ('San Marino', 4);
    INSERT INTO country(name, continent_id) VALUES ('Serbia', 4);
    INSERT INTO country(name, continent_id) VALUES ('Slovakia', 4);
    INSERT INTO country(name, continent_id) VALUES ('Slovenia', 4);
    INSERT INTO country(name, continent_id) VALUES ('Spain', 4);
    INSERT INTO country(name, continent_id) VALUES ('Sweden', 4);
    INSERT INTO country(name, continent_id) VALUES ('Switzerland', 4);
    INSERT INTO country(name, continent_id) VALUES ('Turkey', 4);
    INSERT INTO country(name, continent_id) VALUES ('Ukraine', 4);
    INSERT INTO country(name, continent_id) VALUES ('United Kingdom', 4);
    INSERT INTO country(name, continent_id) VALUES ('Vatican City', 4);
    INSERT INTO country(name, continent_id) VALUES ('Australia', 5);
    INSERT INTO country(name, continent_id) VALUES ('Fiji', 5);
    INSERT INTO country(name, continent_id) VALUES ('Kiribati', 5);
    INSERT INTO country(name, continent_id) VALUES ('Marshall Islands', 5);
    INSERT INTO country(name, continent_id) VALUES ('Micronesia', 5);
    INSERT INTO country(name, continent_id) VALUES ('Nauru', 5);
    INSERT INTO country(name, continent_id) VALUES ('New Zealand', 5);
    INSERT INTO country(name, continent_id) VALUES ('Palau', 5);
    INSERT INTO country(name, continent_id) VALUES ('Papua New Guinea', 5);
    INSERT INTO country(name, continent_id) VALUES ('Samoa', 5);
    INSERT INTO country(name, continent_id) VALUES ('Solomon Islands', 5);
    INSERT INTO country(name, continent_id) VALUES ('Tonga', 5);
    INSERT INTO country(name, continent_id) VALUES ('Tuvalu', 5);
    INSERT INTO country(name, continent_id) VALUES ('Vanuatu', 5);
    INSERT INTO country(name, continent_id) VALUES ('Afghanistan', 6);
    INSERT INTO country(name, continent_id) VALUES ('Armenia', 6);
    INSERT INTO country(name, continent_id) VALUES ('Azerbaijan', 6);
    INSERT INTO country(name, continent_id) VALUES ('Bahrain', 6);
    INSERT INTO country(name, continent_id) VALUES ('Bangladesh', 6);
    INSERT INTO country(name, continent_id) VALUES ('Bhutan', 6);
    INSERT INTO country(name, continent_id) VALUES ('Brunei', 6);
    INSERT INTO country(name, continent_id) VALUES ('Cambodia', 6);
    INSERT INTO country(name, continent_id) VALUES ('China', 6);
    INSERT INTO country(name, continent_id) VALUES ('Cyprus', 6);
    INSERT INTO country(name, continent_id) VALUES ('Georgia', 6);
    INSERT INTO country(name, continent_id) VALUES ('India', 6);
    INSERT INTO country(name, continent_id) VALUES ('Indonesia', 6);
    INSERT INTO country(name, continent_id) VALUES ('Iran', 6);
    INSERT INTO country(name, continent_id) VALUES ('Iraq', 6);
    INSERT INTO country(name, continent_id) VALUES ('Israel', 6);
    INSERT INTO country(name, continent_id) VALUES ('Japan', 6);
    INSERT INTO country(name, continent_id) VALUES ('Jordan', 6);
    INSERT INTO country(name, continent_id) VALUES ('Kazakhstan', 6);
    INSERT INTO country(name, continent_id) VALUES ('Kuwait', 6);
    INSERT INTO country(name, continent_id) VALUES ('Kyrgyzstan', 6);
    INSERT INTO country(name, continent_id) VALUES ('Laos', 6);
    INSERT INTO country(name, continent_id) VALUES ('Lebanon', 6);
    INSERT INTO country(name, continent_id) VALUES ('Malaysia', 6);
    INSERT INTO country(name, continent_id) VALUES ('Maldives', 6);
    INSERT INTO country(name, continent_id) VALUES ('Mongolia', 6);
    INSERT INTO country(name, continent_id) VALUES ('Myanmar (formerly Burma)', 6);
    INSERT INTO country(name, continent_id) VALUES ('Nepal', 6);
    INSERT INTO country(name, continent_id) VALUES ('North Korea', 6);
    INSERT INTO country(name, continent_id) VALUES ('Oman', 6);
    INSERT INTO country(name, continent_id) VALUES ('Pakistan', 6);
    INSERT INTO country(name, continent_id) VALUES ('Palestine', 6);
    INSERT INTO country(name, continent_id) VALUES ('Philippines', 6);
    INSERT INTO country(name, continent_id) VALUES ('Qatar', 6);
    INSERT INTO country(name, continent_id) VALUES ('Russia', 6);
    INSERT INTO country(name, continent_id) VALUES ('Saudi Arabia', 6);
    INSERT INTO country(name, continent_id) VALUES ('Singapore', 6);
    INSERT INTO country(name, continent_id) VALUES ('South Korea', 6);
    INSERT INTO country(name, continent_id) VALUES ('Sri Lanka', 6);
    INSERT INTO country(name, continent_id) VALUES ('Syria', 6);
    INSERT INTO country(name, continent_id) VALUES ('Taiwan', 6);
    INSERT INTO country(name, continent_id) VALUES ('Tajikistan', 6);
    INSERT INTO country(name, continent_id) VALUES ('Thailand', 6);
    INSERT INTO country(name, continent_id) VALUES ('Timor-Leste', 6);
    INSERT INTO country(name, continent_id) VALUES ('Turkey', 6);
    INSERT INTO country(name, continent_id) VALUES ('Turkmenistan', 6);
    INSERT INTO country(name, continent_id) VALUES ('United Arab Emirates (UAE)', 6);
    INSERT INTO country(name, continent_id) VALUES ('Uzbekistan', 6);
    INSERT INTO country(name, continent_id) VALUES ('Vietnam', 6);
    INSERT INTO country(name, continent_id) VALUES ('Yemen', 6);
    INSERT INTO data(fact, continent_id) VALUES('Asia is the largest continent in size. It has the biggest land area and the worlds biggest population. This means most people on our Earth live on the Asian continent.', 6);
    INSERT INTO data(fact, continent_id) VALUES('About 4.6 billion people live in Asia. The Asian continent has the most populous cities, which means there are the biggest cities in the world. Many million people live in the urban centres of the Asian continent, in cities such as in Delhi, Tokyo, Shanghai or Beijing.', 6);
    INSERT INTO data(fact, continent_id) VALUES('Asia houses some of the richest nations in the world. The tiny country Qatar on the Arabian peninsula is on of the richest nations in the world due to its income from oil exploration and the petroleum industry. Saudi-Arabia, the United Arab Emirates and Bahrain are also among richest countries in the world due to their oil reserves. ', 6);
    INSERT INTO data(fact, continent_id) VALUES('The most languages are spoken in Asia - over 2,300 languages! However, most of these languages are spoken only by small groups of people. 2,000 languages of the worlds 7,000 languages are spoken by less than 1,000 people! Chinese is the language with the most native speakers - with almost 1.4 billion people speaking it.  ', 6);
    INSERT INTO data(fact, continent_id) VALUES('Australia/Oceania is the smallest continent of the planet. Strictly speaking Oceania is a geographic region that includes Australasia, Polynesia, Micronesia and Melanesia. This means Australia, New Zealand, Vanuatu and the many islands to the north and east of Australia in the Pacific Ocean are this region and thus on this continent. Australia is the largest landmass in the region and thus often also referred to as a continent.', 5);
    INSERT INTO data(fact, continent_id) VALUES('About 43 million people live in Oceania. The most populous cities of the continent are Sydney, Melbourne, Brisbane and Perth - all these cities are in Australia.', 5);
    INSERT INTO data(fact, continent_id) VALUES('Africa is the continent with the most countries. There are 54 countries on the African continent. About 1.3 billion people live in Africa. The largest cities of the African continent are Lagos/Nigeria, Kinshasa/DR Congo and Cairo/Egypt.', 3);
    INSERT INTO data(fact, continent_id) VALUES('The oldest human fossils such as skeletons and skulls have been discovered in Africa, therefore the African continent is also referred to as the cradle of humankind. ', 3);
    INSERT INTO data(fact, continent_id) VALUES('From the 15th - 19th century Africa was colonised by several countries including Portugal, the Netherlands, Spain, France, Italy, Belgium, the United Kingdom and Germany. The only countries that escaped colonialisation in Africa are Ethiopia and Liberia.', 3);
    INSERT INTO data(fact, continent_id) VALUES('Africa also houses the longest river in the world, the Nile and the second highest waterfalls in the world, the Tugela Falls in South Africa.', 3);
    INSERT INTO data(fact, continent_id) VALUES('North America is a continent which is located entirely on the northern and western hemisphere. There are 23 countries in total on the North American continent. ', 1);
    INSERT INTO data(fact, continent_id) VALUES('The the worlds largest island Greenland is located on the North American continent. Greenland, however, belongs to Denmark, a country in Europe. Greenland is also known for the northernmost place in the world!', 1);
    INSERT INTO data(fact, continent_id) VALUES('About 580 million people live on the North American continent. North America is home to the largest Christian population in the world. Almost 80% of the people in Canada, the USA and Mexico consider themselves as Christians. ', 1);
    INSERT INTO data(fact, continent_id) VALUES('The Maya civilisation of Central America and Mexico is considered one of the oldest civilisations of this planet.', 1);
    INSERT INTO data(fact, continent_id) VALUES('North America has the largest number of people who speak English either as their first language (231 million people) or as their second language fluently. English, however, is spoken by people in more than 100 countries worldwide.', 1);
    INSERT INTO data(fact, continent_id) VALUES('Europe is considered to be the wealthiest and richest continent, however, there are poor regions especially in the eastern parts of the continent too! ', 4);
    INSERT INTO data(fact, continent_id) VALUES('Europe houses the two smallest countries in the world: Vatican City which is located inside Rome/Italy. Monaco which is bordered on three sides by France. ', 4);
    INSERT INTO data(fact, continent_id) VALUES('According to the United Nations, there are 44 countries in Europe. Five European countries are among the ten smallest countries in the world: San Marino, Liechtenstein, Vatican City, Monaco and the island country of Malta. The other five tiny countries of our planet are located on islands outside Europe. ', 4);
    INSERT INTO data(fact, continent_id) VALUES('South America is a continent of many natural superlatives: the longest mountain range - the Andes, the highest waterfalls - the Angel Falls, and the driest place on earth - the Atacama Desert in Chile. About 430 million people live in South America.', 2);
    INSERT INTO data(fact, continent_id) VALUES('Antarctica is the smallest continent by population numbers. This means the huge continent is only sparsely populated. On Antarctica there are only research stations for scientists and no permanent settlements. Antarctica is covered almost completely by ice. 90% of the planets ice is located on this continent, which also makes up 60% - 70% of the worlds freshwater supply. ', 7);
  `;
  await client.query(SQL);
};

module.exports = { syncAndSeed, client };
