import axios from "axios";
import { getData } from "./apiConstants";

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
    const data = getData(
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
    )

    const request = await axios.post(url, data, {
        headers: {
            "Authorization": `Bearer ${accessToken}`
        }
    });
    return request.data 
}

export const getObjects = async (
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
) => {
    const url = `${baseUrl}/api/v1/objectsearch`
    const data = getData(
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
    )

    const request = await axios.post(url, data, {
        headers: {
            "Authorization": `Bearer ${accessToken}`
        }
    });
    return request.data
}

export const getDocuments = async (accessToken, encodedIds) => {
  const url = `${baseUrl}/api/v1/documents`
  const data = {"ids": encodedIds}
  const request = await axios.post(url, data, {
    headers: {
      "Authorization": `Bearer ${accessToken}`
    }
  });
  return request.data
}