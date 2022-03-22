import Head from 'next/head'
import { useEffect, useState } from 'react'
import { getFlight } from '../api/FlightDataApi'
import FlightList from './component/FlightList'
import LoadingIndicator from './component/LoadingIndicator'
import Search from './component/Search'
import Debug from './component/Debug'

import json from '../resource/flightList'

export default function Main() {
  const [condition, setCondition] = useState({
    departure: 'ICN'
  })
  const [flightList, setFlightList] = useState(json)
  const [loading, setLoading] = useState(true)

  const search = ({ departure, destination }) => {
    if (condition.departure !== departure || condition.destination !== destination) {
      console.log('condition 상태를 변경시킵니다')
      // TODO:
      setCondition({ departure: 'ICN', destination: destination }); // 디버그 컴포넌트를 통해 컨디션 객체에 데스티네이션만 변경되는 점 발견 => 인천을 기본값으로 함.
    }
  }

  useEffect(() => {
    getFlight(condition)
      .then(arr => setFlightList(arr)) // result는 프로미스 객체. 그 결과값에 접근하려면 then 사용해야 함.
      .then(() => setLoading(false));
  }, [condition]); // 컨디션이 바뀔 때마다 실행

  global.search = search // 실행에는 전혀 지장이 없지만, 테스트를 위해 필요한 코드입니다. 이 코드는 지우지 마세요!

  return (
    <div>
      <Head>
        <title>States Airline</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          여행가고 싶을 땐, States Airline
        </h1>
        <Search onSearch={search} />
        <div className="table">
          <div className="row-header">
            <div className="col">출발</div>
            <div className="col">도착</div>
            <div className="col">출발 시각</div>
            <div className="col">도착 시각</div>
            <div className="col"></div>
          </div>
          {loading === true ? <LoadingIndicator /> : <FlightList list={flightList} />}
        </div>
        <div className="debug-area">
          <Debug condition={condition} />
        </div>
      </main>
    </div>
  )
}
