import { useState, useEffect } from 'react';
import CountryCard from '../components/CountryCard';
import { getAllCountries } from '../services';

const Home = () => {

  const [countries, setCountries] = useState([]);

	useEffect(() => {
		getAllCountries()
			.then((res) => {
				console.log(res);
				setCountries(res.data);
			})
			.catch((error) => console.log(error));
	}, []);
  
  return (
    <>
    <section className='container mx-auto'>
				<div className='grid grid-cols-2 sm:grid-cols-5 gap-4'>
					{countries.map((country) => {
						return (
							<CountryCard
								name={country.name.common}
								image={country.flags.png}
								capital={country.capital}
								population={country.population}
								continent={country.continent}
								key={country.name.common}
							/>
						);
					})}
				</div>
			</section>
    </>
  )
}

export default Home