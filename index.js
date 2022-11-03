import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
const tweets = [
    {
		username: "igorNovais",
			avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
		  tweet: "Ossada!!"
	},
    
    {
		username: "esdrinhas",
			avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
		  tweet: "Tenho uma Masmorra"
	},
    {
		username: "joaoJesus666",
			avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
		  tweet: "Tá de Sacatelha"
	},
    {
		username: "lusca",
			avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
		  tweet: "Consigo rodar varios servers sem desligar o pc"
	},
    {
		username: "callistoMain",
			avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
		  tweet: "Aii, da uma pegada!"
	},
    {
		username: "mrGustavo",
			avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
		  tweet: "nodemon->sem demonio"
	},
    {
		username: "pedrola",
			avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
		  tweet: "vamo joga um lolzin"
	},
    {
		username: "erick",
			avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
		  tweet: "vamo jogar Catanzin"
	},
    {
		username: "caioba",
			avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
		  tweet: "vou passar as ferias na antartica"
	},
    {
		username: "dani",
			avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
		  tweet: "oii gentee"
	},
    

]

app.get('/tweets', (req, res) => {
    
    res.send(tweets);
  });

  app.listen(5000, () => {
    console.log('Running on http://localhost:5000')
  });