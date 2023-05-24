import {useState} from "react"

const GifsExpo = ({categories = []}) => {
    const [urlList, SetUrlList] = useState([])

    const getGifs = async (categories) => {
        

        const responseList = await Promise.all (categories.map(async(category) => {
            const response = await fetch (
                `http://api.giphy.com/v1/gifs/search?api_key=ySrAm8M8C4IL6V704z7U8482lnMJL8rb&q=${categories}&limit=10`
            )
            const apiResponse = await response.json()
            return apiResponse.data
           // gifsList =apiResponse.data.map((gif) => {
           //      return gif.images.fixed_width.url
           // })
        }))

        let gifsList = []

        responseList.forEach((data) => {
            data.forEach((item) =>{
                gifsList = [...gifsList, item.images.fixed_width.url.split('?')[0]]
            })
        })

        SetUrlList([...gifsList])
        
    }

    getGifs(categories)

    return (
        <>
        <div>
            {
                urlList.map((url) => {
                return (
                    <img key={url} src={url}/>
                )
            })

            }
        </div>
        </>
    )
}

export default GifsExpo