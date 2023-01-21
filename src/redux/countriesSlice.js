import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'


let initialState ={
	countries: [],
 stats:"idle",
   error:'',
	 continent:"All"
}



export const countriesSlice = createSlice({
	name:'countries',
	initialState,
  reducers:{
		setContinent:(state,action)=>{
			console.log("Recuder cakked")
			state.continent = action.payload
		}
},
	extraReducers:(builder)=>{
builder
		.addCase(fetchAllCountries.pending,(state)=>{
				state.stats = 'loading'
})
.addCase(fetchAllCountries.fulfilled,(state,action)=>{
	state.stats ="succeeded"
	state.error =''
state.countries = [...action.payload]
})
.addCase(fetchAllCountries.rejected,(state,action)=>{
state.stats = "failed"
state.error =action.error.message
})
	}
})


export const fetchAllCountries=createAsyncThunk(
	'countries/fetchAllCountries', async()=>{
		const response =await fetch('https://restcountries.com/v3.1/all')
		const data =await response.json()
		let sortedCountries = []

// destructer data to get only what we want
data.forEach(country=>{
	// console.log("country",country)
	let {name:{common:name}, region:continent,latlng:[lat,lng],flags:{svg:flag} } = country

	let newCountry = {name,continent,lat,lon:lng,flag}

	sortedCountries.push(newCountry)

})

return sortedCountries
	}
)


export const changeContinent = createAsyncThunk('countries/changeContinent',async(params,{dispatch})=>{

  dispatch(setContinent(params))
})

export const selectAllCountries = (state) => {
	if(state.countries.continent == "All"){
		return state.countries.countries
	}else{

		return state.countries.countries.filter((country)=>country.continent === state.countries.continent)
	}
}

export const {setContinent} = countriesSlice.actions
export default countriesSlice.reducer
