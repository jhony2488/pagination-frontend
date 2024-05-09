
# pagination-front-end(Paginação no front end)

<p align="center" id="about">🚀 Português: pagination-front-end é uma biblioteca voltada para realização de paginação no front end</p>
<p align="center" id="about-english">🚀 Inglês: pagination-front-end is a front-end paging library</p>

<h2 id="tabela-de-conteudo">Tabela de conteúdos(table of contents)</h2>
<!--ts-->
   
- [Sobre(About)](#about)

- [Tabela de Conteudo(table of contents)](#tabela-de-conteudo)

- [Como usar(How to use)](#como-usar)

  - [Instalação(Installation)](#instalacao)
  
  - [Uso(Use)](#uso)

- [Testes(Tests)](#-testes)

- [Tecnologias(Technologies)](#tecnologias)

- [Autor(Author)](#autor)

- [Licença(License)](#licenca)
<!--te-->

<h2 id="como-usar">Como usar(How to use)</h2>

<h3 id="instalacao">Instalação(Installation)</h3>

```bash
# Instalação(Installation)
$ npm i pagination-front-end || yarn add pagination-front-end

```

<h3>Instalação baixando o repositório(Installation by downloading the repository)</h3>

```bash
# Clone este repositório(Clone this repository)
$ git clone https://github.com/jhony2488/pagination-frontend

# Acesse a pasta do projeto no terminal/cmd(Access the project folder in the terminal/cmd)
$ cd pagination-frontend

# Instale as dependências(install dependencies)
$ npm install || yarn add

```

<h3 id="uso">Uso(Use)</h3>

```js
const pagination = require('pagination-front-end'); // or import pagination from 'pagination-front-end' in typescript

const drones = [
  {
    id: 3,
    image: 'https://robohash.org/fugaaperiamofficiis.jpg?size=50x50&set=set1',
    name: 'Gabbie',
    address: '559 Moose Street',
    battery: 15,
    max_speed: 37.7,
    average_speed: 18.7,
    status: 'flying',
    fly: 76,
  },
  {
    id: 4,
    image: 'https://robohash.org/quiavoluptatemillum.jpg?size=50x50&set=set1',
    name: 'Audrie',
    address: '9460 Canary Junction',
    battery: 49,
    max_speed: 19.4,
    average_speed: 19.1,
    status: 'flying',
    fly: 26,
  },
  {
    id: 5,
    image: 'https://robohash.org/liberoperferendissapiente.jpg?size=50x50&set=set1',
    name: 'Doreen',
    address: '62 Rusk Avenue',
    battery: 56,
    max_speed: 35.7,
    average_speed: 22.8,
    status: 'flying',
    fly: 27,
  },
  {
    id: 6,
    image: 'https://robohash.org/quaecumqueid.bmp?size=50x50&set=set1',
    name: 'Gustaf',
    address: '687 Grim Place',
    battery: 70,
    max_speed: 38.7,
    average_speed: 1.6,
    status: 'flying',
    fly: 67,
  },
  {
    id: 7,
    image: 'https://robohash.org/omnisquiamet.jpg?size=50x50&set=set1',
    name: 'Othilie',
    address: '0249 Daystar Park',
    battery: 50,
    max_speed: 12.7,
    average_speed: 10.2,
    status: 'flying',
    fly: 41,
  },
  {
    id: 8,
    image: 'https://robohash.org/quiavoluptasut.png?size=50x50&set=set1',
    name: 'Rosene',
    address: '7016 Shelley Circle',
    battery: 51,
    max_speed: 3.3,
    average_speed: 9.2,
    status: 'charging',
    fly: 35,
  },
  {
    id: 9,
    image: 'https://robohash.org/nonoccaecatitemporibus.bmp?size=50x50&set=set1',
    name: 'Franklin',
    address: '63991 Rigney Point',
    battery: 21,
    max_speed: 40.5,
    average_speed: 5,
    status: 'charging',
    fly: 0,
  },
  {
    id: 10,
    image: 'https://robohash.org/doloresnonsit.bmp?size=50x50&set=set1',
    name: 'Lynel',
    address: '3080 Ludington Alley',
    battery: 73,
    max_speed: 27.3,
    average_speed: 15.7,
    status: 'success',
    fly: 18,
  },
  {
    id: 11,
    image: 'https://robohash.org/adautemenim.bmp?size=50x50&set=set1',
    name: 'Gunar',
    address: '15295 Crowley Lane',
    battery: 86,
    max_speed: 37.5,
    average_speed: 14,
    status: 'flying',
    fly: 66,
  },
  {
    id: 12,
    image: 'https://robohash.org/quisdoloreearum.jpg?size=50x50&set=set1',
    name: 'Kasey',
    address: '064 Delaware Lane',
    battery: 51,
    max_speed: 3.2,
    average_speed: 9.1,
    status: 'repair',
    fly: 43,
  },
  {
    id: 13,
    image: 'https://robohash.org/rationenonpossimus.png?size=50x50&set=set1',
    name: 'Delly',
    address: '6533 Basil Crossing',
    battery: 67,
    max_speed: 25,
    average_speed: 28,
    status: 'flying',
    fly: 91,
  },
  {
    id: 14,
    image: 'https://robohash.org/suscipitvelofficiis.jpg?size=50x50&set=set1',
    name: 'Norma',
    address: '80060 Riverside Drive',
    battery: 16,
    max_speed: 18.9,
    average_speed: 3.6,
    status: 'repair',
    fly: 90,
  },
];
// Pagination.pagination(items: any[], currentPage: number = 1, pageSize: number = 20) 
const paginationPage1= pagination(drones, 1, 5);

// Pagination.pagination(items: any[], currentPage: number = 1, pageSize: number = 20) 
const paginationPage2= pagination(drones, 2, 5);

console.log(paginationPage1)
/*
{
  AllItems: 12,
  currentPage: 1,
  pageSize: 5,
  allPages: 2,
  startPage: 1,
  endPage: 2,
  startIndex: 0,
  endIndex: 4,
  pages: [ 1, 2 ],
  items: [
    {
      id: 3,
      image: 'https://robohash.org/fugaaperiamofficiis.jpg?size=50x50&set=set1',
      name: 'Gabbie',
      address: '559 Moose Street',
      battery: 15,
      max_speed: 37.7,
      average_speed: 18.7,
      status: 'flying',
      fly: 76
    },
    {
      id: 4,
      image: 'https://robohash.org/quiavoluptatemillum.jpg?size=50x50&set=set1',
      name: 'Audrie',
      address: '9460 Canary Junction',
      battery: 49,
      max_speed: 19.4,
      average_speed: 19.1,
      status: 'flying',
      fly: 26
    },
    {
      id: 5,
      image: 'https://robohash.org/liberoperferendissapiente.jpg?size=50x50&set=set1',
      name: 'Doreen',
      address: '62 Rusk Avenue',
      battery: 56,
      max_speed: 35.7,
      average_speed: 22.8,
      status: 'flying',
      fly: 27
    },
    {
      id: 6,
      image: 'https://robohash.org/quaecumqueid.bmp?size=50x50&set=set1',
      name: 'Gustaf',
      address: '687 Grim Place',
      battery: 70,
      max_speed: 38.7,
      average_speed: 1.6,
      status: 'flying',
      fly: 67
    },
    {
      id: 7,
      image: 'https://robohash.org/omnisquiamet.jpg?size=50x50&set=set1',
      name: 'Othilie',
      address: '0249 Daystar Park',
      battery: 50,
      max_speed: 12.7,
      average_speed: 10.2,
      status: 'flying',
      fly: 41
    }
  ]
}
*/

console.log(paginationPage2)
/*
{
  AllItems: 12,
  currentPage: 2,
  pageSize: 5,
  allPages: 2,
  startPage: 1,
  endPage: 2,
  startIndex: 5,
  endIndex: 9,
  pages: [ 1, 2 ],
  items: [
    {
      id: 8,
      image: 'https://robohash.org/quiavoluptasut.png?size=50x50&set=set1',
      name: 'Rosene',
      address: '7016 Shelley Circle',
      battery: 51,
      max_speed: 3.3,
      average_speed: 9.2,
      status: 'charging',
      fly: 35
    },
    {
      id: 9,
      image: 'https://robohash.org/nonoccaecatitemporibus.bmp?size=50x50&set=set1',
      name: 'Franklin',
      address: '63991 Rigney Point',
      battery: 21,
      max_speed: 40.5,
      average_speed: 5,
      status: 'charging',
      fly: 0
    },
    {
      id: 10,
      image: 'https://robohash.org/doloresnonsit.bmp?size=50x50&set=set1',
      name: 'Lynel',
      address: '3080 Ludington Alley',
      battery: 73,
      max_speed: 27.3,
      average_speed: 15.7,
      status: 'success',
      fly: 18
    },
    {
      id: 11,
      image: 'https://robohash.org/adautemenim.bmp?size=50x50&set=set1',
      name: 'Gunar',
      address: '15295 Crowley Lane',
      battery: 86,
      max_speed: 37.5,
      average_speed: 14,
      status: 'flying',
      fly: 66
    },
    {
      id: 12,
      image: 'https://robohash.org/quisdoloreearum.jpg?size=50x50&set=set1',
      name: 'Kasey',
      address: '064 Delaware Lane',
      battery: 51,
      max_speed: 3.2,
      average_speed: 9.1,
      status: 'repair',
      fly: 43
    }
  ]
}
*/

//pegar somente os itens 
// get only the items
console.log(paginationPage1.items)
/*
 [
    {
      id: 3,
      image: 'https://robohash.org/fugaaperiamofficiis.jpg?size=50x50&set=set1',
      name: 'Gabbie',
      address: '559 Moose Street',
      battery: 15,
      max_speed: 37.7,
      average_speed: 18.7,
      status: 'flying',
      fly: 76
    },
    {
      id: 4,
      image: 'https://robohash.org/quiavoluptatemillum.jpg?size=50x50&set=set1',
      name: 'Audrie',
      address: '9460 Canary Junction',
      battery: 49,
      max_speed: 19.4,
      average_speed: 19.1,
      status: 'flying',
      fly: 26
    },
    {
      id: 5,
      image: 'https://robohash.org/liberoperferendissapiente.jpg?size=50x50&set=set1',
      name: 'Doreen',
      address: '62 Rusk Avenue',
      battery: 56,
      max_speed: 35.7,
      average_speed: 22.8,
      status: 'flying',
      fly: 27
    },
    {
      id: 6,
      image: 'https://robohash.org/quaecumqueid.bmp?size=50x50&set=set1',
      name: 'Gustaf',
      address: '687 Grim Place',
      battery: 70,
      max_speed: 38.7,
      average_speed: 1.6,
      status: 'flying',
      fly: 67
    },
    {
      id: 7,
      image: 'https://robohash.org/omnisquiamet.jpg?size=50x50&set=set1',
      name: 'Othilie',
      address: '0249 Daystar Park',
      battery: 50,
      max_speed: 12.7,
      average_speed: 10.2,
      status: 'flying',
      fly: 41
    }
  ]

*/
//pegar somente os itens 
// get only the items
console.log(paginationPage2.items)

/*
[
    {
      id: 8,
      image: 'https://robohash.org/quiavoluptasut.png?size=50x50&set=set1',
      name: 'Rosene',
      address: '7016 Shelley Circle',
      battery: 51,
      max_speed: 3.3,
      average_speed: 9.2,
      status: 'charging',
      fly: 35
    },
    {
      id: 9,
      image: 'https://robohash.org/nonoccaecatitemporibus.bmp?size=50x50&set=set1',
      name: 'Franklin',
      address: '63991 Rigney Point',
      battery: 21,
      max_speed: 40.5,
      average_speed: 5,
      status: 'charging',
      fly: 0
    },
    {
      id: 10,
      image: 'https://robohash.org/doloresnonsit.bmp?size=50x50&set=set1',
      name: 'Lynel',
      address: '3080 Ludington Alley',
      battery: 73,
      max_speed: 27.3,
      average_speed: 15.7,
      status: 'success',
      fly: 18
    },
    {
      id: 11,
      image: 'https://robohash.org/adautemenim.bmp?size=50x50&set=set1',
      name: 'Gunar',
      address: '15295 Crowley Lane',
      battery: 86,
      max_speed: 37.5,
      average_speed: 14,
      status: 'flying',
      fly: 66
    },
    {
      id: 12,
      image: 'https://robohash.org/quisdoloreearum.jpg?size=50x50&set=set1',
      name: 'Kasey',
      address: '064 Delaware Lane',
      battery: 51,
      max_speed: 3.2,
      average_speed: 9.1,
      status: 'repair',
      fly: 43
    }
  ]

*/
```


<h2 id="tests">🛠 Testes(Tests)</h2>

```bash
# Executar os testes(Run the tests)
$ npm run test || yarn test

```

<h2 id="tecnologias">🛠 Tecnologias(Technologies)</h2>

Português: As seguintes ferramentas foram usadas na construção desta biblioteca:
English: The following tools were used in building this library:

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Jest](https://jestjs.io/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)

Obs: A build para javascript de publicação e executada automaticamente.

<h2 id="autor" align="center">Autor(Author)</h2>

<div align="center">

<a href="https://jhonyaraujo.netlify.app/">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/52162636?s=96&v=4" width="200px;" alt="Jhonata Vinicius"/>
 <br />
 <h2>Jhonata Vinicius Da Silva Araujo(Jhony Araujo) </h2></a>

<p>Feito por Jhonata Vinicius 👋🏽 Entre em contato!(Made by Jhonata Vinicius 👋🏽 Get in touch!)</p>

<a href="https://www.linkedin.com/in/jhonyaraujo/" target="_blank">
  <img align="center" src="https://img.shields.io/badge/LinkedIn-05122A?style=for-the-badge&logo=linkedin" alt="linkedin"/>
</a> 
<a href="https://www.instagram.com/jhony.dev.oficial/" target="_blank">
  <img align="center" src="https://img.shields.io/badge/Instagram-05122A?style=for-the-badge&logo=instagram" alt="instagram"/>
</a> 
  <a href="https://dev.to/jhonyaraujooficial" target="_blank">
  <img align="center" src="https://img.shields.io/badge/dev.to-05122A?style=for-the-badge&logo=devdotto&logoColor=white" alt="My Blog"/>
</a>
  <a href="https://www.behance.net/jhonyaraujoelemental" target="_blank">
  <img align="center" src="https://img.shields.io/badge/-Behance-05122A?style=for-the-badge&logo=behance&logoColor=white" alt="My behance profile"/>
</a>

</div>

<h2 id="licenca">Licença(License)</h2>

<a href="https://github.com/jhony2488/pagination-frontend/blob/master/LICENSE" align="center">MIT</a>
