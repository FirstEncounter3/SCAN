import React, { useEffect, useState } from 'react'

import { getUserInfo } from '../../api/api'
import { useSelector } from "react-redux";

import './UserInfoBoard.css'

import UserInfoBoardLoading from '../UserInfoBoardLoaling/UserInfoBoardLoading';

const UserInfoBoard = () => {
    const [usedCompanies, setUsedCompanies] = useState(0);
    const [limitOfCompanies, setLimitOfCompanies] = useState(0);
    const [loading, setLoading] = useState(true);
    const accessToken = useSelector((state) => state.user.accessToken);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await getUserInfo(accessToken);
            setUsedCompanies(response.eventFiltersInfo.usedCompanyCount);
            setLimitOfCompanies(response.eventFiltersInfo.companyLimit);
            setLoading(false);
        };

        fetchData();
    }, [accessToken]);

    if (loading) {
        return <UserInfoBoardLoading/>;
    }


  return (
    <div className='user-info-wrapper'>
        <div className='user-info-board'>
            <p className='small-p'>Использовано компаний</p>
            <span className='black-span'>{usedCompanies}</span>
        </div>
        <div className='user-info-board'>
            <p className='small-p'>Лимит по компаниям</p>
            <span className='green-span'>{limitOfCompanies}</span>
        </div>
    </div>
  )
}

export default UserInfoBoard;