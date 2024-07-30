import React, { useState, useEffect } from 'react'

import { DisplayShows } from '../components';
import { useStateContext } from '../context'

const Shows = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);

  const { address, contract, getCampaigns } = useStateContext();

  const fetchCampaigns = async () => {
    setIsLoading(true);
    const data = await getCampaigns();
    setCampaigns(data);
    setIsLoading(false);
  }

  useEffect(() => {
    if(contract) fetchCampaigns();
  }, [address, contract]);

  return (
    <DisplayShows 
      title="All Shows"
      isLoading={isLoading}
      campaigns={campaigns}
    />
  )
}

export default Shows