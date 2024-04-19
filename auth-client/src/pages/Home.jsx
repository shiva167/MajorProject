import React from 'react'
import Header from '../component/Header'
import RecommendedFood from '../component/RecommendedFood'
import Service from '../component/Service'
import NewFoods from '../component/NewFoods'
import Service2 from '../component/Service2'
import Special from '../component/Special'

function Home() {
    return (
        <div>
            <Header />
            <RecommendedFood />
            <Service />
            <NewFoods />
            <Service2 />
            <Special />
        </div>
    )
}

export default Home