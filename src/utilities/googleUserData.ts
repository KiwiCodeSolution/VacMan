/* eslint-disable prettier/prettier */
import axios from 'axios';

const getGoogleUserData = async (accessToken: string) => {
  try {
    const { data } = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo',
      { headers: { Authorization: `Bearer ${accessToken}`} });

    return data;
  } catch (error) {
    return null;
  }
};
export default getGoogleUserData;