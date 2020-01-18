# Almundo API

Aplicación dedicada a la búsqueda de **Hoteles**, obteniendo información de cada uno, como: Descripción, Disponibilidad y Ubicación.

>### Aplicación en la nube: [Heroku Almundo API](https://almundo-ponton.herokuapp.com)

## Instalar y correr
Use estos comandos para el despliegue local:
- `npm install`
- `npm run start`

### Dependencias:
	"dependencies": {
	  "cookie-parser": "~1.4.4",
	  "cors": "^2.8.5",
	  "debug": "~2.6.9",
	  "express": "~4.16.1",
	  "http-errors": "~1.6.3",
	  "jade": "~1.11.0",
	  "mongoose": "^5.8.7",
	  "morgan": "~1.9.1"
	} 
	
## Endpoint
Método: **GET** 

### Hoteles:
	{
		"status": "succesful",
		"hotels": [
			{
				"images": [
					"https://www.ahstatic.com/photos/1867_ho_00_p_1024x768.jpg"
				],
				"_id": "5e2221848a3f4f6f8ced8277",
				"name": "test",
				"stars": "3",
				"price": "3000",
				"city": "Medellín",
				"address": "Calle falsa 123",
				"latitude": "6.1980605",
				"longitude": "-75.6354342",
				"availability": "2"
			},
			{
				"images": [
					"https://www.ahstatic.com/photos/1867_ho_00_p_1024x768.jpg"
				],
				"_id": "5e229b248a3f4f6f8ced8278",
				"name": "test2",
				"stars": "4",
				"price": "4000",
				"city": "Barranquilla",
				"address": "Calle 321",
				"latitude": "321",
				"longitude": "123",
				"availability": "3"
			}
		]
	}
> en [Heroku Almundo API / hoteles](https://almundo-ponton.herokuapp.com/hotels)

### Información Hotel:
	{
	    "status": "succesful",
	    "hotel": {
	        "images": [
	            "https://www.ahstatic.com/photos/1867_ho_00_p_1024x768.jpg"
	        ],
	        "_id": "5e2221848a3f4f6f8ced8277",
	        "name": "test",
	        "stars": "3",
	        "price": "3000",
	        "city": "Medellín",
	        "address": "Calle falsa 123",
	        "latitude": "6.1980605",
	        "longitude": "-75.6354342",
	        "availability": "2"
	    }
	}
> en [Heroku Almundo API / id_hotel](https://almundo-ponton.herokuapp.com/hotels/5e2221848a3f4f6f8ced8277), id de ejemplo: **5e2221848a3f4f6f8ced8277**

## Authors

- **Carlos Pontón**  -  _Prueba para Almundo_  -  [carlosponton](https://github.com/carlosponton)
