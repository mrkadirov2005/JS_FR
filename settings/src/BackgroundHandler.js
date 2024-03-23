import One from './photo_1_2024-02-25_01-32-13.jpg'
import two from './photo_2_2024-02-25_01-32-13.jpg'
import three from './photo_3_2024-02-25_01-32-13.jpg'
import four from './photo_4_2024-02-25_01-32-13.jpg'
import five from './photo_5_2024-02-25_01-32-13.jpg'
import six from './photo_6_2024-02-25_01-32-13.jpg'
import seven from './photo_7_2024-02-25_01-32-13.jpg'
import eight from './photo_8_2024-02-25_01-32-13.jpg'
import nine from './photo_9_2024-02-25_01-32-13.jpg'
import ten from './photo_10_2024-02-25_01-32-13.jpg'
const StorageOfMovies=[One,two,three,four,five,six,seven,eight,nine,ten]

export const HandleBackground=()=>{
    let id=Math.floor(Math.random()*10)
    document.querySelector('.wrapper').style.backgroundImage=`url(${StorageOfMovies[id]})`
}