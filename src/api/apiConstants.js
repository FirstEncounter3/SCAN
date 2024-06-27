export const getData = (
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
  ) => {
    return  {
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
  }
