const API_Url = "https://api.spacexdata.com/v3";

export async function getAllLaunches(){
    try {
        const response = await fetch(`${API_Url}/launches`);
        const data = await response.json();
        return data;
        
    } catch (error) {
        console.log(error)
        
    }
}