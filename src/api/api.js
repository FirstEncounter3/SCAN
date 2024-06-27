import axios from "axios";

const baseUrl = "https://gateway.scan-interfax.ru"

export const userLogin = async (login, password) => {
    const request = await axios.post(`${baseUrl}/api/v1/account/login`, {
        login,
        password
    });
    console.log(request.data);
    return request.data;
}

export const getUserInfo = async (accessToken) =>  {
    const request = await axios.get(`${baseUrl}/api/v1/account/info`, {
        headers: {
            "Authorization": `Bearer ${accessToken}`
        }
    })
    console.log(request.data)
    return request.data
}

export const getHistograms = async (
  accessToken, 
  startDate, 
  endDate, 
  documentsCount, 
  inn, 
  tonality, 
  mainRole, 
  riskFactors, 
  completeness, 
  businessContext,
  technicalNews,
  announcements,
  summaries
) =>  {
    const url = `${baseUrl}/api/v1/objectsearch/histograms`
    const data = {
        "issueDateInterval": {
          "startDate": startDate,
          "endDate": endDate
        },
        "searchContext": {
          "targetSearchEntitiesContext": {
            "targetSearchEntities": [
              {
                "type": "company",
                "sparkId": null,
                "entityId": null,
                "inn": inn,
                "maxFullness": completeness,
                "inBusinessNews": businessContext
              }
            ],
            "onlyMainRole": mainRole,
            "tonality": tonality,
            "onlyWithRiskFactors": riskFactors,
            "riskFactors": {
              "and": [],
              "or": [],
              "not": []
            },
            "themes": {
              "and": [],
              "or": [],
              "not": []
            }
          },
          "themesFilter": {
            "and": [],
            "or": [],
            "not": []
          }
        },
        "searchArea": {
          "includedSources": [],
          "excludedSources": [],
          "includedSourceGroups": [],
          "excludedSourceGroups": []
        },
        "attributeFilters": {
          "excludeTechNews": technicalNews,
          "excludeAnnouncements": announcements,
          "excludeDigests": summaries
        },
        "similarMode": "duplicates",
        "limit": documentsCount,
        "sortType": "sourceInfluence",
        "sortDirectionType": "desc",
        "intervalType": "month",
        "histogramTypes": [
          "totalDocuments",
          "riskFactors"
        ]
      }

    const request = await axios.post(url, data, {
        headers: {
            "Authorization": `Bearer ${accessToken}`
        }
    });
    return request.data 
}