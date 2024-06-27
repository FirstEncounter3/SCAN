import React, {useEffect, useState} from 'react'

import PublicationCard from '../PublicationCard/PublicationCard'

import { getObjects } from '../../api/api'

function ResultsBottomContent({ queryParams, accessToken }) {
    const [encodedIds, setEncodedIds] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getObjects(
                    accessToken, 
                    queryParams.startDate, 
                    queryParams.endDate, 
                    queryParams.documentsCount, 
                    queryParams.inn, 
                    queryParams.tonality, 
                    queryParams.mainRole, 
                    queryParams.riskFactors, 
                    queryParams.completeness, 
                    queryParams.businessContext, 
                    queryParams.technicalNews,
                    queryParams.announcements,
                    queryParams.summaries
                );
                const data = response.items;
                setEncodedIds(data.map(item => item.encodedId));    
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, [accessToken]);

  return (
    <div className='results-bottom-content-wrapper'>
        <h1>Список документов</h1>
        <PublicationCard accessToken={accessToken} encodedIds={encodedIds}/>
    </div>
  )
}

export default ResultsBottomContent