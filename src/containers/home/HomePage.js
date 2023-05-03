import './HomePage.css'
import { useState, useEffect } from 'react'

import { storage } from '../../config/firebase_config';
import { listAll, ref } from 'firebase/storage';
import { getFileURL } from '../../firebase/firebase';
import Loading from '../../ui/Loading';

function HomePage() {
  const [posterUrlList, updatePosterUrls] = useState([])
  const [totalPosters, setTotalPosters] = useState(0)

  useEffect(() => {
    function posterLen(){
      return JSON.parse(localStorage.getItem('posters')).list.length
    }
    function posters(){
      return JSON.parse(localStorage.getItem('posters'))
    }

    // Getting all sale posters from firebase
    async function fetchPosterUrls(){
        await listAll(ref(storage, 'posters/'))
        .then(res => {
          if (posterLen() < res.items.length){

            res.items.forEach(async itemRef => {
              // getting the url
              const urlData = await getFileURL(itemRef.fullPath)

              if (urlData.error == null){

                // Store image in cookies
                fetch(urlData.url)
                .then(async res => {
                  const storedImages = posters()

                  const reader = new FileReader()
                    await reader.addEventListener("load", async () => {
                      try{
                        if (storedImages.list.length > 0){
                          console.log({list:[...storedImages.list, reader.result]})
                          await localStorage.setItem('posters', JSON.stringify({list:[...storedImages.list, reader.result]}))
                          console.log("o")
                        }
                        else{
                          await localStorage.setItem('posters', JSON.stringify({list: [reader.result]}))
                          console.log("o")
                        }
                      }
                      catch{
                        console.warn("[-] BUG")
                        return null
                      }
                    })
                    const blob = await res.blob()
                    reader.readAsDataURL(blob)


                  })
              }
              else {
                // error while fetching posters
              }
            })
          }


          const storedImages = JSON.parse(localStorage.getItem('posters'))
          updatePosterUrls(urls => [...urls, storedImages.list])
        })
      }

    if (posterUrlList.length === 0)
      fetchPosterUrls()

    

    return () => {
      console.log('[+] fetched poster urls')
    };
  }, [updatePosterUrls]);

  return (
    <div className='w-full h-body bg-light-white'>
      <div id='poster_area' className='z-[0] relative w-full h-[95%] flex justify-center items-center'>
      <Loading />
      <img src={posterUrlList[0]} className='h-full'/>
        <div className='w-full mx-[50%]'>
          <img src={process.env.PUBLIC_URL + 'left-arrow.png'} alt='error' className='absolute h-[2%] xl:h-[5%] object-contain left-[5%] xl:left-[20%]'/>
          <img src={process.env.PUBLIC_URL + 'right-arrow.png'} alt='error' className='absolute h-[2%] xl:h-[5%] object-contain right-[5%] xl:right-[20%]'/>
        </div>
      </div>
    </div>
  )
}

export default HomePage