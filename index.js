import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
const tweets = [
    {
		username: "Puro Osso",
			avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
		  tweet: "Ossada!!"
	},
    
    {
		username: "Bowser",
			avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
		  tweet: "Tenho uma Masmorra"
	},
    {
		username: "Mario",
			avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
		  tweet: "Tá de Sacatelha"
	},
    {
		username: "Aiden Pierce",
			avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
		  tweet: "Consigo rodar varios servers sem desligar o pc"
	},
    {
		username: "Bruce Lee",
			avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
		  tweet: "Aii, da uma pegada!"
	},
    {
		username: "Ash",
			avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
		  tweet: "nodemon->sem demonio"
	},
    {
		username: "Faker",
			avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
		  tweet: "vamo joga um lolzin"
	},
    {
		username: "Cristovão Colombo",
			avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
		  tweet: "vamo jogar Catanzin"
	},
    {
		username: "Happy Feet",
			avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
		  tweet: "vou passar as ferias na antartica"
	},
    {
		username: "Peach",
			avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
		  tweet: "oii gentee"
	},
    

]


const users = [];
const filterPages = (array,num) =>{
	let elArray = []
	let numb = num*10;
	for (let index = 0; index < array.length; index++) {
		const element = array[index];
		elArray.push(element)
		if (numb <=10 && elArray.length === numb-1) {
			return elArray
		}
	}
	
	elArray = numb === 20 ? elArray.filter((item,id,arr)=>id>9&&id<20): elArray
	
	return elArray
}

app.get('/tweets', (req, res) => {
	const { page } = req.query;
    if (page < 1) {
		res.status(400).send("Informe uma página válida!")
		return;
	}
	const filteredTweets = filterPages(tweets,page)
	console.log(filteredTweets)
    res.send(filteredTweets);
  });

app.get('/tweets/:username', (req, res) => {
	const {username} = req.params
    const filteredTweets = tweets.filter((item)=>item.username.toLowerCase() === username.toLowerCase())
    res.send(filteredTweets);
  }); 

app.post('/sign-up', (req, res) => {
	const {username,avatar} = req.body;

	if (!username||!avatar) {
		res.status(400).send("Todos os Campos são obrigatórios!");
		return;
	}
	const user = {
		username: username,
		avatar: avatar
	}
	
	users.push(user)
    
    res.status(201).send("OK");
  });

  app.post('/tweets', (req, res) => {
	const {tweet} = req.body;
	const {user} = req.headers;

	if (!user||!tweet) {
		res.status(400).send("Todos os Campos são obrigatórios!");
		return;
	}
	const avata = users.find((item)=>item.username === user)
	const obj = {
		username: user,
		avatar: avata.avatar,
  		tweet: tweet
	}
	tweets.push(obj)
    
    res.status(201).send("OK");
  });

  app.listen(5000, () => {
    console.log('Running on http://localhost:5000')
  });