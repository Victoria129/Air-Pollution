import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'


const initialState = {
	pollutionData:{},
	stats:"idle",
	error:''

}


const pollutionSlice=createSlice({
name:'pollution',
initialState,
reducers:{

},
extraReducers:(builder)=>{
	builder
	.addCase(fetchPollutionData.pending,(state)=>{
		state.stats = 'loading'
})
.addCase(fetchPollutionData.fulfilled,(state,action)=>{
state.stats ="succeeded"
state.error =''
let{country , ...rest} = actiion.payload
state.pollutionData.country = rest
})
.addCase(fetchPollutionData.rejected,(state,action)=>{
state.stats = "failed"
state.error =action.error.message
})
}
})


export const fetchPollutionData = createAsyncThunk('pollution/fetchPollutionData',async (params)=>{
  const response = await fetch("http://api.openweathermap.org/data/2.5/air_pollution?" + new URLSearchParams({
			lat:params.lat,
      lon:params.lon,
      appid:API_KEY
	}))

	country = params.name
const data =await response.json()

let {list:[{main:{aqi:quality},components:{co,no,no2}}]} = data

let airData ={country,quality,co,no,no2}


return airData

}
)


// export const selectCoutries = (state) => state.pollution.


export default pollutionSlice.reducer