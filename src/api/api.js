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

export const getHistograms = async (accessToken) =>  {
    const url = `${baseUrl}/api/v1/objectsearch/histograms`
    const data = {
        "issueDateInterval": {
          "startDate": "2023-01-01T00:00:00+03:00",
          "endDate": "2024-08-31T23:59:59+03:00"
        },
        "searchContext": {
          "targetSearchEntitiesContext": {
            "targetSearchEntities": [
              {
                "type": "company",
                "sparkId": null,
                "entityId": null,
                "inn": 7710137066,
                "maxFullness": true,
                "inBusinessNews": null
              }
            ],
            "onlyMainRole": true,
            "tonality": "any",
            "onlyWithRiskFactors": false,
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
          "excludeTechNews": true,
          "excludeAnnouncements": true,
          "excludeDigests": true
        },
        "similarMode": "duplicates",
        "limit": 1000,
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